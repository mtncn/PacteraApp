module.exports = function ($stateParams,$http, $q,httpservice,Session) {
    var DProCommentService = {};
    DProCommentService.selectXiang = function(){
        var vse = localStorage.VSER;//获取当前的版本号
        var sId = localStorage.sId;//获取当前的appId
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.selectDataImgBussinessXiangqing,
            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId,'version':vse,'isall':false}
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            // console.log('3  '+$stateParams.id);
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.reject(response);
        });

        return deferred.promise;
    };
    //评论方法
    DProCommentService.submit = function(pingCon,attr,id){
        var vse = localStorage.VSER;//获取当前的版本号
        var sId = localStorage.sId;//获取当前的appId
        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: httpservice.selectDataImgBussinessPingLun,
            params: {'version':vse,'rate':attr,'id':id,'text':pingCon,'appId':sId,'userId':Session.userId,'companyId':Session.companyId}
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            // console.log('3  '+$stateParams.id);
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.reject(response);
        });

        return deferred.promise;
    };
    return DProCommentService;
}