import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent , AppService} from './app/';


bootstrap(AppComponent, [AppService]);

