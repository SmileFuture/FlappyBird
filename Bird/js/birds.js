/**
 * Created by smile蓝 on 2017/1/11.
 */
//封装沙箱
(function(Fly){
    //构造函数
    var Birds=function(config){
        //绘制小鸟咯，首先获得小鸟的对象路径
        this.img=config.img;

        this.birdW=this.img.width/3;
        this.birdH=this.img.height;

        //小鸟一开始出现的位置
        this.x0=100;
        this.y0=100;
        //a加速度
        this.a=0.0005;
        //设置瞬间速度
        this.speed=null;
        //设置最大角度
        this.MaxAngle=45;
        //设置最大速度
        this.MaxSpeed=0.5;
        //设置当前角度
        this.curAngle=0;


        //定义一个变量用来储存小鸟翅膀的每一帧
        this.index=0;
    };



    //原型方法
    Birds.prototype.render=function(delta){
        //判断速度
        if(this.speed>this.MaxSpeed){
            this.speed=this.MaxSpeed;
        }else if(this.speed<-this.MaxSpeed){
            this.speed=-this.MaxSpeed;
        }
        //设置角度，角度随着速度的变化而变化
        this.curAngle=this.speed/this.MaxSpeed*this.MaxAngle;

        //因为小鸟要围绕自己旋转
        //所以先平移，在旋转
        cv.translate(this.x0,this.y0);
        cv.rotate(this.curAngle/180*Math.PI);



        cv.drawImage(this.img,this.birdW*this.index++,0,this.birdW,this.birdH,-1/2*this.birdW,-1/2*this.birdH,this.birdW,this.birdH);
        if(this.index>=3){
            this.index=0;
        }


        //有了a加速度，经过时间delta(t),初始速度0
        //瞬间的速度
        this.speed+=this.a*delta;
        //y0随着时间不段的加速度是哪下降;
        this.y0+=this.speed*delta+1/2*this.a*delta*delta;
    }

    Birds.prototype.changSpeed=function(changSp){
        this.speed=changSp;
    }

    //作为Fly的一个对象属性暴露出来
    Fly.Birds=Birds;
})(Fly)