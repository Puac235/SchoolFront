import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URI = 'http://192.168.0.153:3000/api';  //URL
  
  constructor(private http: HttpClient) { }

  getLogin(user:any){
    return this.http.post(`${this.API_URI}/login`, user);
  }

  public setUser(user: any) : void{
    let usr_string = JSON.stringify(user);
    localStorage.setItem('currentuser',usr_string);
  }

  public getCurrentUser(){
    let user_string = localStorage.getItem('currentuser');
    if(!isNullOrUndefined(user_string)){
      let user = JSON.parse(user_string);
      return user;
    }
    return false;
  }

  public removeUser() : void{
    localStorage.removeItem("currentuser");
  }
}
