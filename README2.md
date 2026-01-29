# 🚀 Ejercicio de Optimización UX - LegacyCRM

Este proyecto consiste en la intervención y mejora de un CRM con "mala usabilidad intencional" para transformarlo en una herramienta funcional, accesible y centrada en el usuario, aplicando principios de **Diseño Centrado en el Usuario (DCU)**.

## 🛠️ Mejoras Implementadas

Se realizaron tres intervenciones críticas basadas en hallazgos de usabilidad y accesibilidad:

### 1. Encuesta No Intrusiva y Control del Usuario
* **Problema:** Un modal obligatorio que aparecía sin aviso, bloqueaba la navegación y no permitía el cierre (tecla Esc o botón X inactivos).
* **Solución:** Se rediseñó la encuesta con un estilo **Glassmorphism** moderno. Ahora es opcional, aparece solo tras completar una tarea exitosa (guardar cliente) y permite el cierre mediante una "X" funcional, la tecla `Esc` o el botón "Quizás después".

### 2. Rediseño Visual y Accesibilidad (Contraste)
* **Problema:** Colores demasiado oscuros con bajo contraste que impedían la legibilidad del texto y etiquetas.
* **Solución:** Implementación de un sistema de **Tokens de Color** con contraste adecuado (cumpliendo estándares WCAG). Se ajustaron los tamaños de fuente a un mínimo de 14px-16px para reducir la fatiga visual.

### 3. Simplificación de Formularios y Validación Real
* **Problema:** Formularios extensos con validación tardía (solo al final) y mensajes de error poco claros.
* **Solución:** Se optimizó el flujo de registro. Se implementó **validación en tiempo real** para el campo de correo electrónico; el sistema ahora brinda feedback visual (verde/rojo) mientras el usuario escribe, evitando errores antes de enviar.

## 💻 Tecnologías Utilizadas
* **HTML5:** Estructura semántica y accesible.
* **CSS3:** Diseño responsivo con variables dinámicas y efectos de desenfoque.
* **JavaScript (Vanilla):** Lógica de navegación, manipulación del DOM y validaciones preventivas.
* **Git/GitHub:** Control de versiones y despliegue.

## 📂 Estructura del Proyecto
* `index.html`: Estructura principal del Dashboard y vistas del CRM.
* `styles.css`: Estilos visuales optimizados y temas de contraste.
* `script.js`: Lógica de interacción, navegación y validaciones de usuario.

---
*Este proyecto fue desarrollado como parte de un ejercicio independiente de usabilidad para mejorar la eficiencia y satisfacción del usuario en entornos digitales.*