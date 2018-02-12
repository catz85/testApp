import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {ProductsComponent} from "./products/products.component";
import {LoginGuard} from "./guards/login.guard";
import {ProductsResolver} from "./resolvers/products.resolver";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard], pathMatch: 'full', resolve: {products: ProductsResolver}},
    { path: '**', redirectTo: '/products' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}