import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public maquetesSource: string [] = ['../../../assets/maquetes/maquete-1.jpg', '../../../assets/maquetes/maquete-3.jpg', '../../../assets/maquetes/maquete-4.jpg'];
  public maqueteDescriptions: string[] = ["Detalhes precisos", "Atenção impecável", "Trabalhos personalizados"]

  ngOnInit() {

  }

}
