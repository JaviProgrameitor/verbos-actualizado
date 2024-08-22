export function aleatorio(min, max) {
  const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado
}