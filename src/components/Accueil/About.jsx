import React from "react";

const About = () => {
  const competencies = [
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js", "Angular", "Flutter"], color: "bg-pink-300" },
    { category: "Backend", skills: ["Java (Spring Boot)", "C# (ASP.NET)", "Python (Flask)", "PHP"], color: "bg-purple-300" },
    { category: "Bases de données", skills: ["MySQL", "Oracle", "SQL"], color: "bg-pink-200" },
    { category: "Cloud", skills: ["Amazon Web Services (AWS)"], color: "bg-purple-200" },
    { category: "BI & Big Data", skills: ["Power BI", "Talend", "Docker"], color: "bg-pink-200" },
    { category: "Langages de programmation", skills: ["Java", "C", "Python", "C#"], color: "bg-purple-200" },
  ];

  const interests = ["Musique (piano)", "Sport", "Voyages"];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-16 lg:px-32 relative">

      {/* === Glow pastel derrière les sections === */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      {/* === About Me Section === */}
      <div className="mb-16 relative z-10">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-pink-400">À propos de moi</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Passionnée par le développement web et les nouvelles technologies. J'aime créer des interfaces modernes, intuitives et responsives. Toujours à la recherche de projets stimulants pour apprendre et évoluer.
          </p>
        </div>
      </div>

      {/* === Parcours scolaire Section === */}
      <div className="mb-16 relative z-10">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-400">Parcours scolaire</h2>
          <p className="text-gray-300 mb-2">Baccalauréat Sciences expérimentales - Lycée Habib Themeur, Sfax</p>
          <p className="text-gray-300 mb-2">Étudiante en 3ème année licence en génie logiciel et systèmes d’information - Institut International De Technologie (2023-présent)</p>
          <p className="text-gray-300 mb-2">À la recherche d’un stage PFE</p>
        </div>
      </div>

      {/* === Compétences Section (ancienne version) === */}
      <div className="mb-16 relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold mb-10 text-center text-pink-400">Compétences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, idx) => (
            <div key={idx} className={`rounded-xl p-6 ${comp.color} text-gray-900 shadow-lg hover:scale-105 transition-transform duration-300`}>
              <h4 className="text-xl font-bold mb-2">{comp.category}</h4>
              <p>{comp.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>

     {/* === Centres d’intérêt Section === */}
<div className="mb-16 relative z-10">
  <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center text-purple-400">Centres d’intérêt</h3>
  <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-10 shadow-lg text-center">
    <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg">
      {interests.map((item, idx) => (
        <li
          key={idx}
          className="transition-transform duration-300 hover:scale-105 hover:text-pink-400"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>


      {/* === CV Button === */}
      <div className="text-center relative z-10">
        <a 
          href="/Cv.pdf" 
          download="CV_Hana_Sellami.pdf" 
          className="px-20 py-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full text-white font-bold text-xl hover:scale-105 transition-transform duration-300 inline-block shadow-2xl"
        >
          📄 Télécharger mon CV
        </a>
      </div>

    </section>
  );
};

export default About;
