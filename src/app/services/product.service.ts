import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
}
