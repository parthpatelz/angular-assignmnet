import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isNavHidden: boolean = true;
  featuresVisible = false;
  features = [
    { title: 'Feature 1', description: 'Description of feature 1' },
    { title: 'Feature 2', description: 'Description of feature 2' },
    { title: 'Feature 3', description: 'Description of feature 3' }
  ];
  testimonials = [
    { text: 'This is the best service ever!', author: 'Customer 1' },
    { text: 'I love this product!', author: 'Customer 2' },
    { text: 'Excellent experience!', author: 'Customer 3' }
  ];
  ngOnInit() {
    if (typeof window !== 'undefined') {  // Check if window is defined
      window.addEventListener('scroll', () => {
        const featuresSection = document.querySelector('.features-section');

        if (featuresSection) {  // Null check
          const position = featuresSection.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (position < windowHeight - 50) {
            this.featuresVisible = true;
          }
        }
      });
    }
  }


  toggleNav() {
    this.isNavHidden = !this.isNavHidden;
  }
}
