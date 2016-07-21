/**
 * Created by vision on 16/2/13.
 *
 *
 */
module.exports= function($scope,MProService,MyService){

    $scope.pros={};
    MProService.select($scope.pnames).then(function (data) {
        $scope.pros = data.pro;
        $scope.totalPage = data.totalPage;
        $scope.nowPage = data.nowPage;
        $scope.id = data.id;
        $scope.totalPas = data.totalPas;
        $scope.currentPage = data.page;
    }, function () {
        console.log('Selectfaild  我的应用');
    });

    //点击桃心收藏的时候触发事件
    //flag==0,表示已收藏，flag==1表示未收藏
    $scope.guanzhu = function(appId,sortId,flag){


        /*console.log("appId="+appId+",sortId="+sortId+",flag="+flag);*/
        //要转换的状态

        MProService.collect(appId,sortId,flag).then(function (data) {
            //如果返回值为true，表示操作成功
            //console.log(data.flag);
            if(data.flag==true){
                if(flag == 0){
                    for(var i=0;i<$scope.pros.length;i++){
                        if($scope.pros[i]['appId']==appId && $scope.pros[i]['sortId']==sortId){
                            $scope.pros[i]['flag']=1;
                        }
                    }
                }else{
                    for(var i=0;i<$scope.pros.length;i++){
                        if($scope.pros[i]['appId']==appId && $scope.pros[i]['sortId']==sortId){
                            $scope.pros[i]['flag']=0;
                        }
                    }
                }
            }else{//否则收藏失败
                console.log('收藏操作失败！返回值='+data.flag);
            }
            //向上传播事件
            $scope.$emit('to-parent', 'to MyController');
        },function(){
            console.log('收藏状态更新失败！');
        });
    };
    //鼠标滑过事件，显示桃心按钮
    $scope.shoucangShow = function(appId,sortId){
        $("#"+appId+"-"+sortId+"-id").css("display","inline-block");
    };
    //鼠标滑过离开事件，隐藏桃心按钮
    $scope.shoucangHide = function(appId,sortId){
        $("#"+appId+"-"+sortId+"-id").css("display","none");
    };

    $scope.showFunc = function(url,appId){
        window.open(url);
        MProService.insert_History(appId).then(function(){
            console.log("MProController 我的应用  添加操作历史 成功");
            MyService.getHistory().then(function(data){
                angular.element('#myapp_scope').scope().mhistory = data.his;
            },function(){
                console.log('Selectfaild  历史查询');
            });
        },function(){
            console.log("MProController 我的应用  添加操作历史 失败");
        });
    }
};