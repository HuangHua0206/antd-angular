/**
 * name:http服务
 * describe:对http请求做统一处理
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

 

@Injectable({ providedIn: 'root' })
export class BaseService {

  constructor(private http: HttpClient) {}

  /**
   * 统一发送请求
   *  params
   *  Promise<{success: boolean, msg: string}>|Promise<R>
   */
  public request(params: any): any {
    if (params['method'] == 'post' || params['method'] == 'POST') {
      return this.post(params['url'], params['data']);
    }
    else {
      return this.get(params['url'], params['data']);
    }
  }

  /**
   * get请求
   *  url 接口地址
   *  params 参数
   *  Promise<R>|Promise<U>
   */
  public get(url: string, params: any): any {
    let requestUrl = url
    for(let [key, value] of Object.entries(params)) {
        requestUrl += '&' + key + '=' + value
    }
    if(!requestUrl.includes('?')) { 
      console.log(999)
      requestUrl = requestUrl.replace('&', '?')
    }
    console.log(requestUrl)
    return new Promise((resolve, reject) => {
      this.http.get(requestUrl).subscribe(
        res => resolve(res), // success path
        error => reject(error) // error path
      )
    }) 
  }

  /**
   * post请求
   * url 接口地址
   * params 参数
   *  Promise<R>|Promise<U>
   */
  public post(url: string, params: any) {
    return new Promise((resolve, reject) => {
      this.http.post(url, params).subscribe(
        res => resolve(res), // success path
        error => reject(error) // error path
      )
    }) 
  }

  /**
   * 处理请求成功
   *  res
   *  data: string|null|((node:any)=>any
   */
  // private handleSuccess(res: Response) {
  //   let body = res["_body"];
  //   if (body) {
  //     return {
  //       // data: res.json().content || {},
  //       // page: res.json().page || {},
  //       // statusText: res.statusText,
  //       status: res.status,
  //       success: true
  //     }
  //   }
  //   else {
  //     return {
  //       statusText: res.statusText,
  //       status: res.status,
  //       success: true
  //     }
  //   }

  // }

  // *
  //  * 处理请求错误
  //  * @param error
  //  * @returns void|Promise<string>|Promise<T>|any
   
  // private handleError(error) {
  //   console.log(error);
  //   let msg = '请求失败';
  //   if (error.status == 400) {
  //     console.log('请求参数正确');
  //   }
  //   if (error.status == 404) {

  //     console.error('请检查路径是否正确');
  //   }
  //   if (error.status == 500) {
  //     console.error('请求的服务器错误');
  //   }
  //   console.log(error);
  //   return {success: false, msg: msg};

  // }

}

 