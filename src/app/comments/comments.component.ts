import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']  // Corrected from styleUrl to styleUrls
})
export class CommentsComponent implements OnInit {  // Implement OnInit
  comments: any[] = [];

  constructor(private commentservice: CommentsService) {}

  ngOnInit(): void {  // Correct lifecycle hook method
    // Fetch comments
    this.commentservice.getComments().subscribe(
      (comments: any[]) => this.comments = comments,
      (error: any) => console.error('Failed to load comments', error)  // Optional: Handle error
    );
  }
}
