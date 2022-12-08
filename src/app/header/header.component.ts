import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string =  "Os Simpsons";
  img:string = "../../assets/homer-deitado.png"
  constructor() { }

  ngOnInit(): void {
  }

}
