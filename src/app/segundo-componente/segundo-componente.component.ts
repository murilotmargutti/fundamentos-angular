import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

 nome = "murilo";
 dataNascimento = "1995-10-10";
 urlImagem = "https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png";

mostrarDataNascimento() {
alert(`a data de nascimento do Joao é: ${this.dataNascimento}`)

}



}
