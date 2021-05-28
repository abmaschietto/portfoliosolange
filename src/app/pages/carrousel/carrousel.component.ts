import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  constructor() { }

  @Input()
  public myClass:string;

  @Input()
  public mydId: String;

  ngOnInit() {

  }

}
