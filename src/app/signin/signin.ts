import { Component } from '@angular/core';
import { InputTag } from "../input-tag/input-tag";
import { Checkbox } from "../checkbox/checkbox";
import { Button } from "../button/button";

@Component({
  selector: 'app-signin',
  imports: [InputTag, Checkbox, Button],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class Signin {

}
