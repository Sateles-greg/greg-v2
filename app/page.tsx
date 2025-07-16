'use client'
import { useEffect, useState } from 'react'
import { invoke } from '@tauri-apps/api'

export default function Page() {
  const [saidaGreg, setSaidaGreg] = useState("Aguardando...")

  useEffect(() => {
    const intervalo = setInterval(() => {
      invoke<string>("ler_saida_do_greg").then((texto) => setSaidaGreg(texto))
    }, 3000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div>
      <h2>🎙️ Greg diz:</h2>
      <pre style={{
        backgroundColor: "#111", color: "#0f0", padding: "1rem",
        borderRadius: "8px", fontSize: "1.1rem"
      }}>
        {saidaGreg}
      </pre>
    </div>
  )
}