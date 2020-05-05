import { Component, ViewChild } from '@angular/core';
import { LoadingController, ToastController, NavController, IonSlides, IonButton } from '@ionic/angular';
import { UserModel } from 'src/app/models/user.model';
import { SecurityUtil } from 'src/app/utils/security.util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  public user: UserModel = null;
  
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
    this.user = SecurityUtil.get();
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

  restartQuiz() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 1000);
    this.slides.lockSwipes(true);
  }

  submit(text: any) {

    var model: any = {};
    model.tela = "iniciio_jornada";
    model.resposta = text;

    localStorage.setItem('quiz', JSON.stringify(model));

    if (text === "Não tenho conhecimento")
      this.navCtrl.navigateRoot('/iniciante');
    else
      this.navCtrl.navigateRoot('/investidor');
  }

  ionSelected() {
    console.log("Home Page has been selected");
    // do your stuff here
  }

  /*async slideChanged() {
    const error = await this.toastCtrl.create({ message: "message", showCloseButton: true, closeButtonText: 'Fechar', duration: 3000 });
    error.present();
  }*/
}
