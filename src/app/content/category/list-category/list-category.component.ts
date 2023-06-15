import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateCategoryComponent} from "../create-category/create-category.component";
import {TokenService} from "../../../service/token.service";
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  checkUserLogin = false;

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private categoryService: CategoryService) {
  }

  listCategory: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'avatar'];
  dataSource: any;

  openDialog() {
    const dialogRef = this.dialog.open(CreateCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('result--->', result);
      if (result || result == undefined) {
        this.categoryService.getListService().subscribe(data => {
          this.listCategory = data;
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          console.log('listCategory--->', data)
          this.dataSource.paginator = this.paginator;
          console.log('listCategory--->', data)
        })
      }
    });
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.categoryService.getListService().subscribe(data => {
      this.listCategory = data;

      this.dataSource = new MatTableDataSource<Category>(this.listCategory);
      console.log('listCategory--->', data)
      this.dataSource.paginator = this.paginator;

    })
  }
}
