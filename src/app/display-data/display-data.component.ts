import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }
  

  ngOnInit(): void {
   console.log(this.data)
  }

}
