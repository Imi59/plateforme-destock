import React, { useState, useEffect } from 'react';
import { X, Menu, Smile, Truck, Headphones } from 'lucide-react';
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
// Importation des images depuis src/assets/
import logo from "@/assets/logo.png";
import statsImage from "@/assets/stats.avif";

// Importation des logos des partenaires
import aldi from "@/assets/partenaires/aldi.png";
import amazon from "@/assets/partenaires/amazon.png";
import colis from "@/assets/partenaires/colis.png";
import lidl from "@/assets/partenaires/lidl.png";
import shein from "@/assets/partenaires/shein.png";
import temu from "@/assets/partenaires/temu.png";
import apple from "@/assets/partenaires/apple.png";
import samsung from "@/assets/partenaires/samsung.png";
import bosch from "@/assets/partenaires/bosch.png";
import dell from "@/assets/partenaires/dell.png";
import canon from "@/assets/partenaires/canon.png";
import lacoste from "@/assets/partenaires/lacoste.png";
import lancome from "@/assets/partenaires/lancome.png";
import sony from "@/assets/partenaires/sony.png";

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
import img14 from "@/assets/14.jpg";
import img15 from "@/assets/15.jpg";
import img16 from "@/assets/16.jpg";
import img17 from "@/assets/17.jpg";
import img18 from "@/assets/18.jpg";
import img19 from "@/assets/19.jpg";
import img20 from "@/assets/20.jpg";
import img21 from "@/assets/21.jpg";
import img22 from "@/assets/22.jpg";
import img23 from "@/assets/23.jpg";
import img24 from "@/assets/24.jpg";
import img25 from "@/assets/25.jpg";
import img26 from "@/assets/26.jpg";
import img27 from "@/assets/27.jpg";
import img28 from "@/assets/28.jpg";
import img29 from "@/assets/29.jpg";
import img30 from "@/assets/30.jpg";
import img31 from "@/assets/31.jpg";
import img32 from "@/assets/32.jpg";
import img33 from "@/assets/33.jpg";
import img34 from "@/assets/34.jpg";
import img35 from "@/assets/35.jpg";
import img36 from "@/assets/36.jpg";


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

  const partnersLogos = [aldi, amazon, colis, lidl, shein, temu, apple, samsung, bosch, dell, canon, lacoste, lancome, sony];

  const productImages = [
    { image: img17, description: "COLIS" }, 
    { image: img26, description: "AGROALIMENTAIRE" }, 
    { image: img2, description: "CHAUSSURES" },
    { image: img4, description: "ACCESSOIRES" },
    { image: img5, description: "PALETTES VARIÉES" },
    { image: img6, description: "PARFUMS" },
    { image: img24, description: "AUTOMOBILES" },
    { image: img30, description: "COMMERCE DE DIAMANTS" },
    { image: img29, description: "OR" },
    { image: img8, description: "AUTOMOBILES" },
    { image: img9, description: "AUTOMOBILES" },
    { image: img10, description: "AUTOMOBILES" },
    { image: img11, description: "AUTOMOBILES" },
    { image: img12, description: "AUTOMOBILES" },
    { image: img13, description: "AUTOMOBILES" },
    { image: img14, description: "AUTOMOBILES" },
    { image: img1, description: "COLIS" }, 
    { image: img7, description: "AUTOMOBILES" },
    { image: img15, description: "AUTOMOBILES" },
    { image: img16, description: "AUTOMOBILES" },
    { image: img18, description: "AUTOMOBILES" },
    { image: img19, description: "AUTOMOBILES" },
    { image: img20, description: "AUTOMOBILES" },
    { image: img21, description: "AUTOMOBILES" },
    { image: img22, description: "AUTOMOBILES" },
    { image: img23, description: "AUTOMOBILES" },
    { image: img25, description: "AUTOMOBILES" },
    { image: img27, description: "AUTOMOBILES" },
    { image: img28, description: "AUTOMOBILES" },
    { image: img31, description: "AUTOMOBILES" },
    { image: img32, description: "AUTOMOBILES" },
    { image: img33, description: "AUTOMOBILES" },
    { image: img34, description: "AUTOMOBILES" },
    { image: img35, description: "AUTOMOBILES" },
    { image: img36, description: "AUTOMOBILES" }

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
            <a href="tel:+33758430374" className="contact-item">
              <i className="fas fa-phone-alt"></i> +33 7 58 43 03 74
            </a>
            <a href="tel:+33758430374" className="contact-item2">
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
            <a href="https://wa.me/++33758430374" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://wa.me/++33758430374" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-snapchat"></i>
            </a>
            <a href="https://wa.me/++33758430374" target="_blank" rel="noopener noreferrer" className="contact-item2">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://wa.me/++33758430374" target="_blank" rel="noopener noreferrer" className="contact-item2">
              <i className="fab fa-snapchat"></i>
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
            <a href="#stats" className="nav-link">À PROPOS</a>
            <a href="tel:+33758430374" className="nav-link">
              CONTACT</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content">
            <p>AGROALIMENTAIRE, AUTOMOBILE, VÊTEMENTS, ÉLECTROMÉNAGER, HIGH-TECH 
              <br />à prix déstockage !
            </p>
            <h1>LA PLATEFORME PROFESSIONNELLE DE <strong className='strong1'>DÉSTOCKAGE</strong></h1>
            <h2 className="blink-text">ARRIVAGES CHAQUE SEMAINE</h2>
            <a href="#products" className="button button-primary">CONTACTEZ-NOUS !</a>
          </div>
        </section>

        {/* Section Partenaires */}
        <section className="partners">
          <div className="container-ctr">

            <h2>Nos partenaires, vos meilleures affaires !</h2>

            <p> <strong>+ 500 marques dans notre catalogue en ligne</strong></p>

            <div className="carousel-wrapper">
              <motion.div className="carousel" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
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
        <section id='stats' className="stats">
          <h1> PLATEFORME DESTOCK : </h1>    

          <p>Garantie des meilleurs produits de grandes marques à prix déstockages !</p>

          <img src={statsImage} alt="Image des réalisations" className="stats-image" />

          <p> <strong>Inutile de présenter la plateforme de déstockage numéro 1 en Europe</strong>, 
          et notamment en France Métropolitaine !
          <br />
          <strong>Une plateforme d'achat à prix grossiste</strong>, accessible aussi bien aux 
          particuliers qu'aux professionnels.
          <br /> Des centaines de grandes marques et des arrivages chaque semaine : 
          <br />
          <strong>smartphones, multimédia, informatique, électroménager, jouets, vêtements, cosmétiques et BIEN PLUS !</strong>       <br /> 
          Achetez à <strong>prix déstockage toute l'année</strong>, avec une rentabilité garantie.
          <br /><strong>Nous sommes présents sur les réseaux sociaux</strong> avec plus de <strong>100 000 abonnés</strong> ! 
          </p>
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
              <span className="counter-number">+10 000</span>
              <span className="counter-label">Partenaires</span>
            </div>
          </div>
        </section>

      

        {/* Products Section */}
        <section id="products" className="products">
        <div className="footer-banner">
    <div className="footer-text">
      <p className='strongy'>SATISFACTION ET RENTABILITÉ GARANTIES A 100% !</p> 
      <p>
        Rejoignez nos réseaux sociaux pour ne rater aucune bonne affaire !
      </p>
      <div className="social-links">
        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-snapchat-square"></i>
        </a>
        <a href="https://wa.me/numéro" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp-square"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="product1">
      <img src={logo} alt="logo de l'entreprise" />
      <h1>Profitez des plus grandes marques à prix déstockés avec une <strong>RENTABILITÉ GARANTIE</strong> 
      <br />que vous soyez particulier ou professionnel !</h1>
    </div>
    <div className="products-grid">
      {productImages.slice(0, 9).map((product, index) => (
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
      <a href="tel:+33123456789" className="contact-link">Contactez-nous dès maintenant 24/7 !</a>
    </h2>
  </div>
</section>

       
<section className="partners2">
  <div className="carousel-wrapper2">
  <motion.div
  className="carousel2"
  animate={{ x: ["0%", "-50%"] }}  // Défile sur seulement 50% pour éviter un arrêt brusque
  transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
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
            Profitez de prix déstockage, d'exclusivités et d'arrivages chaque semaine !
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
            <i className="fa-solid fa-face-laugh-beam"></i>
              <h3>Satisfaction Client</h3>
              <p>Nos clients sont notre priorité ! Risque 0 absolu </p>
            </div>
            <div className="service-item">
            <i className="fa-solid fa-truck-fast"></i>
              <h3>Livraison dans toute la France</h3>
              <p>Nous livrons vos commandes partout en France et en Europe !</p>
            </div>
            <div className="service-item">
            <i className="fa-solid fa-phone-volume"></i>
              <h3>Service Client Réactif</h3>
              <p>Une assistance 24/7 pour répondre à toutes vos questions !</p>
            </div>
            <div className="service-item">
            <i className="fa-solid fa-check"></i>
              <h3>Produits de Qualité</h3>
              <p>Des grandes marques à prix déstockés, avec une rentabilité garantie !</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="logo de l'entreprise" />

        <div>
          <h3>CONTACT</h3>
          <ul className="footer-links">
            <li>
              <a href="tel:+33758430374" className="footer-link">
                <i className="fas fa-phone-alt"></i> +33 7 58 43 03 74
              </a>
            </li>
            <li>
              <a href="mailto:laplateformedestock@gmail.com" className="footer-link">
                <i className="fas fa-envelope"></i> laplateformedestock@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>LIENS UTILES</h3>
          <ul className="footer-links">
            <li><Link to="/privacy" className="footer-link">Politique de confidentialité</Link></li>
            <li><Link to="/mentions-legales" className="footer-link">Mentions légales</Link></li>
            <li><Link to="/cookies" className="footer-link">Politique de cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PLATEFORME DESTOCK. Tous droits réservés.</p>
        <p>
          Fait par <a href="https://ib-web-solutions.fr" target="_blank" rel="noopener noreferrer" className="ib-link">IB WEB SOLUTIONS</a>
        </p>
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
        href="https://wa.me/++33758430374"
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
