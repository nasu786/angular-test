import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestFormComponent } from './test-form/test-form.component';
import { ServerMaintenanceComponent } from './server-maintenance/server-maintenance.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestFormComponent, ServerMaintenanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';
  env = environment.env
}
