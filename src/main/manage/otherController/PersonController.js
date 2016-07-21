/**
 * Created by vision on 16/3/10.
 */
module.exports = function($scope,$stateParams,$state,fileReader,PersonService,Public_Service){
    //标示字段，判断是否为已验证
    $scope.isattes ='' ;
    $scope.iYanZheng = '';

    $scope.p = {
        person : {
            English:"",//名字
            Nickname:"",//昵称
            Name:"",//姓名
            Sex:""
        },
        //公司信息
        companyinfo:{
            Jobnumber:""//员工ID
        },
        //工作地址
        workaddress:{
            Company:"",//公司名称
            Street:"",//街道
            City:"",//城市
            Province:"",//省份
            Postcode:"",//邮政编码
            Country:""//国家
        },
        //家庭住址
        homeaddress:{
            Street:"",//街道
            City:"",//城市
            Province:"",//省份
            Postcode:"",//邮政编码
            Country:""//国家
        },
        //联系电话
        phone:{
            Workphone:"",//工作电话
            Extension:"",//工作分机
            Workfax:"",//工作传真
            Otherworkphone:"",//其他工作电话
            Homephone:"",//家庭电话
            Pagers:"",//传呼机
            Otherphone:"",//其他电话
            Mobilephone:""//移动电话
        },
        //电子邮件地址
        email:{
            Address:""//邮件地址
        },
        //紧急联系信息
        emergency:{
            Name:"",//名称
            Address:"",//地址
            Phone:"",//电话
            Relation:""
        }
    };

    $scope.personImage;

    //称谓
    $scope.sexs = [
        {key:'1',sex:'先生'},
        {key:'2',sex:'女士'},
        {key:'3',sex:'保密'}
    ];
    //国家
    $scope.countrys = [
        {key:'1',country:'中华人民共和国'}
    ];
    //关系
    $scope.relations = [
        {key:'1',relation:"家人"},
        {key:'2',relation:"朋友"},
        {key:'3',relation:"其他"}
    ];

    //默认提示框为隐藏
    $scope.msgBoxShow_saveBu=false;
    $scope.msgBoxShow_saveBu_2=false;
    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };
    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu_2=function(){
        $scope.msgBoxShow_saveBu_2=false;
    };
    //省份
    $scope.Provinces = [];
    //城市
    $scope.cities_workaddress = [];
    //城市
    $scope.cities_homeaddress = [];

    $scope.Save = function(p){
        console.log(postMultipart());
        p.image = $scope.personImage;
        p.homeaddress.Province =($('#conRight_sex_select_4').val()).substring(7);
        p.homeaddress.cities = '';
        p.homeaddress.City =($('#conRight_sex_select_3').val()).substring(7);
        p.workaddress.Province =($('#conRight_sex_select_2').val()).substring(7);
        p.workaddress.City =($('#conRight_sex_select_1').val()).substring(7);
        p.provinces = '';
        p.workaddress.cities = '';
        console.log(p);
        PersonService.save(p).then(function(data){
            if(data.flag == true){
                $scope.msgBoxShow_saveBu=true;
                $scope.testBuResult='保存成功！';

                $scope.p = data;
            }else{
                $scope.msgBoxShow_saveBu=true;
                $scope.testBuResult='保存失败！';
            }
        })
    };

    var select_Provinces = function(){
        Public_Service.select_Province().then(function(data){
            $scope.Provinces = data.provinces;
        });
    };

    $scope.select_cities_workaddress = function(){
        Public_Service.select_City($scope.p.workaddress.Provinces).then(function(data){
            //console.log($scope.p.workaddress.Province);
            $scope.cities_workaddress = data.cities;
            console.log( $scope.cities_workaddress);
        });
    };

    $scope.select_cities_homeaddress = function(){
        Public_Service.select_City($scope.p.homeaddress.Provinces).then(function(data){
            $scope.cities_homeaddress = data.cities;
            console.log( $scope.cities_homeaddress);
        });
    };

    var mode = $stateParams.mode;
    PersonService.select().then(function(data){
        console.log(data.email);
        $scope.email = data.email.Address;
        $scope.isattes = data.email.isattes;//获取判断email是否已验证
        $scope.personImage = data.image;
        if($scope.isattes == '1'){
            $scope.iYanZheng = '已验证';
            $(".font_Class").css('color','green');
           // $scope.iImg ='images/img/个人信息-2.png';
        }else if($scope.isattes == '0'){
            $scope.iYanZheng = '待验证';
            $(".font_Class").css('color','red');
        }else{
            $scope.iYanZheng = '已发送';
            $(".font_Class").css('color','blue');
        }
        select_Provinces();
        $scope.p = data;
        $scope.select_cities_workaddress();
        $scope.select_cities_homeaddress();
        console.log($scope.p);
        mode = "1";

    });

    //发送请求的数据封装
    function postMultipart() {
        //通过FormData保存需要发送的数据
        var fd = new FormData();
        fd.append("personImage",$scope.personImage);

        return fd;
    }

    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
    $scope.personImages = function () {
        //console.log($scope.file);
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.personImage = result;
            });
    };
    ////称谓
    //$scope.person_sex = $scope.p.person.Sex;
    ////工作地址 国家
    //$scope.workaddress_country = $scope.p.workaddress.Country;
    ////工作地址 城市
    //$scope.workaddress_City = $scope.p.workaddress.City;
    ////家庭地址 国家
    //$scope.homeaddress_country = $scope.p.homeaddress.Country;
    ////家庭地址 城市
    //$scope.homeaddress_City = $scope.p.homeaddress.City;
    ////紧急联系人 关系
    //$scope.emergency_Relation = $scope.p.emergency.Relation;
    $scope.edit = function(){
        $("#inp-WIDTH-phone").removeAttr('disabled');
        $("#inp-WIDTH-phone").focus();
    };
    $("#inp-WIDTH-phone").blur(function () {
        $("#inp-WIDTH-phone").attr('disabled','disabled');
        if($scope.iYanZheng == '已发送'||$scope.iYanZheng == '已验证'||$scope.iYanZheng == '待验证'){
            var email = $("#inp-WIDTH-phone").val();
            if(email != $scope.email && email != '' && email != null){
                $scope.iYanZheng = ' ';
                $scope.iYanZheng = '待验证';
                $(".font_Class").css('color','red');
            }
        }
    });
    $scope.emailFa = function(){
        if($scope.iYanZheng == '待验证'){
            var email = $("#inp-WIDTH-phone").val();
            PersonService.emailFa(email).then(function(data){
                //console.log($scope.p.workaddress.Province);
                if(data.flag == true){
                    $scope.iYanZheng = '已发送';
                    $(".font_Class").css('color','blue');
                    $scope.msgBoxShow_saveBu_2=true;
                    $scope.testBuResult_2='发送成功!';
                }else{
                    $scope.msgBoxShow_saveBu_2=true;
                    $scope.testBuResult_2='发送失败！';
                }
            });
        }else if($scope.iYanZheng == '已发送'){
            var email = $("#inp-WIDTH-phone").val();
            PersonService.emailFa(email).then(function(data){
                //console.log($scope.p.workaddress.Province);
                if(data.flag == true){
                    $scope.iYanZheng = '已发送';
                    $(".font_Class").css('color','blue');
                    $scope.msgBoxShow_saveBu_2=true;
                    $scope.testBuResult_2='验证成功!';
                }else{
                    $scope.msgBoxShow_saveBu_2=true;
                    $scope.testBuResult_2='验证失败！';
                }
            });
        }else{
            var email = $("#inp-WIDTH-phone").val();
            PersonService.emailFa(email).then(function(data){
                //console.log($scope.p.workaddress.Province);
                if(data.flag == true){
                    $scope.iYanZheng = '已发送';
                    $(".font_Class").css('color','blue');
                    $scope.msgBoxShow_saveBu_2=true;
                    $scope.testBuResult_2='验证成功!';
                }else{
                    $scope.msgBoxShow_saveBu_2=true;
                    $scope.testBuResult_2='验证失败！';
                }
            });
        }
    };
};