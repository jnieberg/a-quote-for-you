import { browser, by, element, logging, protractor } from 'protractor';
import { AppPage } from './app.po';

describe('Quote application', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display heading', () => {
		page.navigateTo();
		expect(page.getTitle()).toBeDefined();
		expect(page.getTitle()).not.toBe('');
	});

	it('should display quote block', () => {
		expect(page.getQuote()).toBeDefined();
		expect(page.getQuote()).not.toBe('');
		expect(page.getQuoteClass()).toBe('visibility-state-2');
	});

	it('should display quote text', () => {
		expect(page.getQuoteText()).toBeDefined();
		expect(page.getQuoteText()).not.toBe('');
	});

	it('should display quote author', () => {
		expect(page.getQuoteAuthor()).toBeDefined();
		expect(page.getQuoteAuthor()).not.toBe('');
	});

	it('should display social media buttons', () => {
		expect(page.getShareButton()).toBeDefined();
		expect(page.getShareButton()).not.toBe('');
		expect(page.getShareButtonLink()).toBeDefined();
		expect(page.getShareButtonLink()).not.toBe('');
	});

	it('should display a next quote button', () => {
		expect(page.getNextButton()).toBeDefined();
		expect(page.getNextButton()).not.toBe('');
	});

	it('should be possible to click the next quote button', () => {
		const elmNext = element(by.css('app-footer .link-next'));
		browser.actions().mouseMove(elmNext).perform();
		browser.actions().click(protractor.Button.LEFT).perform();
		browser.waitForAngularEnabled(false);
		expect(page.getQuoteClass()).toBe('visibility-state-0');
		browser.waitForAngularEnabled(true);
		expect(page.getQuoteClass()).toBe('visibility-state-2');
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});
});
