import { Injectable } from '@angular/core';
import { BaseService } from '@api/baseService'
 

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private baseService: BaseService) { }
  login(oData) {
  	return this.baseService.request({
      method: 'POST',
      url: "/assets/json/login.json",
      data: oData,
    });
  }
}
 