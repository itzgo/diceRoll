import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollerComponent } from './dice-roller.component';

@NgModule({
  imports: [
    CommonModule,
    DiceRollerComponent // ✅ importando em vez de declarar
  ],
})
export class RollerModule {}
