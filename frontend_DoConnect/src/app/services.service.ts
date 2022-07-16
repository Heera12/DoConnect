import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';
import { AdminDetail } from './classes/admin-details';

@Injectable({    
  providedIn: 'root'
}) 
export class ServicesService {
  search() {
    throw new Error('Method not implemented.');
  }
  createUser: any;

  constructor(private http:HttpClient) { }
getQuestions():Observable<object>
{
  return this.http.get("http://localhost:9090/cap/project/quest/getall");
}

getAnswers():Observable<object>
{
  return this.http.get("http://localhost:9090/cap/project/answers/getall");
}

getUsers():Observable<object>
{
  return this.http.get("http://localhost:9090/cap/project/users/getall");
}

signupUser(adminDetail : AdminDetail) : Observable<any>
{
    return this.http.post("http://localhost:9090/cap/project/users/add",adminDetail);
}

loginUser(adminDetail : AdminDetail) : Observable<any>
{
    return this.http.post("http://localhost:9090/cap/project/users/login",adminDetail);
}

createQuestions(quest:object):Observable<object>{
  return this.http.post<any>("http://localhost:9090/cap/project/quest/add",quest);
  }




getPendingQuestions():Observable<object>{
  return this.http.get("http://localhost:9090/cap/project/quest/getall");
}

getPendingAnswers():Observable<object>{
  return this.http.get("http://localhost:9090/cap/project/quest/getall");
}



createAnswers(questions:object):Observable<object>{
  return this.http.post<any>("http://localhost:9090/cap/project/answers/add"+'save-answer',questions)
}
}