import React, { useState, useEffect } from 'react';
import { X, Menu, Smile, Truck, Headphones } from 'lucide-react';
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importation des images pour que Vite les gère bien
import logo from "@/assets/logo.png";
import statsImage from "@/assets/stats.avif";

// Partenaires (Assurez-vous que ces images sont dans `src/assets/`)
import aldi from "@/assets/aldi.png";
import amazon from "@/assets/amazon.png";
import colis from "@/assets/colis.png";
import lidl from "@/assets/lidl.png";
import shein from "@/assets/shein.png";
import temu from "@/assets/temu.png";

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

  const partnersLogos = [aldi, amazon, colis, lidl, shein, temu];

  // Images dans le carrousel (doivent être dans `src/assets/`)
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
    setShowHelpBubble(false);
  };

  return (
    <>
      {/* Bulle d'aide */}
      {showHelpBubble && (
        <div className="help-bubble">
          <p>Nous sommes ravis de vous aider 24/24 7/7 !</p>
          <button onClick={closeHelpBubble} className="close-button">
            <X size={16} color="white" />
          </button>
        </div>
      )}

      {/* Barre de contact */}
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
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>

          <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'show' : ''}`}>
            <a href="/" className="nav-link">ACCUEIL</a>
            <a href="/about" className="nav-link">À PROPOS</a>
            <a href="/contact" className="nav-link">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Section Partenaires */}
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
                  <img src={logo} alt={`Partenaire ${index + 1}`} className="partner-logo" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="stats">
        <h1>Plateforme Destock : le leader du déstockage en Europe !</h1>
        <img src={statsImage} alt="Statistiques" className="stats-image" />
      </section>

      {/* Section Produits */}
      <section id="products" className="products">
        <div className="container">
          <h1>Des produits de qualité à prix cassés !</h1>
          <div className="products-grid">
            {["1.jpg", "2.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"].map((image, index) => (
              <div key={index} className="product-card">
                <img src={`${import.meta.env.BASE_URL}assets/${image}`} alt={`Produit ${index + 1}`} className="product-image" />
                <div className="product-description">
                  <p>Produit {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="service-highlights">
        <div className="container service-grid">
          <div className="service-item">
            <Smile size={48} color="#FF7F32"/>
            <h3>Satisfaction Client</h3>
          </div>
          <div className="service-item">
            <Truck size={48} color="#FF7F32"/>
            <h3>Livraison dans toute la France</h3>
          </div>
          <div className="service-item">
            <Headphones size={48} color="#FF7F32"/>
            <h3>Service Client 24/7</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="logo de l'entreprise" />
        </div>
      </footer>

      {/* Bannière des cookies */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
          <button onClick={acceptCookies} className="button button-secondary">
            Accepter
          </button>
        </div>
      )}

      {/* Bouton WhatsApp */}
      <a href="https://wa.me/+33753894507" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Index;
