import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo(): Promise<any> {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	getTitle(): Promise<string> {
		return element(by.css('app-root h1')).getText() as Promise<string>;
	}

	getQuote(): Promise<string> {
		return element(by.css('app-quote blockquote')).getText() as Promise<string>;
	}

	getQuoteClass(): Promise<string> {
		return element(by.css('app-quote blockquote')).getAttribute('class') as Promise<string>;
	}

	getQuoteText(): Promise<string> {
		return element(by.css('app-quote blockquote h2')).getText() as Promise<string>;
	}

	getQuoteAuthor(): Promise<string> {
		return element(by.css('app-quote blockquote h3')).getText() as Promise<string>;
	}

	getShareButton(): Promise<string> {
		return element(by.css('app-footer .link-media-facebook')).getAttribute('alt') as Promise<string>;
	}

	getShareButtonLink(): Promise<string> {
		return element(by.css('app-footer .link-media-twitter')).getAttribute('href') as Promise<string>;
	}

	getNextButton(): Promise<string> {
		return element(by.css('app-footer .link-next')).getAttribute('alt') as Promise<string>;
	}
}
