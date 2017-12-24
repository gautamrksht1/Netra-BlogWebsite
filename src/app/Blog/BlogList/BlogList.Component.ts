import { Component,OnInit } from '@angular/core';
import { NgModel,FormsModule } from '@angular/forms';
import {BlogListViewModel} from '../../Models/Index';
import {BlogService} from '../../Services/Index';

@Component({
    moduleId: module.id,
    templateUrl: './BlogList.Component.html',
   styleUrls: ['./BlogList.Component.css']
  })
export class BlogListComponent implements OnInit {
    ngOnInit(): void {
      this.GetBlogList();
    }     
   
    public blogs:BlogListViewModel[];
    constructor(private blogService:BlogService){
      }
        submitted = false;
      
        onSubmit() { this.submitted = true; }
      
        // TODO: Remove this when we're done
       // get diagnostic() { return JSON.stringify(this.model); }
    public GetBlogList():void
    {
      this.blogs=this.blogService.GetBlogLists();
      console.log('Blogs=',this.blogs);
    }
  }