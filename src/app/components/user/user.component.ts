import { Userinterface } from './../../interfaces/userinterface';
import { Component, EventEmitter,OnInit,Input ,Output} from '@angular/core';
 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 // implement OnInit -> runs the code  in ngwhen the component is initialized

  @Input() user1: Userinterface
  @Output()  userCustomEvent :EventEmitter<Userinterface>;
  isColored:boolean = false;

  constructor() {
      this.userCustomEvent = new EventEmitter<Userinterface>();
      this.user1={} as Userinterface
     
   }

  ngOnInit(): void {

    this.isColored =this.user1.isColored   
  }
  
  sendUserEvent(): void{
      this.userCustomEvent.emit(this.user1)
  }

}
