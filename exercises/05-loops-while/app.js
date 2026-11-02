/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Pedir contrasenia"]
    B["Pedir contrasenia"] --> C{"Contrasenia correcta?"}
    C{"Contrasenia correcta?"} -->|"Si"| D["Dar acceso"]
    C{"Contrasenia correcta?"} -->|"No"| E["No dar acceso"]
    E["No dar acceso"] --> B["Pedir contrasenia"]
    D["Dar acceso"] --> F("End")

`;

module.exports = answer.trim();