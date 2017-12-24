import {Blog,User} from '../Models/index';
export  class BlogListViewModel{
blogId:number;
blogTitle:string;
authorID:number;
authorName:string;
commentsCount:number;
likesCount:number;
date:Date;

constructor(blogId:number,blogTitle:string,authorID:number,authorName:string,commentsCount:number,likesCount:number,date:Date){
    this.blogId=blogId;
    this.blogTitle=blogTitle;
    this.authorID=authorID;
    this.authorName=authorName;
    this.commentsCount=commentsCount;
    this.likesCount=likesCount;
    this.date=date;
}
}