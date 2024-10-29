import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'databinding';
  city = 'Dera Ismail Khan';
  num1 = 10;
  num2 = 20;
  changecity() {
    this.city= 'Lahore';
  }
  col = 2;
  Name = "Kashif Shah";
  imgpath = "logo.png";
  currentvalue = true;
  enabaledvalue() {
    this.currentvalue = !this.currentvalue;
  }
  click1()
  {
    console.log("Click One Fired!!");
  }
  click2() {
    console.log("Click Two fired!!");
  }
  keyup()
  {
    console.log("keyup Fired!!");
  }
  keydown()
  {
    console.log("key Down Fired!!");
  }
  input()
  {
    console.log("Input Fired!!");
  }
  _message = "Hello world";
  setmessage(val:any)
  {
    this._message = val;
  }
  msg = "Hello!!";
  twoway = "Enter msg";
}
