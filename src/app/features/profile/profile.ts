import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class ProfileComponent {
  /**
   * The user's full name
   */
  name: string = '';

  /**
   * The user's email address
   */
  email: string = '';
} 