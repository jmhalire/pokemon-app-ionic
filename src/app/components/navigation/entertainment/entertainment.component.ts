import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
})
export class EntertainmentComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  /**
   * goListPokemons
   */
  public goListPokemons() {
    this.navCtrl.navigateForward('/api-pokemons');
  }

}
