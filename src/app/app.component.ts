import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  msg:Message;
  messages:Message[] = [];
  notificationCounter:number = 0;

  constructor(){
    this.msg = {
      title: 'Title of notification',
      severity: "TYPE OF NOTIFICATION"
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.checkForMessage();
    }, 15000);
  }

  checkForMessage(){
    this.messages.push(this.msg);
    this.notificationCounter++;
  }
  removeMessage(msg:number){
    this.messages.splice(msg, 1);
    this.notificationCounter--;
  }
}
