import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-iamge',
  templateUrl: './lazy-iamge.component.html',
  styleUrls: ['./lazy-iamge.component.css']
})
export class LazyIamgeComponent implements OnInit{

 @Input()
 public url!:string;
 @Input()
 public alt:string=''

 public  hasLoaded:boolean = false;

 ngOnInit(): void {
   if(!this.url) throw new Error('URL property is require')
 }
 onLoad(){
  setTimeout(() => {
    this.hasLoaded = true
  }, 1000);
 }
}
