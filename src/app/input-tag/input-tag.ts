import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-tag',
  imports: [],
  templateUrl: './input-tag.html',
  styleUrl: './input-tag.scss'
})
export class InputTag {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() name = '';
}
