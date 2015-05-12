var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager(root, textures, name) {
        _super.call(this);
        this._rootView = root;
        this._textures = textures;
        this._name = name;
        var img = new egret.Bitmap();
        img.texture = this._textures.getTexture(name);
        this._rootView.addChild(img);
    }
    var __egretProto__ = ViewManager.prototype;
    return ViewManager;
})(egret.EventDispatcher);
ViewManager.prototype.__class__ = "ViewManager";
