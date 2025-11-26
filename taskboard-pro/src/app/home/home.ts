import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  ngOnInit() { //démarre lorsque le composant est affiché dans le DOM,
  console.log('Composant initialisé');
  }
  ngOnDestroy() { //se termine dès que le composant est retiré du DOM —par exemple, lorsqu’on change de route.
  console.log('Composant détruit');
  }
}
