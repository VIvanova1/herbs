import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'new', component: CreateComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
];
