let currentProduct = 0;

function loadProduct(index) {

  const product = PRODUCTS[index];

  document.getElementById("product-name").textContent =
    product.name;

  document.getElementById("product-price").textContent =
    product.price;

  document.getElementById("product-desc").textContent =
    product.description;

  document.getElementById("product-image").src =
    product.image;

  document.getElementById("product-imgdata1").src =
    product.imgdata1;

  document.getElementById("product-imgdata2").src =
    product.imgdata2;

  document.documentElement.style.setProperty(
    "--primary-color",
    product.primaryColor
  );
}

loadProduct(currentProduct);

document.getElementById("btn-next")
.addEventListener("click", () => {

  currentProduct++;

  if(currentProduct >= PRODUCTS.length){
    currentProduct = 0;
  }

  loadProduct(currentProduct);
});

document.getElementById("btn-prev")
.addEventListener("click", () => {

  currentProduct--;

  if(currentProduct < 0){
    currentProduct = PRODUCTS.length - 1;
  }

  loadProduct(currentProduct);
});