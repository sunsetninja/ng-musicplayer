import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'music-details',
	templateUrl: 'music-details.component.html',
	styleUrls: ['music-details.component.css']
})
export class MusicDetailsComponent {
	@Input() title: string;
}
