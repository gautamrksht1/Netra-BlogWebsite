import { Injectable } from '@angular/core';
import {BlogCategory} from '../Models/BlogCategory';

@Injectable()
export class CategoryService {
    public GetCategories(): BlogCategory[] {return   [
        new BlogCategory(0,'Please Select Category'),
        new BlogCategory(1,'Engineering/Technology'),
        new BlogCategory(2, 'Medical' ),
        new BlogCategory(3, 'Finance or Economy or Commerce' ),
        new BlogCategory(4, 'Political' ),
        new BlogCategory(5, 'Social' ),
        new BlogCategory(6,'House Holds' ),
        new BlogCategory(7, 'Market' ),
        new BlogCategory(8, 'Defence' ),
        new BlogCategory(9,'Law and order' ),
        new BlogCategory(10, 'Other Miscelleneous' )
      ];
    }
}