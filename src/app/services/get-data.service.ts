import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  jsonUrl="https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10";
  postJsonURl = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) { }

  public getAllData():Observable<any>{
    return this.http.get<any>(this.jsonUrl);
  }

  public postData(body:Object): Observable<any>{
    return this.http.post<any>(this.postJsonURl,body);
  }
}
