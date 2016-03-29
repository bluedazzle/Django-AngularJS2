/**
 * Created by RaPoSpectre on 3/10/16.
 */

import {Component} from 'angular2/core';
import {Fruit} from './Fruit'

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1>
    <div *ngFor="#fruit of fruits">
        <select name="" id="">
            <option *ngFor="#f of fruits" [value]="f.name">{{ f.name }}</option>
        </select>
    </div>
    <input #box (keyup)="0">
    <p>{{ box.value}}</p>
    `
})
export class AppComponent {
    title:string = 'my fruits';
    mes:string = '';
    values = '';
    fruits = [
        new Fruit('apple', 'red', 7),
        new Fruit('banana', 'yellow', 6),
        new Fruit('peach', 'pink', 9)
    ];

    clickMe(){
        this.mes = this.fruits[0].color
    }

    onKey(event:any){
        this.values += event.target.value + '|';
    }
}