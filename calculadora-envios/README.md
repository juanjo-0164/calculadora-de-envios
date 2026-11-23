# Calculadora de envíos

Calcula el costo de envío según el subtotal de la compra.

## Regla de negocio

- Subtotal menor a 100.000 COP: envío de 8.000 COP.
- Subtotal igual o superior a 100.000 COP: envío gratis (0 COP).
- Solo se aceptan enteros no negativos. Vacíos, negativos o decimales lanzan un `RangeError`.

## Cómo ejecutar

1. Abre `index.html` en un navegador, escribe el monto sin puntos ni comas y pulsa **Calcular**.
   Con 99999 el envío mostrado debe ser de 8.000 COP.
2. Para ejecutar las pruebas, usa Node.js 22 o superior y escribe en la carpeta del proyecto:

```
node --test envios.test.js
```

## Casos de prueba

| Caso | Subtotal | Envío esperado |
|------|----------|----------------|
| Justo debajo del límite | 99999 | 8000 |
| Límite exacto | 100000 | 0 |
| Encima del límite | 100001 | 0 |
| Negativo | -1 | RangeError |
| Subtotal cero (caso propio) | 0 | 8000 |

El caso del límite exacto es el que detectó el defecto de la versión inicial, que usaba `>` en lugar de `>=`.
