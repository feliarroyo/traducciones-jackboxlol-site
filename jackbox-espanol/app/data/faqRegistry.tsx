export interface Faq {
    question: string;
    answer: (string | React.ReactNode)[];
}

const emphasis = "text-amber-400 font-bold";
const white_bold = "text-white font-bold";
export const FAQ_REGISTRY: Faq[] = [
    {
        question: "Encontré un error en una de las traducciones. ¿Dónde puedo reportarlo?",
        answer: ["Puedes reportar el error en el canal \"soporte\" del servidor de Discord. En lo posible, no escatimes en los detalles.", "Por ejemplo: si una ocurrencia de emergencia en Quiplash 3 no está bien escrita, envía también el enunciado."]
    },
    {
        question: "¿Por qué la pantalla se me queda en negro luego de instalar la traducción?",
        answer: ["Esto puede deberse al uso de versiones piratas (muchas veces desactualizadas), o a haber instalado el parche equivocado."]
    },
    {
        question: "¿Se traduce también lo que aparece en el dispositivo?",
        answer: ["Exceptuando algunos detalles menores, todo lo importante de jackbox.tv es traducido. Para lograr esto, se utiliza una página diferente: “jackbox.lol”, que traduce todo su contenido al español. Todos los parches del proyecto muestran ese dominio, y recomendamos utilizarlo al jugar con las traducciones no oficiales."]
    },
    {
        question: "¿Es una traducción oficial? ¿Es gratuita? ¿Puedo donarles de algún modo?",
        answer: ["Esta es una traducción no oficial de los juegos sin fines de lucro. El contenido sigue siendo propiedad de Jackbox Games. Se aceptan donaciones con el fin de mantener el dominio de “Jackbox.LOL”, utilizado para alojar la página web y el controlador."]
    },
    {
        question: "¿Cómo hago para que un juego vuelva a estar en inglés? ¿Puedo cambiar fácilmente entre el inglés y el español?",
        answer: [
            "En caso que quieras que el juego vuelva a estar en inglés, si tienes Steam y la Utility la forma más simple de hacerlo es, en la sección de “Ajustes” de la Utility, hacer clic sobre el botón de la flecha para restaurarlo a como estaba originalmente. Al hacerlo, los archivos se verificarán con Steam automáticamente.",
            "Alternativamente, puedes hacer esto directamente desde Steam. Para ello, en tu biblioteca de Steam debes hacer clic derecho en el juego que quieras restaurar, luego pulsas \"Propiedades...\", vas a \"ARCHIVOS LOCALES\" y finalmente pulsas \"Verificar integridad de los archivos de juego...\".",
            "En Epic Games Store, debes hacer clic en los tres puntos al lado del juego que desees restaurar y pulsar \"Verificar\".",
            "Si deseas poder intercambiar entre inglés y español, una vez realizado el paso de arriba realiza lo siguiente:",
            "1. En la carpeta del juego, haz una copia de la carpeta \"games\" y llámala \"gamesEN\" (copia y pega la carpeta en el mismo lugar para ello).",
            "2. Aplica la traducción.",
            "3. Coloca estos archivos en la carpeta del juego (donde se encuentran las carpetas \"games\" y \"gamesEN\").",
            "4. Una vez hecho todo, simplemente antes de iniciar un juego ejecuta el .bat del idioma con el que desees jugar.",
            "Recomendamos crear accesos directos de ambos archivos si es que planeas cambiar entre ambos idiomas de manera seguida (si los vas a usar en varios packs, renombra los accesos directos a tu gusto, como \"Pack 3 español\" y \"Pack 3 inglés\").",
            "Esto solo funciona con los Party Packs y no los restaura al 100%. Algunas cosas, como la pantalla de pausa, seguirán en español. Para que todo esté en inglés o para que este método también funcione en los juegos por separado, hay que hacer lo siguiente:",
            "Si ya has hecho lo anterior, debes restaurar los archivos con Steam o reinstalar el juego nuevamente. Luego, debes ver cuáles archivos/carpetas son afectados dependiendo del parche en español. Por ejemplo, en el caso del Party Pack 1, son los archivos \"jbg.config.jet\", \"Loader.swf\" y \"PauseDialog.swf\". Haz una copia de cada uno de esos archivos y ponles el mismo nombre pero con un \"EN\" al final (al igual que con la carpeta \"games\"). Aplica la traducción luego de hacerlo.",
            "Hecho eso, debes editar los bats con el Bloc de Notas copiando y pegando los comandos que posee.Reemplaza el nombre \"games\" por el nombre de uno de los archivos que haya que restaurar. Repite el proceso con el resto de los archivos.",
            "Una vez guardado el bat, eso sería todo. Opcionalmente, puedes al final de cada bat colocar el nombre del exe entre comillas para que el juego se ejecute automáticamente al abrir los bats."
        ]
    },
    {
        question: "¿Cómo instalo las traducciones en Mac?",
        answer: [
            <><b>Método 1 (recomendado)</b></>,
            <>Para este método es necesario utilizar <a href="https://www.winzip.com/en/mac" target="_blank" rel="noopener noreferrer" className={emphasis}>WinZip</a>, ya que el gestor de archivos por defecto de Mac no opera de la misma forma que en Windows. WinZip ofrece una prueba gratis, pero incluímos un método alternativo que usa la consola de comandos en caso que te parezca más cómodo o tu prueba de WinZip haya caducado.</>,
            "Además, para descargar los parches se recomienda utilizar un navegador diferente a Safari, ya que este descomprime los zips automáticamente al descargarse.",
            <>Ve al directorio de instalación del juego. Para ello, hay un método simple de hacerlo:
            <ul>
                <li><b>- En Steam:</b> Haz clic derecho en el juego de tu biblioteca → Administrar → Explorar archivos locales</li>
                <li><b>- En Epic Games Store:</b> Haz clic en "..." del juego → Gestionar → Clic en el icono de carpeta de la sección "Instalación"</li>
            </ul>
            </>,
            "Acto seguido, haz clic derecho sobre la \"App\" del juego y pulsa \"Mostrar contenido del paquete\".",
            "Una vez descargado el parche, extrae el contenido del zip en la carpeta \"Contents/Resources/macos\", reemplazando todo lo necesario.",
            <><b>Aclaración para juegos no de Jackbox:</b> Los parches de estos juegos (ver listado al final) se extraen en la carpeta "Contents/Resources/Data".</>,
            <><b>Aclaración para Quiplash:</b> Para que el DLC "Quip Pack 1" sea traducido en esta plataforma, la carpeta "DLC" del parche debe extraerse en el mismo directorio en el que se encuentra la App del juego.</>,
            <><b>Método alternativo utilizando la consola de comandos (para usuarios experimentados):</b></>,
            "Descarga y extrae el parche en la carpeta de \"Descargas\". Asegúrate que sea extraído en una carpeta con el mismo nombre del parche.",
            <>Accede por la terminal al directorio donde están los juegos. Para ello, una vez abierta la terminal se debe escribir el siguiente comando:
            <p><b>En Steam:</b></p> <p className={emphasis}><code>cd ~/Library/Application\ Support/Steam/steamapps/common</code></p>
            <b>En Epic Games Store:</b> <p className={emphasis}><code>cd /Users/Shared/Epic\ Games</code></p></>,
            <>Accede a la carpeta del Pack a traducir, utilizando el comando: <p className={emphasis}>
                <code>cd JUEGO/JUEGO.app/Contents/Resources\</code>
            </p> (<code className={emphasis}>JUEGO</code> debe ser reemplazado con el nombre de la carpeta del juego).</>,
            <>Instala la traducción usando el comando el comando <code className={emphasis}>ditto</code>. Asumiendo que el archivo de la traducción está extraído en la carpeta de "Descargas" de tu equipo, usa el siguiente comando:</>,
            <><p className={emphasis}>
                <code>ditto ~/Downloads/PARCHE macos</code></p>
                (<code className={emphasis}>PARCHE</code> debe ser reemplazado con el nombre del parche descargado)
            </>,

            <><b>Aclaración para juegos no de Jackbox:</b> Para los parches de estos juegos (ver listado al final), el directorio <code className={emphasis}>macos</code> debe reemplazarse por <code className={emphasis}>Data</code>.</>,
            <><b>Aclaración para Quiplash:</b> Para que el DLC "Quip Pack 1" sea traducido en esta plataforma, una vez reiniciada la consola se deben también ingresar estos comandos:</>,
            <>
                <p className={emphasis}><code>cd ~/Library/Application\ Support/Steam/steamapps/common\</code></p>
                <p className={emphasis}><code>cd Quiplash</code></p>
                <p className={emphasis}><code>ditto ~/Downloads/QUIP-ES/DLC DLC</code></p>
            </>,
            "Con esto, se copiarán todos los archivos y directorios de forma recursiva, reemplazando aquellos que están repetidos y manteniendo los que no requieren ser reemplazados.",
            <>Se listan debajo los juegos del proyecto que tienen parches y no son de Jackbox, a modo de referencia: <b>
                <p>What the Dub?!</p>
                <p>Use Your Words (Usa Tus Palabras)</p>
                <p>RiffTrax: The Game</p></b></>
        ]
    },
    {
        question: "¿Qué problemas pueden encontrarse usando los parches para versiones de Nintendo Switch?",
        answer: [
            "Excepto en el Pack 8, los siguientes problemas ocurren al utilizar los parches:",
            "- Al abrir el Pack, el menú no estará en español. Para que lo esté, se debe entrar a cualquier juego y luego volver al menú.",
            "- Las imágenes de los botones del mando no aparecen en ciertos lugares.",
            "- La pantalla de carga no tendrá la imagen correspondiente.",
            "Cabe destacar que son problemas menores, y no interfieren con la experiencia de juego."
        ]
    },

]