// Shopping Cart Management with localStorage
export class ShoppingCart {
  constructor() {
    this.storageKey = "cart";
    this.cart = this.loadCart();
  }

  // Load cart from localStorage
  loadCart() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  }

  // Save cart to localStorage
  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }

  // Add item to cart
  addItem(product, quantity = 1) {
    const existingItem = this.cart.find((item) => item.id == product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: quantity,
      });
    }

    this.saveCart();
  }

  // Remove item from cart
  removeItem(productId) {
    this.cart = this.cart.filter((item) => item.id != productId);
    this.saveCart();
  }

  // Update item quantity
  updateQuantity(productId, quantity) {
    const item = this.cart.find((item) => item.id == productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  }

  isFound(productId) {
    return this.cart.find((item) => item.id == productId);
  }

  // Get cart items
  getItems() {
    return this.cart;
  }

  // Get cart total
  getTotal() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  // Clear cart
  clear() {
    this.cart = [];
    this.saveCart();
  }

}

// Export singleton instance
export const cart = new ShoppingCart();
