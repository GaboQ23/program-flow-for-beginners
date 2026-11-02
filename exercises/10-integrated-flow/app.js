/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Inicio") --> B["Seleccionar producto"]
    B["Seleccionar producto"] --> C{"Seleccion valida?"}
    C{"Seleccion valida?"} -->|"No"| D["Intentar de nuevo"]
    D["Intentar de nuevo"] --> B["Seleccionar producto"]
    C{"Seleccion valida?"} -->|"Si"| E["Insertar dinero"]
    E["Insertar dinero"] --> F{"Alcanza el dinero?"}
    F{"Alcanza el dinero?"} -->|"Si"| G["Entregar producto"]
    F{"Alcanza el dinero?"} -->|"No"| I["Pedir mas dinero"]
    I["Pedir mas dinero"] --> E["Insertar dinero"]
    G["Entregar producto"] --> J["Devolver el cambio"]
    J["Devolver el cambio"] --> H("Fin")



`;

module.exports = answer.trim();