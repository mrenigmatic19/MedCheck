import { Component } from '@angular/core';
import { InputTag } from "../input-tag/input-tag";
import { Checkbox } from "../checkbox/checkbox";
import { Button } from "../button/button";

@Component({
  selector: 'app-signup',
  imports: [InputTag, Checkbox, Button],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {

}
