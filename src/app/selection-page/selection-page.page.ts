import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.page.html',
  styleUrls: ['./selection-page.page.scss'],
})
export class SelectionPagePage implements OnInit {
  selectedVal:number=102;
  data: any[]=[];
  constructor(private platform:Platform) {
    this.platform.ready().then(()=>{
      this.data =[{id:101, name:"Bangla"},{id:102, name:"English"}]

    })
   }
   OnChange(event){
     alert("you have selected" + event.target.value);
   }
  ngOnInit() {
  }

}
