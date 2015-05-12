var Demo2 = (function (_super) {
    __extends(Demo2, _super);
    function Demo2() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this);
    }
    var __egretProto__ = Demo2.prototype;
    /**游戏启动后，会自动执行此方法*/
    __egretProto__.startGame = function () {
        this.loadResource();
    };
    /**加载所需资源*/
    __egretProto__.loadResource = function () {
        //使用资源管理器加载资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("demo2");
    };
    /**加载完毕后即可使用*/
    __egretProto__.onResourceLoadComplete = function (event) {
        this.logo = new egret.Bitmap(); //创建位图
        this.logo.texture = RES.getRes("egretIcon"); //设置纹理
        this.addChild(this.logo); //添加到显示列表
        this.startAnimation();
    };
    __egretProto__.startAnimation = function () {
        var tw = egret.Tween.get(this.logo);
        tw.to({ x: 280, y: 0 }, 500).to({ x: 280, y: 300 }, 500).to({ x: 0, y: 300 }, 500).to({ x: 0, y: 0 }, 500);
        tw.call(this.startAnimation, this);
    };
    return Demo2;
})(egret.DisplayObjectContainer);
Demo2.prototype.__class__ = "Demo2";
