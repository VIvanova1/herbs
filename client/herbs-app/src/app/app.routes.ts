import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'herbs/catalog', component: CatalogComponent },
    { path: 'herbs/details/:id', component: DetailsComponent },
    { path: 'herbs/new', component: CreateComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
];
