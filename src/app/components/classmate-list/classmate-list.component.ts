import { Component } from '@angular/core';
import { Classmate } from '../../../../@types/types';

@Component({
  selector: 'app-classmate-list',
  standalone: true,
  imports: [],
  templateUrl: './classmate-list.component.html',
  styleUrl: './classmate-list.component.scss'
})
export class ClassmateListComponent {
  classmates:Classmate[]= [
    {id: 1, age: 19, name: "Mazzuca"},
    {id: 2, age: 19, name: "Ana"},
    {id: 3, age: 21, name: "Deivid"},
    {id: 4, age: 19, name: "Luisão"},
    {id: 5, age: 21, name: "Livia"},
    {id: 6, age: 19, name: "Sophia"},
    {id: 7, age: 19, name: "Arthur"},
  ]
}
