import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent implements OnInit {

  constructor(public messagesServices: MessagesService) { 
    
  }

  ngOnInit(): void {
  }

  message: string = '';

  agregarMessage(){
    this.messagesServices.agregarMessage(this.message);
    this.message = '';
  }

}
