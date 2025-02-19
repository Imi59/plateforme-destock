import React from 'react';

const MentionsLegales = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mentions Légales & Conditions Générales de Vente</h1>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>1. Informations légales</h2>
        <p><strong>Dénomination :</strong> PLATEFORME DESTOCK</p>
        <p><strong>SIREN :</strong> 953 712 213</p>
        <p><strong>SIRET du siège social :</strong> 953 712 213 00016</p>
        <p><strong>N° TVA Intracommunautaire :</strong> FR13 953 712 213</p>
        <p><strong>N° EORI :</strong> Pas de n° EORI valide</p>
        <p><strong>Activité principale (NAF/APE) :</strong> Commerce de gros (commerce interentreprises) non spécialisé</p>
        <p><strong>Code NAF/APE :</strong> 46.90Z</p>
        <p><strong>Adresse postale :</strong> 2 AVENUE DES MORILLONS, 95140 GARGES-LES-GONESSE</p>
        <p><strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>2. Hébergement</h2>
        <p>Le site est hébergé par : [Nom de l'hébergeur]</p>
        <p>[Adresse de l’hébergeur]</p>
        <p><strong>Téléphone :</strong> [Téléphone de l’hébergeur]</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>3. Propriété intellectuelle</h2>
        <p>Le contenu du site (textes, images, logos) est protégé par les droits d’auteur.</p>
        <p>Toute reproduction, même partielle, est interdite sans autorisation écrite.</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>4. Protection des données</h2>
        <p>PLATEFORME DESTOCK s’engage à respecter la vie privée des utilisateurs et à ne pas vendre leurs données.</p>
        <p>Conformément au RGPD, vous pouvez exercer vos droits en nous contactant à l’adresse <a href="mailto:laplateformedestock@gmail.com" style={styles.link}>laplateformedestock@gmail.com</a>.</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>5. Conditions générales de vente (CGV)</h2>
        <p><strong>Produits :</strong> Déstockage de divers produits (automobile, électroménager, etc.).</p>
        <p><strong>Prix :</strong> Les prix affichés sont en euros et hors frais de livraison.</p>
        <p><strong>Paiement :</strong> Les paiements sont sécurisés (CB, virement, PayPal).</p>
        <p><strong>Livraison :</strong> Livraison en France métropolitaine sous 5 à 10 jours ouvrés.</p>
        <p><strong>Retour :</strong> Les retours sont possibles sous 14 jours après réception du colis.</p>
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

export default MentionsLegales;
