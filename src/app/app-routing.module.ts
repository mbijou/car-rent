import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { HowItWorksComponent } from './components/pages/how-it-works/how-it-works.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CategoriesOneComponent } from './components/pages/categories-one/categories-one.component';
import { CategoriesTwoComponent } from './components/pages/categories-two/categories-two.component';
import { ListingDetailsComponent } from './components/pages/listing-details/listing-details.component';
import { ListingOneComponent } from './components/pages/listing-one/listing-one.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
	{path: '', component: HomeOneComponent},
	{path: 'about', component: AboutComponent},
	{path: 'team', component: TeamComponent},
	{path: 'how-it-works', component: HowItWorksComponent},
	{path: 'categories-one', component: CategoriesOneComponent},
	{path: 'categories-two', component: CategoriesTwoComponent},
	{path: 'listing-one', component: ListingOneComponent},
	{path: 'listing-details', component: ListingDetailsComponent},
	{path: 'product-list', component: ProductListComponent},
	{path: 'products-details', component: ProductsDetailsComponent},
	{path: 'cart', component: CartComponent},
	{path: 'checkout', component: CheckoutComponent},
	{path: 'faqs', component: FaqComponent},
	{path: 'error', component: ErrorComponent},
	{path: 'coming-soon', component: ComingSoonComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'contact', component: ContactComponent},
	{path: '**', component: ErrorComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule {}