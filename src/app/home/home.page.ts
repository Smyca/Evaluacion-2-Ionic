import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items:any[]=[]
  constructor(private apiService: APIService) {}

  ngOnInit() {

    this.apiService.obtenerInfo().subscribe((Root)=>{
      console.log(Root)
      this.items=Root

    localStorage.setItem('API', JSON.stringify(this.items))
  
  });
    
  }




}
