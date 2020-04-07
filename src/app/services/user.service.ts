import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllPersons(): Observable<User[]> {
    // const url = 'https://jsonplaceholder.typicode.com/todos'
    const url = `${environment.apiUrl}/users?LIMIT=3`
     return this.http.get<User[]>(url)
  }
}
