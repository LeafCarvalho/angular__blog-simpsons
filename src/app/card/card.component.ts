import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  cardTitle:string = ""
  @Input()
  cardContent:string = ""
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
