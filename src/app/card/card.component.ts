import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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

  addLive(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed', result)
    })

  }

}
