export class Comment{
id:number;
content:string;
likesCount:number;
blogId:number;
commentDate:Date;
constructor(id:number,content:string,likesCount:number,
    blogId:number,
    date:Date ){

        this.id=id;
        this.content=content;
        this.likesCount=likesCount;
        this.blogId=blogId;
        this.commentDate=date;
    }
}
