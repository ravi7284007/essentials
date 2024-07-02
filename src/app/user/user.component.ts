import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';

const randomIndex = ():number => Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Zone.js
  // selectedUser: any = DUMMY_USERS[randomIndex()];

  // Signal.js
  selectedUser = signal(DUMMY_USERS[randomIndex()]);
  imagePath = computed(()=>`assets/users/${this.selectedUser().avatar}`)
  
  // get imagePath() {
  //   // Zone.js
  //   // return `assets/users/${this.selectedUser.avatar}`

  //   // Signal.js
  //   return `assets/users/${this.selectedUser().avatar}`
  // }

  onSelectUser(){
  const randomUserIndex = randomIndex()
    // Zone.js
    // this.selectedUser = DUMMY_USERS[randomUserIndex]

    // Signal.js
    this.selectedUser.set(DUMMY_USERS[randomUserIndex])
  }
}
