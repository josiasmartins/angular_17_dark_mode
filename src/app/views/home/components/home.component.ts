import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  toogle(): void {
    
    // const darkMode = document.getElementById("toogleDarkMode");

    // darkMode?.addEventListener('click', () => {
      document.body.classList.toggle('dark_mode')
    // });

  }

  public navigateToLogin(): void {
    this.router.navigate(['login'])
  }


}
