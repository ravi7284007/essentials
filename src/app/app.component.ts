import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './data/dummy-users';
import { TasksComponent } from './task/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = this.users[0].id;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
