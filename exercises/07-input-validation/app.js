/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    B["Pedir email"] --> C{"Email valido?"}
    A("Inicio") --> B["Pedir email"]
    C{"Email valido?"} -->|"No"| E["Error: Email no valido"]
    E["Error: Email no valido"] --> B["Pedir email"]
    C{"Email valido?"} -->|"Si"| D["Continuar el registro"]
    D["Continuar el registro"] --> F("Fin")

`;

module.exports = answer.trim();