const test = require('node:test');
const assert = require('node:assert/strict');
const { calcularEnvio } = require('./envios.js');

test('99.999 COP cobra 8.000 COP de envío', () => {
  assert.equal(calcularEnvio(99999), 8000);
});

test('100.000 COP (límite exacto) tiene envío gratis', () => {
  assert.equal(calcularEnvio(100000), 0);
});

test('100.001 COP tiene envío gratis', () => {
  assert.equal(calcularEnvio(100001), 0);
});

test('-1 COP lanza RangeError', () => {
  assert.throws(() => calcularEnvio(-1), RangeError);
});

test('Caso propio: subtotal 0 COP cobra 8.000 COP de envío', () => {
  assert.equal(calcularEnvio(0), 8000);
});
