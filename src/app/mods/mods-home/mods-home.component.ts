import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  showModal = false;

  items = [
    {
      title: 'Why is the sky blue?', content: 'The sky is blue because it is'
    },{
      title: 'What color is an orange?', content: 'It is color by name'
    },{
      title: 'What color is an apple?', content: 'The red apple was invented a long time ago.'
    }]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showModal = !this.showModal;
  }

}
