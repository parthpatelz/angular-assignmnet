import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { CommentsService } from './comments.service';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HomeComponent, FooterComponent,FormsModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: any[] = [];
  errorMessage: string = '';
  photos: any[]=[];
  comments: any[]=[];

  constructor(private photoService: DataService, private commentservice: CommentsService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(
      (photos) => this.data = photos,
      (error: any) => this.errorMessage = 'Failed to load photos'
    );
      // Fetch comments
      this.commentservice.getComments().subscribe(
        (comments: any[]) => this.comments = comments,
        (error: any) => this.errorMessage = 'Failed to load comments'
      );
  }
}
