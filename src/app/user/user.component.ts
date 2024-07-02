import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Get data from Parent component
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  
  // Send data child to parent component with initiator EventEmitter()
  @Output() select = new EventEmitter();
  

  // Signal.js since Angular 16
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`)
  
  get imagePath(){
    return `assets/users/${this.avatar}`;
  }

  onSelectUser(){ 
    this.select.emit(this.id);
  }
}
