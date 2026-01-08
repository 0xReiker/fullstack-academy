let total = 0;
const cartButton = document.getElementById("cart-button");
const addButtons = document.querySelectorAll("article button");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const article = button.parentElement;
    const priceText = article.querySelector(".priceLarge").textContent;
    const price = parseFloat(priceText.replace("$", ""));

    total += price;

    cartButton.textContent = `Cart: $${total.toFixed(2)}`;
  });
});
