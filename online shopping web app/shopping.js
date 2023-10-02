
function buyProduct(productName, price) {
    var checkout = document.getElementById("checkout");
    var product = document.createElement("p");
    product.textContent = productName + " - $" + price;
    checkout.appendChild(product);
}
