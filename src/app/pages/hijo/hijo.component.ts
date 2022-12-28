import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() nombtitulo = "";
  @Output() cambiarTitulo= new EventEmitter<string>();
  @Input() nombmensaje = "";
  @Output() cambiarMensaje= new EventEmitter<string>();
  mostrarN(){
    this.nombtitulo = "Noticias";
    this.cambiarTitulo.emit(this.nombtitulo);
    this.nombmensaje = "Proximamente se agregaran nuevas noticias.";
    this.cambiarMensaje.emit(this.nombmensaje);
  }
  mostrarG(){
    this.nombtitulo = "Guías";
    this.cambiarTitulo.emit(this.nombtitulo);
    this.nombmensaje = "Estamos trabajando en crear las Guías.";
    this.cambiarMensaje.emit(this.nombmensaje);
  }
  mostrarS(){
    this.nombtitulo = "Sorteos";
    this.cambiarTitulo.emit(this.nombtitulo);
    this.nombmensaje = "No hay ningun sorteo activo";
    this.cambiarMensaje.emit(this.nombmensaje);
  }
  }
