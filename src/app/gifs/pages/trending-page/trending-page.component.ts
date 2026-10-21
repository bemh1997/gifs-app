import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit {
  gifService = inject(GifService);
  ScrollStateService = inject(ScrollStateService);
  scrollDiveRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

	ngAfterViewInit(): void {
		const scrollDiv = this.scrollDiveRef()?.nativeElement;
    if (!scrollDiv) return;

		scrollDiv.scrollTop = this.ScrollStateService.trendingScrollState();
	}

  onScroll(envent: Event) {
    const scrollDiv = this.scrollDiveRef()?.nativeElement;
    if (!scrollDiv) return;

		debugger;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    // console.log({scrollTop, clientHeight, scrollHeight});
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
		this.ScrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
