import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'music-player',
	templateUrl: 'music-player.component.html',
	styleUrls: ['music-player.component.css']
})
export class MusicPlayerComponent {

	@Input() paused: boolean;

	@Output() backward = new EventEmitter();
	@Output() pauseplay = new EventEmitter();
	@Output() forward = new EventEmitter();
	@Output() random = new EventEmitter();
	@Output() stop = new EventEmitter();
}
