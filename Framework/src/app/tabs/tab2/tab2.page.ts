import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lat: number = 19.4284706;
  lng: number = -99.1276627;

//   var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1IjoibWF1Z2FyZ256IiwiYSI6ImNqd2p5MWZjNjBrcHczeXA2YXlndmRiaHQifQ.EVHcU12vrHZSNQUBd0zxFg';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

}
