module.exports = function($stateParams,$http,$q,httpservice,Session){
    var mailboxVerificationService = {};
    mailboxVerificationService.mailSelect = function(code){
        var deferred = $q.defer();
        $http({
            method:'POST',
            url:httpservice.validationCodeEmail,
            params:{
                'validateCode':code
            }
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };

    return mailboxVerificationService
}