import { Component,OnInit } from '@angular/core';
import { NgModel,FormsModule } from '@angular/forms';
import {CategoryService} from '../../Services/Category.Service';
import {BlogCategory} from '../../Models/BlogCategory';
import {Blog} from '../../Models/Blog';
@Component({
  moduleId: module.id,
  templateUrl: './Blog.Component.html',
  styleUrls: ['./Blog.Component.css']
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {
    this.GetCategories();
  } 
  model: Blog = new Blog();
  selectedCategory:string;
  public categories:BlogCategory[];
  constructor(private categoryService:CategoryService){
    }
      submitted = false;
    
      onSubmit() { this.submitted = true; }
    
      // TODO: Remove this when we're done
      get diagnostic() { return JSON.stringify(this.model); }
  public GetCategories():void
  {
    this.categories=this.categoryService.GetCategories();
  }
}