$(function() {
    ModifyNav(); //自定义菜单
});
//自定义菜单
function ModifyNav() {
    var urls = [{
            id: 'MyLinks1_MyHomeLink',
            name: '首页',
            link: 'http://www.cnblogs.com/mangoniki/'
        }, {
            id: 'MyLinks1_BigFe',
            name: '大前端',
            link: 'http://www.cnblogs.com/mangoniki/category/876545.html'
        }, {
            id: 'MyLinks1_Database',
            name: '数据库',
            link: 'http://www.cnblogs.com/mangoniki/category/876544.html'
        }, {
            id: 'MyLinks1_Github',
            name: 'Github',
            link: 'https://mangoniki.github.io/',
            target: "__blank"
        }, {
            id: 'MyLinks1_NewPostLink',
            name: '新随笔',
            link: 'https://i.cnblogs.com/EditPosts.aspx?opt=1'
        }, {
            id: 'MyLinks1_Admin',
            name: '管理',
            link: 'https://i.cnblogs.com/'
        }],
        navHtml = [];

    for (var i = 0, len = urls.length; i < len; i++) {
        navHtml.push('<li><a id="' + (urls[i].id || '') + '" class="menu" target="' + (urls[i].target || '') + '" href="' + (urls[i].link || '') + '">' + (urls[i].name || '') + '</a></li>');
    }
    $("#navList").html(navHtml.join(''));
}
