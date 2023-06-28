import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../../services.service';




@Component({

  selector: 'app-reviews',

  templateUrl: './reviews.component.html',

  styleUrls: ['./reviews.component.css']

})

export class ReviewsComponent implements OnInit {

  review: any; // Holds the list of reviews

  approved: any; // Tracks the approval status of a review

  cancel: any; // Tracks the cancellation status of a review

  products: any[] = []; // Holds the list of products

  productId: any; // Holds the ID of a product

  productName: any; // Holds the name of a product

  productCode: any; // Holds the code of a product




  constructor(private service: ServicesService) { }




  ngOnInit(): void {

    this.showReviews(); // Call the method to retrieve and display the list of reviews

  }




  // Method to retrieve and display the list of reviews

  showReviews() {

    this.service.showAdminReviews().subscribe({

      next: (data) => {

        this.review = data; // Set the retrieved reviews to the 'review' variable

      },

      error: (err) => {

        console.log(err); // Log any errors that occur during the retrieval process

      }

    });

  }




  // Method to approve a review

  approveReview(review: any) {

    this.service.approveReview(review).subscribe({

      next: (data) => {

        this.approved = data; // Set the approval status of the review

        this.showReviews(); // Update the displayed reviews after approval

      },

      error: (error) => {

        console.log(error); // Log any errors that occur during the approval process

      }

    });

  }




  // Method to cancel a review

  cancelReview(review: any) {

    this.service.cancelReview(review).subscribe({

      next: (data) => {

        // Handle success response, if needed

        this.cancel = data; // Set the cancellation status of the review

        this.showReviews(); // Update the displayed reviews after cancellation

      },

      error: (error) => {

        console.log(error); // Log any errors that occur during the cancellation process

      }

    });

  }




  // Method to generate an array of rating items based on the given rating

  getRatingItems(rating: number): number[] {

    const maxRating = 5; // Maximum rating value

    return Array.from({ length: Math.min(Math.floor(rating), maxRating) }); // Generate an array of rating items up to the maximum rating value

  }

}