import { Component } from '@angular/core';
import { EnvVariable } from '@Models/environment';
import { EnvironmentService } from '@Services/root/environment.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'athena-core-dev-dashboard',
  imports: [TableModule],
  templateUrl: './dev-dashboard.component.html',
  styleUrl: './dev-dashboard.component.scss',
})
export class DevDashboardComponent {
  envVariables: EnvVariable[] = [];

  constructor(private _environmentService: EnvironmentService) {
    this.envVariables = this._environmentService.mapEnvironmentVariables();
  }
}
