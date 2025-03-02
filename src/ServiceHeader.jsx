import React from 'react';

export default function ServiceHeader() {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl md:text-4xl font-light text-[#48CAE4]">
        ELECTRICIEN ET PLOMBIER CHAUFFAGISTE À ANGERS (49)
      </h1>
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        Située à Saint Léger des Bois dans le <strong className="font-bold">département du 49</strong> (Maine et Loire),
        AMANPRO est une entreprise spécialisée pour toute intervention en <strong className="font-bold">plomberie, électricité, chauffage</strong>
        (<a href="#" className="text-[#48CAE4] underline">entretien de chaudière</a>, dépannage, rénovation, installation),
        aménagement de salles de bains clés en main sur <strong className="font-bold">Angers</strong>.
      </p>
      <div className="w-full border-t-2 border-[#48CAE4] mt-4"></div>
    </div>
  );
}
