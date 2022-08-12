import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
        login(val:any,val2:any){
          if(val === "sk" && val2 === '123'){
               console.log(val,val2);
               this.route.navigate(['/admin'],{
                queryParams:{page:1,order:'staff'}
              })
            } 
            else{
              console.log("Invalid");
              
            }
          }
}
