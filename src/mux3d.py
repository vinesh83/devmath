import json,subprocess,sys
kind,world,out=sys.argv[1],sys.argv[2],sys.argv[3]
d=f'test/frames/c3-{kind}-{world}';sfx=json.load(open(d+'/sfx.json'))
score=f'music/cine-{kind}.wav'
ins=['-i',score];flt=['[1:a]volume=1[m]'];labels=['[m]'];k=2
for n,t in sfx:
  if n in('thunder','roar'):
    f='sfx/thunder.wav' if n=='thunder' else 'sfx/slam.wav'
    ins+=['-i',f];flt.append(f'[{k}:a]adelay={int(t*1000)}|{int(t*1000)},volume={0.9 if n=="thunder" else 0.5}[s{k}]');labels.append(f'[s{k}]');k+=1
if False:
  ins+=['-i',f'voices/world-{world}.wav'];flt.append(f'[{k}:a]adelay=800|800,volume=1.7[v]');labels.append('[v]');k+=1
flt.append(''.join(labels)+f'amix=inputs={len(labels)}:normalize=0,alimiter=limit=0.95[a]')
cmd=['ffmpeg','-v','error','-y','-framerate','30','-i',d+'/f%05d.jpg']+ins+['-filter_complex',';'.join(flt),'-map','0:v','-map','[a]','-c:v','libx264','-pix_fmt','yuv420p','-crf','20','-preset','medium','-c:a','aac','-b:a','160k','-shortest','-movflags','+faststart',out]
subprocess.run(cmd,check=True);print(out)
