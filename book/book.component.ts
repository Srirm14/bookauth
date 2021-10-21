
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  myBooks=[] as any;
  constructor(private _book:BookService) { }

  userForm!:FormGroup;
  countryList=[
    {"countryName":"India"},
    {"countryName":"Australlia"}
  ]
  ngOnInit() {

    this.userForm=new FormGroup({
      'fname':new FormControl(null),
      'lname':new FormControl(null),
      'uname':new FormControl(null),
      'city':new FormControl(null),
      


    });
  }
  onPush(){
    const fname=this.userForm.get('fname')?.value;
    const lname=this.userForm.get('lname')?.value;
    const uname=this.userForm.get('uname')?.value;
    const city=this.userForm.get('city')?.value;
    
    this.myBooks.push({

      fname:fname,
      lname:lname,
      uname:uname,
      city:city
    })
  }
  onSave(){
    this._book.saveBook(this.myBooks)
    .subscribe(sub=>{
      console.log(sub);
    },
    error=>{
      console.log(error);
    }
    );
  }

 

}
