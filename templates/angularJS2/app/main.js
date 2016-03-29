System.register(['./login.component', 'angular2/platform/browser'], function(exports_1) {
    var login_component_1, browser_1;
    return {
        setters:[
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(login_component_1.LoginComponent);
        }
    }
});
//# sourceMappingURL=main.js.map