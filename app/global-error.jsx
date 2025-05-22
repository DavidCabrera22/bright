"use client";

import { useEffect } from "react";
import Error from "next/error";

export default function GlobalError({ error }) {
  useEffect(() => {
    // Registrar el error en la consola para depuración
    console.error("Error global:", error);
  }, [error]);

  return (
    <html lang="es">
      <body>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          flexDirection: 'column',
          backgroundColor: '#000',
          color: '#fff'
        }}>
          <h1>Algo salió mal</h1>
          <p>Lo sentimos, ha ocurrido un error inesperado.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#3275F8',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Intentar de nuevo
          </button>
        </div>
      </body>
    </html>
  );
}
