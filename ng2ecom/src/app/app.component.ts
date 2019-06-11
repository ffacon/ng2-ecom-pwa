import { Component, OnInit } from '@angular/core';
import {UserService} from './services/user.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService ]
})
export class AppComponent implements OnInit {
  constructor(public userService: UserService,
              public swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
          if (confirm(`New version available. Load New Version?`)) {
             window.location.reload();
            }
       });
      }
    }

  logout () {
    this.userService.logout();
    }



}
