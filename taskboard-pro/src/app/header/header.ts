import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
