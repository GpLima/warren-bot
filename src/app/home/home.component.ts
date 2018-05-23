import {Component, OnInit} from '@angular/core';
import ConversaService from '../conversa/conversa.service';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  service: ConversaService;


  constructor(conversaService: ConversaService) {
    this.service = conversaService;
  }

  ngOnInit() {
  }

}

