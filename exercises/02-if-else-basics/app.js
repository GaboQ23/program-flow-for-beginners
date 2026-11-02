/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A("Start") --> B{"Edad >=18"}
    B{"Edad >=18"} -->|"Si"| C["Puede beber"]
    C["Puede beber"] --> E("End")
    B{"Edad >=18"} -->|"No"| D["No puede beber"]
    D["No puede beber"] --> F("End")

`;

// Do not modify this
module.exports = answer.trim();