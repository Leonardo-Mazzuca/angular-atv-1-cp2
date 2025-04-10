import { Component } from '@angular/core';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss'
})
export class AccessComponent {

  age:number = 19

  increaseAge () {
    this.age++;
  }

  decreaseAge () {
    this.age--;
    if(this.age<1) this.age = 1;
  }


}
