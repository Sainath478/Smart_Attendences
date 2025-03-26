import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getAllFaculty(): Observable<any> {
    const apiUrl = "http://localhost:8091/user/get-all-faculty";
    return this.http.get(apiUrl);
  }

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/login-user";

    return this.http.post(apiUrl, user);

  }

  registerUser(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/register-user";

    return this.http.post(apiUrl, user,{responseType: 'text' as 'json'});
  }

  getAllUsers(): Observable<any> {
    const apiUrl = "http://localhost:8091/user/get-all-user";

    return this.http.get(apiUrl);
  }

  deleteUser(username: String): Observable<any> {
    const apiUrl = `http://localhost:8091/user/delete-user-by-username/?username=${username}`;

    return this.http.delete(apiUrl,{responseType: 'text'});
  }

  editUser(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/update-user";

    return this.http.put(apiUrl, user,{responseType: 'text'});
  }

  getUserByUsername(username: String): Observable<any> {
    const apiUrl = `http://localhost:8091/user/get-user-by-username/${username}`;

    return this.http.get(apiUrl);
  }

  updateUser(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/update-user";

    return this.http.put(apiUrl, user,{responseType: 'text'});
  }


}
