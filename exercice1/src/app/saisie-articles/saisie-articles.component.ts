import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-saisie-articles',
  templateUrl: './saisie-articles.component.html',
  styleUrls: ['./saisie-articles.component.less']
})
export class SaisieArticlesComponent implements OnInit {

  @Output() finSaisie = new EventEmitter<number>();

  public prixTotal: number= 0;
  public prix: string = "";

  constructor() { }

  ngOnInit(): void {

  }

  public ajout(){
    this.prixTotal += parseInt(this.prix);
    this.prix = "";
    this.finSaisie.emit(this.prixTotal);
  }
  


}
