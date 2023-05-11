import { Component, OnInit, ViewChild } from '@angular/core';
//import { ModalDirective } from 'node_modules/ngx-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';

import { EncuestaModel } from '../models/encuesta.model';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
	isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number=0;
	questionObj = new EncuestaModel();
		@ViewChild('submitModal') submitModal: any;
		@ViewChild('addQuestionModal') addQuestionModal : any;
		@ViewChild('answerModal') answerModal : any;
		@ViewChild('questionForm') questionForm: any;
		@ViewChild('questionTest') questionTest : any;
    constructor( private toastr: ToastrService) { }

    answerArray = [];
  
    allQuestions: any = [{
      "id": 1,
      "question": "What is the capital of Belgium?",
      "a": "Vienna",
      "b": "Berlin",
      "c": "Brussels",
      "d": "Prague",
      "answer": "c"
    },
    {
      "id": 2,
      "question": "What is the capital of Australia?",
      "a": "Vienna",
      "b": "Canberra",
      "c": "Brussels",
      "d": "Prague",
      "answer": "b"
    },
    {
      "id": 3,
      "question": "What is the capital of Bulgaria?",
      "a": "Vienna",
      "b": "Sofia",
      "c": "Brussels",
      "d": "Prague",
      "answer": "b"
    }
    ];
  
    /**Method call on submit the test */
    submitTest() {
      this.rightAnswer = 0;
      this.totalAnswered = 0;
      for (let i = 0; i < this.allQuestions.length; i++) {
        if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
          this.totalAnswered++;
          if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
            this.rightAnswer++;
          }
        }
  
      }
      this.submitModal.show();
  
    }
  
    startQuiz() {
      for (let i = 0; i < this.allQuestions.length; i++) {
        if ("selected" in this.allQuestions[i]) {
          delete this.allQuestions[i]["selected"];
        }
  
      }
      this.questionTest.reset();
      this.isQuestionCardShow = true;
  
    }
  
  
    HomePage() {
      this.isQuestionCardShow = false;
    }

    addQuestion(){
      this.addQuestionModal.show();
    }
    submitAddQuestion(){
      let quesTemp = JSON.parse(JSON.stringify(this.questionObj));
      quesTemp["id"] = this.allQuestions.length+1;
      this.allQuestions.push(quesTemp);
      this.questionForm.reset();
      this.toastr.success("Question Added Successfully!!");
      this.addQuestionModal.hide();
  
    }

    checkAnswers(){
      this.submitModal.hide();
      this.answerModal.show();
    }
  
    ngOnInit() {
  
  
  
    }
}
