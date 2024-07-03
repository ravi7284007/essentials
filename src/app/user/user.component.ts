import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Get data from Parent component
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  
  // Send data child to parent component with initiator EventEmitter()
  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  // Signal.js since Angular 16
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`)
  
  get imagePath(){
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(){ 
    this.select.emit(this.user.id);
  }
}
