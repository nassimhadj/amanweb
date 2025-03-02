import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Page from "./Page.jsx";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/plomberie" element={ <Page 
  imageSrc="src/assets/images/plumbing2.jpg" 
  jobTitle="Plomberie" 
  description="Besoin d’une intervention urgence en plomberie ? ARPEG met à votre service toutes ses compétences professionnelles et intervient rapidement à votre domicile."
  services={[
    "Désengorgement",
    "Détartrage, Débouchage, Dépannage",
    "Recherche et réparation de fuites de gaz, d’eau, Recherche de pannes",
    "Remise en étanchéité",
    "Traitement de l’eau",
    "Récupération d’eau de pluie",
    "Mise aux normes"
  ]}
  additionalServices={[
    "Installation d’alimentation de lave-linge et de lave-vaisselle",
    "Installation, remplacement et rénovation d’appareils sanitaires, de broyeurs",
    "Réaménagement de salles de bains",
    "Installation pour personnes handicapées"
  ]}
/>
} />
     <Route path="/electricite" element={<Page 
  imageSrc="src/assets/images/elec.jpg" 
  jobTitle="Électricité" 
  description="Besoin d’une intervention en électricité ? ARPEG vous propose des services de dépannage, d’installation et de mise aux normes électriques."
  services={[
    "Installation de tableaux électriques",
    "Dépannage de pannes électriques",
    "Mise en conformité des installations",
    "Installation de prises et interrupteurs",
    "Pose de luminaires et éclairages",
    "Domotique et automatisation"
  ]}
  additionalServices={[
    "Installation de bornes de recharge pour véhicules électriques",
    "Mise en place d’alarmes et de vidéosurveillance",
    "Remplacement de câblages vétustes",
    "Raccordement au réseau électrique"
  ]}
/>
} />
     <Route path="/chauffage" element={<Page 
  imageSrc="src/assets/images/heating.jpg" 
  jobTitle="Chauffage" 
  description="Besoin d’un service d’installation ou de dépannage de chauffage ? ARPEG vous accompagne pour optimiser votre confort thermique."
  services={[
    "Installation de chaudières et chauffe-eau",
    "Entretien et maintenance de chauffage",
    "Dépannage de pannes de chauffage",
    "Installation de planchers chauffants",
    "Pose de radiateurs et thermostats",
    "Optimisation énergétique"
  ]}
  additionalServices={[
    "Installation de pompes à chaleur",
    "Rénovation et modernisation des systèmes de chauffage",
    "Installation de systèmes solaires thermiques",
    "Contrats d’entretien personnalisés"
  ]}
/>
} />

<Route path="/salle-de-bains" element={<Page 
  imageSrc="src/assets/images/salle-de-bains.png" 
  jobTitle="Salle de bains" 
  description="Envie de rénover ou d’aménager votre salle de bains ? ARPEG vous accompagne dans l’installation et la modernisation de vos sanitaires."
  services={[
    "Installation de douches et baignoires",
    "Pose de lavabos et vasques",
    "Remplacement de robinetterie",
    "Mise en place de WC suspendus",
    "Installation de meubles de salle de bains",
    "Travaux d’étanchéité et carrelage"
  ]}
  additionalServices={[
    "Aménagement de salles de bains PMR",
    "Installation de sèche-serviettes",
    "Raccordements aux réseaux d’eau",
    "Solutions d’éclairage et ventilation"
  ]}
/>} />

<Route path="/cuisinettes" element={<Page 
  imageSrc="src/assets/images/cuisinette.jpg" 
  jobTitle="Cuisinettes" 
  description="Optimisez l’espace de votre cuisine avec des solutions sur mesure. ARPEG installe et rénove vos équipements de cuisine pour un confort optimal."
  services={[
    "Installation de plans de travail",
    "Pose d’éviers et mitigeurs",
    "Raccordement d’appareils électroménagers",
    "Installation de meubles de rangement",
    "Mise en place de crédences",
    "Éclairage et prises électriques adaptées"
  ]}
  additionalServices={[
    "Raccordement eau et gaz",
    "Optimisation des espaces restreints",
    "Installation de hottes et ventilations",
    "Solutions d’aménagement sur mesure"
  ]}
/>} />


      </Routes>
    </Router>
  );
}

export default App;
