# API de Gestión de Usuarios y Publicaciones

Este proyecto es una API RESTful desarrollada para la gestión de usuarios y publicaciones, con funcionalidades de autenticación, autorización basada en roles (usuario y administrador), y operaciones CRUD para usuarios y publicaciones.

## Tecnologías utilizadas

- **Node.js** - `npm install node` (Necesaria para correr el proyecto)
- **Express.js** - `npm install express` (Framework para manejar rutas y peticiones HTTP)
- **MongoDB** - Base de datos utilizada para almacenar usuarios y publicaciones
- **dotenv** - `npm install dotenv` (Para manejar variables de entorno)
- **jsonwebtoken** - `npm install jsonwebtoken` (Para la autenticación con JWT)
- **nodemon** - `npm install nodemon` (Para desarrollo, se ejecuta con `npm run dev`)

## Scripts del package.json

Para ejecutar el proyecto, usa los siguientes comandos:

```json
"scripts": {
  "dev": "nodemon src/index.ts"
}
```
- `npm run dev`: Inicia la aplicación en modo desarrollo con nodemon.

## Variables de entorno

Crea un archivo `.env` y define las siguientes variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/tu-base-de-datos
JWT_SECRET=tu-secreto-jwt
```

- **PORT**: Puerto en el que se ejecutará la aplicación.
- **MONGODB_URI**: URI de conexión a la base de datos MongoDB.
- **JWT_SECRET**: Clave secreta para firmar los tokens JWT.

## Endpoints disponibles

### Autenticación

#### Registro de Usuario
**POST** `/registro`

**Ejemplo de body:**
```json
{
  "nombre": "Daniel Hernández",
  "email": "usuario@example.com",
  "contrasena": "1234567"
}
```

#### Login de Usuario
**POST** `/login`

**Ejemplo de body:**
```json
{
  "email": "usuario@example.com",
  "contrasena": "1234567"
}
```

#### Obtener Perfil de Usuario
**GET** `/perfil`

- Requiere autenticación (token JWT en el header `Authorization: Bearer <token>`)

### Usuarios (Requieren autenticación y rol de administrador)

#### Obtener todos los usuarios
**GET** `/usuarios`

#### Obtener un usuario por ID
**GET** `/usuarios/:id`

#### Crear un nuevo usuario
**POST** `/usuarios`

**Ejemplo de body:**
```json
{
  "nombre": "Nuevo Usuario",
  "email": "nuevo@correo.com",
  "contrasena": "123",
  "rol": "usuario"
}
```

#### Actualizar un usuario
**PUT** `/usuarios/:id`

**Ejemplo de body:**
```json
{
  "nombre": "Daniel Hernández actualizado",
  "rol": "admin"
}
```

#### Eliminar un usuario
**DELETE** `/usuarios/:id`

### Publicaciones (Requieren autenticación)

#### Crear una publicación
**POST** `/publicaciones`

**Ejemplo de body:**
```json
{
  "titulo": "Mi primera publicación",
  "contenido": "Este es el contenido del post."
}
```

#### Obtener todas las publicaciones
**GET** `/publicaciones`

## Ejemplos de Uso

### Registro de Usuario
```bash
curl -X POST http://localhost:3000/registro -H "Content-Type: application/json" -d '{
  "nombre": "Daniel Hernández",
  "email": "usuario@example.com",
  "contrasena": "1234567"
}'
```

### Login de Usuario
```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{
  "email": "usuario@example.com",
  "contrasena": "1234567"
}'
```

### Obtener Perfil de Usuario
```bash
curl -X GET http://localhost:3000/perfil -H "Authorization: Bearer <token>"
```

### Crear una Publicación
```bash
curl -X POST http://localhost:3000/publicaciones -H "Authorization: Bearer <token>" -H "Content-Type: application/json" -d '{
  "titulo": "Mi primera publicación",
  "contenido": "Este es el contenido del post."
}'
```

---
Este README proporciona una guía clara para instalar, configurar y usar la API. ¡Espero que te sea útil! 🚀

