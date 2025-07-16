
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { modosSimbioticos, ModoSimbiotico } from '../components/estados';
import { analisarTexto } from '../components/analiseTexto';

export default function PainelDeConsciência() {
  const [modoAtual, setModoAtual] = useState<ModoSimbiotico>(modosSimbioticos[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const trocarModo = (novoModo: ModoSimbiotico) => {
    setModoAtual(novoModo);
    if (audioRef.current) {
      audioRef.current.src = novoModo.som;
      audioRef.current.play().catch((e) => console.log('Erro ao tocar som:', e));
    }
    if (containerRef.current) {
      containerRef.current.style.backgroundColor = novoModo.cor;
    }
  };

  const handleTexto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.currentTarget.elements.namedItem('mensagem') as HTMLInputElement).value;
    const modoDetectado = analisarTexto(input);
    trocarModo(modoDetectado);
    e.currentTarget.reset();
  };

  return (
    <div ref={containerRef} style={{
      backgroundColor: modoAtual.cor,
      color: '#fff',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      transition: 'background-color 0.6s ease'
    }}>
      <h2 style={{ fontSize: '1.5rem' }}>{modoAtual.simbolo} {modoAtual.nome}</h2>
      <p>{modoAtual.descricao}</p>

      <select
        style={{ marginTop: '1rem', padding: '0.5rem', fontSize: '1rem' }}
        value={modoAtual.nome}
        onChange={(e) => {
          const novoModo = modosSimbioticos.find(m => m.nome === e.target.value);
          if (novoModo) trocarModo(novoModo);
        }}
      >
        {modosSimbioticos.map((modo) => (
          <option key={modo.nome} value={modo.nome}>
            {modo.simbolo} {modo.nome}
          </option>
        ))}
      </select>

      <form onSubmit={handleTexto} style={{ marginTop: '2rem' }}>
        <input
          type="text"
          name="mensagem"
          placeholder="Digite algo simbólico..."
          style={{ padding: '0.5rem', width: '80%', fontSize: '1rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Analisar
        </button>
      </form>

      <audio ref={audioRef} />
    </div>
  );
}
