import React from "react";
import CreditCardAdmin from "./CreditCardAdmin";

interface CreditCardAdminContainerProps {
    title: string;
    subtitle?: string;
    data: any[];
    titleClassName?: string;
}

export default function CreditCardAdminContainer({
    title,
    subtitle,
    data,
    titleClassName = "text-center text-2xl font-extrabold text-amber-400/90" }: CreditCardAdminContainerProps) {
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
            <div className="grid grid-cols-2 sm:grid-cols-3 max-w-2xl w-full gap-6 justify-center mx-auto">
                {data.map((user) => (
                    <div className="w-full aspect-square" key={user.username}>
                        <CreditCardAdmin key={user.username} admin={user} />
                    </div>
                ))}
            </div>
        </section>
    );
}