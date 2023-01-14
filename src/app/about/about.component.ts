import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  content: string="I'm a web developer located in poland. I mostly focus on backend site of web development but I never close myself to new challenges.";
  hobby: string="I love spending my free time playing football and computer games with my friends or reading good fantasy books."
}
