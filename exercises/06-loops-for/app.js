/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["i = 1"]
    B["i = 1"] --> D{"i <= 5?"}
    D{"i <= 5?"} -->|"Si"| C["Calificar tarea i"]
    C["Calificar tarea i"] --> F["i = i + 1"]
    F["i = i + 1"] --> D{"i <= 5?"}
    D{"i <= 5?"} -->|"No"| E["Mostrar resumen"]
    E["Mostrar resumen"] --> G("End")


`;

module.exports = answer.trim();