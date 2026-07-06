// src/app/news/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function IndividualPostPage({ params }: PostPageProps) {
    return (
        <div className="space-y-8 py-6">
            <h1 className="text-4xl text-center font-black text-amber-400 tracking-tight">
                Ayuda
            </h1>
            <p>
                Aquí dejamos respuestas a algunas de las preguntas más frecuentes relacionadas al proyecto. Ante cualquier otra cuestión, puedes unirte al servidor de Discord del proyecto <Link href="https://discord.com/invite/k8MASuepRw">aquí</Link>.
            </p>
            <h2>Encontré un error en una de las traducciones. ¿Dónde puedo reportarlo?</h2>
            <p>
                Puedes reportar el error en el canal "soporte" del servidor de Discord. En lo posible, no escatimes en los detalles.
                Por ejemplo: si una ocurrencia de emergencia en Quiplash 3 no está bien escrita, envía también el enunciado.
            </p>
            <h2>¿Por qué la pantalla se me queda en negro luego de instalar la traducción?</h2>
            <p>
                Esto puede deberse al uso de versiones piratas (muchas veces desactualizadas), o a haber instalado el parche equivocado.
            </p>
            <h2>¿Se traduce también lo que aparece en el dispositivo?</h2>
            <p>
                Exceptuando algunos detalles menores, todo lo importante de jackbox.tv es traducido. Para ello, se utiliza una página diferente: “jackbox.lol”, que traduce todo su contenido al español. Todos los parches del proyecto muestran ese dominio, y recomendamos utilizarlo al jugar con las traducciones no oficiales.
            </p>
            <h2>¿Es una traducción oficial? ¿Es gratuita? ¿Puedo donarles de algún modo?</h2>
            <p>
                Esta es una traducción no oficial de los juegos sin fines de lucro. El contenido sigue siendo propiedad de Jackbox Games. Se aceptan donaciones con el fin de mantener el dominio de “jackbox.lol”, utilizado para alojar la página web y el controlador.
            </p>
            <h2>¿Cómo hago para que un juego vuelva a estar en inglés? ¿Puedo cambiar fácilmente entre el inglés y el español?</h2>

            <p>
                En caso que quieras que el juego vuelva a estar en inglés, si tienes Steam y la Utility la forma más simple de hacerlo es, en la sección de “Ajustes” de la Utility, hacer clic sobre el botón de la flecha para restaurarlo a como estaba originalmente. Al hacerlo, los archivos se verificarán con Steam automáticamente
            </p>
            <p>
                Alternativamente, puedes hacer esto directamente desde Steam. Para ello, en tu biblioteca de Steam debes hacer clic derecho en el juego que quieras restaurar, luego pulsas "Propiedades...", vas a "ARCHIVOS LOCALES" y finalmente pulsas "Verificar integridad de los archivos de juego...".
            </p>
            <p>
                En Epic Games Store, debes hacer clic en los tres puntos al lado del juego que desees restaurar y pulsar "Verificar".
            </p>
            <p>
                Si deseas poder intercambiar entre inglés y español, una vez realizado el paso de arriba realiza lo siguiente:
            </p>
            <ol>
                <li>1. En la carpeta del juego, haz una copia de la carpeta "games" y llámala "gamesEN" (copia y pega la carpeta en el mismo lugar para ello).</li>
                <li>2. Aplica la traducción.</li>
                <li>3. Coloca estos archivos en la carpeta del juego (donde se encuentran las carpetas "games" y "gamesEN").</li>
                <li>4. Una vez hecho todo, simplemente antes de iniciar un juego ejecuta el .bat del idioma con el que desees jugar.</li>
            </ol>
            <p>
                Recomendamos crear accesos directos de ambos archivos si es que planeas cambiar entre ambos idiomas de manera seguida (si los vas a usar en varios packs, renombra los accesos directos a tu gusto, como "Pack 3 español" y "Pack 3 inglés").
            </p>
            <p>
                Esto solo funciona con los Party Packs y no los restaura al 100%. Algunas cosas, como la pantalla de pausa, seguirán en español. Para que todo esté en inglés o para que este método también funcione en los juegos por separado, hay que hacer lo siguiente:
            </p>
            <p>
                Si ya has hecho lo anterior, debes restaurar los archivos con Steam o reinstalar el juego nuevamente. Luego, debes ver cuáles archivos/carpetas son afectados dependiendo del parche en español. Por ejemplo, en el caso del Party Pack 1, son los archivos "jbg.config.jet", "Loader.swf" y "PauseDialog.swf". Haz una copia de cada uno de esos archivos y ponles el mismo nombre pero con un "EN" al final (al igual que con la carpeta "games"). Aplica la traducción luego de hacerlo.
            </p>
            <p>
                Hecho eso, debes editar los bats con el Bloc de Notas copiando y pegando los comandos que posee.Reemplaza el nombre "games" por el nombre de uno de los archivos que haya que restaurar.Repite el proceso con el resto de los archivos.
            </p>
            <p>
                Una vez guardado el bat, eso sería todo.Opcionalmente, puedes al final de cada bat colocar el nombre del exe entre comillas para que el juego se ejecute automáticamente al abrir los bats.
            </p>
        </div >
    );
}