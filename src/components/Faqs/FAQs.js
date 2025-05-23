import React, { useState, useRef } from "react";
import "./FAQs.css";

const FAQs = ({ faqs }) => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRefs = useRef({}); // Referencias para calcular altura

  const toggleFAQ = (id) => {
    setActiveFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section background-color-black">
      <div className="container-large">
        <div className="faqs_wrap">
          <div className="max-width-440">
            <div className="margin-bottom-16 faqs-centered">
              <h1>FAQs</h1>
            </div>
            <div className="text-color-lightgrey faqs-centered">
              <p className="text-size-medium">
                ¿No encuentras la respuesta que buscabas? Por favor, escríbeme
                un correo electrónico a{" "}
                <a
                  href="mailto:gonorte.biomechanics@gmail.com"
                  className="text-style-link"
                >
                  gonorte.biomechanics@gmail.com
                </a>
              </p>
            </div>
          </div>
          <ul className="faqs_list" role="list">
            {faqs.map((faq) => (
              <li
                key={faq.id}
                className={`faqs_item ${activeFAQ === faq.id ? "active" : ""}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div
                  className={`faqs_head ${
                    activeFAQ === faq.id ? "active" : ""
                  }`}
                >
                  <p className="text-size-medium text-weight-medium">
                    {faq.question}
                  </p>
                  <img
                    src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670575b99c8b5d84d17c6073_faq-arrow.svg"
                    alt="Toggle FAQ"
                    className={`icon-24 ${
                      activeFAQ === faq.id ? "rotated" : ""
                    }`}
                  />
                </div>
                <div
                  className="faqs_body"
                  ref={(el) => (faqRefs.current[faq.id] = el)}
                  style={{
                    height:
                      activeFAQ === faq.id
                        ? `${faqRefs.current[faq.id]?.scrollHeight}px`
                        : "0",
                  }}
                >
                  <div className="margin-top-8">
                    <div className="text-color-lightgrey">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
