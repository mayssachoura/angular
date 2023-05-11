import { Component, OnInit } from '@angular/core';
import { Video } from '../core/model/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }
  listVideo!:Video[];


  ngOnInit(): void {
  }

}
