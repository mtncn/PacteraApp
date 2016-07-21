/**
 * Created by Sky on 2016/3/8.
 */
module.exports=function($rootScope,$scope,$location,Appsession){
    //添加管理点击样式
    $rootScope.mgBtnShowCor='login_2 selectColor_manage';
    //add by HUA--end

    $scope.navItems = [
        {
            id: 1,
            title: '我的任务',
            leaf:false
        },
        {
            id:11,
            title: '我的申请',
            locationUrl:'manage.apply',
            leaf:true
        },
        {
            id: 12,
            title: '我的待办',
            locationUrl:'manage.todo',
            leaf:true
        },
        {
            id: 2,
            title: '我的服务',
            leaf:false
        },
        {
            id: 21,
            title: '我的分类',
            locationUrl:'manage.myclass',
            leaf:true
        },
        {
            id: 22,
            title: '我的订阅',
            locationUrl:'manage.todo',
            leaf:true
        },
        {
            id: 23,
            title: '我的收藏',
            locationUrl:'manage.todo',
            leaf:true
        },
        {
            id: 3,
            title: '企业应用',
            leaf:false
        },
        {
            id: 31,
            title: '企业信息',
            locationUrl:'manage.businessinfo',
            leaf:true
        },
        {
            id: 32,
            title: '应用分类',
            locationUrl:'manage.appclass',
            leaf:true
        },
        {
            id: 33,
            title: '应用管理',
            locationUrl:'manage.businessapp',
            leaf:true
        },
        {
            id: 4,
            title: '应用设置',
            leaf:false
        },
        {
            id: 41,
            title: '应用上架',
            locationUrl:'manage.appadded({Status:0,BiaoShi:"应用上架"})',
            leaf:true
        },
        {
            id: 5,
            title: '其他设置',
            leaf:false
        },
        {
            id: 51,
            title: '个人信息',
            locationUrl:'manage.appadded({Status:0,BiaoShi:"应用上架"})',
            leaf:true
        }
        /*,{
         id: 52,
         title: '账号安全',
         locationUrl:'manage.accountsecurity',
         leaf:true
         }*/
    ];

    $scope.cleanAppId = function(){
        console.log('+++++');
        Appsession.destroy();
    };
    //定义我的订阅，企业信息，应用分类点击样式--end
};