<script setup>
    import {reactive, onMounted} from "vue";
    import {login} from '@/api/user';
    import {setToken,removeToken} from '@/utils/auth'

    const modelData = reactive({
        openId: '',
        accessToken: ''
    })
    // 获取路由菜单
    const getMenu = () => {
        const params = {
            openId: modelData.openId,
            accessToken: modelData.accessToken
        }
        login(params).then(res => {
            handleLogin()
        })
    }
    // 清除数据
    const clearString = () => {
        removeToken('openId')
        removeToken('accessToken')
    }
    const getTokenAndId = () => {
        modelData.openId = '0434e0f51199448089a88af0ae37ca9b'
        modelData.accessToken = 'a766b0d7b3ce4905a39ad37772453dd2'
        setToken('openId', modelData.openId)
        setToken('accessToken', modelData.accessToken)
    }
   const  handleLogin = () => {
        var url = import.meta.env.MODE === 'production' ? glob.toUrl + '/bmop/html/#/dashboard' : '/#/dashboard'
        window.location.replace(url)
    }
    onMounted(async () => {
        await clearString()
        await getTokenAndId()
        await getMenu()
    })

</script>
<template>
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
        <div class="load_title">页面初始化中...
            <br>
            <span>版本:V1.0.0</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>


    .chromeframe {
        margin: 0.2em 0;
        background: #409EFF;
        color: #000;
        padding: 0.1em 0;
    }

    #loader-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 11;
    }

    #loader {
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        width: 50px;
        height: 50px;
        margin: -25px 0 0 -25px;
        border-radius: 50%;
        border: 3px solid transparent;
        /* COLOR 1 */
        border-top-color: #409EFF;
        -webkit-animation: spin 2s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -ms-animation: spin 2s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -moz-animation: spin 2s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -o-animation: spin 2s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        animation: spin 2s linear infinite;
        /* Chrome, Firefox 16+, IE 10+, Opera */
        z-index: 1001;
    }

    #loader:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        /* COLOR 2 */
        border-top-color: #409EFF;
        -webkit-animation: spin 3s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -moz-animation: spin 3s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -o-animation: spin 3s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -ms-animation: spin 3s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        animation: spin 3s linear infinite;
        /* Chrome, Firefox 16+, IE 10+, Opera */
    }

    #loader:after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #409EFF;
        /* COLOR 3 */
        -moz-animation: spin 1.5s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -o-animation: spin 1.5s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -ms-animation: spin 1.5s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        -webkit-animation: spin 1.5s linear infinite;
        /* Chrome, Opera 15+, Safari 5+ */
        animation: spin 1.5s linear infinite;
        /* Chrome, Firefox 16+, IE 10+, Opera */
    }


    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(0deg);
            /* IE 9 */
            transform: rotate(0deg);
            /* Firefox 16+, IE 10+, Opera */
        }
        100% {
            -webkit-transform: rotate(360deg);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(360deg);
            /* IE 9 */
            transform: rotate(360deg);
            /* Firefox 16+, IE 10+, Opera */
        }
    }

    @keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(0deg);
            /* IE 9 */
            transform: rotate(0deg);
            /* Firefox 16+, IE 10+, Opera */
        }
        100% {
            -webkit-transform: rotate(360deg);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(360deg);
            /* IE 9 */
            transform: rotate(360deg);
            /* Firefox 16+, IE 10+, Opera */
        }
    }


    #loader-wrapper .loader-section {
        position: fixed;
        top: 0;
        width: 51%;
        height: 100%;
        background: #fff;
        /* Old browsers */
        -webkit-transform: translateX(0);
        /* Chrome, Opera 15+, Safari 3.1+ */
        -ms-transform: translateX(0);
        /* IE 9 */
        transform: translateX(0);
        /* Firefox 16+, IE 10+, Opera */
    }

    #loader-wrapper .loader-section.section-left {
        left: 0;
    }

    #loader-wrapper .loader-section.section-right {
        right: 0;
    }

    /* Loaded */

    .loaded #loader-wrapper .loader-section.section-left {
        -webkit-transform: translateX(-100%);
        /* Chrome, Opera 15+, Safari 3.1+ */
        -ms-transform: translateX(-100%);
        /* IE 9 */
        transform: translateX(-100%);
        /* Firefox 16+, IE 10+, Opera */
        -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
        transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .loaded #loader-wrapper .loader-section.section-right {
        -webkit-transform: translateX(100%);
        /* Chrome, Opera 15+, Safari 3.1+ */
        -ms-transform: translateX(100%);
        /* IE 9 */
        transform: translateX(100%);
        /* Firefox 16+, IE 10+, Opera */
        -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
        transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .loaded #loader {
        opacity: 0;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
    }

    .loaded #loader-wrapper {
        visibility: hidden;
        -webkit-transform: translateY(-100%);
        /* Chrome, Opera 15+, Safari 3.1+ */
        -ms-transform: translateY(-100%);
        /* IE 9 */
        transform: translateY(-100%);
        /* Firefox 16+, IE 10+, Opera */
        -webkit-transition: all 0.3s 1s ease-out;
        transition: all 0.3s 1s ease-out;
    }

    .no-js #loader-wrapper {
        display: none;
    }

    .no-js h1 {
        color: #222222;
    }

    #loader-wrapper .load_title {
        font-family: 'Open Sans';
        color: #409EFF;
        font-size: 19px;
        width: 100%;
        text-align: center;
        z-index: 9999999999999;
        position: absolute;
        top: 55%;
        opacity: 1;
        line-height: 30px;
    }

    #loader-wrapper .load_title span {
        font-weight: normal;
        font-style: italic;
        font-size: 13px;
        color: #409EFF;
        opacity: 0.5;
    }


</style>
