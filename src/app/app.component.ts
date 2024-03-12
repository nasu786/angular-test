import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestFormComponent } from './test-form/test-form.component';
import { ServerMaintenanceComponent } from './server-maintenance/server-maintenance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestFormComponent, ServerMaintenanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';
}
