import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
  imports: [NgFor]
})
export class HeaderComponent {
  navList = ["Home", "Genres", "Favorites"]
}
