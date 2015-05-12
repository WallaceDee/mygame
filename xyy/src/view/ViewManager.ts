class ViewManager extends egret.EventDispatcher{
	private _rootView: egret.DisplayObjectContainer;
	private _textures: egret.SpriteSheet;
	private _name:string;
	public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet,name:string){
		super();
		this._rootView=root;
		this._textures=textures;
		this._name=name;
		var img: egret.Bitmap=new egret.Bitmap();
		img.texture=this._textures.getTexture(name);
		this._rootView.addChild(img);
	}	
}
