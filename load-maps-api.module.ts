import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, shareReplay} from 'rxjs/operators';

export const MAPS_API_LOADED = new InjectionToken<Observable<boolean>>('Google Maps API Loaded');

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [{provide: MAPS_API_LOADED, useFactory: loadMapsApi, deps: [HttpClient]}]
})
export class LoadMapsApiModule {
}

function loadMapsApi(httpClient: HttpClient): Observable<boolean> {
    return httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY', 'callback')
        .pipe(
            shareReplay(1),
            map(() => true),
            catchError(err => of(false))
        );
}
