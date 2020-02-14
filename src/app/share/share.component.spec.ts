import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CONFIGURATION } from 'src/config/config';
import { templateElement } from 'src/test/template-element';
import { ShareService } from '../services/share.service';
import { ShareComponent } from './share.component';

describe('Component: ShareComponent', () => {
	let component: ShareComponent;
	let fixture: ComponentFixture<ShareComponent>;
	let element: DebugElement;
	const mock = CONFIGURATION.mock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ShareComponent],
			providers: [ShareService],
			imports: [HttpClientTestingModule]
		}).compileComponents();
		fixture = TestBed.createComponent(ShareComponent);
		component = fixture.componentInstance;
		component.content = mock.quote.content;
		component.author = mock.quote.author;
		fixture.detectChanges();
		element = fixture.debugElement;
	});

	describe('* Functions', () => {
		describe('* getLink(share: Share)', () => {
			const thisResult = mock.share.uri + encodeURIComponent(`“${mock.quote.content}”\n—${mock.quote.author}`);
			it(`Should return "${thisResult}"`, () => {
				const link = component.getLink(mock.share);
				expect(link).toBe(thisResult);
			});
		});
		describe('* className(share: Share)', () => {
			const thisResult = `media-${mock.share.media.toLowerCase()}`;
			it(`Should return "${thisResult}"`, () => {
				const link = component.className(mock.share);
				expect(link).toBe(thisResult);
			});
		});
	});
	describe('* Template', () => {
		describe('* Social button text', () => {
			const thisResult = 'Share on ';
			it(`Should contain "${thisResult}"`, () => {
				expect(templateElement({ element, query: '.link-media-facebook' })).toContain(thisResult);
				expect(templateElement({ element, query: '.link-media-twitter' })).toContain(thisResult);
			});
		});
		describe('* Social button link', () => {
			const thisResult = 'https://www.facebook.com/sharer/sharer.php?u=github.com%2Fjnieberg&quote=%E2%80%9CUse%20the%20mock%2C%20Luke%E2%80%9D%0A%E2%80%94Obi%20Mockanobi';
			it(`Should be "${thisResult}"`, () => {
				expect(templateElement({ attr: 'href', element, query: '.link-media-facebook' })).toBe(thisResult);
			});
		});
	});
});
