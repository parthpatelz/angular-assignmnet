import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from 'express';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule,
    FormsModule, CommonModule,
    ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  submitForm(form: NgForm) {
    if (form.valid) {
      // Log form data to the console
      console.log('Form Data:', form.value);

      // Show a popup with the form data
      alert(`Form submitted!\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`);

      // Reset form after submission (optional)
      form.reset();
    } else {
      // Log validation errors if form is invalid
      console.log('Form is invalid');
      // Optionally display a custom error message or perform additional actions
    }
  }
}