import { HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

let http: HttpTestingController;

export function createHttpMock(
	mock: {
		api?: string;
		method?: string;
		response?: any;
	}
): TestRequest {
	http = TestBed.get(HttpTestingController);
	const getRequest = http.expectOne({
		method: mock.method || undefined,
		url: mock.api
	});

	getRequest.flush(mock.response || {});

	return getRequest;
}
