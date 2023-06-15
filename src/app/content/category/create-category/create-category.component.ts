import { Component } from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  form: any={};
  category?:Category;
  status= 'Form create Category'

  constructor(private categoryService: CategoryService) {
  }

  onUpload($event: string) {
    this.form.avatar= $event;
  }

  // Hàm createCategory-->Truyền dữ liệu vào form{}
  createCategory() {
    this.category = new Category(
      this.form.name,
      this.form.avatar
    )
    console.log('avatar--->', this.form.avatar);
    if (this.form.avatar==undefined){
      this.status ='Avatar is required  ! Please choose upload avatar !'
    }else {
      this.categoryService.createCategoryService(this.category).subscribe(data=>{
        console.log('data--->', data)
        if (data.message=='name_exist'){
          this.status = 'The name is existed ! Please try again !'
        } else if (data.message =='success'){
          this.status = 'Create category success !'
        }
      })
    }
  }
}
