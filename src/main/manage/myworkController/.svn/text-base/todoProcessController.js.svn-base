/**
 * Created by Sky on 2016/3/21.
 */
module.exports=function($scope,$stateParams,todoProcessMgService) {
    /* $scope.detailsShow=true;*/
    /* $rootScope.fadeShow=true;*/
    $scope.todoStatus=$stateParams.todoStatus;
    todoProcessMgService.openImg().then(function (data) {
        $scope.imgUrl = data.imgUrl;
          }, function () {
        console.log('todoProcessController 管理_我的任务_我的待办:查看我的待办流程图加载失败！');
    });
};