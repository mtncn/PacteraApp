module.exports= function($scope,$stateParams,DProDetailsService){
    $scope.sLength;
    $scope.num = 0;
    $scope.intLi = 4;
    $scope.lWidth = -230;
    //详情页面数据
    $scope.classMenuList={};
    $scope.textArea={};
    $scope.textArea_2={};

    //控制图标显示，隐藏
    $('.s_img_xia').mouseover(function(){
        $('.jjj_L_img').fadeIn(0);
        $('.jjj_R_img').fadeIn(0);
    });
    $('.s_img_xia').mouseleave(function(){
        $('.jjj_L_img').fadeOut(100);
        $('.jjj_R_img').fadeOut(100);
    });
    //图片想左滑动
    $scope.jjj_L_img = function(){
        if($scope.num>0){
            $scope.num = $scope.num -1;
            $('.s_img_xia_div').animate({left:  $scope.num*$scope.lWidth+'px'});
            $scope.sLength =  $scope.sLength+1;
        }
    };
    //图片向右滑动
    $scope.jjj_R_img = function(){
        if( $scope.sLength>4){
            $scope.num = $scope.num+1;
            $('.s_img_xia_div').animate({left:$scope.num*$scope.lWidth+'px'});
            $scope.sLength =  $scope.sLength - 1;
        }
    };
    //查询基本数据
    DProDetailsService.select().then(function (data) {
       // alert(6666666);
        console.log(data);
        $scope.pros = data.pro;
        $scope.classMenuList = data.pro.detailsImages;
        //$scope.visur =  data.pro.version;
        $scope.visur =data.pro.versionText;
        if(data.pro.textArea!=null&&data.pro.textArea!=''&&data.pro.textArea!=undefined){
            var textArea = data.pro.textArea;
            // var textArea = '<p>加速将诞生</p><p>滴啥打算</p><p>和和弧度飒爽的武器很大气</p>';
            textArea = del_html_tags(textArea,"</p>",",");
            textArea = del_html_tags(textArea,"<p>","");
            $scope.textArea = textArea.split(',');
        }
        for(var i = 0; i<= $scope.textArea.length; i++){
            if($scope.textArea[i] == null || $scope.textArea[i] == ''||$scope.textArea[i] ==undefined){
                $scope.textArea.splice(i,1);
            }
        }
       if(data.pro.textArea_2!=null&&data.pro.textArea_2!=''&&data.pro.textArea_2!=undefined){
           var textArea_2 = data.pro.textArea_2;
           // var textArea_2 = '<p>加速将诞生</p><p>回回回</p><p>会hiUShi电弧文化</p>';
           textArea_2 = del_html_tags(textArea_2,"</p>",",");
           textArea_2 = del_html_tags(textArea_2,"<p>","");
           $scope.textArea_2 = textArea_2.split(',');
       }

        for(var i = 0; i<= $scope.textArea_2.length; i++){
            if($scope.textArea_2[i] == null || $scope.textArea_2[i] == ''||$scope.textArea_2[i] ==undefined){
                $scope.textArea_2.splice(i,1);
            }
        }


        $scope.sLength =  $scope.classMenuList.length ;
        $('.s_img_xia_div').css('width',230*$scope.sLength+'px');

    }, function () {
        console.log('Selectfaild 产品详情');
    });



    //清除指定字符串的函数
    function del_html_tags(str,reallyDo,replaceWith) {
        var e=new RegExp(reallyDo,"g");
        words = str.replace(e, replaceWith);
        return words;
    };

}