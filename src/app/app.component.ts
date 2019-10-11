import { Component } from '@angular/core';
import { ServicioTesteableService } from './servicio-testeable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TallerTestingAngular';
  dog = null;
  constructor(public testService:ServicioTesteableService){

  }

  ngOnInit(): void {
    console.log("Service > "+this.testService);
    this.dog = this.testService.doAPICall('https://dog.ceo/api/breeds/image/random')
    .subscribe(
        data => this.dog = data
    );
  }
}
