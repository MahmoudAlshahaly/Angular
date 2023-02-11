import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todol:string[]=[];
  searchkey: string='';
  constructor(){}
  add(){
    this.todol.push(this.searchkey);
    this.searchkey='';
    
  }

  remove(index:number)
  {
    
   this.todol = this.todol.filter( (item,i) => {
     return index != i;
   } );
  }
}
