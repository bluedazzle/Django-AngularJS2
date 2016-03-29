/**
 * Created by RaPoSpectre on 3/10/16.
 */
System.register(['angular2/core', './Fruit'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Fruit_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Fruit_1_1) {
                Fruit_1 = Fruit_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'my fruits';
                    this.mes = '';
                    this.values = '';
                    this.fruits = [
                        new Fruit_1.Fruit('apple', 'red', 7),
                        new Fruit_1.Fruit('banana', 'yellow', 6),
                        new Fruit_1.Fruit('peach', 'pink', 9)
                    ];
                }
                AppComponent.prototype.clickMe = function () {
                    this.mes = this.fruits[0].color;
                };
                AppComponent.prototype.onKey = function (event) {
                    this.values += event.target.value + '|';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{ title }}</h1>\n    <div *ngFor=\"#fruit of fruits\">\n        <select name=\"\" id=\"\">\n            <option *ngFor=\"#f of fruits\" [value]=\"f.name\">{{ f.name }}</option>\n        </select>\n    </div>\n    <input #box (keyup)=\"0\">\n    <p>{{ box.value}}</p>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map