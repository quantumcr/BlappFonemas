import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss'],
})
export class RestoreComponent implements OnInit {
  @Input() comando: string;
  email: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {}

  sendLinkReset() {
    this.authService.resetPassword(this.email).then(() => {
      console.log('enviado');
    }).catch(() => {
      console.log('error');
    })
  }

}
