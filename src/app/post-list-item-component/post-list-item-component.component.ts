import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postItem:{
      title:"",
      content:"",
      loveIts:0,
      created_at:null
  }
  constructor() { }

  ngOnInit() {
  }
  isLoveIts(){
    if(this.postItem.loveIts>0){
      return 1;
    }
    else if(this.postItem.loveIts==0){
      return 0;
    }
    else return -1;
  }
  addLoveIts(){
    this.postItem.loveIts++;
  }
  subLoveIts(){
    this.postItem.loveIts--;
  }
}
