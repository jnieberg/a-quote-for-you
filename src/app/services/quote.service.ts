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

	public api: ConfigurationApi = CONFIGURATION.api;

	public getRandomQuote(byAuthor: string = ''): Observable<Quote> {
		return this.callQuoteApi(byAuthor)
			.pipe(
				map(resultArg => {
					if (resultArg) {
						let result = resultArg;
						if (byAuthor) {
							const index = Math.floor(Math.random() * resultArg.results.length);
							result = resultArg.results[index];
						}
						return {
							content: result.content,
							author: result.author
						};
					}
				})
			);
	}

	private callQuoteApi(byAuthor: string = ''): Observable<any> {
		let endpoint = this.api.endpoint;
		if (byAuthor) {
			endpoint = this.api.endpointAuthor + byAuthor;
		}
		let apiResult: Observable<any> = null;
		switch (!this.api.method || this.api.method.toUpperCase()) {
			case 'GET': apiResult = this.http.get(endpoint); break;
			case 'POST': apiResult = this.http.post(endpoint, this.api.query); break;
			case 'PUT': apiResult = this.http.put(endpoint, this.api.query); break;
			case 'DELETE': apiResult = this.http.delete(endpoint); break;
			default: apiResult = this.http.get(endpoint); break;
		}
		return apiResult;
	}
}
