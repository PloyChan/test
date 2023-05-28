import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title = "Student";


  constructor(private http: HttpClient) {
    this.http = http;
  }

  findAllStudent = () => {
    this.http.get("http://localhost:8080/api/student").subscribe({
        next: data => {
          console.log(data)
        },
        error: err => {
          console.error("not found student")
        }
      }
    )
  }
  findAll() : string {
    this.http.get("http://localhost:8080/api/student").subscribe({
      next : data => {
        return data;
      },
      error: err => {
        console.log("not found student")
      }
    })
    return 'not found';
  }
}
