import { HttpService } from './service/http.service';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title:string = 'myapp';
  marks :number =0.89
  today: number = Date.now();

  posts : any= this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts').subscribe();
  todoList:any;

  message:string ='Hello world  how are you'; 
  toJsonObject: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  userObject = {
    name: "Abraham",
    age : 21, 
    id: 2,
    isAdult : true,
    isColored:true
  }

  showUser: boolean =true;

  constructor(private httpService:HttpService, private router:Router){}

  ngOnInit(): void {    
  }

  handleEvent(){
     this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/11')
                                    .subscribe((response)=>{
                                      this.todoList = response
                                      console.log(response)
                                    } );
  }

  handleUserEvent(event: any){
    console.log(event)
  }
  
  goToRoute(route: string ="/fourth"){
    this.router.navigateByUrl(route);
    console.log(this.router.url + " is our url")
  }
}
