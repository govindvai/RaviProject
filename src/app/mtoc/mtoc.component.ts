import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './Mtoc.component.html',
  styleUrls: ['./Mtoc.component.css']
})
export class MtocComponent implements OnInit {
  profileForm = new FormGroup({
    state: new FormControl(''),
    number: new FormControl(''),
    opt: new FormControl(''),
    Color1: new FormControl(''),
    Color2: new FormControl(''),
    Color3: new FormControl(''),
    Color4: new FormControl(''),
    Color5: new FormControl(''),
    combination1: new FormControl(''),
    combination2: new FormControl(''),
    combination3: new FormControl(''),
    combination4: new FormControl(''),
    combination5: new FormControl(''),
  });
  constructor(private http: HttpClient) { }
  optios = []
  ngOnInit(): void {
  
    this.profileForm.controls['opt'].setValue('');
    let i =1;
    while (i <13) {
      let cc = "TPAN" + i;
      if(i<10){
        cc = "TPAN0" + i; 
      }
      i++;
      this.optios.push(cc)
  }
    
  }
  
  disPro: boolean = false;
  onRegiter(){
   
    
  }
 
  showopt1!: boolean;
  selecOpt(data:any){
    if(this.profileForm.value['state'] === "Option2"){
      this.showopt1 = true;
    } else{  
      this.showopt1 = false;
    }
    setTimeout(() => {
      this.profileForm.controls['opt'].setValue('');
    });
 
  }
  selecOption(data:any){
 
  }
 
  activeLab:number = 1;
 
  activeLabel(data:number){
    
    this.activeLab = data;
    setTimeout(() => {
      this.profileForm.controls['opt'].setValue('');
    });
  }
  getActiveClass(data){
    if(this.activeLab === data){
      return "active"
    }
    else{
      return ""
    }
    
  }
 
 
  
}
