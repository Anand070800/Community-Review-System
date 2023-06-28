import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';

import { Router } from '@angular/router';




@Component({

  selector: 'app-show-review',

  templateUrl: './show-review.component.html',

  styleUrls: ['./show-review.component.css']

})

export class ShowReviewComponent implements OnInit {

  constructor(private service: ServicesService, private router: Router) { }




  review: any; // Holds the review data

  p: any; // Holds the product data

  product: any; // Holds the selected product

  productName: any; // Holds the name of the product

  productCode: any; // Holds the code of the product

  averageRating: number = 0; // Holds the average rating of the product




  ngOnInit(): void {

    const productId = localStorage.getItem("reviewProductId");




    // Retrieve the reviews for the selected product

    this.service.showReviews(productId).subscribe({

      next: (data) => {

        this.p = localStorage.getItem("products");

        if (this.p != null) {

          this.p = JSON.parse(this.p);

          this.p.forEach((element: any) => {

            if (element.productId == productId) {

              this.product = element;

            }

          });

        }

        this.review = data;

        this.calculateAverageRating();

      },

      error: (err) => console.log(err)

    });

  }




  // Calculate the average rating of the product

  calculateAverageRating() {

    let sum = 0;

    let count = 0;




    this.review.forEach((r: any) => {

      if (r.approved && r.rating) {

        sum += r.rating;

        count++;

      }

    });




    if (count > 0) {

      this.averageRating = sum / count;

    }

  }




  // Log out the user

  logout() {

    this.service.logout();

    this.router.navigate(['login']);

  }




  // Check if the user is logged in

  loggedIn() {

    return this.service.isLogIn();

  }




  // Get the current user

  currentUser() {

    return this.service.getUser().firstName + " " + this.service.getUser().lastName;

  }




  // Navigate to the home page

  routerHome() {

    window.location.href = "home";

  }




  // Get the rating items based on the rating value

  getRatingItems(rating: number): number[] {

    const maxRating = 5;

    return Array.from({ length: Math.min(Math.floor(rating), maxRating) });

  }




  // Get the rating percentage for styling purposes

  getRatingPercentage(rating: number): string {

    const percentage = (rating / 5) * 100;

    return `${percentage}%`;

  }

}