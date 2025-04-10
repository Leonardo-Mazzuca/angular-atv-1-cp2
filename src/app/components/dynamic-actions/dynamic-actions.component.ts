import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-actions',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-actions.component.html',
  styleUrl: './dynamic-actions.component.scss'
})
export class DynamicActionsComponent {
  errands = ["Estudar angular", "Treinar", "Tocar bateria"]

  removeErrand (index:number) {
    this.errands.splice(index,1)
  }
}
