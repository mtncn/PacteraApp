/**
 * Created by Sky on 2016/3/21.
 */
module.exports=function($scope,$stateParams,applyProcessMgService) {
    /* $scope.detailsShow=true;*/
    /* $rootScope.fadeShow=true;*/
    $scope.applyStatus=$stateParams.applyStatus;
    applyProcessMgService.openImg().then(function (data) {
        $scope.imgUrl = data.imgUrl;
          }, function () {
        console.log('applyProcessController 管理_我的任务_我的申请:查看申请流程图失败！');
    });
};