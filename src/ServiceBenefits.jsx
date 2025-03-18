import React from 'react';
import { useNavigate } from 'react-router-dom';

const benefits = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/189/189139.png',
    title: 'Réactivité',
    description: 'Rappel dans les 48h',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/4144/4144724.png',
    title: 'Savoir-faire & expertise',
    description: 'Votre salle de bains en 3D',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2944/2944625.png',
    title: 'Dépannage immédiat',
    description: "Dans les 48h selon le degré d'urgence",
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
    title: 'Garantie SAV',
    description: 'Matériel & installation',
  },
];

export default function ServiceBenefits() {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="flex flex-col   bg-[#0077b6] text-white">
      <div className="flex-grow py-10 mt-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Pourquoi faire appel à AMANPRO ?
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center max-w-xs text-center">
              <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-bold">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0077b6] text-white py-8 px-6 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold">À propos</h3>
            <p className="mt-2 text-gray-300">
              Située à Écuillé, AMANPRO est une entreprise spécialisée en plomberie, électricité, chauffage et peinture.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Informations</h3>
            <ul className="mt-2 text-gray-300 space-y-2">
              <li>Qui sommes-nous ?</li>
              <li>Nos labels qualité</li>
              <li>Nos actualités</li>
              <li>Mentions Légales</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="mt-2 text-gray-300">3 All. du Vieux Chêne ,49460 Écuillé</p>
            <button 
              className="mt-4 bg-[#003f5c] text-white py-2 px-4 rounded-lg hover:bg-[#002b3d] cursor-pointer"
              onClick={handleContactClick}
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}