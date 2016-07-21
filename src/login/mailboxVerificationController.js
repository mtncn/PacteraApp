module.exports = function ($scope,$state,$stateParams,mailboxVerificationService) {
    //$scope.code = $stateParams.code;
    $scope.flag = false;
    $scope.companyId;
    $scope.val;
    mailboxVerificationService.mailSelect($stateParams.code).then(function (data) {
        console.log(data);
        if(data.flag == true){
            $('.email_tiaozhuan_1').css('display','block');
            $('.email_tiaozhuan_2').css('display','none');
            $scope.flag = true;
            $scope.val = data.message;
            $scope.companyId = data.companyId;
            setTimeout(function(){
                $state.go('login_company',{companyId:$scope.companyId});
            },3000);
        }else{
            $('.email_tiaozhuan_2').css('display','block');
            $('.email_tiaozhuan_1').css('display','none');
            $scope.val = data.message;
            setTimeout(function(){
                $state.go('login_company',{companyId:''});
            },3000);
        }
    },function(){

    });
    $scope.go = function(){
        if($scope.flag == true){
            $state.go('login_company',{companyId:$scope.companyId});
        }else{
            $state.go('login_company',{companyId:''});
        }

    }

}
