import React from 'react';

const PolitiqueCookies = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Politique de Cookies</h1>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>1. Qu'est-ce qu'un cookie ?</h2>
        <p>
          Un cookie est un petit fichier stocké sur votre appareil lorsque vous visitez un site web. Il permet de mémoriser vos préférences et d'améliorer votre expérience utilisateur.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>2. Quels types de cookies utilisons-nous ?</h2>
        <ul>
          <li><strong>Cookies essentiels :</strong> Nécessaires au bon fonctionnement du site.</li>
          <li><strong>Cookies analytiques :</strong> Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.</li>
          <li><strong>Cookies marketing :</strong> Utilisés pour personnaliser les publicités et contenus proposés.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>3. Gestion des cookies</h2>
        <p>
          Vous pouvez accepter ou refuser l'utilisation des cookies via la bannière de consentement affichée sur notre site. Vous pouvez également modifier vos préférences à tout moment en accédant aux paramètres de votre navigateur.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>4. Plus d’informations</h2>
        <p>
          Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter à <a href="mailto:laplateformedestock@gmail.com" style={styles.link}>laplateformedestock@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#FF7F32',
  },
  section: {
    marginBottom: '20px',
  },
  subtitle: {
    color: '#222',
    borderBottom: '2px solid #FF7F32',
    paddingBottom: '5px',
    marginBottom: '10px',
  },
  link: {
    color: '#FF7F32',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default PolitiqueCookies;
