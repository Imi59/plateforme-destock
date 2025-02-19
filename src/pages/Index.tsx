import React, { useState, useEffect } from 'react';
import { X, Menu, Smile, Truck, Headphones } from 'lucide-react';
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieBanner(false);
  };

  const partnersLogos = [
    "assets/aldi.png", "assets/amazon.png", "assets/colis.png", 
    "assets/lidl.png", "assets/shein.png", "assets/temu.png"
  ];
  const images = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
    "/assets/7.jpg",
    "/assets/8.jpg",
    "/assets/9.jpg",
    "/assets/10.jpg",
    "/assets/11.jpg",
    "/assets/12.jpg",
    "/assets/13.jpg",
    "/assets/14.jpg",
  ];

  const closeHelpBubble = () => {
    setShowHelpBubble(false);  // Fermer la bulle lorsque la croix est cliquée
  };

  const [showHelpBubble, setShowHelpBubble] = useState(true); 

  return (
    <>
        {/* Bulle d'aide positionnée au-dessus du bouton WhatsApp */}
        {showHelpBubble && (
        <div className="help-bubble">
          <p></p>
          Nous sommes ravis 
          <br />de vous aider 24/24 7/7 !
          <button onClick={closeHelpBubble} className="close-button">
            <X size={16} color="white" /> {/* Icône de croix */}
          </button>
        </div>
      )}

      {/* Barre de contact fixe */}
      <div className="contact-bar">
        <div className="container contact-bar-content">
          <div className="contact-left">
            <a href="tel:+33753894507" className="contact-item">
              <i className="fas fa-phone-alt"></i> +33 7 53 89 45 07
            </a>
            <a href="tel:+33753894507" className="contact-item2">
              <i className="fas fa-phone-alt"></i>
            </a>
          </div>
          <div className="contact-center">
            <a href="mailto:laplateformedestock@gmail.com" className="contact-item">
              <i className="fas fa-envelope"></i> laplateformedestock@gmail.com
            </a>
            <a href="mailto:laplateformedestock@gmail.com" className="contact-item2">
              <i className="fas fa-envelope"></i> 
            </a>
          </div>
          <div className="contact-right">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-snapchat"></i>
            </a>
            <a href="https://wa.me/+33753894507" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact-item2">
              <i className="fab fa-snapchat"></i>
            </a>
            <a href="https://wa.me/+33753894507" target="_blank" rel="noopener noreferrer" className="contact-item2">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>


      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            <img src="/assets/logo.png" alt="logo" />
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <i className="fas fa-times" style={{ fontSize: '24px' }}></i> // Icône "X"
            ) : (
              <i className="fas fa-bars" style={{ fontSize: '24px' }}></i> // Icône "Menu"
            )}
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'show' : ''}`}>
            <a href="/" className="nav-link">
              ACCUEIL
            </a>
            <a href="/about" className="nav-link">
              À PROPOS
            </a>
            <a href="/contact" className="nav-link">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <p>
              AUTOMOBILE, AGROALIMENTAIRE, VÊTEMENTS, ÉLECTROMÉNAGER, HIGH-TECH À PRIX FOUS !
            </p>
            <h1> La plateforme professionnelle de <strong className='strong1'>déstockage</strong> </h1>
          
            <a href="#products" className="button button-primary">
              Contactez-nous dès maintenant !
            </a>
          </div>
        </section>

        {/* 🚀 Section Partenaires avec défilement infini */}
        <section className="partners">
          <div className="container">
            <h2>Nos partenaires, vos meilleures affaires !</h2>
            <div className="carousel-wrapper">
              <motion.div 
                className="carousel"
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                {[...partnersLogos, ...partnersLogos].map((logo, index) => (
                  <div key={index} className="partner-logo-wrapper">
                    <img
                      src={`/${logo}`} 
                      alt={`Partenaire ${index + 1}`}
                      className="partner-logo"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="stats">
          <h1>Plateforme Destock : 
            <br /> le leader du déstockage en Europe ! 
            <br />Des milliers de produits à prix cassés, disponibles immédiatement
          </h1>
          <img src="/stats.avif" alt="Image des réalisations" className="stats-image" />
          <div className="stats-counter">
            <div className="counter-item">
              <span className="counter-number">+2000</span>
              <span className="counter-label">Acheteurs Satisfaits</span>
            </div>
            <div className="counter-item">
              <span className="counter-number">+5000</span>
              <span className="counter-label">Palettes Vendues</span>
            </div>
            <div className="counter-item">
              <span className="counter-number">+20</span>
              <span className="counter-label">Partenaires</span>
            </div>
          </div>
        </section>

        <section id="products" className="products">
          <div className="container">
            <div className="product1">
              <img src="/logo.png" alt="logo de l'entreprise" />
              <h1>Des produits de qualité à prix cassés !</h1>
            </div>

            <div className="products-grid">
              {[{ image: "1.jpg", description: "COLIS" }, { image: "2.jpg", description: "CHAUSSURES" }, { image: "4.jpg", description: "ACCESSOIRES" }, { image: "5.jpg", description: "PALETTES VARIÉES" }, { image: "6.jpg", description: "PARFUMS" }, { image: "7.jpg", description: "AUTOMOBILES" }].map((product, index) => (
                <div key={index} className="product-card">
                  <img
                    src={`/${product.image}`} 
                    alt={`Produit ${index + 1}`}
                    className="product-image"
                  />
                  <div className="product-description">
                    <p>{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2>
  ET BIEN PLUS ENCORE ... 
  <br />
  <a href="tel:+33123456789" className="contact-link">contactez-nous dès maintenant 7/7 24/24 !</a>
</h2>

          </div>
        </section>

       <section className="partners2">
      <div className="carousel-wrapper2">
        <motion.div
          className="carousel2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...images, ...images].map((src, index) => (
            <div key={index} className="carousel-item">
              <img src={src} alt={`Slide ${index + 1}`} className="partner-logo2" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>

        <section className="newsletter">
          <div className="container newsletter-content">
            <h1>Ne ratez aucune bonne affaire ! </h1>

            <p>
            Abonnez-vous à notre newsletter pour découvrir nos nouveaux arrivages avant tout le monde et
            
             profiter d’offres spéciales en exclusivité
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre adresse email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="button button-primary">
                S'inscrire
              </button>
            </form>
          </div>
        </section>
         {/* Nouvelle section */}
      <section className="service-highlights">
        <div className="container service-grid">
          <div className="service-item">
            <Smile size={48} color="#FF7F32"/>
            <h3>Satisfaction Client</h3>
            <p>Nos clients sont notre priorité, avec un service adapté à leurs besoins.</p>
          </div>
          <div className="service-item">
            <Truck size={48} color="#FF7F32" />
            <h3>Livraison dans toute la France</h3>
            <p>Nous livrons vos commandes rapidement, partout en France.</p>
          </div>
          <div className="service-item">
            <Headphones size={48} color="#FF7F32" />
            <h3>Service Client</h3>
            <p>Une assistance 24/7 pour répondre à toutes vos questions.</p>
          </div>
        </div>
      </section>
      </main>

      <footer className="footer">

        <div className="footer-content">

          <img src="/logo.png" alt="logo de l'entreprise" />

          <div>
            <h3>CONTACT </h3>
            <ul className="footer-links">
              
              <li><a href="tel:+33753894507" className="footer-link">
              <i className="fas fa-phone-alt"></i> +33 7 53 89 45 07
            </a></li>
            <li> <a href="mailto:laplateformedestock@gmail.com" className="footer-link">
              <i className="fas fa-envelope"></i> laplateformedestock@gmail.com
            </a></li>
        
      
           
            </ul>
          </div>

          <div>
            <h3>LIENS UTILES</h3>
            <ul className="footer-links">
              <li><a href="/privacy" className="footer-link">Politique de confidentialité</a></li>
              <li><a href="/terms" className="footer-link">Mentions légales</a></li>
              <li><a href="/cookies" className="footer-link">Politique de cookies</a></li>
            </ul>
          </div>

        </div>
      </footer>

      {/* Bannière des cookies */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <div className="cookie-content">
            <p>
              Ce site utilise des cookies pour améliorer votre expérience. En
              poursuivant votre navigation, vous acceptez notre politique de
              confidentialité.
            </p>
            <button onClick={acceptCookies} className="button button-secondary">
              Accepter
            </button>
          </div>
        </div>
      )}

      {/* Le bouton WhatsApp totalement indépendant */}
      <a
        href="https://wa.me/+33753894507"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Index;
