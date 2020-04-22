import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.page.html',
  styleUrls: ['./selection-page.page.scss'],
})
export class SelectionPagePage implements OnInit {
  selectedVal:number=101;
  selectedVal1:number=201;
  data: any[]=[];
  district:any[]=[];
  constructor(private platform:Platform) {
    this.platform.ready().then(()=>{
      this.data =[{id:101, name:"বাংলা"},{id:102, name:"English"}]

    })
    this.platform.ready().then(()=>{
      this.district =[{id:201, name:"Dhaka"},{id:202, name:"Khulna"}]

    })
   }
   OnChange(event){
     
   }
  ngOnInit() {
  }

}
