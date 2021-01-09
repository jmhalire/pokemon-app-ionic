import { Component, OnInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {



  @ViewChild('navbar', { static: true }) navbar: ElementRef;

  @HostListener('window:scroll', []) onWindowScroll() {
    if (window.pageYOffset > 0) {
        this.navbar.nativeElement.classList.add('navbar-scrolled');
    } else {
        this.navbar.nativeElement.classList.remove('navbar-scrolled');
    }
  }

  @Input('option') option: boolean;
  autenticate: boolean

  constructor() { 
    this.option = false;
    this.autenticate = false;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event:any): void => { 
    //
  }
}
