/**
 * Created by Darren_YCDing on 16/4/21.
 */
module.exports = function($http,$q,httpservice,Session){

    var public_Select = {};

    public_Select.select_Province = function(){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.punlic_Select_Province,
            params:{
                'sessionId':Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId
            }
        }).then(function successCallback(response){
            deferred.resolve(response.data);
        },function errorCallback(response){
            console.log("public_Select_Service select_City 查询省份失败");
            deferred.reject(response.data)
        });

        return deferred.promise;
    };

    public_Select.select_City = function(Province){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.public_Select_City,
            params:{
                'sessionId':Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'Province':Province
            }
        }).then(function successCallback(response){
            deferred.resolve(response.data);
        },function errorCallback(response){
            console.log("public_Select_Service select_City 查询城市失败");
            deferred.reject(response.data)
        });

        return deferred.promise;
    };

    return public_Select;
};