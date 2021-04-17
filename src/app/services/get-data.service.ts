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
  //*This method serve to create a http link between the json file and the front side. This is a get method */
  public getAllData():Observable<any>{
    return this.http.get<any>(this.jsonUrl);
  }
 //*This method serve to create a http link between the json file and the front side. This is a POST method*/
  public postData(body:Object): Observable<any>{
    return this.http.post<any>(this.postJsonURl,body);
  }
}
