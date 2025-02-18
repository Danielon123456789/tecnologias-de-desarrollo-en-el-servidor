
# API de noticias con NewsAPI

Este trabajo permite obtener titulares de noticias en tiempo real utilizando NewsAPI

# Tecnologías que se utilizaron:
- Node.js --> npm i Node *Necesaria para correr el proyecto
- express.js --> npm i express *Necesaria para correr el proyecto
- Axios  --> npm i Axios *Necesaria para correr el proyecto
- dotenv --> npm i dotenv *Necesaria para correr el proyecto
- nodemon --> npm i nodemon --> comando para correrlo "npm run dev"
- NewsAPI  *Necesaria para correr el proyecto

# Scrip del package.json (para que puedas correr los comandos)
    "start": "node ."
    "dev": "nodemon ."

# Variables de entorno:

- En un archivo .env poner las variables de PORT="puerto escogido" y API_KEY = "tu api_key"

# Endpoints disponibles

GET/sources

ejemplo: http://localhost:3000/sources?country=us

GET/everything

ejemplo: http://localhost:3000/everything?q=bitcoin&searchIn=title

Get/headlines

ejemplo: http://localhost:3000/headlines?country=us&category=sports
