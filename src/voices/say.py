import sys,json,soundfile as sf
from kokoro_onnx import Kokoro
k=Kokoro('kokoro/kokoro-v1.0.onnx','kokoro/voices-v1.0.bin')
jobs=json.load(open(sys.argv[1]))
for out,text,voice in jobs:
  a,sr=k.create(text,voice=voice,speed=0.95,lang='en-us');sf.write(out,a,sr);print(out,round(len(a)/sr,2))
