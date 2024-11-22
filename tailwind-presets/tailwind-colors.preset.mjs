export const colors = {
  border: 'hsl(0 0% 85%)', // Un tono neutro accesible para bordes
  input: 'hsl(0 0% 95%)', // Un tono suave para inputs
  ring: 'hsl(356 85% 45%)', // Un tono contrastante cercano al primario
  background: 'hsl(210 40% 98%)', // Fondo claro para mejor legibilidad
  foreground: 'hsl(0, 1%, 22%)', // Color de texto oscuro para buen contraste
  primary: {
    DEFAULT: 'hsl(356, 92%, 47%)', // Color primario
    foreground: 'hsl(0 0% 100%)', // Blanco para contraste en el fondo primario
    background: 'hsl(0 90% 95%)', // Fondo más claro del primario
    hover: 'hsl(356 85% 45%)' // Variante más oscura del primario
  },
  // secondary_atlas: {
  //   DEFAULT: 'hsl(0 0% 95%)', // Gris claro para elementos secundarios
  //   foreground: 'hsl(0 0% 20%)', // Texto más oscuro para contraste
  // },
  muted: {
    DEFAULT: 'hsl(0, 0%, 91%)', // Color apagado para fondos suaves
    foreground: 'hsl(0 0% 40%)' // Texto suave para elementos muted
  },
  accent: {
    DEFAULT: 'hsl(190 80% 80%)', // Azul claro para destacar
    foreground: 'hsl(0 0% 15%)' // Texto oscuro para contraste
  },
  destructive: {
    DEFAULT: 'hsl(0 70% 60%)', // Rojo accesible para alertas
    foreground: 'hsl(0 0% 100%)', // Blanco para contraste
    background: 'hsl(0 85% 94%)' // Fondo suave para destructivos
  },
  popover: {
    DEFAULT: 'hsl(0 0% 100%)', // Blanco para fondos emergentes
    foreground: 'hsl(0 0% 15%)' // Texto negro para contraste
  },
  card: {
    DEFAULT: 'hsl(0 0% 98%)', // Fondo ligeramente gris para tarjetas
    foreground: 'hsl(0 0% 10%)' // Texto negro para legibilidad
  },
  congrats: {
    DEFAULT: 'hsl(142, 55%, 75%)', // Verde accesible para felicitaciones
    background: 'hsl(141 80% 90%)' // Fondo verde claro
  },
  info: {
    background: 'hsl(204 94% 94%)', // Fondo azul claro para información
    foreground: 'hsl(221 83% 40%)' // Azul medio para texto
  }
}
