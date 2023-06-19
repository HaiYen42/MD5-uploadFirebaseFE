import { Component } from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  form: any ={};
  // Đặt 1 bien category có kiểu Category để nhét thông tin từ form vào
  category?: Category;
  status = 'Form Create Category'


  constructor(private categoryService: CategoryService) {
  }

  onUpload($event: string) {
    this.form.avatar= $event;
  }
// Hàm createCategory() dùng để truyền dữ liệu từ Html vào form và tương tác với service để ghép nối API
  createCategory() {
    this.category = new Category(
      this.form.name,
      this.form.avatar
    )
    console.log('avatar--->', this.form.avatar)
    if (this.form.avatar == undefined){
      this.status ='The avatar is required !'
    }else {
      this.categoryService.createCategoryService(this.category).subscribe(data =>{
        console.log('data-->'+ data.message)
        if (data.message=='name_exist'){
          this.status = 'The name is existed ! Try again  '
        }else if (data.message== 'success'){
          this.status= 'Update success !'
        }
      })
    }
  }
}
