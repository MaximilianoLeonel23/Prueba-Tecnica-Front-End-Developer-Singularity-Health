# Prueba técnica - Singularity Health

## Tabla de contenidos

- [Descripción General](#descripcion-general)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Proceso](#proceso)
  - [Tecnologías](#tecnologias)
  - [Instrucciones](#instrucciones)
- [Autor](#autor)

## Descripción General

### Screenshots

![login](/src/assets/images/screenshots/login-screenshot.png)
![home](/src/assets/images/screenshots/home-screenshot.png)
![error-404](/src/assets/images/screenshots/error-404-screenshot.png)

### Links

- Repositorio: [Repositorio](https://github.com/MaximilianoLeonel23/Prueba-Tecnica-Front-End-Developer-Singularity-Health)

## Proceso

### Tecnologías

- HTML5/CSS3
- Flexbox
- CSS Grid
- Tailwind CSS
- Diseño Desktop
- JavaScript
- React
- React-Router-Dom
- Redux
- Axios
- API utilizada: Reqres.in
- Adobe XD (maquetación de las vistas UI)
- Figma (diseño de elementos decorativos e imágenes personalizadas)

### Implementación

#### Requisitos previos

1. Asegúrate de tener **Node.js** y **npm** (o **Yarn**) instalados en tu máquina. Si no los tienes, puedes descargarlos desde los siguientes enlaces:

   - [Node.js](https://nodejs.org/)
   - [npm](https://www.npmjs.com/get-npm) (se instala automáticamente con Node.js)

2. Clona este repositorio en tu máquina local con el siguiente comando:

   ```bash
   git clone https://github.com/MaximilianoLeonel23/Prueba-Tecnica-Front-End-Developer-Singularity-Health.git
   ```

3. Accede a la carpeta del proyecto:
   ```bash
   cd Prueba-Tecnica-Front-End-Developer-Singularity-Health
   ```

5. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

7. Para ejecutar el proyecto en tu entorno local, utiliza el siguiente comando:
   ````bash
   npm run dev
   ```

### Intrucciones

1. El usuario, en caso de no haberse logueado anteriormente, será dirigido a la vista LOGIN. Allí deberá ingresar un email y contraseña válidos El email proporcionado debe ser de alguno de los usuarios registrados por la API, mientras la contraseña es indiferente. Algunas opciones para login son:

- eve.holt@reqres.in
- george.bluth@reqres.in
- janet.weaver@reqres.in

Las funcionalidades "Recuperar contraseña" y "Registro de un nuevo usuario" no se encuentran implementadas, por lo que en caso de hacer click en sus respectivos links el usuario será redirigido a la vista ERROR 404.

En caso de un login inválido, el usuario recibirá feedback para volver a ingresar sus datos, y dispone de intentos ilimitados.

2. Si el login es exitoso, el usuario será redirigido a la vista HOME. El usuario podrá navegar a las demás páginas utilizando los links del menú de navegación, ubicado en el extremo superior de la pantalla. El ícono de Fetch! lo devuelve al HOME.

3. A pesar de no encontrarse en los requerimientos, se implementó un botón de logout, ubicado temporalmente en el extremo inferior derecho, a los fines de accesibilidad en el flujo de la aplicación. Este botón cierra la sesión del usuario y lo redirige a la vista de LOGIN.

4. En caso de navegar a una url inválida, habiendose logueado el usuario, este es redirigido a la vista ERROR 404.

## Autor

[Maximiliano Pérez](https://github.com/MaximilianoLeonel23) - Desarrollador Front End
