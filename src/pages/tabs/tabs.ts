import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = HistoryPage;

  constructor() {

  }
}
