import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-leigo',
  templateUrl: './leigo.page.html',
  styleUrls: ['./leigo.page.scss'],
})
export class LeigoPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;

  public form = [
    { val: 'CDB', isChecked: true },
    { val: 'LCA', isChecked: false },
    { val: 'RDC', isChecked: false }
  ];

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  prevSlide() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  selectAnswer() {

    setTimeout(() => {
      this.nextSlide();
    }, 3000);
  }

  restartQuiz() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 1000);
    this.slides.lockSwipes(true);
    this.navCtrl.navigateRoot('/');
  }

  submit(text: any) {
    if (text === "Não")
      this.navCtrl.navigateRoot('/home');
    else
      this.nextSlide();
  }

  /*async slideChanged() {
    const error = await this.toastCtrl.create({ message: "message", showCloseButton: true, closeButtonText: 'Fechar', duration: 3000 });
    error.present();
  }*/
}
