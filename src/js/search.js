const searchInput = document.getElementById("headerSearchInput");
const searchButton = document.getElementById("headerSearchButton");

const handleSearch = () => {
  if (searchInput.value.trim() !== "") {
    alert(`Você buscou por: ${searchInput.value}`);
  }
};

searchButton.addEventListener("click", handleSearch);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});
