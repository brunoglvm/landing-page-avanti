const searchInput = document.querySelector(".header__search-input");
const searchButton = document.querySelector(".header__search-button");

const handleSearch = () => {
  if (searchInput.value.trim() !== "") {
    alert(`Você buscou por: ${searchInput.value}`);
  }
};

searchButton.addEventListener("click", handleSearch);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});
