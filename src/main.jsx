import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const img = (name) =>
  `${import.meta.env.BASE_URL}Images/${name}`;

const products = [
  {
    id: 1,
    name: "Shadow Print Zip Hoodie",
    category: "HOODIES",
    price: 2499,
    image: "IMG_1033.jpeg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A heavyweight everyday zip hoodie built with an oversized streetwear silhouette. Finished with a subtle tonal graphic treatment for a clean but distinctive look.",
  },
  {
    id: 2,
    name: "Wave Stripe Long Sleeve",
    category: "LONG SLEEVES",
    price: 1499,
    image: "IMG_1034.jpeg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A relaxed long sleeve with a clean striped construction. Easy to layer and designed for everyday streetwear rotation.",
  },
  {
    id: 3,
    name: "Apex Track Jacket",
    category: "JACKETS",
    price: 2799,
    image: "IMG_1035.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "A lightweight technical-inspired track jacket with contrast detailing and a sporty utility construction.",
  },
  {
    id: 4,
    name: "Ribbed Utility Jacket",
    category: "JACKETS",
    price: 2599,
    image: "IMG_1036.jpeg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A structured utility jacket featuring a textured finish, clean collar and functional detailing.",
  },
  {
    id: 5,
    name: "Anticipate Layered Tee",
    category: "T-SHIRTS",
    price: 1699,
    image: "IMG_1037.jpeg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A graphic layered tee inspired by Y2K streetwear. Bold artwork meets a relaxed silhouette.",
  },
  {
    id: 6,
    name: "Essential Logo Zip Hoodie",
    category: "HOODIES",
    price: 2299,
    image: "IMG_1038.jpeg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A minimal everyday zip hoodie with a clean logo detail and relaxed fit.",
  },
];

const formatPrice = (price) =>
  `₹${price.toLocaleString("en-IN")}`;

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartMessage, setCartMessage] = useState("");

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedSize("");
    setCartMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setSelectedSize("");
    setCartMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const addToCart = () => {
    if (!selectedSize) {
      setCartMessage("SELECT A SIZE FIRST");
      return;
    }

    setCartCount((count) => count + 1);

    setCartMessage(
      `${selectedProduct.name} — SIZE ${selectedSize} ADDED`
    );
  };

  const buyNow = () => {
    if (!selectedSize) {
      setCartMessage("SELECT A SIZE FIRST");
      return;
    }

    setCartMessage(
      `READY TO BUY — ${selectedProduct.name} / SIZE ${selectedSize}`
    );
  };

  /* =======================================================
     PRODUCT DETAIL PAGE
  ======================================================= */

  if (selectedProduct) {
    return (
      <div className="productPage">

        <header className="productHeader">

          <button
            className="backButton"
            onClick={closeProduct}
          >
            ← BACK
          </button>

          <a
            className="logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeProduct();
            }}
          >
            WEIRD<span>CULTURE</span>
          </a>

          <div className="productCart">
            BAG <b>{cartCount}</b>
          </div>

        </header>

        <main className="productDetail">

          <div className="productImageWrap">

            <img
              src={img(selectedProduct.image)}
              alt={selectedProduct.name}
            />

            <span className="productTag">
              NEW DROP
            </span>

          </div>

          <div className="productInfo">

            <p className="productCategory">
              {selectedProduct.category}
            </p>

            <h1>
              {selectedProduct.name}
            </h1>

            <div className="productPrice">
              {formatPrice(selectedProduct.price)}
            </div>

            <div className="productDivider" />

            <div className="productDescription">

              <h3>DESCRIPTION</h3>

              <p>
                {selectedProduct.description}
              </p>

            </div>

            <div className="sizeSection">

              <div className="sizeHeader">

                <h3>SELECT SIZE</h3>

                <span>
                  SIZE GUIDE
                </span>

              </div>

              <div className="sizeButtons">

                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={
                      selectedSize === size
                        ? "sizeButton active"
                        : "sizeButton"
                    }
                    onClick={() => {
                      setSelectedSize(size);
                      setCartMessage("");
                    }}
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            <div className="productActions">

              <button
                className="addCartButton"
                onClick={addToCart}
              >
                ADD TO CART
              </button>

              <button
                className="buyButton"
                onClick={buyNow}
              >
                BUY NOW →
              </button>

            </div>

            {cartMessage && (
              <div className="cartMessage">
                {cartMessage}
              </div>
            )}

            <div className="productDetailsList">

              <div>
                <span>FIT</span>
                <strong>RELAXED / OVERSIZED</strong>
              </div>

              <div>
                <span>SHIPPING</span>
                <strong>FREE ABOVE ₹999</strong>
              </div>

              <div>
                <span>AVAILABILITY</span>
                <strong>IN STOCK</strong>
              </div>

            </div>

          </div>

        </main>

      </div>
    );
  }

  /* =======================================================
     HOME PAGE
  ======================================================= */

  return (
    <>

      <header>

        <div className="top">

          <span>
            FREE SHIPPING ON ORDERS ABOVE ₹999
          </span>

          <span>
            WEIRD GANG WORLDWIDE
          </span>

          <span>
            UNDERGROUND / INDIA / 2026
          </span>

        </div>

        {/* =================================================
            NEW GLASS NAVBAR
        ================================================= */}

        <nav className="glassNav">

          <button
            className="menuButton"
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a
            className="logo"
            href="#"
          >
            WEIRD<span>CULTURE</span>
          </a>

          <div className="desktopLinks">

            <a href="#">
              HOME
            </a>

            <a href="#shop">
              SHOP
            </a>

            <a href="#about">
              ABOUT
            </a>

            <a href="#contact">
              CONTACT
            </a>

          </div>

          <div className="navActions">

            <button
              className="searchButton"
              aria-label="Search"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >

                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                />

                <path d="m16 16 5 5" />

              </svg>

            </button>

            <a
              className="glassBag"
              href="#shop"
            >
              <span>BAG</span>

              <b>
                {cartCount}
              </b>

            </a>

          </div>

        </nav>

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main>

        <section className="hero">

          <div className="heroText">

            <small>
              STREETWEAR FOR THE REAL ONES
            </small>

            <h1>
              NOT MADE FOR
              <br />
              EVERYONE.
              <br />
              <em>MADE FOR THE WEIRD.</em>
            </h1>

            <p>
              Everyday pieces for people who
              don't follow the usual.
            </p>

            <a
              className="btn"
              href="#shop"
            >
              SHOP NOW →
            </a>

          </div>

        </section>

        {/* ===================================================
            CATEGORIES
        =================================================== */}

        <section className="cats">

          <span>
            SHOP BY
          </span>

          {[
            "ALL",
            "TEES",
            "LONG SLEEVES",
            "JERSEYS",
            "PANTS",
            "NEW DROP",
          ].map((category) => (

            <a
              key={category}
              href="#shop"
            >
              {category}
            </a>

          ))}

        </section>

        {/* ===================================================
            PRODUCTS
        =================================================== */}

        <section
          id="shop"
          className="section"
        >

          <div className="heading">

            <div>

              <small>
                FEATURED COLLECTION
              </small>

              <h2>
                LATEST DROPS
              </h2>

            </div>

            <a href="#shop">
              VIEW ALL →
            </a>

          </div>

          <div className="grid">

            {products.map((product, index) => (

              <article
                className="card"
                key={product.id}
                onClick={() => openProduct(product)}
              >

                <div className="pic">

                  <img
                    src={img(product.image)}
                    alt={product.name}
                    loading={
                      index < 2
                        ? "eager"
                        : "lazy"
                    }
                  />

                  {(index === 0 || index === 3) && (
                    <b>
                      NEW DROP
                    </b>
                  )}

                </div>

                <p>
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>

                <strong>
                  {formatPrice(product.price)}
                </strong>

              </article>

            ))}

          </div>

        </section>

        {/* ===================================================
            TRENDING
        =================================================== */}

        <section
          id="trending"
          className="trend"
        >

          <div>

            <small>
              WHAT'S MOVING
            </small>

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
            alt="Trending Weird Culture piece"
            loading="lazy"
          />

        </section>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <section
          id="about"
          className="about"
        >

          <small>
            OUR STORY
          </small>

          <h2>
            MORE THAN
            <br />
            JUST <em>CLOTHES.</em>
          </h2>

          <p>
            Weird Culture is a mindset.
            Built for the dreamers, the misfits,
            and the ones who don't follow.
          </p>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer id="contact">

        <a
          className="logo"
          href="#"
        >
          WEIRD<span>CULTURE</span>
        </a>

        <p>
          © 2026 Weird Culture.
          All rights reserved.
        </p>

      </footer>

    </>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <App />
);