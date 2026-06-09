import { Component } from '@angular/core';
import { HomePage } from './features/landing/pages/home/home';

@Component({
  selector: 'app-root',
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
