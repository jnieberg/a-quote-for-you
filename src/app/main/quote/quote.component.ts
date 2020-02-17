import { Component, OnInit } from '@angular/core';
import { CONFIGURATION } from 'src/config/config';
import { VisibilityState } from '../../enums/visibilityState';
import { Quote } from '../../models/quote';
import { QuoteService } from '../../services/quote.service';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.styl']
})
export class QuoteComponent implements OnInit {
	public readonly text: any = CONFIGURATION.localization;
	public quote: Quote;
	public visibilityQuote: VisibilityState = VisibilityState.limbo; // "hidden": * <-- [ ] move from screen to left, "limbo": [ ] * hidden at the right, "visible": [*] <-- move from right to screen
	public showError: boolean = false;

	constructor(private quoteService: QuoteService) { }

	public get content(): string {
		return this.quote && this.quote.content;
	}

	public get author(): string {
		return this.quote && this.quote.author;
	}

	public get showFooter(): boolean {
		return !this.showError && this.visibilityQuote === VisibilityState.visible;
	}

	public get showToWait(): boolean {
		return !this.showError && this.visibilityQuote === VisibilityState.limbo;
	}

	// When "byAuthor" is not empty it will get a new quote from a specific author name.
	public newQuote(byAuthor: string = ''): void {
		this.visibilityQuote = VisibilityState.hidden;
		this.showError = false;
		setTimeout(() => {
			this.visibilityQuote = VisibilityState.limbo;
			this.quoteService.getRandomQuote(byAuthor)
				.subscribe(result => {
					this.quote = result;
					this.visibilityQuote = VisibilityState.visible;
				}, (error) => {
					console.error(`WARNING! An error occured while loading quote: ${error.message}`);
					this.showError = true;
				});
		}, 500);
	}

	ngOnInit(): void {
		this.newQuote();
	}

}
