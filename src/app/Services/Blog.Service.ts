import { Injectable } from '@angular/core';
import {CategoryService} from '../Services/Category.Service';
import {Blog,BlogListViewModel} from '../Models/index';
@Injectable()
export class BlogService{

    constructor(
        private categoryService:CategoryService
    ){}
    public GetBlogLists():BlogListViewModel[]
    {
return [new BlogListViewModel(1,'C3 Dependency Injection',2,'Pritam Rakshit',2,2,new Date('02/10/2017')),
new BlogListViewModel(2,'C3 Dependency Injection Creating a blod site using Angular 2,ASP.Net core Web Api and mySQl',2,'Pritam Rakshit',2,2,new Date('02/10/2017')),
new BlogListViewModel(3,'C3 Dependency Injection Creating a blod site using Angular 2,ASP.Net core Web Api and mySQl',2,'Pritam Rakshit',2,2,new Date('02/10/2017')),
new BlogListViewModel(4,'C3 Dependency Injection Creating a blod site using Angular 2,ASP.Net core Web Api and mySQl',2,'Pritam Rakshit',2,2,new Date('02/10/2017')),
new BlogListViewModel(5,'C3 Dependency Injection Creating a blod site using Angular 2,ASP.Net core Web Api and mySQl',2,'Pritam Rakshit',2,2,new Date('02/10/2017')),
new BlogListViewModel(6,'C3 Dependency Injection Creating a blod site using Angular 2,ASP.Net core Web Api and mySQl',2,'Pritam Rakshit',2,2,new Date('02/10/2017'))
//Creating a blod site using Angular 2,ASP.Net core Web Api and mySQl
];
    }

}