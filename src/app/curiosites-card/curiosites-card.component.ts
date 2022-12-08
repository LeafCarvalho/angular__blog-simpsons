import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curiosites-card',
  templateUrl: './curiosites-card.component.html',
  styleUrls: ['./curiosites-card.component.scss']
})
export class CuriositesCardComponent implements OnInit {
  @Input()
  curiositeTitle:string = ""
  @Input()
  curiositeContent: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
