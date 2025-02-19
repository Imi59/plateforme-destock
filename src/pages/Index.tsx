import React, { useState, useEffect } from 'react';
import { X, Menu, Smile, Truck, Headphones } from 'lucide-react';
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importation des images depuis src/assets/
import logo from "@/assets/logo.png";
import statsImage from "@/assets/stats.avif";

// Partenaires
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

  // Images des produits
  const productImages = [
    "1.jpg", "2.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"
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
            {isMobileMenuOpen ? <X /> : <Menu />}
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

      {/* Section Statistiques */}
      <section className="stats">
        <h1>Plateforme Destock : le leader du déstockage en Europe !</h1>
        <img src={statsImage} alt="Statistiques" className="stats-image" />
      </section>

      {/* Section Produits */}
      <section className="products">
        <div className="container">
          <h1>Des produits de qualité à prix cassés !</h1>
          <div className="products-grid">
            {productImages.map((image, index) => (
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
    </>
  );
};

export default Index;
