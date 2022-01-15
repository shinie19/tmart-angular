import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShopComponent } from './components/shop/shop.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LazyLoadScriptService } from './lazy-load-script.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailsComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    LoginRegisterComponent,
    ProductDetailsComponent,
    ShopComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LazyLoadScriptService],
  bootstrap: [AppComponent],
})
export class AppModule {}
