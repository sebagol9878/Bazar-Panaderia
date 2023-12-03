import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empezar-a-comprar',
  templateUrl: './empezar-a-comprar.page.html',
  styleUrls: ['./empezar-a-comprar.page.scss'],
})
export class EmpezarAComprarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home']); // Ajusta la ruta según tu configuración
  }

}
