import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl:string="http://localhost:3321/users";
  constructor(private myclient:HttpClient) { }
  getAllUsers() { return this.myclient.get(this.baseUrl)};
  getUserByID(userId:any){return this.myclient.get(`${this.baseUrl}/${userId}`) };
 addUser(user:any){return this.myclient.post(this.baseUrl,user)};
  deleteUser(userId:any){
    return this.myclient.delete(`${this.baseUrl}/${userId}`)
  };
  editUser(userId:any,user:any){
     return this.myclient.put(`${this.baseUrl}/${userId}`,user)
  };

}
