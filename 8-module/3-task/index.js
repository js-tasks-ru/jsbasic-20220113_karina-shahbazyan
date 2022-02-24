export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product === null || product === undefined) return;
    let counter = 1;
    let cartItem = { 
      product: product,
      count: counter
    }
    let cardItemIndex= this.cartItems.findIndex(item => item.product == product);
    if (cardItemIndex > -1) {
      this.cartItems[cardItemIndex].count++;
    }
    else {
      this.cartItems.push(cartItem);
    }
    this.onProductUpdate(this.cartItem);
  }

  updateProductCount(productId, amount) {
    let cardItemIndex= this.cartItems.findIndex(item => item.product.id == productId);
    if (this.cartItems[cardItemIndex].count < 2 && amount == -1) {
      this.cartItems.splice(0, 1);
      console.log("удаление")
    }
    else if (this.cartItems[cardItemIndex].count >= 1) {
      this.cartItems[cardItemIndex].count+=amount;
    }
    this.onProductUpdate(this.cartItem);
  }

  isEmpty() {
    if (this.cartItems.length === 0){
      return true;
    } 
    else return false;
  }

  getTotalCount = () => {
    let totalCount = 0;
    for (let key in this.cartItems) {
      totalCount += this.cartItems[key].count
    }
    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let key in this.cartItems) {
      totalPrice += this.cartItems[key].product.price*this.cartItems[key].count;
    }
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    if (cartItem === null) return;
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

