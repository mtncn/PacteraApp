module.exports= function($scope,$stateParams,DProCorrelationService){
    $scope.rovio = localStorage.rovio;
    $scope.kindApp = localStorage.kindApp +'类应用';
    //查询基本数据-开发商的其他应用
    $scope.selectXiang = function(){
        DProCorrelationService.selectXiang().then(function sucessCallback(data){
            $scope.pros =  data.pro;
        },function errorCallback(){

        });
    };
    $scope.selectXiang();
    //查询基本数据-用户还使用
    $scope.selectXiang_2 = function(){
        DProCorrelationService.selectXiang_2().then(function sucessCallback(data){
            $scope.pros_2 =  data.pro;
        },function errorCallback(){

        });
    };
    $scope.selectXiang_2();
    //查询基本数据-分类
    $scope.selectXiang_3 = function(){
        DProCorrelationService.selectXiang_3().then(function sucessCallback(data){
            $scope.pros_3 =  data.pro;
        },function errorCallback(){

        });
    };
    $scope.selectXiang_3();
}
