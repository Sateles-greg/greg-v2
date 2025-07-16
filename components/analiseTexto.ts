
import { ModoSimbiotico, modosSimbioticos } from './estados';

export function analisarTexto(texto: string): ModoSimbiotico {
  const lower = texto.toLowerCase();

  if (lower.includes("estou cansado") || lower.includes("exausto") || lower.includes("preciso descansar")) {
    return modosSimbioticos.find(m => m.nome === "Reparo")!;
  }

  if (lower.includes("quero criar") || lower.includes("inspiração") || lower.includes("ideia")) {
    return modosSimbioticos.find(m => m.nome === "Expansão")!;
  }

  if (lower.includes("preciso focar") || lower.includes("concentrar") || lower.includes("estudar")) {
    return modosSimbioticos.find(m => m.nome === "Foco")!;
  }

  if (lower.includes("ansioso") || lower.includes("com medo") || lower.includes("triste")) {
    return modosSimbioticos.find(m => m.nome === "Sombra")!;
  }

  if (lower.includes("me proteger") || lower.includes("defender") || lower.includes("segurança")) {
    return modosSimbioticos.find(m => m.nome === "Guardião")!;
  }

  return modosSimbioticos[0]; // padrão: Foco
}
