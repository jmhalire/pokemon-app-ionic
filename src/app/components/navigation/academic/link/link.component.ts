import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {


  @Input('item') item:string;
  @Input('subitems') subitems:string[];
  @ViewChild('itemnav') itemnav:ElementRef;
  dropdownMenu:HTMLDivElement;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * dropdown
   */
  public dropdownshow() {
    this.dropdownMenu = this.itemnav.nativeElement.children[1];
    console.log(this.dropdownMenu.classList);
    this.dropdownMenu.classList.add('dropdownMenu');
    
  }

  /**
   * dropdownhiden
   */
  public dropdownhiden() {
    this.dropdownMenu = this.itemnav.nativeElement.children[1];
    this.dropdownMenu.classList.remove('dropdownMenu');
  }

}
