/**
 * Created by vision on 16/2/16.
 *
 * 企业应用
 *
 * @param $stateParams
 * @param $http
 * @param $q
 * @returns {{}}
 */
module.exports = function ($stateParams,$http, $q,httpservice,Session) {

    var MCollService = {};
    MCollService.scloo=function () {
        var deferred = $q.defer();

        //初次进入的时候，菜单id=null；默认赋值为0；
        var menuid = $stateParams.id;
        if(menuid == undefined || menuid==null || menuid==""){
            menuid = $stateParams.id = 0;
        }

        $http({
            method: 'GET',
            url: httpservice.MCollection,
            //url: httpservice.busproduct,
            params: {'appId':$stateParams.id,'sessionId':Session.id,'userId':Session.userId,'companyId':Session.companyId}
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response);
        });
        return deferred.promise;
    };
    return MCollService;
};
