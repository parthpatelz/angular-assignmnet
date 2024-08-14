import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GeonamesService } from '../geonames.service';



@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})

export class ExploreComponent implements OnInit {

  geonames: any[] = [];
  paginatedGeonames: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;

  constructor(private geonamesService: GeonamesService) {}

  ngOnInit(): void {
    this.fetchAllList();
  }

  fetchAllList() {
    this.geonamesService.fetchGeonames().subscribe(
      (response: any) => {
        if (response && response.items) {
          this.geonames = response.items.map((item: any) => ({
            name: item.name,
            location: item.location,
          }));
          this.totalPages = Math.ceil(this.geonames.length / this.itemsPerPage);
          this.updatePagination();
        } else {
          console.error('Unexpected response structure:', response);
        }
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedGeonames = this.geonames.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
}