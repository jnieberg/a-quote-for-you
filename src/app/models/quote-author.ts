import { Quote } from './quote';

export abstract class QuoteAuthor {
	public count: number;
	public totalCount: number;
	public lastItemIndex: number;
	public results: Quote[];
}
