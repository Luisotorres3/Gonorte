import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row justify-content-center ">
          <div class="col-12 col-md-4 order-2 px-5">
            <div class="footer-content text-center text-white mb-5">
              <h1>INSTAGRAM</h1>
              <a href="https://www.instagram.com/gonorte.biomechanics">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-4 order-">
            <div class="footer-content text-center text-white mb-5">
              <h1>Contacto</h1>
              <i class="fas fa-phone"></i>
              <i class="fab fa-whatsapp"></i>
              <p>
                {" "}
                <a
                  style={{
                    color: "#ff5733",
                    textDecoration: "none",
                  }}
                  href="tel:+34644001599"
                >
                  644001599
                </a>
              </p>
              <p>Jaén</p>
            </div>
          </div>

          <div class="col-12 col-md-4 order-3">
            <div class="footer-content text-center text-white mb-5">
              <h1>Tiktok</h1>
              <a href="https://www.tiktok.com/@gonorte.biomechanics">
                <i className="fab fa-tiktok">
                  <FontAwesomeIcon icon={faTiktok} />
                </i>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-4 order-3">
            <div class="footer-content text-center text-white mb-5">
              <h1>Facebook</h1>
              <a
                href="https://www.facebook.com/profile.php?id=61572526556682"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-4 order-3">
            <div class="footer-content text-center text-white mb-5">
              <h1>Linkedin</h1>
              <a href="https://www.linkedin.com/in/carmen-mar%C3%ADa-gonz%C3%A1lez-ortega-3747b5258/">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-4 order-3">
            <div class="footer-content text-center text-white mb-5">
              <h1>Email</h1>
              <i class="far fa-envelope"></i>
              <p>
                <a
                  href="mailto:gonorte.biomechanics@gmail.com"
                  className="text-style-link"
                >
                  gonorte.biomechanics@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div class="col-12  order-6 d-flex justify-content-center">
            <div class="naro text-white">
              <h6>Copyright &copy; Gonorte 2025</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
