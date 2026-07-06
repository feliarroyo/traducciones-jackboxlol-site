import React from "react";
import CreditCard from "./CreditCard";

interface CreditCardContainerProps {
  title: string;
  data: any[];
  titleClassName?: string; // Allows fine-tuning headers hierarchy if needed
}

export default function CreditCardContainer({ 
  title, 
  data, 
  titleClassName = "text-2xl font-extrabold text-amber-400/90" 
}: CreditCardContainerProps) {
  if (data.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className={`${titleClassName} border-b border-slate-800 pb-2`}>
        {title}
      </h2>
      <div className="flex flex-row flex-wrap gap-4 justify-center items-start w-full mx-auto">
        {data.map((user) => (
          <CreditCard key={user.username} user={user} />
        ))}
      </div>
    </section>
  );
}