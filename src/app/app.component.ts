import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WelcomeComponent} from "./welcome/welcome.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-student';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  myFunc = () => {
    this.http.post("http://localhost:4200/api/student", this.title).subscribe({
      next: data => {
        console.log()
      },
      error: err => {
        console.error(err.messages)
      }
    })
  }


}

function Student (){

}

/*let s: Student
s = {id: 1}
s.name=""*/
//let s = new Student()

