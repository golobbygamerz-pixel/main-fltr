import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

const products = [
  ["Shadow Print Zip Hoodie", "HOODIES", "₹2,499", "product-1.jpg"],
  ["Wave Stripe Long Sleeve", "LONG SLEEVES", "₹1,499", "product-2.jpg"],
  ["Apex Track Jacket", "JACKETS", "₹2,799", "product-3.jpg"],
  ["Ribbed Utility Jacket", "JACKETS", "₹2,599", "product-4.jpg"],
  ["Anticipate Layered Tee", "T-SHIRTS", "₹1,699", "product-5.jpg"],
  ["Essential Logo Zip Hoodie", "HOODIES", "₹2,299", "product-6.jpg"]
];

function App() {
  return (
    <>
      <header>
        <div className="top">
          FREE SHIPPING ON ORDERS ABOVE ₹999
          <span>MAINFILTER / INDIA</span>
        </div>

        <nav>
          <a className="logo" href="#">MAIN<span>FILTER</span></a>

          <div className="links">
            <a href="#">HOME</a>
            <a href="#shop">SHOP</a>
            <a href="#trending">TRENDING</a>
            <a href="#about">ABOUT</a>
          </div>

          <a className="bag" href="#shop">BAG <b>0</b></a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroText">
            <small>STREETWEAR / INDIA</small>
            <h1>WEAR<br /><em>DIFFERENT.</em></h1>
            <p>Everyday pieces for people who don't follow the usual.</p>
            <a className="btn" href="#shop">SHOP NOW →</a>
          </div>

          <div className="heroImg">
            <img src={img("product-1.jpg")} alt="Mainfilter streetwear" />
            <label>NEW<br />DROP</label>
          </div>
        </section>

        <section className="cats">
          <span>SHOP BY</span>

          {["ALL", "T-SHIRTS", "HOODIES", "JACKETS", "LONG SLEEVES"].map(
            category => (
              <a key={category} href="#shop">{category}</a>
            )
          )}
        </section>

        <section id="shop" className="section">
          <div className="heading">
            <div>
              <small>LATEST DROP</small>
              <h2>SHOP THE EDIT</h2>
            </div>

            <a href="#shop">VIEW ALL →</a>
          </div>

          <div className="grid">
            {products.map((product, i) => (
              <article className="card" key={product[0]}>
                <div className="pic">
                  <img
                    src={img(product[3])}
                    alt={product[0]}
                    loading="lazy"
                  />

                  {i < 2 && <b>NEW</b>}

                  <button aria-label={"Add " + product[0]}>
                    +
                  </button>
                </div>

                <p>{product[1]}</p>
                <h3>{product[0]}</h3>
                <strong>{product[2]}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="trending" className="trend">
          <div>
            <small>WHAT'S MOVING</small>

            <h2>
              TRENDING<br />
              <em>RIGHT NOW.</em>
            </h2>

            <p>
              Clean silhouettes. Strong details. Built for everyday rotation.
            </p>

            <a className="btn" href="#shop">
              EXPLORE →
            </a>
          </div>

          <img
            src={img("product-5.jpg")}
            alt="Trending Mainfilter piece"
            loading="lazy"
          />
        </section>

        <section id="about" className="about">
          <small>OUR WORLD</small>

          <h2>
            NOT FOR EVERYONE.<br />
            <em>MADE FOR YOU.</em>
          </h2>

          <p>
            MAINFILTER is a streetwear label built around everyday fits,
            sharp details and pieces that stand out without trying too hard.
          </p>
        </section>
      </main>

      <footer>
        <a className="logo" href="#">
          MAIN<span>FILTER</span>
        </a>

        <p>© 2026 Mainfilter. All rights reserved.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);