
<template>

    <div>
        <div class="onebox" v-canvasone="data">
              <p class="top" v-if="data.shownum != '0' && data.time != '0'"> <span>体积：{{data.shownum}}g</span> <span>时间：{{data.time}}s</span> </p>
              <p class="logobox" v-if="data.shownum == '0' && data.time == '0'"><img src="../img/logo.png" alt=""></p>
              <p class="btngo" v-if="data.shownum == '0' && data.time == '0'">立即试玩</p>  
        </div>
    </div> 
    


</template>
<script>

    var homeData = { 
          data:{
              shownum:0,
              time:0
          } 
        }

    export default {
        name:"app",
        data:function(){
            return homeData
        },
        created:function(){
           
        },
        methods:{
            
        }

    }

</script>
<style type="style">
    .onebox{
        margin:0px;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        outline: 0;
        -webkit-overflow-scrolling: touch;
        background-color:#fff;
        font-family:'PingFangSC-Medium';
        font-weight: normal; 
        box-shadow:0 0 5px #fff inset;
        /* background: #62d8b6; */
    }
    .onebox .logobox{
        position: relative;
        z-index: 2;
        width: 100%;
        height: auto;
        background: #fff;
        padding: 50px 0;
    }
    .onebox .btngo{
        width: 50%;
        height: 50px;
        z-index: 2;
        position: relative;
        border-radius:15px;
        background: #7de8ad;
        line-height: 50px;
        margin: 100px auto;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
        font-size: 25px;
        box-shadow: 1px 2px 5px #333;
    }
    .onebox .logobox img{
        display: block;
        width: 100%;
        height: auto;
        position: relative;
        z-index: 2;
    }
    .onebox .mov-btn{
        position: absolute;
        z-index: 1;
        background: #fff;
        bottom:0;
        left:0;
        background: url(../img/btnbg.jpeg);
        background-size: 100% 100%; 
        /* width: 20px;
        height: 20px;
        border-radius: 10px; */
    }
    .onebox .top{
        background: rgba(0,0,0,0);
        color:#fff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    }
    .onebox .top span{
        float: right;
        margin-right: 50px;
        text-shadow: 1px 1px 3px #676767;
    }
    .onebox canvas{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
    }
</style>