// src/components/Accueil/Experience.jsx
import React from 'react';

const Experience = () => {
  const professionalExperience = {
    title: "Stage professionnel",
    role: "Développeuse Full Stack (Angular / Flask)",
    company: "ASM (All Soft Multimédia), Sfax",
    duration: "15 Juin – 18 Juillet 2025",
    description:
      "Développement d'une application web de résumé automatique de texte, intégrant une interface Angular et un backend Flask basé sur le modèle T5 d'intelligence artificielle.",
    skills: ["Angular", "Flask", "Python", "API REST", "MySQL", "HTML", "CSS", "JavaScript"]
  };

  const academicProjects = [
    { title: "Site web de librairie en ligne", desc: "Conception d’un site e-commerce simple en HTML et CSS.", skills: ["HTML", "CSS"], color: "bg-pink-300" },
    { title: "Site web d’une animalerie en ligne", desc: "Développement d’une interface dynamique en HTML, CSS et JavaScript.", skills: ["HTML", "CSS", "JavaScript"], color: "bg-purple-300" },
    { title: "Application CRUD (.NET)", desc: "Réalisation d’une application de gestion en C# / .NET.", skills: ["C#", ".NET"], color: "bg-pink-200" },
    { title: "Jeux vidéo 2D (Unity)", desc: "Création de mini-jeux interactifs avec Unity et C#.", skills: ["Unity", "C#"], color: "bg-purple-200" }
  ];

  const associations = [
    "Participation à l’organisation d’événements et ateliers techniques.",
    "Engagement dans divers ateliers certifiés.",
    "Participation à des événements internationaux comme IEEE Xtreme 18.0.",
    "Membre du comité média de Crackcode 1.0.",
    "Participation au congrès WIE ACT 4.0."
  ];

  return (
    <section id="experience" className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-16 lg:px-32">
      {/* TITRE */}
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold mb-12">
          Parcours <span className="text-pink-400">Professionnel</span>
        </h2>
      </div>

      {/* STAGE PROFESSIONNEL */}
      <div className="mb-16 flex justify-center">
        <div className="bg-pink-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 max-w-3xl w-full text-center">
          <h3 className="text-3xl font-bold mb-4">{professionalExperience.title}</h3>
          <p className="text-xl font-semibold mb-2">{professionalExperience.role}</p>
          <p className="text-gray-900 mb-6">{professionalExperience.company} | {professionalExperience.duration}</p>
          <p className="text-gray-900 mb-6 leading-relaxed">{professionalExperience.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {professionalExperience.skills.map(skill => (
              <span key={skill} className="px-6 py-3 bg-pink-400 rounded-full text-gray-900 font-semibold border border-pink-400 hover:bg-purple-400 hover:scale-110 transition-transform duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJETS ACADÉMIQUES */}
      <div className="mb-16">
        <h3 className="text-4xl font-bold text-center mb-12">Projets académiques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academicProjects.map((proj, idx) => (
            <div key={idx} className={`rounded-2xl p-6 ${proj.color} text-gray-900 shadow-lg hover:scale-105 transition-transform duration-300 text-center`}>
              <h4 className="text-2xl font-bold mb-3">{proj.title}</h4>
              <p className="mb-4">{proj.desc}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {proj.skills.map(skill => (
                  <span key={skill} className="px-5 py-2 bg-pink-400 rounded-full text-gray-900 font-semibold border border-pink-400 hover:bg-purple-400 hover:scale-110 transition-transform duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPÉRIENCE ASSOCIATIVE */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">Expérience associative</h3>
        <div className="bg-purple-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
          <p className="text-xl font-semibold text-gray-900 text-center mb-6">
            Membre – IEEE Student Branch, IIT Sfax (2023-Présent)
          </p>
          <ul className="list-disc list-inside text-gray-900 space-y-3">
            {associations.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
