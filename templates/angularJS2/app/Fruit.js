System.register([], function(exports_1) {
    var Fruit;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by RaPoSpectre on 3/10/16.
             */
            Fruit = (function () {
                function Fruit(name, color, sugar) {
                    this.color = color;
                    this.name = name;
                    this.sugar = sugar;
                }
                return Fruit;
            })();
            exports_1("Fruit", Fruit);
        }
    }
});
//# sourceMappingURL=Fruit.js.map