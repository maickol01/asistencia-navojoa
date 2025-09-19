# Bitácora de Asistencia - Navojoa

Sistema de confirmación de asistencia para el Municipio de Navojoa con funcionalidad de geolocalización.

## 📋 Descripción

Este proyecto es una aplicación web desarrollada para el Municipio de Navojoa que permite a los empleados confirmar su asistencia utilizando geolocalización para verificar que se encuentren en el lugar de trabajo correcto. La aplicación clona la interfaz oficial del sistema de asistencia del municipio.

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework de React para aplicaciones web
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de UI reutilizables
- **Lucide React** - Iconos modernos
- **Geolocation API** - Para verificación de ubicación

## ✨ Características

- ✅ Confirmación de asistencia con geolocalización
- 📱 Diseño responsivo para dispositivos móviles y desktop
- 🎨 Interfaz moderna que replica el sistema oficial de Navojoa
- 🔒 Verificación de ubicación para confirmar presencia física
- ⚡ Optimizado para rendimiento con Next.js 15

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/maickol01/bitacora-asistencia-navojoa.git
cd bitacora-asistencia-navojoa
```

2. Instala las dependencias:
```bash
bun install
# o
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
bun dev
# o
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📱 Uso

1. Accede a la aplicación desde tu dispositivo
2. Permite el acceso a la ubicación cuando se solicite
3. Confirma tu asistencia cuando estés en el lugar de trabajo
4. El sistema verificará automáticamente tu ubicación

## 🏗️ Scripts Disponibles

- `bun dev` - Inicia el servidor de desarrollo
- `bun build` - Construye la aplicación para producción
- `bun start` - Inicia el servidor de producción
- `bun lint` - Ejecuta el linter para verificar el código
- `bun format` - Formatea el código con Biome

## 📁 Estructura del Proyecto

```
bitacora-asistencia/
├── src/
│   ├── app/          # Páginas y layouts de Next.js
│   ├── components/   # Componentes reutilizables
│   └── lib/          # Utilidades y configuraciones
├── public/           # Archivos estáticos
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🌐 Despliegue

La aplicación está configurada para desplegarse fácilmente en:

- **Vercel** (recomendado)
- **Netlify**
- **Cualquier proveedor que soporte Next.js**

## 📄 Licencia

Este proyecto fue desarrollado para el Municipio de Navojoa.

## 🤝 Contribuciones

Para contribuir al proyecto, por favor contacta al equipo de desarrollo del Municipio de Navojoa.

---

*Desarrollado con ❤️ para el Municipio de Navojoa*
