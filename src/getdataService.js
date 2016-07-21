/**
 * Created by vision on 16/1/25.
 */
module.exports = function ($http, $q) {
    var func1=function (data) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: './src/data.json?data='+data
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.reject(response);
        });
        return deferred.promise;
    };

    return {
        query: func1
    }
};