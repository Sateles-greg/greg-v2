import datetime
import subprocess
import platform
from greg_voz import falar

def interpretar(comando):
    comando = comando.lower()

    if "hora" in comando:
        agora = datetime.datetime.now().strftime("%H:%M")
        falar(f"São exatamente {agora}")
        return f"Hora reconhecida: {agora}"

    elif "abrir navegador" in comando:
        falar("Abrindo navegador.")
        sistema = platform.system()
        if sistema == "Windows":
            subprocess.Popen(["start", "chrome"], shell=True)
        elif sistema == "Linux":
            subprocess.Popen(["xdg-open", "https://www.google.com"])
        elif sistema == "Darwin":
            subprocess.Popen(["open", "-a", "Safari"])
        return "Navegador aberto"

    elif "abrir vscode" in comando:
        falar("Abrindo VS Code.")
        subprocess.Popen(["code"], shell=True)
        return "VS Code aberto"

    else:
        falar("Desculpe, não entendi esse comando.")
        return "Comando não reconhecido"