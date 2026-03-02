# 🐉 Dragon Ball Wild

**Dragon Ball Wild** es una aplicación web interactiva que te permite explorar todo el universo de Dragon Ball, directamente extraído de la [API oficial de Dragon Ball](https://web.dragonball-api.com/).

Desarrollado en Angular 18+, con un enfoque en una estética altamente **Premium**, diseño oscuro translúcido (Glassmorphic) y vibrantes acentos de neón para dar vida a los personajes y batallas épicas.

---

## 🚀 Características Principales

### 1. 📖 Enciclopedia de Personajes

- Listado masivo y paginado con carga asíncrona (Infinite Scroll logic) a través de un sistema de cartas coleccionables de alto rendimiento.
- Modal de detallado **Glassmorphic**, donde puedes inspeccionar:
  - **Ki Base** y **Ki Máximo**
  - Raza, Afiliación, etc.
  - Historia ampliada del personaje.
- Barra de búqueda y filtros por texto reactivos, combinando la facilidad de uso con el impresionante estilo oscuro espacial.

### 2. ⚔️ Arena de Batallas (TCG)

- Entra a una arena de combate simulado seleccionando tu héroe de una baraja tipo TCG (Trading Card Game).
- Observa animaciones de enfrentamiento (`VS`) acompañadas de cálculos de nivel de ki de los contrincantes seleccionados.
- Resultados proyectados en el increíble **Modal de Batalla**, el cual anuncia **"Victoria"**, **"Derrota"** o un asombroso "Empate", y que renderiza un aura cian (cyan glow), rojo o dorado para el perdedor o ganador de forma inteligente, impidiendo desbordamientos.

### 3. ✨ Paleta Visual (Dark & Premium App)

- Totalmente implementada desde la hoja de estilos raíz empleando SASS (SCSS custom variables).
- Paleta purpurina espacial/galáctica (`#110b17`) enriquecida con elementos translucidos, degradados profundos y fuentes estéticas exclusivas (`Outfit` Font).
- Aplicaciones animadas sutiles en los botones y Modales en cada renderizado de la UI.

---

## 🛠️ Tecnologías Empleadas

- **Angular 18+ (Standalone Components)**: Estructura fundamental, inyección de dependencias, Signals y Componentes Independientes.
- **SCSS Global & Scoped**: Para estilizado modular y estricto.
- **Angular Material (`@angular/material`)**: Proveedor del armazón modal asíncrono para personajes y batallas.
- **Dragon Ball API v1 (`dragonball-api.com`)**: Origen externo de todos los personajes, lore, atributos y recortes en máxima calidad `.webp` o PNGs.
- **HTML5 & Vanilla CSS animations**: Diseño "Responsive" adaptable tanto a Teléfonos Móviles, Tablas (Tablets) como Desktops.

---

## 📦 Instalación y Ejecución

Sigue estos pasos para arrancar el entorno en tu máquina:

1. Clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/wild320/DragonBallWild.git
   ```

2. Ingresa a la carpeta del proyecto e instala sus dependencias con NPM:

   ```bash
   cd DragonBallWild
   npm install
   ```

3. Arranca el Servidor de Desarrollo:

   ```bash
   npm start
   ```

   _Alternativamente, también puedes usar `ng serve` si tienes el CLI de Angular instalado a nivel global._

4. Visita [http://localhost:4200/](http://localhost:4200/) en tu navegador, y ponte a pelear.

---

## 👨‍💻 Autor y Reconocimientos

Desarrollado y construido por **Wild Jaramillo** &copy; 2026.

> "Powered by The official Dragon Ball API"

_Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.1.0._
