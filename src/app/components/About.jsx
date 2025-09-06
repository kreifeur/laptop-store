// components/About.js
const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">À propos de nous</h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="bg-blue-100 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Notre mission</h3>
              <p className="mb-4">
                Fondée en 2010, notre association rassemble des professionnels de la cosmétologie passionnés par l'innovation, 
                la qualité et l'éthique dans notre secteur.
              </p>
              <p className="mb-4">Nous œuvrons pour :</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Promouvoir les bonnes pratiques et l'excellence</li>
                <li>Favoriser les échanges entre professionnels</li>
                <li>Organiser des événements et formations</li>
                <li>Représenter la profession auprès des institutions</li>
                <li>Encourager l'innovation responsable</li>
              </ul>
              <p>
                Rejoignez-nous pour contribuer au développement de notre secteur et bénéficier de nombreux avantages réservés à nos membres.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Image de l'équipe ou logo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;