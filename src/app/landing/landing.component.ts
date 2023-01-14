import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router: Router){

  }

  goTo(page:string){
    this.router.navigate(['/'+page]);
  }

  openGH(){
    window.open('https://github.com/zerq98',"_blank");
  }

  openIN(){
    window.open('https://www.linkedin.com/in/mateusz-trybuła-301563190/',"_blank");
  }

  getResume(){
    window.open('../../assets/files/MateuszTrybułaResume.pdf','_blank');
  }
}
