import { Component, OnInit } from '@angular/core';
import ConversaService from './conversa.service';
import Mensagem from '../mensagem/mensagem.model';

@Component({
  selector: 'mt-conversa',
  templateUrl: './conversa.component.html',
  providers: [ConversaService],
})
export class ConversaComponent implements OnInit {
  service: ConversaService;
  mensagens: Mensagem[];
  menssagem: string;
  id: string;
  answers: object;
  buttons: object[];
  profile: string;

  constructor(conversaService: ConversaService) {
    this.service = conversaService;
    this.menssagem = '';
    this.buttons = [];
    this.answers = {};
    this.profile = '';
  }

  ngOnInit() {
    this.service.enviarMensagem(null, {}).subscribe(
      responses => {
        console.log(responses);
        this.mensagens = this.apagar(responses.messages);
        this.id = responses.id;
      });
  }

  enviar(mensagemEnviada, mensagemMostrada) {
    this.answers [this.id] = mensagemEnviada;
    this.service.enviarMensagem(this.id, this.answers).subscribe(
      responses => {
        this.mensagens = this.mensagens
          .concat([new Mensagem('', mensagemMostrada)])
          .concat(this.apagar(responses.messages));
        console.log(this.answers);
        this.id = responses.id;
        this.menssagem = '';
        this.buttons = responses.buttons;
        if (this.id === 'final') {
          this.service.finalizar(this.id, this.answers).subscribe(responses => {
            this.profile = responses.user.investmentProfile.computedProfileType;
            console.log(this.profile);
          });
        }
      });
  }

  apagar(listaMensagem) {
    return listaMensagem.map(mensagem => {
      mensagem.value = mensagem.value.replace(/[0-9]|\^/g, '');
      return mensagem;
    });
  }
}



