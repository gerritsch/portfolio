import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private toastr: ToastrService) {
    console.log(this.contactForm);
  }

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.contactForm.value.name)
      .append('email', this.contactForm.value.email)
      .append('message', this.contactForm.value.message);
    this.http
      .post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .subscribe(
        res => {},
        err => {
          if (err instanceof ErrorEvent) {
            //client side error
            this.toastr.error('Something went wrong when sending your message.');
            console.log(err.error.message);
          } else {
            //backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              this.toastr.success('Successfully send your message.');
            } else {
              this.toastr.error('Something went wrong when sending your message.');
              console.log('Error status:');
              console.log(err.status);
              console.log('Error body:');
              console.log(err.error);
            }
          }
        }
      );
  }

  ngOnInit(): void {}
}
