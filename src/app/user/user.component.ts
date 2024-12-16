import { Component, signal, computed, input, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => "users/" + this.selectedUser().avatar);
  // @Input({required: true}) id !: string;
  // @Input({required: true}) name !: string;
  // @Input({required: true}) avatar : string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected !: boolean;
  @Output() userSelected = new EventEmitter();

  get imagePath() {
    return "users/" + this.user.avatar
  }
  // get selectUser(){
  //   return "users/" + this.selectedUser().avatar
  // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    console.log("User component selected user: ", this.user.name);
    this.userSelected.emit(this.user.id);
  }
}
