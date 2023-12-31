import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TestAppRoutingModule } from './test-app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { authInterceptorProviders } from './auth.interceptor';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { ShowReviewComponent } from './show-review/show-review.component';
import { AddReviewsComponent } from './add-reviews/add-reviews.component';

import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { RequestReviewComponent } from './request-review/request-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchpageComponent } from './searchpage/searchpage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AddReviewsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RequestReviewComponent,

    ShowReviewComponent,
    DashboardComponent,
    ProductsComponent,
    ReviewsComponent,
   
    UsersComponent,
    AddProductComponent,
    SearchpageComponent
  ],
  imports: [
    CommonModule,
    TestAppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    NgbRatingModule,
    
    
    NgbModule

    
  ],
  providers: [authInterceptorProviders]
})

export class TestAppModule { }
