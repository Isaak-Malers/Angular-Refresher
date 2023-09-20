import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-halloween',
  templateUrl: './halloween.component.html',
  styleUrls: ['./halloween.component.css']
})
export class HalloweenComponent {

  constructor(private timeService: TimeService){

  }

  public displayText = "";
  happy = false;

  public onClick(){
    if(this.happy === false){
      this.displayText = "Happy Halloween"
      this.happy = true;
    }else{
      this.displayText = "Halloween is " + this.timeService.daysToHalloween() + " days away"; 
      this.happy = false;
    }
  }

}
