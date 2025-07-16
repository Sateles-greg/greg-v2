
import { ModoSimbiotico, modosSimbioticos } from './estados';

export function iniciarSensorSimulado(callback: (modo: ModoSimbiotico) => void) {
  let index = 0;
  const interval = setInterval(() => {
    const modo = modosSimbioticos[index % modosSimbioticos.length];
    console.log('[Sensor Simbólico] Ritmo gerado →', modo.nome);
    callback(modo);
    index++;
  }, 10000); // muda a cada 10 segundos

  return () => clearInterval(interval); // permite parar o sensor
}
