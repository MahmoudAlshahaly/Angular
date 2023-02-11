import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  imgs:string[]=[ "assets/img/1.jpg","assets/img/2.jpg"];
  imgsrc:string="assets/img/1.jpg";
  count:number=0;
  showNext(){
    this.count++
    if(this.count==this.imgs.length)
    {
      this.count=0;
    }
    this.imgsrc=this.imgs[this.count];

  }
}
