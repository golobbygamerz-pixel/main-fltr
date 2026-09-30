import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* =========================
   IMAGE PATH
========================= */

const img = (name) =>
  `${import.meta.env.BASE_URL}Images/${name}`;


/* =========================
   PRODUCTS
========================= */

const products = [
  {
    name: "Shadow Print Zip Hoodie",
    category: "HOODIES",
    price: "₹2,499",
    image: "IMG_1033.jpeg",
  },
  {
    name: "Wave Stripe Long Sleeve",
    category: "LONG SLEEVES",
    price: "₹1,499",
    image: "IMG_1034.jpeg",
  },
  {
    name: "Apex Track Jacket",
    category: "JACKETS",
    price: "₹2,799",
    image: "IMG_1035.jpeg",
  },
  {
    name: "Ribbed Utility Jacket",
    category: "JACKETS",
    price: "₹2,599",
    image: "IMG_1036.jpeg",
  },
  {
    name: "Anticipate Layered Tee",
    category: "T-SHIRTS",
    price: "₹1,699",
    image: "IMG_1037.jpeg",
  },
  {
    name: "Essential Logo Zip Hoodie",
    category: "HOODIES",
    price: "₹2,299",
    image: "IMG_1038.jpeg",
  },
];


/* =========================
   APP
========================= */

function App() {
  return (
    <>
      {/* =========================
          HEADER
      ========================= */}

      <header>
        <div className="top">
          <span>FREE SHIPPING ON ORDERS ABOVE ₹999</span>
          <span>MAINFILTER / INDIA</span>
        </div>

        <nav>
          <a className="logo" href="#">
            MAIN<span>FILTER</span>
          </a>

          <div className="links">
            <a href="#">HOME</a>
            <a href="#shop">SHOP</a>
            <a href="#trending">TRENDING</a>
            <a href="#about">ABOUT</a>
          </div>

          <a className="bag" href="#shop">
            BAG <b>0</b>
          </a>
        </nav>
      </header>


      {/* =========================
          MAIN
      ========================= */}

      <main>

        {/* HERO */}

        <section className="hero">

          <div className="heroText">
            <small>STREETWEAR / INDIA</small>

            <h1>
              WEAR
              <br />
              <em>DIFFERENT.</em>
            </h1>

            <p>
              Everyday pieces for people who don't follow the usual.
            </p>

            <a className="btn" href="#shop">
              SHOP NOW →
            </a>
          </div>


          <div className="heroImg">
            <img
              src={img("IMG_1033.jpeg")}
              alt="Mainfilter streetwear"
            />

            <label>
              NEW
              <br />
              DROP
            </label>
          </div>

        </section>


        {/* CATEGORY BAR */}

        <section className="cats">
          <span>SHOP BY</span>

          {[
            "ALL",
            "T-SHIRTS",
            "HOODIES",
            "JACKETS",
            "LONG SLEEVES",
          ].map((category) => (
            <a key={category} href="#shop">
              {category}
            </a>
          ))}
        </section>


        {/* SHOP */}

        <section id="shop" className="section">

          <div className="heading">

            <div>
              <small>LATEST DROP</small>
              <h2>SHOP THE EDIT</h2>
            </div>

            <a href="#shop">
              VIEW ALL →
            </a>

          </div>


          <div className="grid">

            {products.map((product, index) => (

              <article
                className="card"
                key={product.name}
              >

                <div className="pic">

                  <img
                    src={img(product.image)}
                    alt={product.name}
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  {index < 2 && (
                    <b>NEW</b>
                  )}

                  <button
                    aria-label={`Add ${product.name}`}
                  >
                    +
                  </button>

                </div>


                <p>
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>

                <strong>
                  {product.price}
                </strong>

              </article>

            ))}

          </div>

        </section>


        {/* TRENDING */}

        <section
          id="trending"
          className="trend"
        >

          <div>

            <small>WHAT'S MOVING</small>

            <h2>
              TRENDING
              <br />
              <em>RIGHT NOW.</em>
            </h2>

            <p>
              Clean silhouettes. Strong details.
              Built for everyday rotation.
            </p>

            <a
              className="btn"
              href="#shop"
            >
              EXPLORE →
            </a>

          </div>


          <img
            src={img("IMG_1037.jpeg")}
            alt="Trending Mainfilter piece"
            loading="lazy"
          />

        </section>


        {/* ABOUT */}

        <section
          id="about"
          className="about"
        >

          <small>OUR WORLD</small>

          <h2>
            NOT FOR EVERYONE.
            <br />
            <em>MADE FOR YOU.</em>
          </h2>

          <p>
            MAINFILTER is a streetwear label built
            around everyday fits, sharp details and
            pieces that stand out without trying too hard.
          </p>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <a className="logo" href="#">
          MAIN<span>FILTER</span>
        </a>

        <p>
          © 2026 Mainfilter. All rights reserved.
        </p>

      </footer>
    </>
  );
}


/* =========================
   RENDER
========================= */

createRoot(
  document.getElementById("root")
).render(
  <App />
);