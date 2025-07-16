
export type ModoSimbiotico = {
  nome: string;
  cor: string;
  simbolo: string;
  som: string;
  descricao: string;
};

export const modosSimbioticos: ModoSimbiotico[] = [
  {
    nome: "Foco",
    cor: "#1e40af",
    simbolo: "🧠",
    som: "/sounds/focus.mp3",
    descricao: "Modo de atenção profunda e clareza mental.",
  },
  {
    nome: "Expansão",
    cor: "#047857",
    simbolo: "🌌",
    som: "/sounds/expand.mp3",
    descricao: "Estado de abertura criativa, exploração e visão ampla.",
  },
  {
    nome: "Reparo",
    cor: "#7c3aed",
    simbolo: "🩺",
    som: "/sounds/repair.mp3",
    descricao: "Regeneração interna, descanso simbólico e cura emocional.",
  },
  {
    nome: "Sombra",
    cor: "#111827",
    simbolo: "🕳️",
    som: "/sounds/shadow.mp3",
    descricao: "Exploração das emoções profundas, medos e aspectos ocultos.",
  },
  {
    nome: "Guardião",
    cor: "#f59e0b",
    simbolo: "🛡️",
    som: "/sounds/guard.mp3",
    descricao: "Estado de proteção ativa, vigilância e firmeza simbólica.",
  }
];
