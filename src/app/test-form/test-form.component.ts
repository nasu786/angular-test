import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
})
export class TestFormComponent {
  user = { name: '', email: '' };

  onSubmit() {
    console.log(this.user);
  }
}
