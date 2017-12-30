import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  serverDate: Date;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.serverDate = this.apiService.getDate();
  }

}
