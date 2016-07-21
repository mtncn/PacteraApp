
module.exports = function($scope,$state,BProService){
    $scope.thistory = {};
    $scope.menus={};
    //TOP10历史查询
    BProService.gettHistory($scope.thistory).then(function(data){
        $scope.thistory = data.his;
        console.log($scope.thistory);
    },function(){
        console.log('Selectfaild  菜单栏');
    });
    //页面跳转到详情页
    $scope.detailsGo = function(id,appId,flowId,sortID){
        console.log(id,appId,flowId);
        $state.go('details.details',{id:id,appId:appId,flowId:flowId,sortID:sortID});
    };
    //菜单栏
    BProService.getMenu($scope.menus).then(function(data){
        $scope.menus = data.menuList;
        //console.log( $scope.menus);
    },function(){
        console.log('Selectfaild  菜单栏');
    });
    //TOP10跳转至详情页
    $scope.showFunc =function(url){
        window.open(url);
    }
    //控制TOP10图片显隐
    $scope.showImg = function(appId){
        $('#'+appId+"-thsid").show();
        /* $('#'+sortId+"-"+useId+"-pid").css("line-height","14px");
         $('#'+sortId+"-"+useId+"-sid").css("margin-left","0px").css("margin-top","0px");*/
    };

    $scope.hideImg = function(appId){
        $('#'+appId+"-thsid").hide();
        /*  $('#'+sortId+"-"+useId+"-pid").css("line-height","39px");
         $('#'+sortId+"-"+useId+"-sid").css("margin-left","-20px").css("margin-top","-12px");*/
    };
}
