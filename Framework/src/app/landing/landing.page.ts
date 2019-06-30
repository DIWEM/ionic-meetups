import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private nfc: NFC, private ndef: Ndef) { }

  ngOnInit() {
    
    
  }

  nfclick() {

    this.nfc.beginSession().subscribe(res => {
      this.nfc.addNdefListener(() => {
        alert('successfully attached ndef listener');
      }, (err) => {
        console.log('error attaching ndef listener', err);
        alert(('error attaching ndef listener' + err));
      }).subscribe((event) => {
        console.log('received ndef message. the tag contains: ', event.tag);
        console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
      });
    },
      err => {
      console.log(err);
      });
  }

}
