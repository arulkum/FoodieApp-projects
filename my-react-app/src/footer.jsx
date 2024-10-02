import React from "react";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h5>About Zomato</h5>
            <ul className="list-unstyled text-white">
              <li ><a href="#" className="text-white">Who We Are</a></li>
              <li><a href="#"className="text-white">Blog</a></li>
              <li><a href="#"className="text-white">Careers</a></li>
              <li><a href="#"className="text-white">Press</a></li>
              <li><a href="#"className="text-white">Investor Relations</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="#"className="text-white">FAQs</a></li>
              <li><a href="#"className="text-white">Support</a></li>
              <li><a href="#"className="text-white">Cancellations</a></li>
              <li><a href="#"className="text-white">Report Fraud</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-white">Security</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect With Us</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2024 Zomato. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
