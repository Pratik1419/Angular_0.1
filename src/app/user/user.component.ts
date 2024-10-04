import { Component, computed, Input, Output, input, EventEmitter,output } from '@angular/core';





@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) id!: string;
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
//  How to register outputs either with the output decorator or with help of that output function.. 
 @Output() select = new EventEmitter<string>();
// select = output<string>();

 get imagePath() {
  return 'assets/users/' + this.avatar;
 }
// avatar = input.required<string>();  //This input singles are only read-only signals.
// name = input.required<string>();    //They can't change inside the component where the input is register.

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// });

  onSelectUser() {
    this.select.emit(this.id)
  }
}
