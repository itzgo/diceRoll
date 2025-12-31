import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DiceEngine, Dice, DiceResult, DiceSides } from '../../core/engine/dice.engine';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss'],
  standalone: true,
  imports: [NgFor] // necessário para usar *ngFor
})
export class DiceRollerComponent {
  diceTypes: DiceSides[] = [4, 6, 8, 10, 12, 20, 100];
  dices: Dice[] = [];
  results: DiceResult[] = [];
  engine = new DiceEngine();
  maxDice = 10;

  addDice(sides: DiceSides) {
    if (this.dices.length >= this.maxDice) return;
    this.dices.push({ sides });
  }

  rollAll() {
    this.results = this.engine.roll(this.dices);

    // animação simples
    this.results.forEach(r => {
      const el = document.getElementById(`dice-${r.id}`);
      if (el) {
        el.classList.remove('shake');
        void el.offsetWidth; // trigger reflow
        el.classList.add('shake');
      }
    });
  }

  clear() {
    this.dices = [];
    this.results = [];
  }

  removeDice(i: number) {
    this.dices.splice(i, 1);
  }
}
