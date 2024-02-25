import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
  .subscribe(
    (products: Products) => {
      console.log(products.items);
    },
    (error) => {
      console.error('Erro na solicitação HTTP:', error);
    }
  );

  }
}
