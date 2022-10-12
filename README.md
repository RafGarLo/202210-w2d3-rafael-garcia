# 202210-w2d2-rafael.garcia

week 2 day 2 challenge
proyect
creamos el repo

protegemos la rama
git clone desde local

añadimos husky con los dos mismos hooks de siempre
gitignore
package.json
eslint con airbnb
prettier
creamos la rama feature
realizamos las funciones
comprobamos resultados
git push
comprobamos el código con sonar
realizamos los cambios de código sugeridos
pull request y merge a main
Escribe en un módulo propio, una función llamada `strictEquals(a, b)` que devuelva el mismo valor que `a === b`. Tu implementación no puede usar los operadores `===` ni `!==`.

Testea la función desde otro fichero con este set de pruebas:

Dada la función `strictEquals`  
Cuando se comparan \<A\> y \<B\>  
Entonces el resultado será \<Result\>

| A       | B     | RESULT |                   |
| ------- | ----- | ------ | ----------------- |
| 1       | 1     | true   |                   |
| NaN     | NaN   | false  | // Rule Exception |
| 0       | -0    | true   | // Rule Exception |
| -0      | 0     | true   | // Rule Exception |
| 1       | "1"   | false  |                   |
| true    | false | false  |                   |
| false   | false | true   |                   |
| "Water" | "oil" | false  |
