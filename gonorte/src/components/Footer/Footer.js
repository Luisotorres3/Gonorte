import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row justify-content-center ">
          <div class="col-12 col-md-4 order-2 px-5">
            <div class="footer-content text-center text-white mb-5">
              <h1>INSTAGRAM</h1>
              <i class="fab fa-instagram"></i>
              <p>Sígueme en Instagram y mira todos mis entrenamientos!</p>
            </div>
          </div>
          <div class="col-12 col-md-4 order-">
            <div class="footer-content text-center text-white mb-5">
              <h1>Contacto</h1>
              <i class="fas fa-phone"></i>
              <i class="fab fa-whatsapp"></i>
              <p> +34 ...</p>
              <p>Jaén</p>
              <p>
                <i class="far fa-clock"></i>Seg - Sab das 10:00h as 18:00h
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 order-3">
            <div class="footer-content text-center text-white mb-5">
              <h1>Email</h1>
              <i class="far fa-envelope"></i>
              <p>gonorte.biomechanics@gmail.com</p>
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
