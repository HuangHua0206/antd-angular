import { Injectable } from '@angular/core';
import { BaseService } from '@api/baseService'
 

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private baseService: BaseService) { }
  getHomeList(oParams) {
  	return this.baseService.request({
      method: 'get',
      url: "http://localhost:4200/assets/json/list.json",
      data: oParams,
    });
  }
}