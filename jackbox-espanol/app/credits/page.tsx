// src/app/credits/page.tsx
import React from "react";
import Image from "next/image";
import { CREDITS_REGISTRY } from "../data/creditsRegistry";

export default function CreditsPage() {
  const admins = CREDITS_REGISTRY.filter(c => c.category === "administrator");
  const contributors = CREDITS_REGISTRY.filter(c => c.category === "contributor");

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-16">
      
      {/* PAGE HEADER */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black text-amber-400 tracking-tight">Créditos del Proyecto</h1>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Todo esto es posible gracias al increíble esfuerzo de traductores, actores de voz, editores y programadores de la comunidad.
        </p>
      </div>

      {/* SECTION 1: ADMINISTRATORS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-200 border-b border-slate-800 pb-2">Administradores</h2>
        
        <div className="grid grid-cols-1 gap-6">
          {admins.map((admin) => (
            <div key={admin.username} className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 backdrop-blur-sm">
              
              {/* Left Side: Avatar Panel */}
              <div className="flex flex-col items-center space-y-3 md:w-48 flex-shrink-0">
                <div className="w-24 h-24 relative rounded-2xl overflow-hidden border-2 border-amber-500/30 bg-slate-900">
                  <Image 
                    src={admin.avatarUrl || "/images/avatars/default.webp"} 
                    alt={admin.username} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-400">{admin.username}</h3>
              </div>

              {/* Right Side: Detailed Roles Matrix Layout */}
              <div className="flex-1 space-y-6">
                {admin.roles.map((role, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{role.roleName}</h4>
                    
                    {/* Render game logos for this role if any exist */}
                    {role.games && (
                      <div className="flex flex-wrap gap-4 items-center bg-slate-900/40 p-3 rounded-2xl border border-slate-800/40">
                        {role.games.map((game, gIdx) => (
                          <div key={gIdx} className="w-20 h-10 relative flex-shrink-0" title={game.alt}>
                            <Image src={game.logoSrc} alt={game.alt} fill className="object-contain" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Render text descriptors if any exist */}
                    {role.textNotes && (
                      <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                        {role.textNotes.map((note, nIdx) => <li key={nIdx}>{note}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: OTHER CONTRIBUTIONS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-200 border-b border-slate-800 pb-2">Otros Aportes</h2>
        
        {/* Compact grid layout for minor contributions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contributors.map((user) => (
            <div key={user.username} className="bg-slate-950/20 border border-slate-800/40 rounded-2xl p-4 flex flex-col justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-100 text-base">{user.username}</h3>
                <div className="space-y-2 mt-2">
                  {user.roles.map((role, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-slate-400 block font-medium mb-1">{role.roleName}:</span>
                      
                      {role.games && (
                        <div className="flex flex-wrap gap-2 items-center">
                          {role.games.map((game, gIdx) => (
                            <div key={gIdx} className="w-14 h-7 relative" title={game.alt}>
                              <Image src={game.logoSrc} alt={game.alt} fill className="object-contain" />
                            </div>
                          ))}
                        </div>
                      )}

                      {role.textNotes && (
                        <p className="text-slate-300 italic">{role.textNotes.join(", ")}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}