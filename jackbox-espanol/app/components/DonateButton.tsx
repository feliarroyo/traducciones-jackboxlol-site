import Image from "next/image";

export default function DonateButton() {
    return (
        <div className="fixed bottom-6 left-6 z-40" >
            <a
                href="https://www.paypal.com/donate/?hosted_button_id=3ER5926XZCSBW"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-3 rounded-4xl shadow-lg shadow-cyan-500/20 hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-2"
            >
                <span>
                    <Image
                        src="/images/money.svg"
                        alt="Personaje billete de Patentes Dementes saltando alegremente"
                        width={40}
                        height={40}
                        preload={true}
                        className="object-contain h-auto drop-shadow-[0_10px_20px_rgba(245,158,11,0.15)]"
                    />
                </span>
                <span>Donar</span>
            </a>
        </div>
    );
}