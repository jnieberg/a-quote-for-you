import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { QuoteComponent } from './quote/quote.component';

export class MyHammerConfig extends HammerGestureConfig {
	buildHammer(element: HTMLElement): Hammer {
		const mc = new Hammer(element, {
			touchAction: 'pan-y',
		});
		return mc;
	}
}

@NgModule({
	declarations: [
		AppComponent,
		QuoteComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [{
		provide: HAMMER_GESTURE_CONFIG,
		useClass: MyHammerConfig,
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
