import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'addstaff',
  templateUrl: 'addstaff.component.html',
  styleUrls: ['./adminworks.component.css']
})
export class AddStaffComponent implements OnInit {

  url = "http://localhost:3000/staffrecords";
  constructor(private route: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

      
      saveform(val:HTMLInputElement){
        val.value=" ";
        this.http.post(this.url, val)
        .subscribe(data => {
          console.log(data);
           
        }
        
        )
      }
}
