/**
 * Created by Sky on 2016/3/14.
 */
module.exports = function ($stateParams, $http, $q, httpservice, Session) {
    var accountMgService = {};
    accountMgService.getData = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.accountManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
            }
        }).then(function successCallback(response){
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    return accountMgService;
};