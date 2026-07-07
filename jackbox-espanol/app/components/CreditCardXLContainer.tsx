// src/components/CreditCardXLContainer.tsx
import React from "react";
import CreditCardXL from "./CreditCardXL";

interface CreditCardXLContainerProps {
    title: string;
    subtitle?: string;
    data: any[];
    titleClassName?: string;
}

export default function CreditCardXLContainer({
    title,
    subtitle,
    data,
    titleClassName = "text-center text-2xl font-extrabold text-amber-400/90" }: CreditCardXLContainerProps) {
    if (data.length === 0) return null;

    return (
        <section className="space-y-6">
            <div>
                <h2 className={titleClassName}>
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-center mt-2 text-sm text-slate-400 max-w-xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
            <div className="flex flex-row flex-wrap gap-6 justify-center items-center w-full mx-auto">
                {data.map((user) => (
                    <div className="w-[calc(50%-12px)] sm:w-44 md:w-48 shrink-0 aspect-square" key={user.username}>
                        <CreditCardXL key={user.username} admin={user} />
                    </div>
                ))}
            </div>
        </section>
    );
}