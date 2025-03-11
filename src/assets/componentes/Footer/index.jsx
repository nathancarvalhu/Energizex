import React from "react";
import "./styles.css";
import visaLogo from "./assets/Pagamento1.svg";
import stripeLogo from "./assets/Pagamento2.svg";
import paypalLogo from "./assets/Pagamento3.svg";
import applepayLogo from "./assets/Pagamento4.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>EnergizeX</h3>
          <p>Suplementos de alta qualidade para melhorar seu desempenho.</p>
        </div>
        
        <div className="footer-section">
          <h3>Page</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Info</h3>
          <ul>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return & Refund</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        

        
        <div className="payment-methods">
          <img src={visaLogo} alt="Visa" />
          <img src={stripeLogo} alt="Stripe" />
          <img src={paypalLogo} alt="PayPal" />
          <img src={applepayLogo} alt="Apple Pay" />
        </div>
      </div>
      
      <p className="copyright">&copy; 2025 EnergizeX. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;