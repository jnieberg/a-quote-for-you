import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CONFIGURATION } from 'src/config/config';
import { createHttpMock } from 'src/test/create-http-mock';
import { AppModule } from '../app.module';
import { QuoteService } from '../services/quote.service';

describe('Service: QuoteService', () => {
	let service: QuoteService;
	const mock = CONFIGURATION.mock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [QuoteService],
			imports: [HttpClientTestingModule, AppModule]
		});
		service = TestBed.get(QuoteService);
	});

	describe('* Functions', () => {
		describe('* getRandomQuote()', () => {
			const thisResult = { content: 'Use the mock, Luke', author: 'Obi Mockanobi' };
			it(`Should return ${JSON.stringify(thisResult)}`, (done) => {
				service.getRandomQuote()
					.subscribe(res => {
						expect(res).toEqual(thisResult);
						done();
					});
				createHttpMock({
					api: mock.api.endpoint,
					method: mock.api.method,
					response: {
						...mock.quote
					}
				});
			});
		});
	});
});
