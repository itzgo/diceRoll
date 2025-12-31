import { Component } from '@angular/core';
import { DiceRollerComponent } from './features/dice-roller/dice-roller.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DiceRollerComponent],
  templateUrl: './app.html',
})
export class AppComponent {}