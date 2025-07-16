
export function getSensorData() {
  const batimento = Math.floor(Math.random() * 40) + 60;
  const foco = Math.random().toFixed(2);
  const som = Math.random().toFixed(2);
  return { batimento, foco, som };
}
