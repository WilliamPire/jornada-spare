import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { SecurityUtil } from 'src/app/utils/security.util';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  restartQuiz() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 1000);
    this.slides.lockSwipes(true);
    this.navCtrl.navigateRoot('/');
  }

  logout() {
    SecurityUtil.clear(); 
    this.navCtrl.navigateRoot('/login');   
  }
}