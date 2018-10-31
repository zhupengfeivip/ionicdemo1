import { Component } from '@angular/core';

import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {constructor(private statusBar: StatusBar) {
    // 沉浸式并且悬浮透明
    this.statusBar.overlaysWebView(true);
}}
