# munra

Leé `brief.md` antes de proponer nada: ahí está qué es esto, qué decidí y qué descarté.

## Prácticas

Este proyecto sigue los playbooks propios de Rafa. **Son la fuente única — no los copies acá.**

Todo vive en `~/Desktop/rafa-build/`:

- Arquitectura (dónde vive cada cosa): `playbooks/Architecture-Playbook.md`
- Construcción (en qué orden y cómo verifico): `playbooks/Build-Playbook.md`
- Si hace falta el código y no solo el criterio: `recipes/`

Para aplicarlos, usá la skill **`apps-playbook`** — lee la sección que corresponde en vez de cargar los
archivos enteros.

**La regla madre:** cada paso cierra con `✅ Checkpoint` (comando + resultado esperado) y
`💰 Valor` (qué habilita, con un número). No se avanza con el checkpoint en rojo.

Si algo del proyecto contradice el playbook por una buena razón, se escribe la razón en `brief.md`.
Si el playbook está equivocado, se corrige el playbook — no se ignora en silencio.
