import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
  users:any;
//////////////////////////////////



  ///////////////////////
 constructor(private usersevice:UserService){}
  ngOnInit():void{
       this.usersevice.getAllUsers().subscribe(
        (response)=>{
          this.users=response;
        }
       );
      
  }
  deleteUserHandler(userId:any)
  {
    this.usersevice.deleteUser(userId).subscribe(
      (response)=>{
        this.users=this.users.filter((user:any)=>{
             return user.id != userId;
        });
      }
     );
  }
  edit(userID:any,email:any,password:any)
  {
    // this.usersevice.editUser(userId,{email:this.email,password:this.password}).subscribe((response)=>{

    // }); 
    console.log(userID,email,password);
  }
}
