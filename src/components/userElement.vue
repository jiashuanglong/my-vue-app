<template>
    <!-- 使用elevent-ui -->
    <!-- elevent-ui是一套基於vue.js的組件庫，可以用來幫助我們快速開發vue組件 -->
    <!-- elevent-ui使用前要先下載，下載指令： npm i element-ui -->
    <!-- 下載完之後引入elevent-ui及其css樣式 -->

    <!-- 進入elevent-ui網站https://element.eleme.cn根據想用的組件找到對應的代碼，複製過來即可 -->
    <div>
        <h1>使用element-ui</h1>
        <h3>使用按鈕</h3>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
        <h3>使用多選框</h3>
        <el-checkbox>备选项</el-checkbox>
        <el-checkbox>备选项</el-checkbox>
        <el-checkbox>备选项</el-checkbox>
        <h3>使用麵包屑</h3>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
