import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CustomerService } from '../../services/vendor-service/customer.service';
import { CustomerFormData } from '../../Models/data-structure/customer.model';

@Component({
  selector: 'app-base-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.scss',
})
export class BaseFormComponent {
  salutation = '';
  firstName = '';
  lastName = '';
  displayName = '';
  displayNameOptions: string[] = [];

  constructor(public CustomerService: CustomerService) {}

  updateDisplayNameOptions() {
    const f = this.firstName.trim();
    const l = this.lastName.trim();
    const options = new Set<string>();

    if (f && l) {
      options.add(`${f} ${l}`);
      options.add(`${l} ${f}`);
      options.add(f);
      options.add(l);
    } else if (f) {
      options.add(f);
    } else if (l) {
      options.add(l);
    }

    this.displayNameOptions = Array.from(options);
    console.log(this.displayNameOptions);
  }

  onSubmit(vendorForm: NgForm) {
    if (!vendorForm.valid) {
      // Find first invalid input
      const firstInvalidControl: HTMLElement | null = document.querySelector(
        'form .ng-invalid[required]'
      );

      if (firstInvalidControl) {
        firstInvalidControl.focus();
      }

      // Show Swal error
      Swal.fire({
        toast: true,
        icon: 'error',
        position: 'top-end',
        title: 'Please fill all required fields',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          popup: 'swal-toast',
          icon: 'no-border',
          title: 'swal-title',
        },
      });

      return;
    }

    // Confirmation popup
    Swal.fire({
      title: 'Are you sure?',
      text: 'Please confirm to submit the form.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Form',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.CustomerService.customer);

        Swal.fire({
          icon: 'success',
          title: 'Form Submitted!',
          text: 'Vendor details have been successfully submitted.',
          timer: 2000,
          showConfirmButton: false,
        });

        this.CustomerService.customer = new CustomerFormData();
      }
    });
  }
}
