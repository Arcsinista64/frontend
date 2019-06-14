import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat: number = 25.6866142;
  lng: number = -100.3161126;

  constructor() { }

  ngOnInit() {
  }

}
