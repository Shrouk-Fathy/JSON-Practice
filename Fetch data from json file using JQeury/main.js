
// ----------------- 1 -Fetch Data From Json File Using jQuery --------------------

$(document).ready(function () {
  $.getJSON("products.json", function (data) {
    $.each(data, function (index, product) {
      const productContainer = document.createElement("div");
      const productImg = document.createElement("img");
      const productTitle = document.createElement("h2");
      const productDescription = document.createElement("p");
      const productPrice = document.createElement("span");
      const addToCart = document.createElement("span");

      productContainer.className = "product";
      productImg.className = ".productImg";
      productTitle.className = "title";
      productDescription.className = "description";
      productPrice.className = "price";
      addToCart.className = "addToChart";

      productImg.src = product.image;
      productTitle.innerText = product.title;
      productDescription.innerText = product.description;
      productPrice.innerText = product.price + "$";
      addToCart.innerHTML = `Add To Cart 
        <lord-icon
            src="https://cdn.lordicon.com/guothkao.json"
            trigger="loop-on-hover"
            stroke="bold"
            style="width:30px;height:30px;margin-left:5px">
       </lord-icon>`;

      productContainer.append(productImg);
      productContainer.append(productTitle);
      productContainer.append(productDescription);
      productContainer.append(productPrice);
      productContainer.append(addToCart);

      $("#product-list").append(productContainer);
    });
  }).fail(function(){
      $("#container").addClass("hidden");
  })
});
