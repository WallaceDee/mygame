class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;
  	private loadingPanel:LoadingPanel;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.Injector.mapClass(RES.AnalyzerBase, RES.PropertiesAnalyzer, RES.PropertiesAnalyzer.TYPE);
        this.addChild(GameConfig.gameScene());
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
//      RES.loadGroup("gameres");
    }
    private _viewManager:ViewManager;
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("loading");
    }
//  private onGroupComplete(){
//  	this._viewManager=new ViewManager(this,RES.getRes("gameres_json"))
//
//  }
	private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "gameres") {
            PopUpManager.removePopUp(this.loadingPanel);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        } else if (event.groupName == "loading") {
            this.loadingPanel = new LoadingPanel();
            PopUpManager.addPopUp(this.loadingPanel);
            RES.loadGroup("gameres");
        }

    }
	private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "gameres") {
            this.loadingPanel.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    /**
     * ������Ϸ����
     */
    private createGameScene(): void {
        PanelManager.initPanel();
        window["onorientationchange"] = function(){
            lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(MainNotify.onOrientationChange,window["orientation"],false));
            if(GlobalData.isVerticalGame && GlobalData.initIsVertical && (window["orientation"] != 0)){
                location.reload();
            }
            if(GlobalData.isVerticalGame&&GameConfig.isVertical()){
                NativeApi.showVerticalTips(true);
            }else if(GlobalData.isVerticalGame&&!GameConfig.isVertical()){
                NativeApi.removeVerticalTips();
            }
        }; 
        if(GlobalData.isVerticalGame&&GameConfig.isVertical()){
            NativeApi.showVerticalTips();
        }
        Global.dispatchEvent(MainNotify.openStartPanelNotify, null, false);

//      Global.shareToWeiXin("EGER���ٿ�������", "EGER�����������У�������ȡ��ʾ�����ɣ�", "http://wx.9ria.com/games/eger", "http://wx.9ria.com/games/eger/resource/assets/icon.png");
    }
 
}


