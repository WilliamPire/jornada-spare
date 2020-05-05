import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController, NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-investidor',
  templateUrl: './investidor.page.html',
  styleUrls: ['./investidor.page.scss'],
})
export class InvestidorPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  private slideInvestidor: any = 5;
  
  public form = [
    { val: 'CDB', isChecked: true },
    { val: 'LCA', isChecked: false },
    { val: 'RDC', isChecked: false }
  ];

  public options = [
    { val: 'CDB', slide: 5 },
    { val: 'LCA', slide: 6 },
    { val: 'RDC', slide: 7 }
  ];

  public objetivosInvestimento = [
    { val: 'Comprar ou trocar de carro', isChecked: true },
    { val: 'Pagar o Mestrado ou Doutorado', isChecked: false },
    { val: 'Comprar sua casa', isChecked: false },
    { val: 'Aquela viagem dos sonhos', isChecked: true },
    { val: 'Me preparar para uma emergência', isChecked: false },
    { val: 'Tudo isso junto', isChecked: false }
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
    this.navCtrl.navigateRoot('/home');
  }

  definirCaminhoExplorador(value) { this.slideInvestidor = value; }

  submit(text: any) {
    if (text === "Não tenho conhecimento")
      this.navCtrl.navigateRoot('/iniciante');
    else
      this.nextSlide();
  }

  submitInvestidor() {     
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.slideInvestidor); 
    this.slides.lockSwipes(true);
  }
}
