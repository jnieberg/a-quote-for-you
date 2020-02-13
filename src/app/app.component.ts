import { Component } from '@angular/core';
import { CONFIGURATION } from 'src/config/config';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})
export class AppComponent {
	public text: any = CONFIGURATION.localization;
}
