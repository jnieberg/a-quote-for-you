import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CONFIGURATION } from 'src/config/config';
import { Share } from '../models/share';
import { ShareService } from '../services/share.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.styl']
})
export class FooterComponent {
	@Input() public content: string = '';
	@Input() public author: string = '';
	@Output() refreshE: EventEmitter<any> = new EventEmitter<any>();
	public text: any = CONFIGURATION.localization;
	public shares: Share[] = [];

	constructor(private shareService: ShareService) {
		this.shares = this.shareService.share;
	}

	public getLink(share: Share): string {
		let shareLinkResult = '';
		if (share.uri) {
			shareLinkResult = share.uri + encodeURIComponent(`“${this.content}”\n—${this.author}`);
		}
		return shareLinkResult;
	}

	public className(share: Share): string {
		return `link-media-${share.media.toLowerCase()}`;
	}

	public refreshQuote($event: MouseEvent): void {
		this.refreshE.emit($event);
	}
}
