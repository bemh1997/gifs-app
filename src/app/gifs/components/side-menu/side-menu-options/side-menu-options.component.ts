import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Gif } from '../../../interfaces/gif.interface';
import { GifService } from '../../../services/gifs.service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}
@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'gifs-side-menu-options',
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
	gifService = inject(GifService);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];

}
