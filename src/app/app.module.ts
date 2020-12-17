import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { VideoComponent } from './components/common/video/video.component';
import { ProcessComponent } from './components/common/process/process.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { InstagramComponent } from './components/common/instagram/instagram.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { TeamComponent } from './components/pages/team/team.component';
import { HowItWorksComponent } from './components/pages/how-it-works/how-it-works.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CategoriesOneComponent } from './components/pages/categories-one/categories-one.component';
import { CategoriesTwoComponent } from './components/pages/categories-two/categories-two.component';
import { ListingOneComponent } from './components/pages/listing-one/listing-one.component';

import { ListingDetailsComponent } from './components/pages/listing-details/listing-details.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSearchComponent } from './components/pages/home-one/main-search/main-search.component';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from "../datepicker/datepicker.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    FooterComponent,
    AppDownloadComponent,
    FeedbackComponent,
    VideoComponent,
    ProcessComponent,
    HeaderOneComponent,
    PartnerComponent,
    HeaderTwoComponent,
    InstagramComponent,
    HeaderThreeComponent,
    AboutComponent,
    FunfactsComponent,
    TeamComponent,
    HowItWorksComponent,
    ContactComponent,
    CategoriesOneComponent,
    CategoriesTwoComponent,
    ListingOneComponent,
    ListingDetailsComponent,
    ProductListComponent,
    ProductsDetailsComponent,
    CartComponent,
    CheckoutComponent,
    FaqComponent,
    ErrorComponent,
    ComingSoonComponent,
    LoginComponent,
    RegisterComponent,
    MainSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NgbModule,
    FormsModule,
    DatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
