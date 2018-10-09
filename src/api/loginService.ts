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
      url: "http://sc1re.fuyhui.com/shopApp/pub/userAccount/login",
      data: oData,
    });
  }
}
 