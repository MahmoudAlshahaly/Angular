import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.css']
})
export class DropdownlistComponent {
  SelectValue:string='';
  alllist:any[]=[
    {id:0,place:"menoufia & smart"},
    {id:1,place:"banha & aswan"},
    {id:2,place:"not exist this year"},
    {id:3,place:"will be open"}];
  getData(e:any)
  {       
    for(let i=0;i<this.alllist.length;i++)
    {
      if(e.target.value==this.alllist[i].id)
      {   
        //console.log(e.target.value);   
        this.SelectValue=this.alllist[i].place;
      }
    }
  }
}
