import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  @Input() pokeName: string;
  @Input() id: number;
  public loadingImg: boolean;
  public urlPokemon:string;
  public details:boolean;
  public listImages: string[];
  public datapoke:any;
  public detailsText: string;

  @ViewChild('imagepokemon',{read:ElementRef}) private imagepokemon: ElementRef;

  constructor(
    public modalController: ModalController,
    private pokemon: PokemonService
    ) { 
      this.details = false;
      this.loadingImg = false;
      this.detailsText = 'see details';
      this.listImages = [];
      this.datapoke = null;
    }

  ngOnInit() {
    this.pokemon.getinfopokemon(this.id).subscribe(
      (res:any)=>{
        this.datapoke = res;
        this.listImages.push(this.datapoke.sprites.front_default);
        this.listImages.push(this.datapoke.sprites.back_default);
        console.log(this.datapoke);
        this.urlPokemon = this.pokemon.getUrlPokemon(this.id);
        this.loadingImg = true;
      },
      error =>console.log(error)
    )
  }

  /**
   * deatails
  */
  public deatails() {
    if(this.detailsText==='see details') {
      this.detailsText = 'hide detailse';
    }else{
      this.detailsText = 'see details';
    }
    if(screen.width > 450){
      this.imagepokemon.nativeElement.style.width = '60%';
    }else{
      this.imagepokemon.nativeElement.style.width = '100%';
    }
    this.details = !this.details;
  }
    /**
   * closePokemon
   */
  public closePokemon() {
    this.loadingImg = null;
    this.urlPokemon = null;
    this.datapoke = null;
    this.listImages = null;   
    this.dismiss(); 
  }
  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
