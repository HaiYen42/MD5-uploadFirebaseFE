import { Component } from '@angular/core';
import {CreateCategoryComponent} from "../../category/create-category/create-category.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateSongComponent} from "../create-song/create-song.component";

@Component({
  selector: 'app-page-song',
  templateUrl: './page-song.component.html',
  styleUrls: ['./page-song.component.css']
})
export class PageSongComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateSongComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('result--->', result);
      if (result||result==undefined){

      }
    });
  }
}
