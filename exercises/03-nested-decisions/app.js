/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B{"Edad >= 21"}
    B{"Edad >= 21"} -->|"Si"| C{"Tiene licencia?"}
    C{"Tiene licencia?"} -->|"Si"| D["Alquilar auto"]
    D["Alquilar auto"] --> E("End")
    B{"Edad >= 21"} -->|"No"| F["No alquilar auto"]
    F["No alquilar auto"] --> G("End")
    C{"Tiene licencia?"} -->|"No"| F["No alquilar auto"]
`;

module.exports = answer.trim();