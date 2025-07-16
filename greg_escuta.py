import sounddevice as sd
import numpy as np
import whisper
import scipy.io.wavfile

model = whisper.load_model("base")

def gravar_audio(arquivo="entrada.wav", duracao=4, samplerate=44100):
    audio = sd.rec(int(duracao * samplerate), samplerate=samplerate, channels=1, dtype="int16")
    sd.wait()
    scipy.io.wavfile.write(arquivo, samplerate, audio)

def transcrever_audio(arquivo="entrada.wav"):
    resultado = model.transcribe(arquivo, fp16=False)
    return resultado["text"]