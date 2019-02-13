import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ContactForm } from './contact-form';

/**
 * お問合せ画面
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /** 入力フォーム */
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(ContactForm.validators);
  }

  ngOnInit() {
  }

}
