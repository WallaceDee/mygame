var Demo2 = (function (_super) {
    __extends(Demo2, _super);
    /**构造函数*/
    function Demo2() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this);
    }
    var __egretProto__ = Demo2.prototype;
    /**游戏启动后，会自动执行此方法*/
    __egretProto__.startGame = function () {
        alert("hello!");
    };
    return Demo2;
})(egret.DisplayObjectContainer);
Demo2.prototype.__class__ = "Demo2";
