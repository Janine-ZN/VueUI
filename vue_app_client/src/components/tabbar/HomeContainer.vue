<template>
    <div class="app-homeContainer">
        <!-- 顶部导航条 -->
        <mt-header fixed title="学子商城"></mt-header>
        <!-- 轮播图  -->
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
            <img :src="item.img_url" alt="">
        </mt-swipe-item>
    </mt-swipe>
        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../img/menu1.png">
		        <div class="mui-media-body">新闻资讯</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../img/menu2.png">
		        <div class="mui-media-body">Email</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../img/menu3.png">
		        <div class="mui-media-body">点餐</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../img/menu4.png">
		        <div class="mui-media-body">支付</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../img/menu5.png">
		        <div class="mui-media-body">Search</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../img/menu6.png">
		        <div class="mui-media-body">Phone</div></a></li> 
		    </ul> 
    </div>

</template>
<script>
    export default{
        data(){
            return {list:[]}  // 创建data属性保存数据
        },
        methods:{
            getImage(){
                var url = "http://127.0.0.1:3000/imagelist";
                // 发送ajax请求，获取图片列表并且显示
                this.$http.get(url).then(result=>{
                    // 获取返回数据，保存 list 属性中
                    this.list = result.body;
                    
                })
            }
        },
        created() {
            this.getImage();
        },
    }
</script>

<style>
    /*自定义组件的样式*/
    .app-homeContainer header.mint-header{
        background-color:yellow;
        color:red;
    }
    /*图片轮播设置高度*/
    .app-homeContainer .mint-swipe{
        height:200px;
    }
    .app-homeContainer .mint-swipe img{
        width:100%;
    }

    /* 调整六宫格 */
    .app-homeContainer .mui-grid-view .mui-grid-9{
        background: #ffffff;
        border: 0;
    }

    /* 像素两种：物理像素 逻辑像素 */
    /* 设计师：创建效果图 ps 物理像素 */
    /* 程序：代码 逻辑像素 */
    /* 比值：iPhone6 2 iPhone6-plus 3 */
    /* 设计师图片物理像素 120px/2 */
    .app-homeContainer .mui-grid-view .mui-grid-9 img{
        width: 60px;
        height: 60px;
    }

    .app-homeContainer .mui-grid-view .mui-grid-9 .mui-media-body{
        font-size: 13px;
    }
</style>







