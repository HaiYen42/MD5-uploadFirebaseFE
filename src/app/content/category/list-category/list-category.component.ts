import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateCategoryComponent} from "../create-category/create-category.component";
import {TokenService} from "../../../service/token.service";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UpdateCategoryComponent} from "../update-category/update-category.component";
import {DeleteCategoryComponent} from "../delete-category/delete-category.component";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  checkUserLogin = false;
  // @ts-ignore
  listCategory: Category[];
  displayedColumns: string[] = ['id', 'name', 'avatar', 'edit', 'delete'];
  dataSource?: any;

  // @ts-ignore

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.categoryService.getListCategory().subscribe(data => {
      console.log('data--->', data)
      this.listCategory = data;
      this.dataSource = new MatTableDataSource<Category>(this.listCategory);
      this.dataSource.paginator = this.paginator;

    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('result--->', result);
      if (result || result == undefined) {
        this.categoryService.getListCategory().subscribe(data => {
          console.log('data--->', data)
          this.listCategory = data;
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: {
        dataKey: id
      }
    });
    console.log('id--->', id)
    dialogRef.afterClosed().subscribe(result => {
      console.log('result--->', result);
      if (result || result == undefined) {
        this.categoryService.getListCategory().subscribe(data => {
          console.log('data--->', data)
          this.listCategory = data;
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.categoryService.deleteCategory(id).subscribe(()=>{
          this.categoryService.getListCategory().subscribe(data =>{
            this.listCategory = data;
            this.dataSource = new MatTableDataSource<Category>(this.listCategory);
            this.dataSource.paginator = this.paginator;
          })
        })
      }
    });

  }

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;


}
