<template>
<div class="app-list">
    <h1>用户列表</h1>
<ul>
    <li v-for="item in list" :key="item">
        {{item.id}}:{{item.name}}:{{item.age}}
    </li>

</ul>
</div>
</template>
<script>
    export default{
        data(){
            return {
                list:[
                    {id:1,name:"dongdong",age:24},
                    {id:2,name:"Janine",age:18},
                    {id:3,name:"maosen",age:22},
                ]
            }
            
        }
        
    }
</script>





