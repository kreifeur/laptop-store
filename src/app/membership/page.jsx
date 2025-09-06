// pages/membership.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState('annual');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profession: '',
    company: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France',
    membershipType: 'individual',
    plan: 'annual',
    acceptTerms: false
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    setFormData(prevState => ({
      ...prevState,
      plan: plan
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous ajouterez la logique pour traiter l'adhésion
    console.log('Adhésion soumise:', formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const membershipPlans = [
    {
      id: 'student',
      title: 'Étudiant',
      price: '25',
      period: 'an',
      description: 'Pour les étudiants en cosmétologie',
      features: [
        'Accès aux événements à tarif réduit',
        'Newsletter mensuelle',
        'Accès aux ressources en ligne',
        'Certificat de membre étudiant'
      ],
      recommended: false
    },
    {
      id: 'individual',
      title: 'Individuel',
      price: '80',
      period: 'an',
      description: 'Pour les professionnels indépendants',
      features: [
        'Accès à tous les événements',
        'Formations à tarif préférentiel',
        'Accès à l\'annuaire des membres',
        'Revue trimestrielle',
        'Certificat de membre'
      ],
      recommended: false
    },
    {
      id: 'corporate',
      title: 'Entreprise',
      price: '350',
      period: 'an',
      description: 'Pour les entreprises et institutions',
      features: [
        '5 membres inclus',
        'Accès VIP aux événements',
        'Espace exposant privilégié',
        'Logo sur notre site web',
        'Newsletter personnalisée',
        'Support prioritaire'
      ],
      recommended: true
    }
  ];

  const benefits = [
    {
      icon: '🎓',
      title: 'Formations continues',
      description: 'Accédez à des formations de qualité pour développer vos compétences'
    },
    {
      icon: '🤝',
      title: 'Réseau professionnel',
      description: 'Échangez avec des experts du secteur et développez votre réseau'
    },
    {
      icon: '📅',
      title: 'Événements exclusifs',
      description: 'Participez à nos congrès, séminaires et rencontres professionnelles'
    },
    {
      icon: '📚',
      title: 'Ressources documentaires',
      description: 'Accédez à notre bibliothèque de ressources et publications exclusives'
    },
    {
      icon: '🔍',
      title: 'Veille réglementaire',
      description: 'Restez informé des dernières évolutions réglementaires du secteur'
    },
    {
      icon: '🏆',
      title: 'Reconnaissance professionnelle',
      description: 'Bénéficiez d\'une certification reconnue dans le secteur'
    }
  ];

  return (
    <div>
      <Head>
        <title>Adhésion - Association de Cosmétologie</title>
        <meta name="description" content="Rejoignez l'Association de Cosmétologie et bénéficiez de nos services exclusifs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="min-h-screen bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">Devenez membre</h1>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Rejoignez notre communauté de professionnels et bénéficiez d'avantages exclusifs, 
            de ressources privilégiées et d'un réseau de qualité dans le secteur de la cosmétologie.
          </p>

          {!isSubmitted ? (
            <>
              {/* Étapes de progression */}
              <div className="max-w-3xl mx-auto mb-12">
                <div className="flex justify-between items-center">
                  <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-blue-800' : 'text-gray-400'}`}>
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}>
                      1
                    </div>
                    <span className="mt-2 text-sm font-medium">Choix de la formule</span>
                  </div>
                  <div className={`h-1 flex-1 mx-2 ${currentStep >= 2 ? 'bg-blue-800' : 'bg-gray-200'}`}></div>
                  <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-blue-800' : 'text-gray-400'}`}>
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}>
                      2
                    </div>
                    <span className="mt-2 text-sm font-medium">Informations personnelles</span>
                  </div>
                  <div className={`h-1 flex-1 mx-2 ${currentStep >= 3 ? 'bg-blue-800' : 'bg-gray-200'}`}></div>
                  <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-blue-800' : 'text-gray-400'}`}>
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}>
                      3
                    </div>
                    <span className="mt-2 text-sm font-medium">Paiement</span>
                  </div>
                </div>
              </div>

              {/* Étape 1: Choix de la formule */}
              {currentStep === 1 && (
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl font-semibold text-center text-blue-800 mb-8">Choisissez votre formule d'adhésion</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {membershipPlans.map(plan => (
                      <div 
                        key={plan.id} 
                        className={`bg-white rounded-lg shadow-md p-6 border-2 ${selectedPlan === plan.id ? 'border-blue-800' : 'border-white'} ${plan.recommended ? 'ring-2 ring-yellow-500' : ''} transition-all hover:shadow-lg`}
                        onClick={() => handlePlanChange(plan.id)}
                      >
                        {plan.recommended && (
                          <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                            Recommandé
                          </div>
                        )}
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{plan.title}</h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-blue-800">{plan.price}€</span>
                          <span className="text-gray-600">/{plan.period}</span>
                        </div>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button 
                          className={`w-full py-2 rounded-md font-medium ${selectedPlan === plan.id ? 'bg-blue-800 text-white' : 'bg-gray-100 text-gray-800'} transition-colors`}
                          onClick={() => handlePlanChange(plan.id)}
                        >
                          {selectedPlan === plan.id ? 'Sélectionné' : 'Choisir cette formule'}
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-10">
                    <button 
                      onClick={nextStep}
                      className="px-8 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              )}

              {/* Étape 2: Informations personnelles */}
              {currentStep === 2 && (
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-semibold text-center text-blue-800 mb-8">Vos informations personnelles</h2>
                  
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Adresse email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                        Profession *
                      </label>
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Entreprise / Organisation
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Code postal *
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          Ville *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Pays *
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="France">France</option>
                          <option value="Belgique">Belgique</option>
                          <option value="Suisse">Suisse</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Canada">Canada</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                        J'accepte les <a href="#" className="text-blue-600 hover:underline">conditions générales</a> et la <a href="#" className="text-blue-600 hover:underline">politique de confidentialité</a> *
                      </label>
                    </div>
                    
                    <div className="flex justify-between">
                      <button 
                        onClick={prevStep}
                        className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Retour
                      </button>
                      <button 
                        onClick={nextStep}
                        className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                      >
                        Continuer vers le paiement
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Étape 3: Paiement */}
              {currentStep === 3 && (
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-semibold text-center text-blue-800 mb-8">Finaliser votre adhésion</h2>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Récapitulatif de votre commande</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span>Formule {membershipPlans.find(p => p.id === selectedPlan)?.title}</span>
                      <span className="font-semibold">{membershipPlans.find(p => p.id === selectedPlan)?.price}€</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Adhésion valable pour 1 an à partir de la date de paiement
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex justify-between items-center font-semibold text-lg">
                        <span>Total</span>
                        <span>{membershipPlans.find(p => p.id === selectedPlan)?.price}€</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Moyen de paiement</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-gray-300 rounded-lg p-4 flex items-center cursor-pointer hover:border-blue-500">
                        <div className="h-6 w-6 rounded-full border-2 border-blue-500 mr-3 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        </div>
                        <span>Carte bancaire</span>
                      </div>
                      <div className="border-2 border-gray-300 rounded-lg p-4 flex items-center cursor-pointer hover:border-blue-500">
                        <div className="h-6 w-6 rounded-full border-2 border-gray-300 mr-3"></div>
                        <span>Virement bancaire</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Informations de paiement</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Numéro de carte *
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Date d'expiration *
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/AA"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV *
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom sur la carte *
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          placeholder="M. DUPONT Jean"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button 
                      onClick={prevStep}
                      className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Retour
                    </button>
                    <button 
                      onClick={handleSubmit}
                      className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      Payer et finaliser mon adhésion
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-green-500 text-6xl mb-6">✅</div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Félicitations !</h2>
              <p className="text-lg text-gray-700 mb-6">
                Votre adhésion à l'Association de Cosmétologie a été enregistrée avec succès.
              </p>
              <p className="text-gray-600 mb-8">
                Un email de confirmation contenant tous les détails de votre adhésion a été envoyé à <span className="font-medium">{formData.email}</span>.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <h3 className="font-semibold text-blue-800 mb-2">Prochaines étapes :</h3>
                <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
                  <li>Vous recevrez votre carte de membre sous 10 jours ouvrables</li>
                  <li>Accédez à votre espace membre avec les identifiants envoyés par email</li>
                  <li>Consultez notre calendrier d'événements pour votre première participation</li>
                </ul>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Retour à l'accueil
              </button>
            </div>
          )}

          {/* Section Avantages */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Avantages exclusifs pour nos membres</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Questions fréquentes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Quand vais-je recevoir ma carte de membre ?</h3>
                <p className="text-gray-700">
                  Votre carte de membre sera envoyée dans les 10 jours ouvrables suivant la validation de votre adhésion. 
                  Vous recevrez un email de confirmation avec un suivi de livraison.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Puis-je modifier ma formule d'adhésion plus tard ?</h3>
                <p className="text-gray-700">
                  Oui, vous pouvez changer de formule à tout moment. La différence de tarif sera calculée au prorata du temps restant sur votre adhésion actuelle.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Comment accéder à mon espace membre ?</h3>
                <p className="text-gray-700">
                  Dès que votre adhésion est validée, vous recevez un email avec vos identifiants pour accéder à votre espace membre sur notre site.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">L'adhésion est-elle déductible fiscalement ?</h3>
                <p className="text-gray-700">
                  Pour les professionnels, les frais d'adhésion sont généralement déductibles en tant que frais professionnels. 
                  Nous vous fournissons une facture pour justifier de cette dépense.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}