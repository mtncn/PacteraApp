/**
 * Created by Sky on 2016/3/21.
 */
module.exports=function($scope,$state,doneDetailMgService) {
    /* $scope.detailsShow=true;*/
    /* $rootScope.fadeShow=true;*/
    doneDetailMgService.openDetail().then(function (data) {
        $scope.todoEdit = data;
    }, function () {
        console.log('doneDetailController 管理_我的任务_我的已办:查看已办详情失败！');
    });
};