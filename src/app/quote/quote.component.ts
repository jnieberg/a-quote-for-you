import { Component, OnInit } from '@angular/core';
import { CONFIGURATION } from 'src/config/config';
import { VisibilityState } from '../enums/visibilityState';
import { Quote } from '../models/quote';
import { QuoteService } from '../services/quote.service';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.styl']
})
export class QuoteComponent implements OnInit {
	public quote: Quote;
	public text: any = CONFIGURATION.localization;
	public showQuote: VisibilityState = VisibilityState.limbo;
	public showError: boolean = false;

	constructor(private quoteService: QuoteService) { }

	public get content(): string {
		return this.quote && this.quote.content;
	}

	public get author(): string {
		return this.quote && this.quote.author;
	}

	public get showFooter(): boolean {
		return !this.showError && this.showQuote === VisibilityState.visible;
	}

	public refreshQuote(byAuthor: string = ''): void {
		this.showQuote = VisibilityState.hidden;
		this.showError = false;
		setTimeout(() => {
			this.showQuote = VisibilityState.limbo;
			this.quoteService.getRandomQuote(byAuthor).subscribe(result => {
				this.quote = result;
				this.showQuote = VisibilityState.visible;
			}, (error) => {
				console.error(`WARNING! An error occured while loading quote: ${error.message}`);
				this.showError = true;
			});
		}, 1000);
	}

	ngOnInit(): void {
		this.refreshQuote();
	}

}
