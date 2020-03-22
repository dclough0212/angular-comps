import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  @Input() header: boolean = false;
  @Input() headerlines: number = 2;
  @Input() bodylines: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
