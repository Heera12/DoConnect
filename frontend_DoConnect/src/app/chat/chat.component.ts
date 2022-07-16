import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  greetings: string[] = [];
  disabled = true;
  newmessage: string | undefined;
  private stompClient = null;

  constructor(){}

  ngOnInit() {
  }

  sendMessage() {
  
    this.newmessage = "";
  }
}