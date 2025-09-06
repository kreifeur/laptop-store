// components/Hero.js
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Bienvenue à l'Association de Cosmétologie</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Réunissant les professionnels de la cosmétologie pour promouvoir l'excellence, l'innovation et les bonnes pratiques dans le secteur.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-500 text-blue-900 rounded-md hover:bg-yellow-400 transition-colors font-medium text-lg">
            Découvrir nos activités
          </button>
          <a href="/register" className="px-6 py-3 border-2 border-white rounded-md hover:bg-white hover:text-blue-800 transition-colors font-medium text-lg">
            Devenir membre
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;