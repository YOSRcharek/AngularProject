import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
 baseUrl:string='http://localhost:3000/'
  constructor(private http:HttpClient) {
 }
 get<T>(endpoint:string,id:number=0){
  return id!=0 
  ? this.http.get<T>(`${this.baseUrl}${endpoint}/${id}`)
  : this.http.get<T>(`${this.baseUrl}${endpoint}`);
 }
add<T>(){

}
update<T>(){

}
delete<T>(){

}

}
