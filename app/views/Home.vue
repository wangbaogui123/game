
<template>

    <div>
        <my-top :top-show="topshow"></my-top>
    
        <div class="box">
            <div class="home">   
                <swipe class="my-swipe">
                    <swipe-item v-for="item in banner" :key="item.$index">
                        <a v-bind:href="item.href"><img v-bind:src="item.imgUrl" ></a>
                    </swipe-item>
                </swipe>
                <!-- <div class="home-list">
                    <ul class="list-ul">
                        <li v-for="i in list" :key="i.$index">{{i}}</li>
                    </ul>
                </div>   -->
                <div class="home-ul">
                    <dl>
                        <dt><img src="../img/logo.png" alt=""></dt>
                        <dd>
                            <p> <span>类型：休闲</span> <span>推荐：5颗星</span></p>
                            <p>
                                <router-link to="/one">
                                    试玩
                                </router-link>
                                </p>
                        </dd>
                    </dl>
                </div>      
            </div>
        </div>

        <my-footer></my-footer>
    </div> 
    


</template>
<style>
    .home-ul{
        width: 100%;
        height: auto;
        margin-top: .3rem;
    }
    .home-ul dl{
        height: 6rem;
        width: 100%;
        border-bottom:1px solid #ccc;
    }
    .home-ul dl dt{
        float: left;
        width: 50%;
        height: 100%;
    }
    .home-ul dl dt img{
        display: block;
        height: 100%;
        width: auto;
    }
    .home-ul dl dd {
        font-size: .8rem;
        color:#333;
        padding: 1rem 0;
        float: left;
    }
    .home-ul dl dd p{
        height: 2.5rem;
        line-height: 2.5rem;
    }
    .home-ul dl dd p:nth-child(1) span{
        margin: 0 .5rem;
    }
    .home-ul dl dd p:nth-child(2) a{
        display: block;
        width: 4rem;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius:.5rem;
        background: #18e089;
        color:#fff;
        box-shadow: 1px 2px 3px #ccc;
    }
</style>

<script>

    require('../css/home.css')

    var homeData = {
            banner:[
                {
                    href:"www.baidu.com",
                    imgUrl:"//upload-images.jianshu.io/upload_images/2088907-8553e27a39f5a662.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                },
                {
                    href:"www.baidu.com",
                    imgUrl:"//upload-images.jianshu.io/upload_images/2088907-754fb4eb4afcc4ee.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                },
                {
                    href:"www.baidu.com",
                    imgUrl:"//upload-images.jianshu.io/upload_images/2088907-597e193193bf2fd5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                }
            ],
            list:[
                "We are only separated by a turned distance, but could not meet.",
                "Dear past, thanks for all lessons, dear future, I am ready!",
                "I love you not for who you are, but for who I am before you.",
                "We are only separated by a turned distance, but could not meet.",
                "Dear past, thanks for all lessons, dear future, I am ready!",
                "I love you not for who you are, but for who I am before you."
            ]
            
        }

    export default {
        name:"app",
        data:function(){
            return homeData
        },
        created:function(){
            //console.log(this.$parent);
            var $this = this.$parent;

            $this.com_Ajax({
                method: 'get',
				url: './app/data/list.json'
            },function(data){
                
                console.log(data);
            },function(data){

                console.log(data);
            })
        }

    }

</script>