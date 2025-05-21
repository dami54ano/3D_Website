# 3D Portfolio Website

Dies ist eine moderne Portfolio-Website, die mit [React](https://react.dev/), [Vite](https://vitejs.dev/) und [Three.js](https://threejs.org/) entwickelt wurde. Die Seite bietet eine interaktive 3D-Welt, in der Modelle und Texturen eingebunden sind, sowie klassische 2D-Ansichten für Informationen und Kontakt.

## Features

- **3D-Ansicht:** Integration von 3D-Modellen (FBX, GLB) und Texturen mit [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) und [@react-three/drei](https://github.com/pmndrs/drei).
- **Navigation:** Routing zwischen Home, About, Contact und der 3D-Welt mit [react-router-dom](https://reactrouter.com/).
- **Responsives Design:** Optimiert für verschiedene Bildschirmgrößen.
- **Material- und Texturverwaltung:** Nutzung von PBR-Texturen und MaterialX-Dateien.
- **Kontaktformular:** Einfaches Kontaktformular mit Validierung.

## Installation

1. **Repository klonen**
   ```sh
   git clone <REPO-URL>
   cd website
   ```
2. **Abhängigkeiten installieren**
   ```sh
   npm install
   ```
3. **Entwicklungsserver starten**
   ```sh
   npm run dev
   ```
4. **Build für Produktion**
   ```sh
   npm run build
   ```

## Wichtige Abhängigkeiten

- React 19
- @react-three/fiber
- @react-three/drei
- three.js
- @mui/material & @mui/joy (UI-Komponenten)
- Vite

## Hinweise

- 3D-Modelle und Texturen liegen im `public`-Ordner.
- Die 3D-Welt ist unter `/3d-world` erreichbar.
- Für eigene Modelle können FBX- oder GLB-Dateien im `public`-Ordner abgelegt werden.