import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@js-camp/angular/environments/environment';

/** API Key Interceptor. */
@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
	/** @inheritdoc */
	public intercept(httpRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const updatedRequest = httpRequest.clone({
			headers: httpRequest.headers.set('Api-Key', environment.apiKey),
		});
		return next.handle(updatedRequest);
	}
}
