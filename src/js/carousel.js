import { products } from "../data/products.js";

const carouselInner = document.getElementById("carouselInner");

const baseProduct = products[0];
const totalItems = 10;
const itemsPerSlide = 5;
const productList = Array.from({ length: totalItems }, () => baseProduct);

const slidesCount = Math.ceil(productList.length / itemsPerSlide);

for (let i = 0; i < slidesCount; i++) {
  const isActive = i === 0 ? "active" : "";
  const slideProducts = productList.slice(
    i * itemsPerSlide,
    (i + 1) * itemsPerSlide
  );

  const cardsHTML = slideProducts
    .map(
      (product) => `
        <div class="carousel__col">
          <div class="product-card">
            <div class="product-card__image-wrapper">
              <span class="product-card__tag">${product.tag}</span>
              <img src="${product.image}" class="product-card__image" alt="${product.title}" />
            </div>
            <div class="product-card__body">
              <h5 class="product-card__title">${product.title}</h5>
              <p class="product-card__original-price">${product.originalPrice}</p>
              <p class="product-card__discounted-price">${product.discountedPrice} <small class="product-card__discount">${product.discount}</small></p>
              <p class="product-card__installments">${product.installments}</p>
              <button class="product-card__button">Comprar</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  const slideHTML = `
    <div class="carousel-item ${isActive}">
      <div class="carousel__row">
        ${cardsHTML}
      </div>
    </div>
  `;

  carouselInner.insertAdjacentHTML("beforeend", slideHTML);
}
