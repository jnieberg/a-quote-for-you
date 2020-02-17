import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CONFIGURATION } from 'src/config/config';
import { templateElement } from 'src/test/template-element';
import { VisibilityState } from '../enums/visibilityState';
import { FooterComponent } from '../footer/footer.component';
import { QuoteService } from '../services/quote.service';
import { QuoteComponent } from './quote.component';

describe('Component: QuoteComponent', () => {
	let component: QuoteComponent;
	let fixture: ComponentFixture<QuoteComponent>;
	let element: DebugElement;
	const mock = CONFIGURATION.mock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [QuoteComponent, FooterComponent],
			providers: [QuoteService],
			imports: [RouterTestingModule, HttpClientTestingModule]
		}).compileComponents();
		fixture = TestBed
			.createComponent(QuoteComponent);
		component = fixture.componentInstance;
		component.quote = mock.quote;
		component.ngOnInit();
		fixture.detectChanges();
		element = fixture.debugElement;
	});

	describe('* Functions', () => {
		describe('* get content()', () => {
			const thisResult = mock.quote.content;
			it(`Should return "${thisResult}"`, () => {
				const result = component.content;
				expect(result).toBe(thisResult);
			});
		});
		describe('* get author()', () => {
			const thisResult = mock.quote.author;
			it(`Should return "${thisResult}"`, () => {
				const result = component.author;
				expect(result).toBe(thisResult);
			});
		});
		describe('* newQuote()', () => {
			const thisResult = 'hidden';
			it(`"visibilityQuote" should be "${thisResult}"`, () => {
				component.newQuote();
				expect(component.visibilityQuote).toBe(VisibilityState.hidden);
			});
		});
	});
	describe('* Template', () => {
		describe('* Quote panel class', () => {
			const thisResult = 'visibility-state-0';
			const thatResult = 'visibility-state-2';
			it(`Should be "${thisResult}" and then "${thatResult}"`, () => {
				expect(templateElement({ attr: 'class', element, query: 'blockquote' })).toBe(thisResult);
				component.visibilityQuote = VisibilityState.visible;
				fixture.detectChanges();
				expect(templateElement({ attr: 'class', element, query: 'blockquote' })).toBe(thatResult);
			});
		});
		describe('* Quote panel content', () => {
			const thisResult = 'Use the mock, Luke';
			it(`Should contain "${thisResult}"`, () => {
				expect(templateElement({ element, query: 'blockquote h2' })).toBe(thisResult);
			});
		});
	});
});
