import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// import { AutoCompleteModule } from 'primeng/primeng';
import {
	MusicDetailsComponent,
	MusicFooterComponent,
	MusicProgressComponent,
	MusicSearchComponent,
	MusicPlayerComponent,
	MusicService,
	ApiService
} from './index';

@NgModule({
	imports: [
		FormsModule,
		// AutoCompleteModule,
		HttpModule,
		CommonModule
	],
	exports: [
		MusicSearchComponent,
		MusicDetailsComponent,
		MusicPlayerComponent,
		MusicProgressComponent,
		MusicFooterComponent
	],
	declarations: [
		MusicSearchComponent,
		MusicDetailsComponent,
		MusicPlayerComponent,
		MusicProgressComponent,
		MusicFooterComponent
	],
	providers: [
		ApiService,
		MusicService
	],
})
export class MusicModule { }
