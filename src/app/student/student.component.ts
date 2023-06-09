import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title = "Student";
  totalStudent : any
  studentById : any;


  constructor(private http: HttpClient) {
    this.http = http;
  }

  findAllStudent = () => {
    this.http.get("http://localhost:8080/api/student").subscribe({
        next: data => {
          this.totalStudent = data;
          console.log(data)
        },
        error: err => {
          console.error("not found student")
        }
      }
    )
  }
  findById()  {
    let id = (<HTMLInputElement>document.getElementById("id")).value;
    this.http.get("http://localhost:8080/api/student/"+id).subscribe({
      next : data => {
        this.studentById = data;
        console.log(data)
      },
      error: err => {
        console.log("not found student")
      }
    })
  }
}
