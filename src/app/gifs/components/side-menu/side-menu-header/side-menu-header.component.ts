import { Component } from '@angular/core';
import { environment } from '@environments/environment';
// import { environments } from '../../../../../environmentss/environment';

@Component({
  imports: [],
  selector: 'gifs-side-menu-header',
  templateUrl: './side-menu-header.component.html',
})
export class SideMenuHeaderComponent {
	envs = environment;
}
