import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CONFIGURATION } from 'src/config/config';
import { Share } from '../../models/share';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.styl']
})
export class FooterComponent {
	@Input() public content: string = '';
	@Input() public author: string = '';
	@Output() newQuoteE: EventEmitter<any> = new EventEmitter<any>();
	public readonly shareIcons: Share[] = CONFIGURATION.share;
	public readonly appUrl: any = CONFIGURATION.app.url;
	public readonly text: any = CONFIGURATION.localization;

	constructor(private readonly sanitizer: DomSanitizer) { }

	public getShareLink(share: Share): SafeUrl {
		let shareLinkResult = '';
		if (share.uri) {
			shareLinkResult = share.uri + encodeURIComponent(`“${this.content}”\n—${this.author}\n\n${this.appUrl}`);
		}
		return this.sanitizer.bypassSecurityTrustUrl(shareLinkResult);
	}

	public getShareClassName(share: Share): string {
		return `link-media-${share.media.toLowerCase()}`;
	}

	public newQuote($event: MouseEvent): void {
		this.newQuoteE.emit($event);
	}
}
