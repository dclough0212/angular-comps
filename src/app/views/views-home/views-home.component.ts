import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  statistics = [
    {key: "Favorites", count: "22"},
    {key:"Page Views",count:"967"},
    {key:"Users", count:"30"}
  ];
  items = [
    {name: "Couch", description:"This is a great couch.  The kind you would like to sit on.", picture: "/assets/couch.jpeg"},
    {name: "Dresser", description: "you can put this in your bedroom without regret", picture: "/assets/dresser.jpeg"},
  ];  

  constructor() { }

  ngOnInit(): void {
  }

}
