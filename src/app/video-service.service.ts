import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './core/model/video';


@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
api:string= 'http://localhost:3000/Video'

  constructor(private http: HttpClient) { }

  postVideo(video:Video){
    return this.http.post(this.api,video)
  }

  getVideo(){
    return this.http.get<Video[]>(this.api)
  }
  updateVideo(id:number, video:Video){
    return this.http.put(this.api+'/'+id,video)
  }
  }


