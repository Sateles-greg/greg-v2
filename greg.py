from greg_voz import falar, tocar_ping
from greg_interpretador import interpretar
from greg_memoria import salvar_memoria
from greg_escuta import gravar_audio, transcrever_audio

ativadores = ["greg", "greque", "gregue", "greggy"]

def iniciar():
    falar("Greg está online e escutando. Diga 'Greg' para ativar.")

    while True:
        try:
            gravar_audio(duracao=4)
            frase = transcrever_audio()

            if any(ativador in frase.lower() for ativador in ativadores):
                tocar_ping()
                falar("Estou ouvindo.")
                gravar_audio(duracao=5)
                comando = transcrever_audio()
                resposta = interpretar(comando)
                salvar_memoria({"ultimo_comando": comando})

                with open("saida_tauri.txt", "w", encoding="utf-8") as arquivo:
                    arquivo.write(f"Comando: {comando}\nResposta: {resposta}")
            else:
                print("🔁 Nenhuma ativação. Greg escutando...")

        except KeyboardInterrupt:
            falar("Encerrando Greg por escuta contínua. Até mais!")
            break
        except Exception as e:
            falar(f"Ocorreu um erro: {str(e)}")

iniciar()