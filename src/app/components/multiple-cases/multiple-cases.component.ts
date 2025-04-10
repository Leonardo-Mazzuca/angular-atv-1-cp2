import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-cases',
  standalone: true,
  imports: [],
  templateUrl: './multiple-cases.component.html',
  styleUrl: './multiple-cases.component.scss'
})
export class MultipleCasesComponent {

  status = ["Pendente", "Enviado", "Entregue"]
  currentStatus = "Status desconhecido"

  changeStatus (e:Event) {
    const target = e.target as HTMLSelectElement;
    this.currentStatus = target.value;
  }
}
