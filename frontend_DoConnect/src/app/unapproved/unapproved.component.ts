import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-unapproved',
  templateUrl: './unapproved.component.html',
  styleUrls: ['./unapproved.component.css']
})
export class UnapprovedComponent implements OnInit {

  questions: any;
  answers:any;
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.service.getPendingQuestions().subscribe(data=>{
      this.questions=data;
    })
    this.service.getPendingAnswers().subscribe(data=>{
      this.answers=data;
    })

  }

}