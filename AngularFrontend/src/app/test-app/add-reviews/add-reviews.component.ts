import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ServicesService } from '../services.service';




@Component({

  selector: 'app-add-reviews',

  templateUrl: './add-reviews.component.html',

  styleUrls: ['./add-reviews.component.css']

})

export class AddReviewsComponent implements OnInit {

  rating: number=1; // The current rating selected by the user

  ratingOptions: number[] = [1, 2, 3, 4, 5]; // Available rating options

  review: any; // The review content entered by the user




  constructor(private service: ServicesService, private router: Router) {

   

   }




  ngOnInit(): void {

  }




  errorMessage: string = ''; // Error message to display if any error occurs during review submission




  // Method to add a new review

  addReview(form: any) {

    const reviewText = form.value.review; // Get the review text from the form

   

    // Validate the review text

    if (reviewText.trim() !== '') { // Check if the review text is not empty

      if (reviewText.length >= 5 && reviewText.length <= 400) { // Check if the review text length is between 5 and 400 characters

        const newPost = {

          heading: form.value.heading, // Get the review heading from the form

          rating: form.value.rating, // Get the rating from the form

          review: reviewText, // Set the review text

          productName: form.value.productName, // Get the product name from the form

          productCode: form.value.productCode, // Get the product code from the form

          productId: localStorage.getItem('reviewProductId'), // Get the product ID from the localStorage

        };




        // Call the service to add the review

        this.service.addReview(newPost).subscribe(

          (data) => {

            this.router.navigate(['home']); // Redirect to the home page after successful review submission

          },

          (err) => {

            this.errorMessage = 'An error occurred while adding the review. Please try again.'; // Set the error message if there's an error

          }

        );

      } else {

        this.errorMessage = 'Review must be between 5 and 400 characters.'; // Set the error message for review length validation

      }

    } else {

      this.errorMessage = 'This field is required.'; // Set the error message if the review text is empty

    }

  }

 

  // Method to log out the user

  logout() {

    this.service.logout();

    this.router.navigate(['login']); // Redirect to the login page after logging out

  }




  // Check if a user is logged in

  loggedIn() {

    return this.service.isLogIn();

  }




  // Get the current user's full name

  currentUser() {

    return this.service.getUser().firstName + " " + this.service.getUser().lastName;

  }




  // Get an array of rating items based on the rating value

  getRatingItems(rating: number): number[] {

    return Array(Math.floor(rating)).fill(0);

  }




  // Get the rating percentage to display as CSS width

  getRatingPercentage(rating: number): string {

    const percentage = (rating / 5) * 100;

    return `${percentage}%`;

  }




  // Prevent input of numbers in the rating input field

  preventNumberInput(event: KeyboardEvent) {

    //const input = event.target as HTMLInputElement;

    const key = event.key;

 




    // Allow navigation keys (arrows, home, end) and backspace

    if (key.includes('Arrow') || key === 'Backspace' || key === 'Home' || key === 'End') {

      return;

    }

 

    // Prevent input of numbers

    if (!isNaN(parseInt(key, 10))) {

      event.preventDefault();

    }

  }

 

  // Prevent pasting into the rating input field

  preventPaste(event: ClipboardEvent) {

    event.preventDefault();

  }

  // Prevent dropping into the rating input field

  preventDrop(event: DragEvent) {

    event.preventDefault();

  }




 

// Set the rating value when a rating option is selected

setRating(value: number) {

  this.rating = value;

}




// Reset the input value to the current rating to restrict manual input

restrictInput(event: any) {

  event.target.value = this.rating; // Reset the input value to the current rating

}





}