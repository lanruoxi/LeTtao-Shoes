// 该文件的功能是用来写首页的js交互的
//进度条
//不要让进度条显示圆圈
NProgress.configure({ showSpinner: false});

//全局监听，当发起ajax请求时，进度条开始
$(window).ajaxStart(function () {
    NProgress.start();
})

//当ajax请求完成时，让进度条完成
$(window).ajaxComplete(function () {
    NProgress.done();
})

//左侧边栏中子菜单的滑出功能
// $('.lt-aside .menu').on('click', '[href="javascript:;"]', function(){
//     var _this = $(this);
//     var child = _this.siblings();
//     child.slideToggle();
// })

//点击左侧的菜单按钮，使侧边栏消失的功能
$('[data-menu]').on('click', function () {
    $('.lt-aside').toggle();
    $('.lt-section').toggleClass('menu');
})

//点击退出按钮 ，弹出遮罩层，发送请求 退到登录页
$('#myModal-checkout').on('click', 'btn-')