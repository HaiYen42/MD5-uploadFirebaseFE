import {Component, Inject, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Category} from "../../../model/Category";
import {signOut} from "@angular/fire/auth";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  status = 'Update Category';
  form: any = {};
  // @ts-ignore
  category = new Category();

  constructor(private categoryService: CategoryService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {
    console.log('data tu inject --->', this.data.dataKey)
    this.categoryService.getCategoryById(this.data.dataKey).subscribe(data => {
      this.category = data;
      console.log('category OLD -------------------- --->', this.category)
    })
  }

  updateCategory() {
    // @ts-ignore
    this.categoryService.updateCategory(this.category?.id, this.category).subscribe(data => {
      console.log('data UPDATE ========================>', data)
      if (data.message == 'no_change') {
        this.status = 'Không có gì thay đổi '
      } else if (data.message == 'name_existed') {
        this.status = 'TÊN CATEGORY ĐANG BỊ TRÙNG'
      } else if (data.message == 'update_success') {
        this.status = 'SỬA THÀNH CÔNG!!!'
      }
    })
  }

  onUpload($event: string) {
    this.category.avatar = $event;
  }


}
