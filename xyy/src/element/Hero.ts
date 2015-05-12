class Hero extends egret.Sprite{
	private _acitonMapHeroUp:egret.MovieClip;
	private _acitonMapHeroDown:egret.MovieClip;
	private _isMapHeroUpsdasd:boolean=true;
	public constructor(){
	super();
	
 var data = RES.getRes("map_hero_down_json");//获取描述
        var texture = RES.getRes("map_hero_down_png");//获取大图
      	var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, texture);
        this._acitonMapHeroUp = new egret.MovieClip( mcFactory.generateMovieClipData( "down" ) );
        this._acitonMapHeroUp.play(-1);
	
		this.anchorX=0.5;
		this.anchorY=1;
		this.playAction();
	}
	
	public init(){
		this._isMapHeroUp=true;
		this.playAction();
		
	}
	public playAction(){
			this.addChild(this._acitonMapHeroUp);
	}
	public get _isMapHeroUp():boolean{
		return this._isMapHeroUp;
	}
	public set _isMapHeroUp(val:boolean){
		if(this._isMapHeroUp!=val){
			this._isMapHeroUp=val;
			this.playAction();
			
		}
		
	}
	
}
