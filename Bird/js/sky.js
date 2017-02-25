/**
 * Created by smile蓝 on 2017/1/11.
 */

(function(Fly){

    //构造函数
    var sky=function(config){
        this.img=config.img;

        //联系上下文
        this.cv=config.cv;
        //获取图片的大小
        this.x=config.x||0;
        this.y=config.y||0;

        this.speed=0.2;

    }

    sky.prototype.render=function(delta){
        this.cv.drawImage(this.img,this.x,this.y);

        //天空后退
        this.x-=this.speed*delta;

        if(this.x<=-this.img.width){
            this.x+=this.img.width*2;
        }
    }


    //暴露出去
    Fly.sky=sky;

})(Fly)