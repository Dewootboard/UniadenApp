import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { Exhibitors } from '../exhibitors/exhibitors';
import { Event } from '../event/event';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Exhibitors;
  tab3Root = Event;

  constructor() {

  }
}
