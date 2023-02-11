import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userId:any;
 user:any;
  constructor(public activatedRoute:ActivatedRoute,private router:Router,private userservice:UserService)
  {
        this.userId=this.activatedRoute.snapshot.params['id'];
        console.log(this.userId);
  }
  ngOnInit():void{
    this.userservice.getUserByID(this.userId).subscribe(
     (response)=>{
       this.user=response;
     }
    );
}
  backtohome()
  {
     this.router.navigate(['/users']);
  }
}
