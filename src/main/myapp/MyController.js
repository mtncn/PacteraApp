/**
 * Created by vision on 16/2/17.
 */
module.exports = function($rootScope,$state,$scope,MyService){
    //向下传播事件
    $scope.$on('to-parent', function(e, d) {
        $scope.$broadcast('to-child','to MColController');
    });
    //add by HUA--start
    //设置管理点击样式
    $rootScope.mgBtnShowCor='login_2';
    //add by HUA--end
    $scope.todo={};
    $scope.applys={};
    $scope.menus = {};
    $scope.mhistory = {};

    //我的待办
    MyService.todo($scope.todo).then(function(data){
        $scope.todo = data.todo;
        $scope.success = data.success;

    },function(){
        console.log('Selectfaild  我的待办');
    });

    //我的申请
    MyService.apply($scope.applys).then(function(data){
        $scope.applys = data.applys;
        $scope.success2 = data.success;
    },function(){
        console.log('Selectfaild  我的申请');
    });
    //页面跳转到详情页
    $scope.detailsGo = function(id,appId,flowId,sortID){
        console.log(id,appId,flowId);
        $state.go('details.details',{id:id,appId:appId,flowId:flowId,sortID:sortID});
    };
    //菜单兰
    MyService.getMenu($scope.menus).then(function(data){
        $scope.menus = data.menuList;
    },function(){
        console.log('Selectfaild  菜单栏');
    });


    //历史查询
    MyService.getHistory().then(function(data){
        $scope.mhistory = data.his;
    },function(){
        console.log('Selectfaild  历史查询');
    });

    $scope.showImg = function(appId){
        $('#'+appId+"-hsid").show();
    };

    $scope.hideImg = function(appId){
        $('#'+appId+"-hsid").hide();
    };

    $scope.showFunc = function(url){
        window.open(url);
    }
};
