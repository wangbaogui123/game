//Vue 图片懒加载
export default (Vue , options = {})=>{


    function eneygy(en,t,w,h){

        let timer,curtime=0;

        timer = setInterval(function(){

            for(let i = 0;i < en.length;i++){
                
                var num = Math.random()*10 > 5 ? Math.random()*10 : -Math.random()*10
                var num1 = Math.random()*10 > 5 ? Math.random()*5 : -Math.random()*5
                en[i].time = (en[i].time - 0.1).toFixed(2)*1
                en[i].siznum = (en[i].siznum + 0.1).toFixed(2)*1
                en[i].left = (en[i].left -num)*1
                en[i].top = (en[i].top -num1)*1
                

                if(en[i].time <= 0){
                    en.splice(i,"1");
                }
            }

            curtime++;
            if(curtime == t*10){
                clearInterval(timer);
            }

            // if(en.length < 300){
                var obj = {};
                obj.siznum = (Math.random()*10).toFixed(2)*1;
                obj.color = "#fff";
                obj.top = (Math.random()*h).toFixed(2);
                obj.left = (Math.random()*w).toFixed(2);
                obj.time = (Math.random()*20).toFixed(2)*1;

                en.push(obj);
            // }
            
        },100)

        return en;


    }

    var canvasone = function(ele,binding){
        let w = ele.offsetWidth*2,
            h = ele.offsetHeight*2,
            time = 60,
            en = [],
            oldtimer,
            indx = 0;

        let canvas = document.createElement("canvas");
        let canvas1 = document.createElement("canvas");

        let ctx1 = canvas1.getContext('2d')

        canvas.width = w;
        canvas.height = h;

        canvas1.width = w;
        canvas1.height = h;

        ele.appendChild(canvas);
        ele.appendChild(canvas1);
        
        eneygy(en,time,w,h);
        //能量
        oldtimer = setInterval(function(){

            // console.log(en);

            indx += 0.1;
            if(indx == time){
                clearInterval(oldtimer);
            }
            ctx1.clearRect(0,0,w,h); 

            for(let i = 0;i <en.length;i++){
                ctx1.fillStyle = "rgba(255,255,255,0.5)";
                ctx1.strokeStyle = "rgba(255,255,255,0)";
                ctx1.shadowOffsetX = 15; // 阴影Y轴偏移
                ctx1.shadowOffsetY = 15; // 阴影X轴偏移
                ctx1.shadowBlur = 14; // 模糊尺寸
                ctx1.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                ctx1.beginPath();
                ctx1.arc(en[i].left,en[i].top,en[i].siznum,0,360);
                ctx1.stroke();
                ctx1.fill();
            }

        },100)
        


    }
        
    Vue.directive('canvasone',{
        inserted:canvasone,
        updated:canvasone
    })
}