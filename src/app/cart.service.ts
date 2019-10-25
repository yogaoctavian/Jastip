import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'BAJU',
      expanded: true,
      products: [
        { id: 0, name: 'tanktop Hawai', price: '200k' },
        { id: 1, name: 'Kemeja Pantai', price: '150k' },
        { id: 2, name: 'Jas Lab', price: '250k' },
        { id: 3, name: 'Baju Bengkel', price: '50k' }
      ]
    },
    {
      category: 'KOSMETIK',
      products: [
        { id: 4, name: 'Gincu', price: '100k' },
        { id: 5, name: 'Celak', price: '5k' }
      ]
    },
    {
      category: 'SEPATU',
      products: [
        { id: 6, name: 'Nike', price: '3jt' },
        { id: 7, name: 'Converse', price: '2jt' },
        { id: 8, name: 'Adidas', price: '2,5jt' }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
