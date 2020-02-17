import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CONFIGURATION } from 'src/config/config';
import { ConfigurationApi } from '../models/configuration-api';
import { Quote } from '../models/quote';

@Injectable({
	providedIn: 'root'
})
export class QuoteService {

	constructor(private readonly http: HttpClient) { }

	private readonly api: ConfigurationApi = CONFIGURATION.api;

	public getRandomQuote(byAuthor: string = ''): Observable<Quote> {
		return this.callQuoteApi(byAuthor)
			.pipe(
				map(resultApi => {
					if (resultApi) {
						let quote = resultApi;
						if (byAuthor) { // "author" API returns an array, so return a random quote from the array
							const index = Math.floor(Math.random() * resultApi.results.length);
							quote = resultApi.results[index];
						}
						return { // We only need the quote and the author
							content: quote.content,
							author: quote.author
						};
					}
				})
			);
	}

	private callQuoteApi<T>(byAuthor: string = ''): Observable<any> {
		let endpoint = this.api.endpoint;
		if (byAuthor) {
			endpoint = this.api.endpointAuthor + byAuthor;
		}
		switch (!this.api.method || this.api.method.toUpperCase()) { // check API request method
			case 'GET': return this.http.get<T>(endpoint);
			case 'POST': return this.http.post<T>(endpoint, this.api.query);
			case 'PUT': return this.http.put<T>(endpoint, this.api.query);
			case 'DELETE': return this.http.delete<T>(endpoint);
		}
		return this.http.get<T>(endpoint); // defaults to "GET"
	}
}
