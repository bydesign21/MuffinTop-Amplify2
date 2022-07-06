import { OnInit } from '@angular/core';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';
import { async } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title = 'workfall-amplify-app';
  user: CognitoUserInterface | undefined;
  authState!: AuthState;
  userInfo: undefined | any;

  constructor(private ref: ChangeDetectorRef, private router: Router) {}

  async ngOnInit() {
    
     this.userInfo = await Auth.currentUserInfo();
    // this.userId = await userInfo.attributes.name;
    console.log(await(this.userInfo));
    this.redirectTo('/employees');
    // console.log(await(this.userId))
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;

      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));  
    return onAuthUIStateChange;
  }
  
   async checkUser() {
    await Auth.currentAuthenticatedUser()
      .then((storage: any) => console.log({ storage  }))
      .catch((err: any) => console.log(err))
  }
  public async redirectTo(uri:string)
  {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }
  
}

