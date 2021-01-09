import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public option: boolean;

  @ViewChild('icon', {read:ElementRef}) private icon: ElementRef;

  private angulo: number;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.option = false;
    this.angulo = 90;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
/*     const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    } */
  }
  /**
   * controlAcademic
   */
  public controlAcademic() {
    this.option = true;
  }

  /**
   * entertainment
   */
  public entertainment() {
    this.option = false;
  }

  /**
   * toggle
   */
  public toggle() {
    this.icon.nativeElement.style.transform = `rotateZ(${this.angulo}deg)` 
    this.angulo = this.angulo*(-1)-270;  
  }

}
