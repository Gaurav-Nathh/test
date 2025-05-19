import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, NgClass, ThemeToggleComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userType = 'customer';
  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  model = {
    email: '',
    password: '',
    userType: '',
  };
  hidepassword: boolean = true;

  ngOnInit(): void {
    // this.themeService.initTheme();
    this.startCarousel();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme() === 'dark-theme';
  }

  togglePassword() {
    this.hidepassword = !this.hidepassword;
  }

  onSubmit(form: NgForm) {
    // this.authService.login();
    this.userService.setUserType(this.userType);
    const route = this.userType === 'customer' ? '/customer' : '/vendor';
    this.router.navigate([route]);
  }

  showPasswordField = false;
  submittedEmail = false;

  onNextStep(emailField: any) {
    if (emailField.valid) {
      this.showPasswordField = true;
      this.submittedEmail = true;
    } else {
      emailField.control.markAsTouched(); // to trigger validation messages
    }
  }

  currentSlide = 0;
  indicatorWidth = 50; // Initial width for the indicator (percentage)
  private interval: any;

  startCarousel(): void {
    const slides = document.querySelectorAll('.carousel-item');
    this.interval = setInterval(() => {
      slides[this.currentSlide].classList.remove('active');
      this.currentSlide = (this.currentSlide + 1) % slides.length;
      slides[this.currentSlide].classList.add('active');
      this.updateIndicator();
    }, 3000); // Change slide every 3 seconds
  }

  updateIndicator(): void {
    this.indicatorWidth = (this.currentSlide + 1) * 50; // Adjust indicator width based on the current slide
  }
}
