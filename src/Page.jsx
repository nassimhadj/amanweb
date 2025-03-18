import ContactForm from "./ContactForm";
export default function Page({ imageSrc, jobTitle, description, services, additionalServices }) {
    return (
        <>      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl font-light text-blue-500">{jobTitle} À ANGERS (49)</h1>
          <h2 className="text-2xl font-semibold text-blue-900 mt-2">
            Installation et dépannage de {jobTitle.toLowerCase()} sur Angers et sa région
          </h2>
          <p className="mt-4 text-gray-700">{description}</p>
          <ul className="list-disc pl-5 mt-4 text-gray-700">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <p className="mt-6 text-gray-700">
            AMANPRO, situé près d’Angers (49) propose également <strong>l’aménagement ou la rénovation</strong> de votre cuisine, salle de bains ou sanitaires.
          </p>
          <ul className="list-disc pl-5 mt-4 text-gray-700">
            {additionalServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <div className="mt-6">
          
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={imageSrc} alt={`${jobTitle} service`} className="rounded-lg shadow-lg w-full max-w-xl" />
        </div>
      </div>
<ContactForm/>
</>
);
  }
  