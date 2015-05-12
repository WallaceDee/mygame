/**
  * tips类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 提示相关信息
  * todo:九宫格、多动画、图字等
  */
var TipsPanel = (function (_super) {
    __extends(TipsPanel, _super);
    /**
    * descStr        描述
    */
    function TipsPanel(descStr) {
        if (descStr === void 0) { descStr = ""; }
        _super.call(this);
        this.descStr = "";
        this.descStr = descStr;
        this.initUI();
    }
    var __egretProto__ = TipsPanel.prototype;
    // 初始化面板
    __egretProto__.initUI = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("tipsBg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.descTF = new egret.TextField();
        this.addChild(this.descTF);
        this.descTF.textColor = 0x000000;
        this.descTF.size = 20;
        // this.descTF.width = this.bg.width;
        // this.descTF.height = 24;
        this.descTF.x = 5;
        this.descTF.textAlign = "center";
        this.descTF.text = this.descStr;
        //九宫格
        var rect = new egret.Rectangle(5, 5, 5, 5);
        this.bg.scale9Grid = rect;
        this.bg.width = this.descTF.width + 10;
        this.bg.height = this.descTF.height * 3;
        this.descTF.y = this.bg.height / 2 - this.descTF.height / 2 + 2;
    };
    return TipsPanel;
})(BasePanel);
TipsPanel.prototype.__class__ = "TipsPanel";
