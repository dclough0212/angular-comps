import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
    headers = [
      {key: "name", label: "Name"},
      {key:"age",label:"Age"},
      {key:"job", label:"Job"}
    ];
    data = [
      {name: "James",age: "24",job:"Designer"},
      {name: "Jill",age: "53",job:"Engineer"},
      {name: "Elyse",age: "46",job:"Designer"}
    ];  
    
  constructor() { 
  }

  ngOnInit(): void {
  }

}
