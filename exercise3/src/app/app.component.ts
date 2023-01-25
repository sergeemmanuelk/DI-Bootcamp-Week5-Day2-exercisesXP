import { Component, OnInit } from '@angular/core';
import { ServiceWorkerService } from './services/service-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(serviceWorker: ServiceWorkerService) { }

  ngOnInit(): void {
  }

  title = 'exercise3';
}
