<template>
    <div class="app-newslist">
        <h1>新闻列表</h1>
        <!-- mui 左侧小图片 右侧文字 -->
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}}
						<p class='mui-ellipsis'>
                            <span>{{item.ctime}}</span>
                            <span>{{item.point}}</span>
                        </p>
					</div>
				</a>
			</li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list:[],
                pageIndex:0,    // 属性显示当前页数
                pageSize:5      // 页大小
            }
        },
        methods:{
            // 加载更多
            getMore(){
                this.pageIndex++;
                var url = "http://127.0.0.1:3000";
                url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize;
                this.$http.get(url).then(result=>{
                    console.log(result);
                    this.list=result.body.data;
                })
            }
        },
        created() {
            this.getMore();
        },
    }
</script>

<style>
    
</style>












