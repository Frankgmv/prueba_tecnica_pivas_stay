# 🛍️ Fullstack App - Gestión de Productos y Categorías

Aplicación web fullstack construida con **React** en el frontend y **Node.js + Express + Sequelize** en el backend. Permite gestionar productos y categorías con operaciones CRUD completas.

---

## 🔧 Tecnologías

- ⚙️ Backend: Node.js, Express, Sequelize, MySQL
- 🌐 Frontend: React, React Router DOM, Axios, React Hook Form
- 🔁 API RESTful
- 🎨 Validaciones de formularios y manejo de rutas

---

## 🚀 Instalación y ejecución local

### 🔙 Backend (Node.js)

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio/backend


## Correr localmente

#### iniciar backend

vamos a entrar al directorio

```bash
  cd BACKEND
```

Instalar dependencias

```bash
  npm install
```

iniciar el servidor previo debes tener las variables de entorno en tu .env

```bash
  npm run start
```

#### iniciar el frontend

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## variables de entorno

Para correr el proyecto debes tener el archivo .env en el directorio raiz de la carpeta backend

base de datos del proyecto
`MYSQL_DATABASE`

usuario de la base de datos
`MYSQL_USER`


contraseña de la bse de datos
`MYSQL_PASSWORD`


>[!Note]
>#### Valida las URL
>corre primero los proyectos y verifica las URL que esten funcionando bien.


>[!tip]
>#### Docker
>Si no cuentas con mysql instalado puedes correr un contenedor de docker en apoyo del archivo docker-compose.yml así podras trabajar con una base de datos rápido.
