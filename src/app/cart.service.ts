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
        { id: 0, name: 'tanktop Hawai', price: '200' },
        { id: 1, name: 'Kemeja Pantai', price: '150' },
        { id: 2, name: 'Jas Lab', price: '250' },
        { id: 3, name: 'Baju Bengkel', price: '50' }
      ]
    },
    {
      category: 'KOSMETIK',
      products: [
        { id: 4, name: 'Gincu', price: '100' },
        { id: 5, name: 'Celak', price: '5' }
      ]
    },
    {
      category: 'SEPATU',
      products: [
        { id: 6, name: 'Nike', price: '3' },
        { id: 7, name: 'Converse', price: '2' },
        { id: 8, name: 'Adidas', price: '25' }
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
