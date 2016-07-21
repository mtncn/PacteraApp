module.exports = function ($stateParams,$http, $q,httpservice,Session) {
    var DProCorrelationService = {};
    DProCorrelationService.selectXiang = function(){
        var sId = localStorage.sId;//获取当前的appId
        var rovio = localStorage.rovio;//获取当前的开发商
        var sortId = localStorage.sortIdDetails;//获取sortId
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.selectDataImgBussinessPingLunXG,
            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId,'rovio':rovio}
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

    DProCorrelationService.selectXiang_2 = function(){
        var sId = localStorage.sId;//获取当前的appId
        var rovio = localStorage.rovio;//获取当前的开发商
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.selectDataImgBussinessPingLunXG_2,
            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId}
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

    DProCorrelationService.selectXiang_3 = function(){
        var sId = localStorage.sId;//获取当前的appId
        var rovio = localStorage.rovio;//获取当前的开发商
        var sortId = localStorage.sortIdDetails;//获取sortId
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.selectDataImgBussinessPingLunXG_3,
            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId,'sortId':sortId}
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
    return DProCorrelationService;

}