// Search Filter
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll("#productGrid > div");

  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();

    products.forEach(product => {
      const name = product.querySelector(".product-name").textContent.toLowerCase();
      if (name.includes(query)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
