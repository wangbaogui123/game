
<template>

    <div>
        <div class="onebox colorMove" v-canvasone>
              
        </div>
    </div> 
    


</template>
<script>

    var homeData = {
            
            
        }

    export default {
        name:"app",
        data:function(){
            return homeData
        },
        created:function(){

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
    }
    .onebox canvas{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
    }
</style>