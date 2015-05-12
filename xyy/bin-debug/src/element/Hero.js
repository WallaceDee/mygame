var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        _super.call(this);
        this._isMapHeroUpsdasd = true;
        var data = RES.getRes("map_hero_down_json"); //获取描述
        var texture = RES.getRes("map_hero_down_png"); //获取大图
        var mcFactory = new egret.MovieClipDataFactory(data, texture);
        this._acitonMapHeroUp = new egret.MovieClip(mcFactory.generateMovieClipData("down"));
        this._acitonMapHeroUp.play(-1);
        this.anchorX = 0.5;
        this.anchorY = 1;
        this.playAction();
    }
    var __egretProto__ = Hero.prototype;
    __egretProto__.init = function () {
        this._isMapHeroUp = true;
        this.playAction();
    };
    __egretProto__.playAction = function () {
        this.addChild(this._acitonMapHeroUp);
    };
    Object.defineProperty(__egretProto__, "_isMapHeroUp", {
        get: function () {
            return this._isMapHeroUp;
        },
        set: function (val) {
            if (this._isMapHeroUp != val) {
                this._isMapHeroUp = val;
                this.playAction();
            }
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
})(egret.Sprite);
Hero.prototype.__class__ = "Hero";
