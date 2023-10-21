import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calcul-rendu',
  templateUrl: './calcul-rendu.component.html',
  styleUrls: ['./calcul-rendu.component.less']
})
export class CalculRenduComponent implements OnInit, OnChanges {

  @Input() prixTotal:number=0;
  @Input() sommeClient=0;

  public listeRendu: Array<number>= [];

  constructor() { }

  ngOnInit(): void {
  
  }

  ngOnChanges(changes:SimpleChanges):void {
    this.calculRendu();
  }

  private calculRendu():void{

    if(this.sommeClient <= 0 || this.prixTotal <= 0){
      return;
    }

    let aRendre:number = this.sommeClient - this.prixTotal;
    if(aRendre <= 0){
      return;
    }  

    const coupures: Array<number>= [10, 5, 1];

    while(aRendre !== 0){
      if(aRendre >= coupures[0]){
        this.listeRendu.push(coupures[0]);
        aRendre -= coupures[0]
      }
      if(aRendre < coupures[0]){
        coupures.shift();
      }
    }
  }
}
