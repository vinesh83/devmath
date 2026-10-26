/* =========================================================
   Surprises: one-time drops from home. Each plays once, on the first map visit after it ships:
   the Knight reads a message from home, then golden chests open with prizes chosen ahead of time.
   ========================================================= */
const SURPRISES=[
  {id:'home-oct20',for:'dev',   // only on Dev's own game (the link is shared with other families)
   lines:[['knight','{name}! A message from home just landed at HQ.'],
     ['knight','“I see how hard you work, Dev. Your Plus-Minus facts got faster this week: 1.6 seconds, your fastest ever!”'],
     ['knight','“Division is new and tricky. That’s okay. Every time you try, your brain gets stronger.”'],
     ['knight','“I believe in you. You get better every single day, and I’m so proud of you.”'],
     ['knight','Home sent something else too… golden chests! Tap to open them.']],
   chests:[{rarity:'epic',type:'super',id:'dragon',name:'Dragon Summon'},
     {rarity:'legendary',type:'part',slot:'paint',id:'gold',name:'Solid Gold',power:8}],
   after:[['knight','Dragon Summon AND Solid Gold paint! Visit the Mech Bay to suit up.']]}
];
const Surprise={
  st(){return state.surprises=state.surprises||{};},
  // match the name as a word: Dev's saved name is "Agent Dev"
  next(){const me=String((state.hero&&state.hero.name)||'').toLowerCase();return SURPRISES.find(s=>!this.st()[s.id]&&(!s.for||new RegExp('\\b'+s.for+'\\b').test(me)));},
  due(){return !!this.next();},
  force:[],
  async play(){const s=this.next();if(!s)return;this.st()[s.id]=dayStr();saveState();
    await Talk.say(s.lines);
    const I=inv();let swapped=false;
    for(const c of s.chests){const have=c.type==='super'?I.supers.includes(c.id):c.type==='part'?I.parts.includes(c.slot+':'+c.id):false;
      if(have)swapped=true;this.force.push(have?{rarity:c.rarity,type:'coins',n:c.rarity==='legendary'?300:120,name:(c.rarity==='legendary'?300:120)+' coins'}:c);
      await openChest('great');}
    if(s.after&&!swapped)await Talk.say(s.after);}
};
{const _rl=rollLoot;rollLoot=function(ctx){if(Surprise.force.length)return Surprise.force.shift();return _rl(ctx);};}
