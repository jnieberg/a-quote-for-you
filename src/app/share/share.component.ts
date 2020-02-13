import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CONFIGURATION } from 'src/config/config';
import { Share } from '../models/share';
import { ShareService } from '../services/share.service';

@Component({
	selector: 'app-share',
	templateUrl: './share.component.html',
	styleUrls: ['./share.component.styl']
})
export class ShareComponent {
	@Input() public content: string = '';
	@Input() public author: string = '';
	@Output() refreshE: EventEmitter<any> = new EventEmitter<any>();
	public text: any = CONFIGURATION.localization;
	public shares: Share[] = undefined;

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
		return `media-${share.media.toLowerCase()}`;
	}

	public refresh($event: MouseEvent): void {
		this.refreshE.emit($event);
	}
}
