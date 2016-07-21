/**
 * Created by vision on 16/3/10.
 */
module.exports=function($stateParams,$http,$q,httpservice,Session) {

    var PersonService = {};

    PersonService.save = function(p){
        var deferred = $q.defer();
        $http({
            method:'POST',
            url:httpservice.person_manage_save,
            params:{'sessionId': Session.id,'userId': Session.userId},
            data:p
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("SaveFaild    个人信息保存失败");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    PersonService.select = function(){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.person_manage_select,
            params:{'sessionId': Session.id,'userId': Session.userId}
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("SelectFaild");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    /*
    * 邮箱验证
    * */
    PersonService.emailFa = function(email){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.AppappListAddManageEmail,
            params:{'sessionId': Session.id,'userId': Session.userId,'email':email,'companyId':Session.companyId}
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("SelectFaild");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    }
    return PersonService;
};