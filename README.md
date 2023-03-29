# Proyecto de Node.js con Jest

Este es un proyecto de ejemplo de Node.js que utiliza Jest como herramienta de pruebas unitarias. El objetivo de este proyecto es demostrar cómo se puede utilizar Jest para escribir y ejecutar pruebas unitarias en un proyecto de Node.

## Requisitos

Para ejecutar este proyecto, es necesario tener instalado Node.js y Jest en el equipo local. Si aún no tienes estas herramientas instaladas, puedes descargar e instalar Node.js desde el sitio web oficial de Node.js y Jest desde la línea de comando usando el siguiente comando:

```bash
npm install --save-dev jest
```
## Instalación
Para instalar este proyecto, sigue los siguientes pasos:

Clona este repositorio en tu equipo local:
```bash
git clone https://github.com/Chejohrpp/ejemplo-basico-de-aritmetica-con-jest
```
Instala las dependencias del proyecto:
```bash
npm install
```
Ejecuta las pruebas unitarias:
```bash
npm test
```
## Estructura del proyecto
El proyecto está estructurado de la siguiente manera:

```css
proyecto-node-jest/
  |- src/
  |  |- math.js
  |- test/
  |  |- math.test.js
  |- package.json
  |- .gitignore
  |- package-lock.json
  |- README.md
  ```
La carpeta src/ contiene el código fuente del proyecto, mientras que la carpeta test/ contiene el archivo de prueba unitaria. El archivo package.json contiene las dependencias del proyecto y los scripts de ejecución, mientras que el archivo .gitignore especifica los archivos que no se deben incluir en el repositorio de Git.