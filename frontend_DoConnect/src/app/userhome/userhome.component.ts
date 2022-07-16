import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  questions: any;
  answers:any;
  constructor(private service : ServicesService, private route:ActivatedRoute) { }

  searchText: string='';
  ngOnInit(): void {

    this.service.getQuestions().subscribe(data=>{
      this.questions=data;
    })
    this.service.getAnswers().subscribe(data=>{
      this.answers=data;
    })

  }

  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue;
    console.log(this.searchText);
  }

}