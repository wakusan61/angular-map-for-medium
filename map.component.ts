import {Component, Inject, OnInit} from '@angular/core';
import {MAPS_API_LOADED} from '../load-maps-api/load-maps-api.module';
@Component({
    selector: 'app-map',
    template: `<google-map *ngIf="apiLoaded | async"></google-map>`,
})
export class MapComponent implements OnInit {
    constructor(@Inject(MAPS_API_LOADED) public apiLoaded) {
    }
    ngOnInit(): void {
    }
}
