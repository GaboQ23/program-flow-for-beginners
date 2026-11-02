/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Inicio") --> B["Bloqueado"]
    B["Bloqueado"] -->|"Moneda"| C["Desbloqueado"]
    C["Desbloqueado"] -->|"Empujar"| D["La persona pasa"]
    D["La persona pasa"] --> B["Bloqueado"]
    B["Bloqueado"] -->|"No hay mas eventos"| E("End")

`;

module.exports = answer.trim();