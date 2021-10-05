const addItems = document.getElementsByClassName("plus-icon");

for (i = 0; i < addItems.length; i++) {
  const addItem = addItems[i];
  addItem.addEventListener("click", increaseQuantity);
  //   const itemValue = addItem.nextElementSibling;
}

function increaseQuantity(e) {
  //   const cartContainer = document.getElementsByClassName("cart-container")[0];

  //   const cartDetails = cartContainer.getElementsByClassName("cart-details");

  //   for (i = 0; i < cartDetails.length; i++) {
  //     const cartDetail = cartDetails[i];
  //     const newQuanity = cartDetail.getElementsByClassName("item-quantity")[0];

  //     newQuanity.innerText = 4;
  //   }

  const increaseQuantity = e.target;

  let increaseQuantityValues =
    increaseQuantity.previousElementSibling.innerText;

  for (i = 0; i < increaseQuantityValues; i++)
    increaseQuantityValue = increaseQuantityValues[i];
  increaseQuantityValue++;
  console.log(increaseQuantityValue);
}

//

const addItems = document.getElementsByClassName("plus-icon");

for (i = 0; i < addItems.length; i++) {
  const addItem = addItems[i];
  addItem.addEventListener("click", increaseQuantity);
}

function increaseQuantity(e) {
  const cartContainer = document.getElementsByClassName("cart-container")[0];

  const cartDetails = cartContainer.getElementsByClassName("cart-details")[0];

  let cartQuantityElement =
    cartDetails.getElementsByClassName("item-quantity")[0];
  //   cartQuantityElement.innerHTML += 1;
  cartQuantityValue = cartQuantityElement.innerText;
  cartQuantityValue = parseInt(cartQuantityValue);
  cartQuantityValue += 1;
  console.log(cartQuantityValue);
}

// function increaseQuantity(e) {
//   let itemsQuantity = document.getElementsByClassName("item-quantity");
//   for (i = 0; i < itemsQuantity.length; i++) {
//     let itemQuantity = itemsQuantity[i];
//     itemQuantity.value = parseInt(itemQuantity.value) + 1;
//     console.log(itemsQuantity);
//     updateCartTotal();
//   }
// }

// let itemQuantity = itemsQuantity[i];
// itemQuantity.value = parseInt(itemQuantity.value) + 1;
// console.log(itemsQuantity);
// updateCartTotal();

//   const cartContainer = document.getElementsByClassName("cart-container")[0];
//   const cartDetails = cartContainer.getElementsByClassName("cart-details");
//   for (i = 0; i < cartDetails.length; i++) {
//     const cartDetail = cartDetails[i];
//     let cartItemQuantity =
//       cartDetail.getElementsByClassName("item-quantity")[0];
//     cartItemQuantity.value = parseInt(cartItemQuantity.value) + 1;
//   }
