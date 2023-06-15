import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name = '';
  avatar = '';
  checkLogin = false;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
    }
  }

  logOut() {
    sessionStorage.clear();
    window.location.reload();
  }
}
