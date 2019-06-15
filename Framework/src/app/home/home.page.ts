import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform
  ) { 
    plt.ready().then(() => {

      if (this.plt.is('android')) {
          console.log("running on Android device!");
      }
      if (this.plt.is('ios')) {
          console.log("running on iOS device!");
      }
      if (this.plt.is('mobileweb')) {
          console.log("running in a browser on mobile!");
      }

  });

  }

  ngOnInit(){
    
  }

}
