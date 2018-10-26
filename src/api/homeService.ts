import { Injectable } from '@angular/core';
import { BaseService } from 'api/baseService'
 

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private baseService: BaseService) { }
  getHomeList(oParams) {
  	return this.baseService.request({
      method: 'get',
      testUrl: "/json/list.json",
      url: 'xxx',
      data: oParams,
    });
  }
}