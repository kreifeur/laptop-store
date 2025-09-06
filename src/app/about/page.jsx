// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  // Données de l'équipe
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sophie Martin",
      role: "Présidente",
      bio: "Docteure en pharmacie avec 15 ans d'expérience dans l'industrie cosmétique. Ancienne directrice R&D chez L'Oréal.",
      image: "/team/sophie-martin.jpg"
    },
    {
      id: 2,
      name: "Pierre Dubois",
      role: "Vice-président",
      bio: "Expert en réglementation cosmétique avec une carrière de 20 ans chez Chanel et Dior. Enseignant à l'ISIPCA.",
      image: "/team/pierre-dubois.jpg"
    },
    {
      id: 3,
      name: "Marie-Laurence Leroy",
      role: "Secrétaire générale",
      bio: "Spécialiste en marketing cosmétique. Fondatrice de l'agence de conseil en stratégie beauté ML Conseil.",
      image: "/team/marie-laurence-leroy.jpg"
    },
    {
      id: 4,
      name: "Thomas Moreau",
      role: "Trésorier",
      bio: "Expert-comptable spécialisé dans les entreprises de cosmétiques. Ancien directeur financier chez Yves Rocher.",
      image: "/team/thomas-moreau.jpg"
    },
    {
      id: 5,
      name: "Dr. Chloé Zhang",
      role: "Responsable scientifique",
      bio: "Docteure en chimie des produits naturels. Research Fellow à l'Université de Paris en cosmétologie.",
      image: "/team/chloe-zhang.jpg"
    },
    {
      id: 6,
      name: "Michel Bernard",
      role: "Responsable des événements",
      bio: "Organisateur d'événements professionnels depuis 12 ans. Fondateur de l'agence Événements & Cosmétiques.",
      image: "/team/michel-bernard.jpg"
    }
  ];

  // Chiffres clés
  const keyFigures = [
    { number: "450+", label: "Membres actifs" },
    { number: "12", label: "Ans d'existence" },
    { number: "35", label: "Événements par an" },
    { number: "15", label: "Pays représentés" }
  ];

  // Partenaires
  const partners = [
    { name: "L'Oréal", logo: "/partners/loreal.png" },
    { name: "LVMH", logo: "/partners/lvmh.png" },
    { name: "Chanel", logo: "/partners/chanel.png" },
    { name: "Pierre Fabre", logo: "/partners/pierre-fabre.png" },
    { name: "ISIPCA", logo: "/partners/isipca.png" },
    { name: "Université de Paris", logo: "/partners/universite-paris.png" }
  ];

  return (
    <div>
      <Head>
        <title>À Propos - Association de Cosmétologie</title>
        <meta name="description" content="Découvrez l'Association de Cosmétologie : notre histoire, notre mission, notre équipe et nos valeurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="min-h-screen bg-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de notre association</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Découvrez l'histoire, la mission et les valeurs de l'Association de Cosmétologie, 
              acteur majeur du secteur depuis plus de 10 ans.
            </p>
          </div>
        </section>

        {/* Histoire */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">Notre histoire</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Fondée en 2010 par un groupe de professionnels passionnés, l'Association de Cosmétologie 
                    est née d'un constat simple : le secteur de la cosmétique avait besoin d'un lieu d'échange 
                    et de partage des connaissances pour favoriser l'innovation et l'excellence.
                  </p>
                  <p>
                    Ce qui a débuté comme une petite communauté de 25 membres s'est progressivement 
                    transformé en une organisation reconnue regroupant plus de 450 professionnels du secteur 
                    à travers la France et au-delà.
                  </p>
                  <p>
                    Au fil des années, nous avons organisé des dizaines de congrès, formé des centaines 
                    de professionnels et contribué à l'évolution des pratiques dans le secteur de la cosmétologie.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                  <span className="text-gray-500">Image historique de l'association</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission et Valeurs */}
        <section className="py-16 px-6 bg-blue-800 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Notre mission et nos valeurs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Notre mission</h3>
                <p className="mb-4">
                  L'Association de Cosmétologie a pour mission de rassembler, former et inspirer 
                  les professionnels du secteur cosmétique pour promouvoir l'excellence, l'innovation 
                  et les bonnes pratiques.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Créer un réseau professionnel dynamique et inclusif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Organiser des événements et formations de qualité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Promouvoir la recherche et l'innovation responsable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Défendre les intérêts de la profession auprès des institutions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Nos valeurs</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Excellence</h4>
                    <p>Nous visons l'excellence dans toutes nos actions et encourageons nos membres à toujours se dépasser.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                    <p>Nous encourageons l'innovation responsable et le partage des connaissances pour faire avancer le secteur.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Éthique</h4>
                    <p>Nous promouvons des pratiques éthiques, durables et respectueuses de l'environnement.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Collaboration</h4>
                    <p>Nous croyons en la force du collectif et favorisons les collaborations entre nos membres.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">L'association en chiffres</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {keyFigures.map((figure, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">{figure.number}</div>
                  <div className="text-gray-700">{figure.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Équipe */}
        <section className="py-16 px-6 bg-blue-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Notre équipe</h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Une équipe de professionnels passionnés et expérimentés qui œuvrent au quotidien 
              pour faire vivre l'association et servir ses membres.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map(member => (
                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Photo de {member.name}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-1">{member.name}</h3>
                    <p className="text-yellow-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partenaires */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Nos partenaires</h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Nous collaborons avec des acteurs majeurs du secteur pour offrir à nos membres 
              des opportunités uniques et des contenus exclusifs.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-gray-100 rounded-lg h-32">
                  <span className="text-gray-500 text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-blue-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Rejoignez-nous</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Devenez membre de l'Association de Cosmétologie et bénéficiez de tous nos services exclusifs, 
              ressources privilégiées et d'un réseau de qualité.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/membership" 
                className="px-8 py-3 bg-yellow-500 text-blue-900 rounded-md hover:bg-yellow-400 transition-colors font-medium text-lg"
              >
                Devenir membre
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border-2 border-white rounded-md hover:bg-white hover:text-blue-800 transition-colors font-medium text-lg"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}