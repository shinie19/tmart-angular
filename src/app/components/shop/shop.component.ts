import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { LazyLoadScriptService } from '../../lazy-load-script.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: any[] = [];
  watches: any[] = [];
  bags: any[] = [];
  kids: any[] = [];

  constructor(
    private lazyLoadService: LazyLoadScriptService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.lazyLoadService.loadScript('assets/js/main.js').subscribe((_) => {
      console.log('Jquery is loaded!');
    });
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.products = response;
        this.getAllWatches();
        this.getAllBags();
        this.getAllLego();
      },
      (err) => console.log('ERROR load products')
    );
  }

  getAllWatches(): void {
    this.products.forEach((p) => {
      if (p.category === 'watch') this.watches.push(p);
    });
  }

  getAllBags(): void {
    this.products.forEach((p) => {
      if (p.category === 'bag') this.bags.push(p);
    });
  }
  getAllLego(): void {
    this.products.forEach((p) => {
      if (p.category === 'lego') this.kids.push(p);
    });
  }
}
