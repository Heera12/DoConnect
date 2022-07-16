import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

questions: any[] | undefined;
  filteredString : String = "";
  constructor() { }

  ngOnInit(): void {
   
  }
  emit:[] | undefined;
  enteredSearchValue:string='';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged(){
    //this.onSearchTextChanged().emit(this.enteredSearchValue);
    console.log(this.enteredSearchValue);
    console.log("******searched from*****");
  }
}
