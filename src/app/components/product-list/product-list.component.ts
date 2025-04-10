import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    {id: 1, name : "Notebook", price: 3000, promocao: true},
    {id: 2, name : "Whey protein", price: 150, promocao: false},
    {id: 3, name : "Cadeira gamer", price: 500, promocao: true},
  ]
}
