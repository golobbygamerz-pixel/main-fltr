import React, { useEffect, useState } from "react";
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

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [flyingProduct, setFlyingProduct] = useState(null);

  const openSearch = () => {
    setSearchOpen(true);
    setSearchTerm("");
    setSelectedProduct(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchTerm("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedSize("");
    setCartMessage("");
    setSearchOpen(false);
    setSearchTerm("");

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

    setFlyingProduct({
      image: selectedProduct.image,
      id: Date.now(),
    });
  };

  useEffect(() => {
    if (!flyingProduct) return;

    const timer = setTimeout(() => {
      setFlyingProduct(null);
    }, 900);

    return () => clearTimeout(timer);
  }, [flyingProduct]);

  const buyNow = () => {
    if (!selectedSize) {
      setCartMessage("SELECT A SIZE FIRST");
      return;
    }

    setCartMessage(
      `READY TO BUY — ${selectedProduct.name} / SIZE ${selectedSize}`
    );
  };

  const filteredProducts = products.filter((product) => {
    const query = searchTerm.toLowerCase().trim();

    if (!query) return true;

    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  /*
  ========================================
  PRODUCT DETAIL PAGE
  ========================================
  */

  if (selectedProduct) {
    return (
      <div className="productPage">

        {flyingProduct && (
          <img
            className="flyingProduct"
            src={img(flyingProduct.image)}
            alt=""
          />
        )}

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
            MAIN<span>FILTER</span>
          </a>

          <div className="productCart">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="20" r="1.3" />
              <circle cx="19" cy="20" r="1.3" />
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.5L22 8H6" />
            </svg>

            <b>{cartCount}</b>

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

  /*
  ========================================
  SEARCH PAGE
  ========================================
  */

  if (searchOpen) {
    return (
      <div className="searchPage">

        <header className="searchPageHeader">

          <button
            className="searchBackButton"
            onClick={closeSearch}
          >
            ← BACK
          </button>

          <a
            className="logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeSearch();
            }}
          >
            MAIN<span>FILTER</span>
          </a>

          <div className="searchPageSpacer"></div>

        </header>

        <main className="searchPageContent">

          <div className="searchPageTop">

            <small>
              SEARCH
            </small>

            <h1>
              FIND YOUR FIT.
            </h1>

          </div>

          <div className="bigSearchBox">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
              />

              <path d="m16 16 5 5" />
            </svg>

            <input
              className="bigSearchInput"
              type="text"
              placeholder="SEARCH PRODUCTS..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              autoFocus
            />

            {searchTerm && (
              <button
                className="clearSearch"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

          </div>

          <div className="searchPageMeta">

            <span>
              {searchTerm
                ? `${filteredProducts.length} RESULTS`
                : "ALL PRODUCTS"}
            </span>

          </div>

          <div className="searchProductGrid">

            {filteredProducts.length > 0 ? (

              filteredProducts.map((product) => (

                <article
                  className="card"
                  key={product.id}
                  onClick={() => openProduct(product)}
                >

                  <div className="pic">

                    <img
                      src={img(product.image)}
                      alt={product.name}
                    />

                    {(product.id === 1 ||
                      product.id === 4) && (
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

              ))

            ) : (

              <div className="noSearchResults">
                <h2>NO PRODUCTS FOUND.</h2>

                <p>
                  Try searching for another product
                  or category.
                </p>

                <button
                  onClick={() => setSearchTerm("")}
                >
                  VIEW ALL PRODUCTS →
                </button>
              </div>

            )}

          </div>

        </main>

      </div>
    );
  }

  /*
  ========================================
  HOME PAGE
  ========================================
  */

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
            MAIN<span>FILTER</span>
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
              onClick={openSearch}
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
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
              aria-label={`Shopping cart with ${cartCount} items`}
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >

                <circle
                  cx="9"
                  cy="20"
                  r="1.3"
                />

                <circle
                  cx="19"
                  cy="20"
                  r="1.3"
                />

                <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.5L22 8H6" />

              </svg>

              <b>
                {cartCount}
              </b>

            </a>

          </div>

        </nav>

      </header>

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
              CHECK FITS →
            </a>

          </div>

        </section>

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

            {products.map(
              (product, index) => (

                <article
                  className="card"
                  key={product.id}
                  onClick={() =>
                    openProduct(product)
                  }
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

                    {(product.id === 1 ||
                      product.id === 4) && (
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

              )
            )}

          </div>

        </section>

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
            alt="Trending Mainfilter piece"
            loading="lazy"
          />

        </section>

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
            Mainfilter is a mindset.
            Built for the dreamers, the misfits,
            and the ones who don't follow.
          </p>

        </section>

      </main>

      <footer id="contact">

        <a
          className="logo"
          href="#"
        >
          MAIN<span>FILTER</span>
        </a>

        <p>
          © 2026 Mainfilter.
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