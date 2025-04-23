const carousels = document.querySelectorAll(".carousel-inner");

carousels.forEach((carouselInner, index) => {
  const totalItems = 15;
  const itemsPerSlide = 5;

  const slidesCount = Math.ceil(totalItems / itemsPerSlide);

  for (let i = 0; i < slidesCount; i++) {
    const isActive = i === 0 ? "active" : "";

    const cardsHTML = Array.from({ length: itemsPerSlide })
      .map(
        () => `
        <div class="carousel__col">
          <div class="product-card">
            <div class="product-card__image-wrapper">
              <span class="product-card__tag">Novo</span>
              <img src="src/assets/images/product.webp" class="product-card__image" alt="Lorem ipsum dolor sit amet consectetuer adipiscing elit" />
            </div>
            <div class="product-card__body">
              <h5 class="product-card__title">Lorem ipsum dolor sit amet consectetuer adipiscing elit</h5>
              <div class="product-card__price">
                <div class="product-card__price-details">
                  <p class="product-card__original-price">R$ 100,00</p>
                  <p class="product-card__discounted-price">R$79,90</p>
                </div>
                <p class="product-card__discount">10% off</p>
              </div>
              <p class="product-card__installments">Ou em até <span class="product-card__installments-highlight">10x de R$ 7,90</span></p>
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
});
