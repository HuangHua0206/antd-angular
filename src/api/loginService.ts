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
      testUrl: "/assets/json/login.json",
      url: "xxx",
      data: oData,
    });
  }
}
 