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
      //Si no existe en local storage
      if(localStorage.getItem('API')){
        console.log('Api ya existe en local Storage')
        this.items=Root
      }else{
        //Si existe en local storage
        console.log('Api no existe en local Storage')
        
        console.log(Root)
        this.items=Root
  
        localStorage.setItem('API', JSON.stringify(this.items))

      }
      
  
  });
    
  }




}
