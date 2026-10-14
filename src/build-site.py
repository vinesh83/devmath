body=open('number-knight.html').read()
head=open('site/index.html').read().split('<body>\n',1)[0]+'<body>\n'
open('site/index.html','w').write(head+body+'\n</body></html>\n')
print('site index rebuilt')
