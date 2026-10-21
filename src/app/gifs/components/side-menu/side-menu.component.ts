import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';

@Component({
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  selector: 'gifs-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {}
