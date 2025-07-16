
export function detectarModo(texto: string): string {
  const t = texto.toLowerCase();
  if (t.includes('cansado') || t.includes('exausto')) return 'Reparo';
  if (t.includes('triste') || t.includes('vazio')) return 'Sombra';
  if (t.includes('curioso') || t.includes('explorar')) return 'Expansão';
  if (t.includes('foco') || t.includes('concentrar')) return 'Foco';
  if (t.includes('seguro') || t.includes('protegido')) return 'Guardião';
  return '';
}
