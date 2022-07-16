import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  questions: any;
  answers:any;
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.service.getQuestions().subscribe(data=>{
      this.questions=data;
    })
    this.service.getAnswers().subscribe(data=>{
      this.answers=data;
    })

  }

}
