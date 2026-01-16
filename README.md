# 🍕 Cupido Pizza - Frontend

Frontend React para el sistema de pedidos de Cupido Pizza.

## 📋 Descripción

Aplicación web responsive y mobile-first para gestionar pedidos de pizzería mediante QR en mesas.

### Stack Tecnológico

- **Framework**: React 18
- **Build Tool**: Vite
- **Router**: React Router v6
- **Autenticación**: Auth0
- **HTTP Client**: Axios
- **Hosting**: Vercel

---

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+
- Backend corriendo (local o en producción)

### Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales

# Iniciar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

---

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── OrderCard.jsx
│   │   ├── OrderForm.jsx
│   │   ├── OrderList.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/             # Páginas principales
│   │   ├── HomePage.jsx
│   │   ├── OrderPage.jsx
│   │   └── AdminPage.jsx
│   ├── services/          # Servicios API
│   │   └── api.js
│   ├── hooks/             # Custom hooks
│   │   └── useAuthToken.js
│   ├── styles/            # Archivos CSS
│   │   └── *.css
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Punto de entrada
├── public/                # Archivos estáticos
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🌐 Rutas de la Aplicación

- `/` - Página de inicio (información de la pizzería)
- `/pedido` - Formulario para hacer pedidos (público)
- `/admin` - Panel de administración (requiere login)

---

## 🔐 Configuración de Auth0

### Paso 1: Crear Aplicación en Auth0

1. Ve a Auth0 Dashboard → Applications
2. Create Application → Single Page Web Application
3. Nombre: "Cupido Pizza Frontend"

### Paso 2: Configurar URLs

En la configuración de la aplicación:

**Allowed Callback URLs:**
```
http://localhost:5173,
https://tu-frontend.vercel.app
```

**Allowed Logout URLs:**
```
http://localhost:5173,
https://tu-frontend.vercel.app
```

**Allowed Web Origins:**
```
http://localhost:5173,
https://tu-frontend.vercel.app
```

### Paso 3: Obtener Credenciales

Copia estos valores:
- **Domain**: `dev-76xwqqcy01cafiou.auth0.com`
- **Client ID**: En la pestaña "Settings"
- **Audience**: De la API que creaste en el backend

### Paso 4: Actualizar .env

```bash
VITE_AUTH0_DOMAIN=dev-76xwqqcy01cafiou.auth0.com
VITE_AUTH0_CLIENT_ID=tu_client_id_aqui
VITE_AUTH0_AUDIENCE=https://api.cupidopizza.com
```

---

## 🔌 Conexión con Backend

### Variables de Entorno

```bash
# API Backend
VITE_API_URL=http://localhost:3000  # Desarrollo
# VITE_API_URL=https://tu-backend.vercel.app  # Producción
```

### Endpoints Usados

- `POST /api/orders` - Crear pedido (público)
- `GET /api/orders` - Listar pedidos (admin)
- `PATCH /api/orders/:id/status` - Actualizar estado (admin)

---

## 🎨 Características

### Cliente (Sin Login)

- ✅ Página de inicio atractiva
- ✅ Información de la pizzería
- ✅ Enlace a menú PDF
- ✅ Formulario de pedido simple
- ✅ Confirmación visual
- ✅ Mobile-first design

### Admin (Con Login Auth0)

- ✅ Login seguro con Auth0
- ✅ Panel de pedidos en tiempo real
- ✅ Filtros por estado
- ✅ Actualización de estados
- ✅ Auto-refresh cada 10 segundos
- ✅ UI intuitiva y responsive

---

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

---

## 🚢 Deploy en Vercel

### Método 1: Via GitHub

1. Sube el código a GitHub
2. Ve a Vercel Dashboard
3. Import project from GitHub
4. Configura las variables de entorno
5. Deploy

### Método 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Variables de Entorno en Vercel

En Vercel Dashboard → Settings → Environment Variables:

```bash
VITE_API_URL=https://tu-backend.vercel.app
VITE_AUTH0_DOMAIN=dev-76xwqqcy01cafiou.auth0.com
VITE_AUTH0_CLIENT_ID=tu_client_id
VITE_AUTH0_AUDIENCE=https://api.cupidopizza.com
VITE_APP_NAME=Cupido Pizza
```

---

## 📄 Crear Menú PDF

Coloca tu archivo de menú en `/public/menu.pdf`

El botón "Ver Menú Completo" abrirá este archivo.

---

## 🧪 Testing

### Flujo de Cliente

1. Ir a `/`
2. Ver información
3. Click en "Hacer un Pedido"
4. Llenar formulario
5. Recibir confirmación

### Flujo de Admin

1. Ir a `/admin`
2. Login con Auth0
3. Ver lista de pedidos
4. Filtrar por estado
5. Actualizar estados

---

## 🎯 Próximas Mejoras

- [ ] Agregar notificaciones push
- [ ] Implementar WebSockets para updates en tiempo real
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)
- [ ] Múltiples idiomas
- [ ] Analytics

---

## 📞 Soporte

Para dudas o problemas, contactar al equipo de desarrollo.

---

Desarrollado con ❤️ para Cupido Pizza 🍕
