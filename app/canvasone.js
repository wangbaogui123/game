//Vue 图片懒加载
export default (Vue , options = {})=>{


    function eneygy(en,t,w,h,data){

        let timer,curtime=0;

        timer = setInterval(function(){

            for(let i = 0;i < en.length;i++){
                
                var num = Math.random()*10 > 5 ? Math.random()*10 : -Math.random()*10
                var num1 = Math.random()*10 > 5 ? Math.random()*5 : -Math.random()*5
                en[i].time = (en[i].time - 0.1).toFixed(2)*1
                en[i].siznum = (en[i].siznum + 0.15).toFixed(2)*1
                en[i].left = (en[i].left -num)*1
                en[i].top = (en[i].top -num1)*1
                

                if(en[i].time <= 0){
                    en.splice(i,"1");
                }
            }

            curtime++;
            if(curtime == t*10 || data.time <=0){
                clearInterval(timer);
            }

            // if(en.length < 300){
                var colorarr = ["rgba(255, 95, 61, 0.5)","rgba(236, 83, 153, 0.5);","rgba(87, 184, 70, 0.5)","rgba(255, 75, 90, 0.5)","rgba(247, 72, 119, 0.5)","rgba(98, 216, 182, 0.5);","rgba(255, 142, 80, 0.5)","rgba(250, 66, 81, 0.5)"];
                var obj = {};
                obj.siznum = (Math.random()*10).toFixed(2)*1;
                obj.color = colorarr[Math.floor(Math.random()*8)];
                obj.top = (Math.random()*h).toFixed(2);
                obj.left = (Math.random()*w).toFixed(2);
                obj.time = (Math.random()*20).toFixed(2)*1;
                // obj.ok = Math.random()*10 > 9 ? 1:0

                en.push(obj);
            // }
            
        },100)

        return en;


    }

    function move(el,btn,btnsize,w,h,en,data){
        el.addEventListener("touchmove",moveFun,false);
        function moveFun(){
            event.preventDefault();

            if(data.time <=0 ){
                return false;
            }
            var x = event.touches[0].pageX,
                yy = event.touches[0].pageY,
                top = yy-btnsize/2,
                left = x-btnsize/2;

                btn.setAttribute("style","width:"+btnsize+"px;height:"+btnsize+"px;border-radius:"+btnsize/2+"px;top:"+top+"px;left:"+left+"px")

                for(let y = 0;y < en.length; y++){

                    if((en[y].top/2 - btnsize/2 < yy &&  en[y].top/2 + btnsize/2 > yy) && (en[y].left/2 - btnsize/2 < x && en[y].left/2 + btnsize/2 > x)){
                        data.shownum = (data.shownum*1 + en[y].siznum*1).toFixed(2);
                        btnsize += en[y].siznum/100 * 1;
                        en.splice(y,"1");

                    }

                }
            
        }
    }

    var canvasone = function(ele,binding){
        
        let w = ele.offsetWidth*2,
            h = ele.offsetHeight*2;

        let canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
        
        let ctx = canvas.getContext('2d');
        let img = new Image();
            img.src = "./app/img/bg.png";
            img.onload = function(){
                ctx.drawImage(img,0,0,w,h)
            }
            ele.appendChild(canvas);
        
        ele.getElementsByClassName("btngo")[0].addEventListener("click",function(){
            beginGame();
        },false)

        function beginGame(){
            
           
            let en = [],
                oldtimer,
                indx = 0,
                btnsize = 20,
                data = binding.value;
                data.time = 60;
                data.shownum = 20;
                var time = data.time;



            
            let canvas1 = document.createElement("canvas");
            let btn = document.createElement("div");
            

            btn.setAttribute("class","mov-btn")
            btn.setAttribute("style","width:"+btnsize+"px;height:"+btnsize+"px;border-radius:"+btnsize/2+"px;")
            
            let ctx1 = canvas1.getContext('2d');

            canvas1.width = w;
            canvas1.height = h;

            ele.appendChild(canvas1);
            ele.appendChild(btn);
            eneygy(en,time,w,h,data);
            move(ele,btn,btnsize,w/2,h/2,en,data);
            //能量
            oldtimer = setInterval(function(){
    
                // console.log(en);
    
                indx += 0.1;
                if(data.time >0){
                    data.time = (data.time*1 - 0.2).toFixed(2);
                }
                
                if(indx == time){
                    clearInterval(oldtimer);
                }
                ctx1.clearRect(0,0,w,h); 
    
                for(let i = 0;i <en.length;i++){
                    
                    ctx1.shadowOffsetX = 15; // 阴影Y轴偏移
                    ctx1.shadowOffsetY = 15; // 阴影X轴偏移
                    ctx1.shadowBlur = 14; // 模糊尺寸
                    ctx1.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    
                    ctx1.fillStyle = en[i].color;
                    ctx1.strokeStyle = en[i].color;
    
                    // ctx1.fillStyle = 'rgba(255,255,255,0.8)';
                    // ctx1.strokeStyle = 'rgba(255,255,255,0.8)';
                    ctx1.beginPath();
                    ctx1.arc(en[i].left,en[i].top,en[i].siznum,0,360);
                    ctx1.stroke();
                    ctx1.fill();
                   
                    
    
                }
    
            },200)
            
        }


    }
        
    Vue.directive('canvasone',{
        inserted:canvasone,
        updated:canvasone
    })
}