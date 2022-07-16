import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';
import { AdminDetail } from './classes/admin-details';

@Injectable({    
  providedIn: 'root'
}) 
export class ServicesService {
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
addUser(user:object):Observable<object>{
  return this.http.post("http://localhost:9090/cap/project/users/add", user);
}

signupUser(adminDetail : AdminDetail) : Observable<any>
{
    return this.http.post("http://localhost:9090/cap/project/users/add",adminDetail);
}

loginUser(adminDetail : AdminDetail) : Observable<any>
{
    return this.http.post("http://localhost:9090/cap/project/users/login",adminDetail);
}

login(user:object):Observable<object>{
  console.log(user)
  return this.http.post("http://localhost:9090/cap/project/users/login",user);
}

getPendingQuestions():Observable<object>{
  return this.http.get("http://localhost:9090/cap/project/quest/getall");
}

getPendingAnswers():Observable<object>{
  return this.http.get("http://localhost:9090/cap/project/quest/getall");
}
createQuestions(questions:object):Observable<object>{
  return this.http.post<any>("http://localhost:9090/cap/project/quest/add"+'save-question',questions)
  }

createAnswers(questions:object):Observable<object>{
  return this.http.post<any>("http://localhost:9090/cap/project/answers/add"+'save-answer',questions)
}
}