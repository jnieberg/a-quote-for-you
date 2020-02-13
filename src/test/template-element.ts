import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export function templateElement(
	test: {
		attr?: string,
		element: DebugElement,
		query: string
	}
): any {
	let elementResult: string;
	const elementThis = test.element.query(By.css(test.query)).nativeElement;
	switch (test.attr) {
		case undefined: case 'html': elementResult = elementThis.innerHTML; break;
		default: elementResult = elementThis.getAttribute(test.attr); break;
	}
	return elementResult;
}
