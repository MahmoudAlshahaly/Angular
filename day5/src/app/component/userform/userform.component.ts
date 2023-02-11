import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormGroup,FormControl,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  email:any="";
  password:any="";
  users:any;
  userId:any;
  constructor(private router:Router,private usersevice:UserService,public activatedRoute:ActivatedRoute)
  {
    this.userId=this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.usersevice.getAllUsers().subscribe(
      (response)=>{
        this.users=response;
      }
     );
  }
  add(email:any,password:any)
  {
    console.log(this.email);
    this.usersevice.addUser({email:this.email,password:this.password}).subscribe((response)=>{

    });
    // this.usersevice.getAllUsers().subscribe(
    //   (response)=>{
    //     this.users=response;
    //   }
    //  );
  }

  update(email:any,password:any)
  { 
   
   
    this.usersevice.editUser(this.userId,{email:this.email,password:this.password}).subscribe((response)=>{

    });
       
    
  }

  userForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
  get getEmail()
  {
    return this.userForm.controls['email'];
  }
  get getpassword()
  {
    return this.userForm.controls['password'];
  }
  login(e:any)
  {
   e.preventDefault();
   console.log(this.userForm);
  }
  backtohome()
  {
     this.router.navigate(['/users']);
  }
}
