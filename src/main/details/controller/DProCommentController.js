module.exports= function($scope,$stateParams,DProCommentService){
        $scope.xingxinxg = 0;
        $scope.numXing = 0;
        $scope.b_t = 0;
        $scope.id = 0;
        $scope.value;
      //  $scope.isall = false;
         $scope.flag = false;
        //默认提示框为隐藏
        $scope.msgBoxShow_saveBu=false;
        $scope.msgBoxShow_saveBu_2=false;
        //关闭保存错误提示框
        $scope.closeMsgBox_saveBu=function(){
                $scope.msgBoxShow_saveBu=false;
        };
        $scope.closeMsgBox_saveBu_2=function(){
                $scope.msgBoxShow_saveBu_2=false;
        };


        //查询基本数据
        $scope.selectXiang = function(){
                DProCommentService.selectXiang().then(function sucessCallback(data){
                        console.log(data);
                        $scope.flag = data.flag;
                        if($scope.flag == true) {
                            $scope.numXing = data.review.rate;
                            $scope.id = data.review.id;
                            $scope.value = data.review.text;
                        }

                        $scope.number = data.number;
                        if( $scope.number == ''|| $scope.number == null || $scope.number == undefined){
                                $scope.number = 0;
                        }
                        $scope.total = data.total;
                        if( $scope.total == ''|| $scope.total == null || $scope.total == undefined){
                                $scope.total = 0;
                        }
                        $scope.avg = data.avg;
                        
                        $("#xiangqing_qu_cong").html('');
                        if(data.avg == 0){
                                for(var i = 0; i<  5; i++){
                                        $("#xiangqing_qu_cong").append("<img class='xinxin_img_2' src='images/xiangqing/2-2.png'/>");
                                }
                        }else{
                                for(var i = 0; i<  $scope.avg; i++){
                                        $("#xiangqing_qu_cong").append("<img class='xinxin_img' src='images/xiangqing/2-4.png'/>");
                                }
                                for(var i = 0; i<  5-$scope.avg; i++){
                                        $("#xiangqing_qu_cong").append("<img class='xinxin_img_2' src='images/xiangqing/2-2.png'/>");
                                }
                        }


                        $scope.pros = data.pro;
                        console.log($scope.pros);

                       $('.ul_a').html('');
                       var pros = data.pro;
                        $scope.b_t = 0;
                        for(var i = 0; i<pros.length;i++){

                              $('.ul_a').append("<li></li>");

                        }

                        $('.ul_a li').each(function(){

                                $(this).append("<span id='pinglun_qu_pinglun_span'>"+pros[$scope.b_t].userName +"</span>");
                                if(pros[$scope.b_t].rate == 0){
                                        $(this).append("<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                                         "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                                         "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                                         "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                                         "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
                                }else if(pros[$scope.b_t].rate == 1){
                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
                                }else if(pros[$scope.b_t].rate == 2){
                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
                                }else if(pros[$scope.b_t].rate == 3){
                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
                                }else if(pros[$scope.b_t].rate == 4){
                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
                                }else{
                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>");
                                }

                                $(this).append("<span class='timer_span'>"+pros[$scope.b_t].creaTime  + "</span>");
                                $(this).append("<p>"+ pros[$scope.b_t].text+"</p>");


                                $scope.b_t = $scope.b_t+1;
                        });


                        //星星点击的方法
                        var stepW = 24;
                        var stars = $("#star > li");
                        if($scope.flag == true){

                            $("#showb").css({"width":stepW*$scope.numXing});
                            stars.each(function(i){

                                $(stars[i]).click(function(e){
                                    var n = i+1;
                                    $scope.xingxinxg = n;
                                    $("#showb").css({"width":stepW*n});
                                    //  descriptionTemp = description[i];
                                    $(this).find('a').blur();
                                    return stopDefault(e);
                                    //   return descriptionTemp;
                                });
                            });
                        }else{

                                $("#showb").css("width",0);
                                stars.each(function(i){

                                        $(stars[i]).click(function(e){
                                                var n = i+1;
                                                $scope.xingxinxg = n;
                                                $("#showb").css({"width":stepW*n});
                                                //  descriptionTemp = description[i];
                                                $(this).find('a').blur();
                                                return stopDefault(e);
                                                //   return descriptionTemp;
                                        });
                                });
                        }
                        function stopDefault(e){
                                if(e && e.preventDefault)
                                        e.preventDefault();
                                else
                                        window.event.returnValue = false;
                                return false;
                        };

                    },function errorCallback(){

                    });
        };
        $scope.selectXiang();



        //评论方法
        $scope.pinglun = function(){
                if($scope.flag == true){

                    $('#pinglunqu').html($scope.value);
                    $('.pinglunqu').css('display','block');
                }else{
                     $('.pinglunqu').css('display','block');
                }

        };
        //取消方法
        $scope.close = function(){
                $('.pinglunqu').css('display','none');
        };
        //评论提交方法
        $scope.submit = function(){

                var pingCon = $('.pinglunqu textarea').val();

                console.log(pingCon);
                if($scope.xingxinxg == 0){
                        $scope.msgBoxShow_saveBu = true;
                        $scope.testBuResult='请选择星星等级';
                }
                else if(pingCon == ''|| pingCon == null || pingCon == undefined){
                        $scope.msgBoxShow_saveBu = true;
                        $scope.testBuResult='请输入评论内容';
                }
                else{
                        DProCommentService.submit(pingCon,$scope.xingxinxg,$scope.id,$scope.isall).then(function sucessCallback(data){
                                console.log(data);
                               if(data.flag == true){
                                       $('.pinglunqu').css('display','none');
                                       $scope.msgBoxShow_saveBu_2 = true;
                                       $scope.testBuResult_2='提交成功';
                                       $('.pinglunqu textarea').val('');//清空文本框中的值
                                       setTimeout(function(){
                                               $scope.selectXiang();//提交成功之后，调用查询方法
                                       },500)
                               }
                        },function errorCallback(){

                        });
                }
        };
}