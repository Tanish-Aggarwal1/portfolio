import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

// This is a single-page app with no <router-outlet> — the one route below
// exists only because Angular's SSR/prerender tooling requires a Router
// to be present to extract and statically render '/'.
export const routes: Routes = [{ path: '', component: AppComponent }];
