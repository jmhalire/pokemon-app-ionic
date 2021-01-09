import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from "@ionic/angular";

//services
import { PokemonService } from "../../services/pokemon.service";
import { HttpErrorResponse } from '@angular/common/http';

//components
import { PokemonComponent } from "./pokemon/pokemon.component";

@Component({
  selector: 'app-listpokemons',
  templateUrl: './listpokemons.component.html',
  styleUrls: ['./listpokemons.component.scss'],
})
export class ListpokemonsComponent implements OnInit {


  public listpoke:any[]
  public loading: boolean;
  public namePokemon:string;
  public listImages: string[];
  

  @ViewChild('imagepokemon',{read:ElementRef}) private imagepokemon: ElementRef;

  constructor(private pokemon: PokemonService,public modalController: ModalController) {
    this.listImages = [];
  }

  ngOnInit(): void { 
    console.log('estas en list ppoemoms');
    
    this.pokemon.getlistpokemon().subscribe(
      (res:any) => {
        this.listpoke = res.results;
        this.loading = false;
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  async presentModal(id:number) {  
    this.listImages = [];
    this.namePokemon = this.listpoke[id-1].name.toUpperCase();
    const modal = await this.modalController.create({
      component: PokemonComponent,
      componentProps: {
        'pokeName': this.namePokemon,
        'id': id,
      },
    });
    return await modal.present();
  }

  /**
   * changeInput
   */
  public changeInput(e:Event) {
    console.log(e);
    
  }

}
