// angular import
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
// third party
// icon
import { IconService } from '@ant-design/icons-angular';
import {
  BellOutline,
  SettingOutline,
  GiftOutline,
  MessageOutline,
  PhoneOutline,
  CheckCircleOutline,
  LogoutOutline,
  EditOutline,
  UserOutline,
  ProfileOutline,
  WalletOutline,
  QuestionCircleOutline,
  LockOutline,
  CommentOutline,
  UnorderedListOutline,
  ArrowRightOutline,
  GithubOutline
} from '@ant-design/icons-angular/icons';
import { AuthService } from 'src/app/auth.service';








@Component({
  selector: 'app-nav-right',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
  @Input() styleSelectorToggle!: boolean;
  @Output() Customize = new EventEmitter();
  @Output() logout = new EventEmitter<void>(); // Evento que se emitirá cuando el usuario haga


  windowWidth: number;
  screenFull: boolean = true;

  constructor(private authService: AuthService,private iconService: IconService) {
    this.windowWidth = window.innerWidth;
    this.iconService.addIcon(
      ...[
        CheckCircleOutline,
        GiftOutline,
        MessageOutline,
        SettingOutline,
        PhoneOutline,
        LogoutOutline,
        UserOutline,
        EditOutline,
        ProfileOutline,
        QuestionCircleOutline,
        LockOutline,
        CommentOutline,
        UnorderedListOutline,
        ArrowRightOutline,
        BellOutline,
        GithubOutline,
        WalletOutline
      ]
    );
  }

  profile = [
    // {
    //   icon: 'edit',
    //   title: 'Editar Perfil'
    // },
    // {
    //   icon: 'user',
    //   title: 'Ver Perfil'
    // },
    // {
    //   icon: 'profile',
    //   title: 'Perfil Público'
    // },
    // {
    //   icon: 'wallet',
    //   title: 'Facturación'
    // }
  ];

  setting = [
    // {
    //   icon: 'question-circle',
    //   title: 'Support'
    // },
    {
      icon: 'user',
      title: 'Account Settings',
      url: '/register',

    },
    // {
    //   icon: 'lock',
    //   title: 'Privacy Center'
    // },
    // {
    //   icon: 'comment',
    //   title: 'Feedback'
    // },
    // {
    //   icon: 'unordered-list',
    //   title: 'History'
    // }
  ];




   // Lógica para cuando el usuario hace logout
   EmitLogout() {
    this.authService.logout(); // Aquí llamamos al método logout del servicio
    console.log('Usuario deslogueado desde NavRight');
  }




}
