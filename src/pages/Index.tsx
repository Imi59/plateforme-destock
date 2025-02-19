import React, { useState, useEffect } from 'react';
import { X, Menu, Smile, Truck, Headphones } from 'lucide-react';
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
// Importation des images depuis src/assets/
import logo from "@/assets/logo.png";
import statsImage from "@/assets/stats.avif";

// Importation des logos des partenaires
import aldi from "@/assets/aldi.png";
import amazon from "@/assets/amazon.png";
import colis from "@/assets/colis.png";
import lidl from "@/assets/lidl.png";
import shein from "@/assets/shein.png";
import temu from "@/assets/temu.png";

// Importation des images des produits
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.jpg";
import img13 from "@/assets/13.jpg";
import img14 from "@/assets/13.jpg";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showHelpBubble, setShowHelpBubble] = useState(true);

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

  const closeHelpBubble = () => {
    setShowHelpBubble(false);
  };

  const partnersLogos = [aldi, amazon, colis, lidl, shein, temu];

  const productImages = [
    { image: img1, description: "COLIS" }, 
    { image: img2, description: "CHAUSSURES" },
    { image: img4, description: "ACCESSOIRES" },
    { image: img5, description: "PALETTES VARIÉES" },
    { image: img6, description: "PARFUMS" },
    { image: img7, description: "AUTOMOBILES" },
    { image: img8, description: "AUTOMOBILES" },
    { image: img9, description: "AUTOMOBILES" },
    { image: img10, description: "AUTOMOBILES" },
    { image: img11, description: "AUTOMOBILES" },
    { image: img12, description: "AUTOMOBILES" },
    { image: img13, description: "AUTOMOBILES" },
    { image: img14, description: "AUTOMOBILES" },
  ];

  return (
    <>
      {/* Bulle d'aide */}
      {showHelpBubble && (
        <div className="help-bubble">
          <p>Nous sommes ravis de vous aider 
            <br />24/24 7/7 !</p>
          <button onClick={closeHelpBubble} className="close-button">
            <X size={16} color="white" />
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
          </div>
          <div className="contact-center">
            <a href="mailto:laplateformedestock@gmail.com" className="contact-item">
              <i className="fas fa-envelope"></i> laplateformedestock@gmail.com
            </a>
          </div>
          <div className="contact-right">
            <a href="https://wa.me/+33753894507" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>

          <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <i className="fas fa-times" style={{ fontSize: '24px' }}></i>
            ) : (
              <i className="fas fa-bars" style={{ fontSize: '24px' }}></i>
            )}
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'show' : ''}`}>
            <a href="/" className="nav-link">ACCUEIL</a>
            <a href="/about" className="nav-link">À PROPOS</a>
            <a href="/contact" className="nav-link">CONTACT</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content">
            <p>AUTOMOBILE, AGROALIMENTAIRE, VÊTEMENTS, ÉLECTROMÉNAGER, HIGH-TECH À PRIX FOUS !</p>
            <h1>La plateforme professionnelle de <strong className='strong1'>déstockage</strong></h1>
            <a href="#products" className="button button-primary">Contactez-nous dès maintenant !</a>
          </div>
        </section>

        {/* Section Partenaires */}
        <section className="partners">
          <div className="container">
            <h2>Nos partenaires, vos meilleures affaires !</h2>
            <div className="carousel-wrapper">
              <motion.div className="carousel" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
                {[...partnersLogos, ...partnersLogos].map((logo, index) => (
                  <div key={index} className="partner-logo-wrapper">
                    <img src={logo} alt={`Partenaire ${index + 1}`} className="partner-logo" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <h1>Plateforme Destock : le leader du déstockage en Europe !</h1>
          <img src={statsImage} alt="Image des réalisations" className="stats-image" />
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

        {/* Products Section */}
        <section id="products" className="products">
  <div className="container">
    <div className="product1">
      <img src={logo} alt="logo de l'entreprise" />
      <h1>Des produits de qualité à prix cassés !</h1>
    </div>
    <div className="products-grid">
      {productImages.slice(0, 7).map((product, index) => (
        <div key={index} className="product-card">
          <img
            src={product.image}
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
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      {[...productImages, ...productImages].map((product, index) => (
        <div key={index} className="carousel-item">
          <img src={product.image} alt={`Image ${index + 1}`} className="partner-logo2" />
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
          <img src={logo} alt="logo de l'entreprise" />
          <div>
            <h3>CONTACT </h3>
            <ul className="footer-links">
              <li><a href="tel:+33753894507" className="footer-link">
                <i className="fas fa-phone-alt"></i> +33 7 53 89 45 07
              </a></li>
              <li><a href="mailto:laplateformedestock@gmail.com" className="footer-link">
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
