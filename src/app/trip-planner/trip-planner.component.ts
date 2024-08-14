import { Component } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-trip-planner',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.css'
})
export class TripPlannerComponent {
  onSubmit(form: NgForm) {
    // Handle form submission logic here
    console.log('Form submitted', form.value);
    alert("Form Submitted");
    form.reset();
  }
}

