import {Component, OnInit} from '@angular/core';
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit{
  listCategory?: Category[];
  totalElements: number = 0;
  constructor(private categoryService: CategoryService) {
  }
  getPageRequest(request: any) {
    this.categoryService.getPageCategory(request).subscribe(data =>{
      console.log('data -->', data)
      this.listCategory = data['content'];
      console.log('content --->', this.listCategory)
      this.totalElements = data['totalElements'];
      console.log('total --->', this.totalElements)
    })
  }

  ngOnInit(): void {
    const request = {page:0, size: 3}
    this.getPageRequest(request);
  }

  nextPage($event: PageEvent) {
    const request = {};
    // @ts-ignore
    request['page'] = $event.pageIndex.toString();
    // @ts-ignore
    request['size'] = $event.pageSize.toString();
    this.getPageRequest(request);
  }

}
