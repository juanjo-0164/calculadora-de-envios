// Versión inicial (con el defecto): el límite exacto de 100.000 COP cobra envío.
function calcularEnvio(subtotal) {
  if (!Number.isInteger(subtotal) || subtotal < 0) {
    throw new RangeError('El subtotal debe ser un entero no negativo');
  }
  return subtotal > 100000 ? 0 : 8000;
}
module.exports = { calcularEnvio };
