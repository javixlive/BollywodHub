import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
  imports: [NgFor]
})
export class HeaderComponent {

  constructor(private router:Router){}

  ngOnInit(): void {

  }

  searchMovie(text:string) {
    text = text.trim();
    if(text.length === 0) return;
    this.router.navigate(['/search',text]);
  }
}
