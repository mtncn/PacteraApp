module.exports = function ($stateParams,$http, $q,httpservice,Session) {
    localStorage.deID =  $stateParams.id;
    localStorage.deflowId = $stateParams.flowId;
    var DProDetailsService = {};
    DProDetailsService.select = function() {
        var sId = localStorage.sId;//获取当前的appId
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.selectDataImgBussiness,
            params: {
                'id': localStorage.deID,
                'appId': sId,
                'userId': Session.userId,
                'sessionId': Session.id,
                'companyId': Session.companyId,
                'flowId': localStorage.deflowId
            }
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
    return DProDetailsService;

}
