import { HttpService } from './service/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'myapp';
  marks :number =0.89
  today: number = Date.now();

  todoList:any

  message:string ='Hello world how are you'; 
  toJsonObject: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  constructor(private httpService:HttpService){

  }

  handleEvent(){
     this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/11')
                                    .subscribe((response)=>{
                                      this.todoList = response
                                      console.log(response)
                                    } );
  }
  //1:35
}
