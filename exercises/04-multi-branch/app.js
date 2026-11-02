/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B{"Color de la luz"}
    B{"Color de la luz"} -->|"Verde"| C["Avanzar"]
    B{"Color de la luz"} -->|"Amarillo"| D["Reducir la velocidad"]
    B{"Color de la luz"} -->|"Rojo"| E["Detenerse"]
    C["Avanzar"] --> F("End")
    D["Reducir la velocidad"] --> F("End")
    E["Detenerse"] --> F("End")

`;

module.exports = answer.trim();