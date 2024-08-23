import { Component } from '@angular/core';
import { BordeRojoComponent } from './borde-rojo/borde-rojo.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BordeRojoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Veterinaria-Pets';
}
