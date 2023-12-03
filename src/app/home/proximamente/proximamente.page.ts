import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proximamente',
  templateUrl: './proximamente.page.html',
  styleUrls: ['./proximamente.page.scss'],
})
export class ProximamentePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home']); // Ajusta la ruta según tu configuración
  }
}
