import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) { }
  login(oData) {
  	return new Promise((resolve, reject) => {
      	this.http.post("http://sc1re.fuyhui.com/shopApp/pub/userAccount/login", oData, httpOptions).subscribe(res=>{ 
			resolve(res)
		}) 
  	})
  }
}