
class GameOverPanel extends BasePanel{

    public constructor(){
        super();
    }

    private bg:egret.Bitmap;
    private startBtn:EButton;
    private setBtn:EButton;
    private helpBtn:EButton;
    private shopBtn:EButton;
    private fbBtn:EButton;

    private setBtn2:EButton;
    private helpBtn2:EButton;
    private shopBtn2:EButton;
    private fbBtn2:EButton;


    private htmlTF:HtmlText;
    private alertTF:HtmlText;
    private tipsTF:HtmlText;
    // 初始化面板
    public initPanel():void{
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);   
        this.bg.touchEnabled = true;     

        this.htmlTF = new HtmlText([["我是",0xff0000],["多颜色",0x55ff00],["文本",0xff0000],["组件",0x55ff00]],30,false,1,0xFFFFFF);
        this.htmlTF.x = this.w/2 - this.htmlTF.width/2;
        this.htmlTF.y = -350;
        this.addChild(this.htmlTF);

        this.alertTF = new HtmlText([["下面",0xff0000],["是",0x55ff00],["confirm",0xff0000],["组件",0x55ff00]],30,false,1,0xFFFFFF);
        this.alertTF.x = this.w/2 - this.alertTF.width/2;
        this.alertTF.y = 120;
        this.addChild(this.alertTF);
        this.alertTF.alpha = 0;

        this.tipsTF = new HtmlText([["下面",0xff0000],["是",0x55ff00],["tips飘字",0xff0000],["组件",0x55ff00]],30,false,1,0xFFFFFF);
        this.tipsTF.x = this.w/2 - this.tipsTF.width/2;
        this.tipsTF.y = this.h - 170;
        this.addChild(this.tipsTF);
        this.tipsTF.alpha = 0;

        this.helpBtn2 = new EButton(this,"helpBtn",this.alert1,"",30,1);
        this.helpBtn2.x = 20;
        this.helpBtn2.y = 200;
        this.addChild(this.helpBtn2);   
        this.helpBtn2.alpha = 0;


        this.shopBtn2 = new EButton(this,"shopBtn",this.alert2,"",30,2);
        this.shopBtn2.x = 150;
        this.shopBtn2.y = 200;
        this.addChild(this.shopBtn2);   
        this.shopBtn2.alpha = 0;

        this.fbBtn2 = new EButton(this,"fbBtn",this.alert3,"",30,3);
        this.fbBtn2.x = 270;
        this.fbBtn2.y = 200;
        this.addChild(this.fbBtn2);  
        this.fbBtn2.alpha = 0; 

        this.setBtn2 = new EButton(this,"setBtn",this.alert4,"设置",30,1);
        this.setBtn2.x = this.w - this.setBtn2.width - 20;
        this.setBtn2.y = 200;
        this.addChild(this.setBtn2); 
        this.setBtn2.alpha = 0;  

        this.startBtn = new EButton(this,"startBtn",this.onStartBtnTouchTap);
        this.startBtn.x = this.w/2 - this.startBtn.width/2;
        this.startBtn.y = this.h/2 - this.startBtn.height/2;        
        this.addChild(this.startBtn);
        this.startBtn.visible = false;

        this.helpBtn = new EButton(this,"helpBtn",null,"",30,1);
        this.helpBtn.x = 20;
        this.helpBtn.y = this.h - this.helpBtn.height - 20;
        this.addChild(this.helpBtn);   
        this.helpBtn.visible = false;
        this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tipsEffect1,this); 

        this.shopBtn = new EButton(this,"shopBtn",this.tipsEffect2,"",30,2);
        this.shopBtn.x = 150;
        this.shopBtn.y = this.h - this.shopBtn.height - 20;
        this.addChild(this.shopBtn);   
        this.shopBtn.visible = false;

        this.fbBtn = new EButton(this,"fbBtn",this.tipsEffect3,"",30,3);
        this.fbBtn.x = 270;
        this.fbBtn.y = this.h - this.fbBtn.height - 20;
        this.addChild(this.fbBtn);   
        this.fbBtn.visible = false;

        this.setBtn = new EButton(this,"setBtn",this.tipsEffect4,"设置",30,1);
        this.setBtn.x = this.w - this.setBtn.width - 20;
        this.setBtn.y = this.h - this.setBtn.height - 20;
        this.addChild(this.setBtn);   
        this.setBtn.visible = false;

        this.initEffect();
    }

    private alert1():void{
        Global.confirm("提示","我是一个confirm栗子，哈哈",null,null,1);
    }

    private alert2():void{
        Global.confirm("提示","我是一个confirm栗子，哈哈",null,null,2);
    }

    private alert3():void{
        Global.confirm("提示","我是一个confirm栗子，哈哈",null,null,3);
    }

    private alert4():void{
        Global.confirm("提示","我是一个confirm栗子，哈哈",null,null,4);
    }

    private tipsEffect1():void{
        EffectUtils.showTips("this.startBtn",1);
        window["grayscale"](this.helpBtn);
        this.helpBtn
    }

    private tipsEffect2():void{
        EffectUtils.showTips("this.startBtn",2);
    }

    private tipsEffect3():void{
        EffectUtils.showTips("this.startBtn",4);
    }

    private tipsEffect4():void{
        EffectUtils.showTips("this.startBtn",5);
        egret.setTimeout(function () {              
            EffectUtils.shakeScreen(2);
        }, this, 500);         
    }


    private initEffect():void{
        this.htmlTF.y = -350;
        this.startBtn.alpha = 0;
        this.helpBtn.y = this.h + 150;
        this.shopBtn.y = this.h + 150;
        this.fbBtn.y = this.h + 150;
        this.setBtn.y = this.h + 150;
        var onComplete:Function = function(){
            egret.Tween.get(this.startBtn).to({alpha:1},300);
            egret.Tween.get(this.alertTF).to({alpha:1},300);
            egret.Tween.get(this.tipsTF).to({alpha:1},300);

            egret.Tween.get(this.setBtn2).to({alpha:1},300);
            egret.Tween.get(this.fbBtn2).to({alpha:1},300);
            egret.Tween.get(this.shopBtn2).to({alpha:1},300);
            egret.Tween.get(this.helpBtn2).to({alpha:1},300);


            egret.Tween.get(this.setBtn).to({y: this.h - this.setBtn.height - 20},300,egret.Ease.backOut);
            egret.Tween.get(this.fbBtn).to({y: this.h - this.fbBtn.height - 20},300,egret.Ease.backOut);
            egret.Tween.get(this.shopBtn).to({y: this.h - this.shopBtn.height - 20},300,egret.Ease.backOut);
            egret.Tween.get(this.helpBtn).to({y: this.h - this.helpBtn.height - 20},300,egret.Ease.backOut);
        };
        this.htmlTF.visible = true;
        this.startBtn.visible = true;
        this.helpBtn.visible = true;
        this.shopBtn.visible = true;
        this.fbBtn.visible = true;
        this.setBtn.visible = true;
        egret.Tween.get(this.htmlTF).to({y:60},600,egret.Ease.backOut).call(onComplete,this);   
    }

    public onStartBtnTouchTap(e:egret.TouchEvent):void{
        Global.dispatchEvent(MainNotify.openJsSdkPanelNotify,null,false);
        Global.dispatchEvent(MainNotify.closeGameOverPanelNotify,null,false);
    }

}


