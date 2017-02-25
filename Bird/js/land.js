/**
 * Created by smile蓝 on 2017/1/11.
 */
(function(Fly){

    //构造函数
    var land=function(config){
        this.img=config.img;

        //连系上下文
        this.cv=config.cv;

        //位置
        this.x0=config.x0||0;
        this.y0=config.y0||0;

        //设置速度
        this.speed=0.2;

        //图片宽度
        this.imgW=this.img.width;
    }

    land.prototype.render=function(delta){
        //渲染
        this.cv.drawImage(this.img,this.x0,this.y0);

        this.x0-=this.speed*delta;

        //判断如果x0的位置小于整个画布的位置，进行抽回
        if(this.x0<=-this.imgW){
            this.x0+=4*this.imgW;
        }

    }

    //暴露给全局变量
    Fly.land=land;
})(Fly)