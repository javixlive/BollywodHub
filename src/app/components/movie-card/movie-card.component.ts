import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../../interface/titles.interface';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'movie-card.component.html',
  styleUrl: 'movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movies?:Movie[]
}
