var Demo3 = (function (_super) {
    __extends(Demo3, _super);
    function Demo3() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this);
    }
    var __egretProto__ = Demo3.prototype;
    /**游戏启动后，会自动执行此方法*/
    __egretProto__.startGame = function () {
        this.loadResource();
    };
    /**加载所需资源*/
    __egretProto__.loadResource = function () {
        //使用资源管理器加载资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("demo3");
    };
    /**加载完毕后即可使用*/
    __egretProto__.onResourceLoadComplete = function () {
        var data = RES.getRes("monkey_json"); //获取描述
        var texture = RES.getRes("monkey_png"); //获取大图
        var mcDataFactory = new egret.MovieClipDataFactory(data, texture);
        var chunli = new egret.MovieClip(mcDataFactory.generateMovieClipData("test"));
        chunli.x = 100;
        chunli.y = 100;
        egret.MainContext.instance.stage.addChild(chunli);
        chunli.gotoAndPlay("attack", -1);
        var sound = RES.getRes("syf");
        sound.play();
    };
    return Demo3;
})(egret.DisplayObjectContainer);
Demo3.prototype.__class__ = "Demo3";
