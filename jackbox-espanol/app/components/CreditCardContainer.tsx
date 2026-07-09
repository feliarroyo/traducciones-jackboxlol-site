import React from "react";
import CreditCard from "./CreditCard";
import CreditCardGame from "./CreditCardGame";

interface CreditCardContainerProps {
  title: string;
  subtitle?: string;
  data: any[];
  titleClassName?: string; // Allows fine-tuning headers hierarchy if needed
}

export default function CreditCardContainer({
  title,
  subtitle,
  data,
  titleClassName = "text-center text-2xl font-extrabold text-amber-400/90"
}: CreditCardContainerProps) {
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
      <div className="flex flex-row flex-wrap gap-4 justify-center items-start w-full mx-auto">
        {data.map((user) => (
          <CreditCardGame key={user.id} id={user.id} mainContributors={user.mainContributors} roles={user.roles} />
        ))}
      </div>
    </section>
  );
}