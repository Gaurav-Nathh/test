import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log',
  imports: [FormsModule, NgIf, NgClass, ThemeToggleComponent, RouterLink],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss',
})
export class LogComponent {
  loginModel = {
    userName: '',
    password: '',
  };
  userType: string = 'customer';
  hidePassword: boolean = true;
  showPasswordField = false;

  images = [
    {
      src: '/assets/images/vendor_loginpage_img_1.svg',
      text: 'Welcome to our platform!',
    },
    {
      src: '/assets/images/vendor_loginpage_img_2.svg',
      text: 'Enjoy the best experience!',
    },
  ];

  currentImage = 0;
  progress = 50;

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextStep() {
    this.showPasswordField = true;
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    this.authService.login(this.loginModel).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.userService.setUserType(this.userType);
    switch (this.userType) {
      case 'customer':
        this.router.navigate(['/customer']);
        break;
      case 'vendor':
        this.router.navigate(['/vendor']);
        break;
      case 'master':
        this.router.navigate(['/master']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  nextSlide() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
    this.progress = (this.currentImage + 1) * 50;
  }
}
