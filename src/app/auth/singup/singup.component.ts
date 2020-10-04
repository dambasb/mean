import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingupComponent {

  isLoading = false;

  onSingup(form: NgForm) {
    console.log(form);
  }
}
