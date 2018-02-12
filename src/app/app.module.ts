import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from "./app.routing";
import {AuthenticationService} from "./services/auth.service";
import {ProductService} from "./services/products.service";
import {AuthGuard} from "./guards/auth.guard";
import {ConfigService} from "./services/api-config.service";
import {ProductsComponent} from './products/products.component';
import {LoginGuard} from "./guards/login.guard";
import {ProductsResolver} from "./resolvers/products.resolver";
import {ProductComponent} from './products/product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProductsComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        AuthenticationService,
        ProductService,
        AuthGuard,
        ConfigService,
        LoginGuard,
        ProductsResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
