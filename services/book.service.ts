import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient:HttpClient) { }
  saveBook(books:any[]){
    return this._httpClient.post("https://srmhttp-8b3ff-default-rtdb.firebaseio.com/data.json",books);
  }
}




function saveBook(book: any, arg1: any) {
  throw new Error('Function not implemented.');
}

function book(book: any, arg1: any) {
  throw new Error('Function not implemented.');
}

