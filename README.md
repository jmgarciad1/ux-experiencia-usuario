# Proyecto UX de Aplicación Móvil Android - Alarma App

Este proyecto consiste en una aplicación de alarma desarrollada en Android Studio sin funcionalidad, solamente la maquetzación. La aplicación permite a los usuarios establecer alarmas y recibir notificaciones haciendo uso de funcionalidades innovadoras.

Características:

* Creación de alarmas.
* Notificaciones a personas de emergencia.
* Grabadora de voz o audio.
* Interfaz de usuario personalizable con temas y colores.

## Requisitos previos

Para poder ejecutar este proyecto en un emulador (AVD) o un dispositivo Android, asegúrate de cumplir con los siguientes requisitos:

* Android Studio (versión 4.0 o superior)
* JDK 8 o superior instalado
* Gradle (incluido en Android Studio)
* Un dispositivo físico con Android 8.1 (Oreo) o superior o un AVD configurado en Android Studio
* Al menos 2 GB de RAM en tu dispositivo virtual o físico

## Pasos para ejecutar la aplicación en un AVD (Emulador)

1. Clonar el repositorio
Primero, clona este repositorio en tu máquina local:

` git clone https://github.com/jmgarciad1/ux-experiencia-usuario.git `

2. Abrir el proyecto en Android Studio
Abre Android Studio.
Selecciona "Open an existing project".
Navega hasta la carpeta del proyecto y ábrelo.

3. Pasarse a la rama "mobile"

` git checkout mobile `

4. Configurar un AVD (Android Virtual Device)

* Ve a Tools > Device Manager o ADV Manager en Android Studio.
* Crea un nuevo AVD seleccionando un dispositivo físico de referencia (por ejemplo, Pixel 8) y elige una imagen del sistema que cumpla con los requisitos (por ejemplo, Android 11.0).
Configura la cantidad de RAM asignada al AVD (se recomienda al menos 2 GB).

5. Compilar y ejecutar

Haz clic en el botón Run en la parte superior de Android Studio o usa el atajo Shift + F10.
Selecciona el AVD que acabas de configurar.
La aplicación se instalará y ejecutará automáticamente en el emulador.

Pasos para instalar el APK en un dispositivo físico

1. Compilar el APK

En Android Studio, ve a Build > Build Bundle(s) / APK(s) > Build APK(s).
Android Studio generará un archivo APK en la carpeta /app/build/outputs/apk/debug/. O en su defecto utilizar el APK brindado en la entrega, que quedara ya compartido.

2. Transferir el APK al dispositivo
Conecta tu dispositivo Android al computador mediante un cable USB y transfiere el APK generado al dispositivo, o puedes usar alguna herramienta como Google Drive para subir el archivo APK y descargarlo desde tu teléfono.

3. Habilitar la instalación desde fuentes desconocidas para poder instalar el APK en el dispositivo movil.
   
4. Para instalar el APK directamente en tu dispositivo Android, sigue estos pasos:

* Ve a Configuración > Seguridad.
* Habilita la opción Instalar aplicaciones desde fuentes desconocidas o Permitir aplicaciones desconocidas.
* Abre el APK desde tu administrador de archivos o desde las notificaciones.
* Confirma la instalación.


4. Ejecutar la aplicación en el dispositivo
Una vez instalado el APK, encontrarás el ícono de la aplicación en el lanzador de aplicaciones. Haz clic para abrirla y comenzar a usarla.


## Tecnologías utilizadas:

* Lenguaje: Java/Kotlin
* IDE: Android Studio
* Gradle: Herramienta de compilación
* Diseño de UI: XML

## Autores
* Alex Meneses - a.menesess@uniandes.edu.co
* José García - jm.garciad1@uniandes.edu.co
