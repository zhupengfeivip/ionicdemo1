import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // this.statusBar.styleDefault(); //管理本机状态栏的外观,styleDefault使用默认状态栏（深色文本，浅色背景）。
            // 沉浸式并且悬浮透明
            this.statusBar.overlaysWebView(true);
            this.splashScreen.hide();
        });
    }
}
