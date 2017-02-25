/**
 * Created by smile蓝 on 2017/1/11.
 */
(function(Fly){
    var pipe=function(config){
        //因为有两个管道对象
        this.pipeUP=config.pipeUP;
        this.pipeDown=config.pipeDown;
        //联系上下文
        this.cv=config.cv;

        //管子高度
        this.pipeH=this.pipeDown.height;
        //管子的宽度
        this.pipeW=this.pipeDown.width;

        //管子x轴的位置
        this.x0=config.x0;

        //管子的y坐标随机生成
        this.Upy=0;
        this.DownY=0;

        //两个管子之间的距离
        this.pipeSpance=150;

        //速度
        this.speed=0.2;

        //一出来，调用生成管道的方法
        this.intnPipeheight();
    }




    pipe.prototype.initPath=function(){
        this.cv.rect(this.x0,this.Upy,this.pipeW,this.pipeH);
        this.cv.rect(this.x0,this.DownY,this.pipeW,this.pipeH);
    }



// 绘制管道：
// 1 上下管道的高度需要随机生成
// 2 canvas画布中展示多少个管道
    pipe.prototype.render=function(delta){

        this.initPath();

        //绘制上管道
        this.cv.drawImage(this.pipeUP,this.x0,this.Upy);
        //绘制下管道
        this.cv.drawImage(this.pipeDown,this.x0,this.DownY)

        //计算下一帧的坐标
        this.x0-=this.speed*delta;

        if(this.x0<=-this.pipeW){
            this.x0+=this.pipeW*3*6;

            //调用生成方法
            this.intnPipeheight();
        }

    }



    //随机生成管道高度
    pipe.prototype.intnPipeheight=function(){
        // 最终需要将生成的高度，转化为 y 坐标
        // 因为 管道的高度不能太高，也不能太少了，所以，我们规定
        // 管道的最小高度为：50
        // 管道的最大高度为：250

        var h=Math.random()*200+50;
        //上面管道的高度
        this.Upy=h-this.pipeH;
        //下面管道的高度
        this.DownY=h+this.pipeSpance;


    }

    Fly.pipe=pipe;
})(Fly)