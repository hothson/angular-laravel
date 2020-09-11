import { Component } from '@angular/core';
import { AuthStateService } from './shared/auth-state.service';
import { TokenService } from './shared/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedIn: boolean;

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ) {

  }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });
  }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
