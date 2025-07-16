
import React, { useState } from 'react';

const modos = ['Foco', 'Expansão', 'Reparo', 'Sombra', 'Guardião'];

export default function PainelAdmin({ onModoChange }: { onModoChange: (modo: string) => void }) {
  const [modoAtual, setModoAtual] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const novoModo = e.target.value;
    setModoAtual(novoModo);
    onModoChange(novoModo);
  }

  return (
    <div style={{ padding: 20, background: '#111', color: '#fff', border: '1px solid #333' }}>
      <h2>Painel Admin Simbiótico</h2>
      <label htmlFor="modo">Modo simbiótico:</label>
      <select id="modo" value={modoAtual} onChange={handleChange}>
        <option value="">Selecionar...</option>
        {modos.map((modo) => (
          <option key={modo} value={modo}>{modo}</option>
        ))}
      </select>
    </div>
  );
}
