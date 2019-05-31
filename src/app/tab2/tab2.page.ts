import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagenModalPage } from '../imagen-modal/imagen-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modalCtrl:ModalController){

  }

  imagenes=[
    'assets/imagenes/caja-de-herramientas.jpg',
    'assets/imagenes/caja-de-palpacion.jpg',
    'assets/imagenes/cajon-de-herramientas-52.jpg',
    'assets/imagenes/cajon-de-herramientas.jpg',
    'assets/imagenes/calador-de-bolsa.jpg',
    'assets/imagenes/escofina.jpg',
    'assets/imagenes/electrificador-mandinga.jpg',
    'assets/imagenes/caja-de-herramientas.jpg',
    'assets/imagenes/motosierra-toyama.jpg',
  ];
  Verimagen(){
    this.modalCtrl.create({
      component:ImagenModalPage
    }).then(modal=>modal.present())
  }

}
