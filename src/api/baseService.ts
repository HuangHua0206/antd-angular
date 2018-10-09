/**
 * name:http服务
 * describe:对http请求做统一处理
 * author: huanghua  2018/10/9
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { getItem } from '@utils/storage';


@Injectable({ providedIn: 'root' })
export class BaseService {

  constructor(
    private http: HttpClient,
    private message: NzMessageService
    ) {}

  /**
   * 统一发送请求
   *  params
   */
  public request(params: any): any {
 
    // 本地mock情况下
    if (getItem('isTest')) { 
      params['method'] = 'get'
      params['url'] = window.location.origin + params['testUrl']
      /*设置请求的基地址，方便替换*/
    } else {
      delete params['testUrl']
    }


    for(let [key, value] of Object.entries(params['data'])) {
      if(value === null) {
        delete params['data'][key]
      }
    }
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
   */
  public get(url: string, params: any): any {
    let requestUrl = url
    for(let [key, value] of Object.entries(params)) {
        requestUrl += '&' + key + '=' + value
    }
    if(!requestUrl.includes('?')) { 
      requestUrl = requestUrl.replace('&', '?')
    }
    return new Promise((resolve, reject) => {
      this.http.get(requestUrl).subscribe(
        res => resolve(this.handleSuccess(res)), // success path
        error => this.handleError(error) // error path
      )
    }) 
  }

  /**
   * post请求
   * url 接口地址
   * params 参数
   */
  public post(url: string, params: any) {
    return new Promise((resolve, reject) => {
      this.http.post(url, params).subscribe(
        res => resolve(this.handleSuccess(res)), // success path
        error => this.handleError(error) // error path
      )
    }) 
  }

  /**
   * 处理请求成功
   *  res
   */
  private handleSuccess(res) {
    console.log(res, 'res')
    /* 根据不同接口习惯，这里默认code为0是成功，1是接口出错，可根据项目修改*/
    if(res.code === 0) {
      return res
    } else {
      this.message.create('error', res.message);
      return false
    }
  }

  /**
   * 处理请求错误
   *  error
   */
   
  private handleError(error) {
    console.log('error==?', error);
    let msg = '请求失败';
    switch (error.status) {
      case 400:
        this.message.create('error', '请求出错400');
        break;
      case 404:
        this.message.create('error', '请求不存在');
        break;
      case 404:
        this.message.create('error', '服务器错误');
        break;
      default:
        this.message.create('error', msg);
        break;
    }
  }

}

 