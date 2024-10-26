import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  datos:any[]=[]
  constructor(private apiService: APIService) {}

  ngOnInit() {

    this.apiService.obtenerInfo().subscribe((Info)=>{
      //Si los datos existen en local storage
      if(localStorage.getItem('API')){
        console.log('Datos extraidos desde LocalStorage')
        console.log(Info)
        this.datos=Info
      }else{
        //Si los datos no existen en local storage, se extraen desde API
        console.log('Datos extraidos desde API')
        console.log(Info)
        this.datos=Info
        localStorage.setItem('API', JSON.stringify(this.datos))

      }
      
  
  });
    
  }




}
