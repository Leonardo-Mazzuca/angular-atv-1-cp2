import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.scss'
})
export class DynamicListComponent {

  fruitList = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Melância']
  
}
