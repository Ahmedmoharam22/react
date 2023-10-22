import React from "react";
import styles from "./footer.module.css";
import image1 from '../../../assets/payment-method.png'
import image2 from '../../../assets/google-play.jpg'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className="container">
        <h2>Get The Fresh Cart App</h2>
        <p>We Will Send You A link,Open it on Your Phone to Download The App</p>
        <form className="d-flex gap-2 gap-sm-4 flex-wrap flex-sm-nowrap">
          <input
            type="email"
            placeholder="Email..."
            aria-label="Email"
            className="form-control"
          />
          <button
            className="main-bg py-2 rounded-2 px-5 text-white"
            style={{ whiteSpace: "nowrap" }}
          >
            Share App Link
          </button>
        </form>
        <hr />
        <div className="links pt-4 d-flex justify-content-between align-items-center gap-5 flex-wrap ">
          <div className="parteners d-flex gap-3 align-items-center">
            <h5>Payment Parteners</h5>
            <ul className="list-unstyled">
              <li>
              <img src={image1} alt="master-card"  width="150" />
              </li>
            </ul>
          </div>
          <div className="download d-flex gap-3 align-items-center">
            <h5>Download The App Now</h5>
            <ul className="list-unstyled">
              <li>
              <img src={image2} alt="paly-google" width="150" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
