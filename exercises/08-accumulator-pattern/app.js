/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Inicio") --> B["Total = 0"]
    B["Total = 0"] --> C{"Mas Articulos?"}
    C{"Mas Articulos?"} -->|"Si"| D["Leer precio"]
    D["Leer precio"] --> E["Total = Total +precio"]
    C{"Mas Articulos?"} -->|"No"| F["Mostrar total"]
    E["Total = Total +precio"] --> C{"Mas Articulos?"}
    F["Mostrar total"] --> G("End")

`;

module.exports = answer.trim();