import { Injectable } from '@angular/core';


const GIPHY_API_KEY = 'l1Yt7V3tkhAXYKeyWsoIu8FqXPObZhff'


@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory:string[] =[]

  private apiKey:string = 'l1Yt7V3tkhAXYKeyWsoIu8FqXPObZhff'
  constructor() { }

  get tagsHistory(){
      return [...this._tagsHistory]
  }
  private organizeHistory(tag:string){
    tag = tag.toLocaleLowerCase()
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag!==tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.splice(0,10)
  }

  searchTag(tag:string):void{
    if(tag.length === 0){
      return
    }
    this.organizeHistory(tag)
    console.log(this.tagsHistory)

  }

}
