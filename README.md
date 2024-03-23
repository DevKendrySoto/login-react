# Login React

Este proyecto es un sistema de login desarrollado con React, utilizando herramientas modernas como ViteJS, Firebase Authentication (incluyendo login con Google), SweetAlert para notificaciones, React Router DOM para la navegación y Bootstrap para estilos. 

## Características

- **Inicio de sesión y registro de usuarios** con Firebase Authentication.
- **Inicio de sesión con Google** para una experiencia de usuario fluida.
- **Notificaciones interactivas** con SweetAlert.
- **Navegación entre páginas** gestionada con React Router DOM.
- **Diseño responsive** con Bootstrap y Css para adaptarse a cualquier dispositivo.
- **Estilos modernos** y atractivos, proporcionando una excelente experiencia de usuario.

## Configuración de Variables de Entorno

Antes de ejecutar el proyecto, necesitarás configurar las variables de entorno necesarias para Firebase:

1. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
VITE_API_KEY=tu_api_key_de_firebase
VITE_AUTH_DOMAIN=tu_auth_domain_de_firebase
VITE_PROJECT_ID=tu_project_id_de_firebase
VITE_STORAGE_BUCKET=tu_storage_bucket_de_firebase
VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id_de_firebase
VITE_APP_ID=tu_app_id_de_firebase
```

2. Reemplaza los valores de placeholder (`tu_api_key_de_firebase`, `tu_auth_domain_de_firebase`, etc.) con tus propias claves de configuración de Firebase que puedes obtener de la Firebase Console.

## Instalación

1. **Clona el repositorio**

   ```
   git clone https://github.com/DevKendrySoto/login-react.git
   cd login-react
   ```

2. **Instala las dependencias**

   ```
   npm install
   ```

3. **Ejecuta el proyecto**

   ```
   npm run dev
   ```

   Visita `http://localhost:3000` en tu navegador para ver la aplicación.

## Tecnologías Utilizadas

- **[React](https://reactjs.org/)** para la construcción de la interfaz de usuario.
- **[ViteJS](https://vitejs.dev/)** como herramienta de construcción y desarrollo.
- **[Firebase Authentication](https://firebase.google.com/docs/auth)** para manejar la autenticación de usuarios.
- **[SweetAlert](https://sweetalert.js.org/)** para mostrar notificaciones y alertas interactivas.
- **[React Router DOM](https://reactrouter.com/web/guides/quick-start)** para la navegación entre páginas.
- **[Bootstrap](https://getbootstrap.com/)** para el diseño y estilos responsivos.

## Características Adicionales

- Protección de rutas para usuarios autenticados con un componente `ProtectedRoute`.
- Formulario de recuperación de contraseña para permitir a los usuarios restablecer su contraseña.
- Validación de formularios para mejorar la experiencia de usuario y evitar errores.

---


