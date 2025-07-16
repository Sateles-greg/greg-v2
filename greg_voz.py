import pyttsx3
import winsound

def falar(texto):
    print(f"🗣️ Greg diz: {texto}")
    engine = pyttsx3.init()
    engine.say(texto)
    engine.runAndWait()

def tocar_ping():
    winsound.Beep(800, 220)  # Frequência e tempo em ms