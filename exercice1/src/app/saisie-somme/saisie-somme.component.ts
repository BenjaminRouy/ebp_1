import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-saisie-somme',
  templateUrl: './saisie-somme.component.html',
  styleUrls: ['./saisie-somme.component.less']
})
export class SaisieSommeComponent implements OnInit {

  @Output() sommeVersee: EventEmitter<number> = new EventEmitter<number>();

  public somme:string="";

  constructor() { }

  ngOnInit(): void {
    
  }

  public versement():void{
    this.sommeVersee.emit(parseInt(this.somme))
  }

}
