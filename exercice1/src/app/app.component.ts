import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'exercice1';

  public prixTotalArticles:number = 0;
  public sommeClient:number=0;

  public saisieArticle(totalArticles:number):void{
    this.prixTotalArticles= totalArticles;
  }

  public saisieSommeClient(sommeClient:number):void{
    this.sommeClient = sommeClient;
  }
}
