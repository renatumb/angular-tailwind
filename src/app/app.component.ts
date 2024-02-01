import {Component} from '@angular/core';
import {NgClass} from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NgClass
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  public menuOpen: boolean = false;
}
