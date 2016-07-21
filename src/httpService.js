/**
 * Created by vision on 16/2/29.
 */

//var urlWeb = 'http://ecms.chinacloudapp.cn:8000/cloudapps/';
//var urlWeb = 'http://192.168.0.151:8080/cloudapps/';
//var urlWeb = 'http://192.168.0.109:8080/cloudapps/';
//var urlWeb = 'http://localhost:8080/cloudapps/';
var urlWeb = 'http://192.168.0.105:8080/cloudapps/';


//var urlWeb = './TextData/';

module.exports = {

    //  登陆
    //Loginurl:urlWeb+'login.json',
    Loginurl:urlWeb+'Pactera-IntegralPlatform-app/loginsso.do',

    //  企业应用 应用列表
    //busproduct:urlWeb+'Bproduct.json',
    busproduct:urlWeb+'sort/findSortUse.do',
    //busproduct_like:urlWeb+'Bproduct_like.json',
    busproduct_like:urlWeb+'sort/findSortUse.do',

    //  详情
    //details:'./TextData/details.json',
   details:urlWeb+'sort/findUseCadicine.do',

    //我的待办
    //mytodo:'http://ecms.chinacloudapp.cn:8000/cloudapps/apply/findmytodo.do',
    mytodo:urlWeb +'apply/findmytodo.do',

    //我的申请
    //myapply:urlWeb +'myapplys.json',
    myapply:urlWeb +'apply/findmyapply.do',

    //我的应用 应用列表
    //myproduct:urlWeb+'Mproduct.json',
    myproduct:urlWeb+'sort/findSortUse.do',

    //企业应用的订阅事件
    //subscribe:urlWeb+'dingyue.json',
    subscribe:urlWeb+'apply/apply.do',

    //我的应用的点击收藏取消收藏事件--add by Su
    //collection:urlWeb+'dingyue.json',
    collection:urlWeb+'coll/add_updcoll.do',

    //管理-我的任务-我的申请-add by Hua
    //applyManage:urlWeb+'applyMgs.json',
    applyManage:urlWeb+'apply/condition_apply.do',

    //管理-我的任务-我的申请详情内容-add by Hua
    //applyDetail:urlWeb+'applyDetail.json',
    applyDetail:urlWeb+'apply/detail/myapply.do',

    //管理-我的任务-我的申请流程图内容-add by Hua
    //applyProcess:urlWeb+'applyProcess.json',
    applyProcess:urlWeb+'apply/applyProcess.do',

    //管理-我的任务-我的待办-add by Hua
    //todoManage:urlWeb+'todoMgs.json',
    todoManage:urlWeb+'todo/todo_done.do',

    ////管理-我的任务-我的待办审批-add by Hua
    //todoApproveManage:urlWeb+'apply/completetodo.do',
    todoApproveManage:urlWeb+'apply/completetodo.do',


    //管理-我的任务-我的代办详情内容-add by Hua
    //todoDetail:urlWeb+'todoDetail.json',
    todoDetail:urlWeb+'apply/detail/myapply.do',

    //管理-我的任务-我的待办流程图内容-add by Hua
    //todoProcess:urlWeb+'todoProcess.json',
    todoProcess:urlWeb+'apply/applyProcess.do',

    //管理-其他设置-账号安全-add by Hua
    accountManage:urlWeb+'accountMgs.json',
    //accountManage:urlWeb+'accountMgs.json',

    //管理-我的应用-我的收藏-add by Hua
    //collectionManage:urlWeb+'collectionMgs.json',
    collectionManage:urlWeb+'control/coll/findcollection.do',

    //管理-我的应用-我的分类菜单-add by Hua
    //classMenuManage:urlWeb+'classMenuMgs.json',
    classMenuManage:urlWeb+'sort/userSort.do',

    //管理-我的应用-我的分类应用列表-add by Hua
    //classListManage:urlWeb+'classListMgs.json',
    classListManage:urlWeb+'sort/findUserApp.do',

    //管理-我的应用-我的分类添加应用列表(查询)-add by Hua
    //appListManage:urlWeb+'appListMgs.json',
    appListManage:urlWeb+'sort/use/findUserSort.do',

    //管理-我的应用-我的分类添加应用列表（添加）-add by Hua
    //appListAddManage:urlWeb+'appListMgs.json',
    appListAddManage:urlWeb+'sort/use/saveUserSort.do',

    //管理-我的应用-我的订阅-按公司  --add by Darren_YCDing
    //subscribe_Manage_Company:urlWeb+'Subscribe_company_manage.json',
    subscribe_Manage_Company:urlWeb+'myapp/findRovio.do',

    //管理-我的应用-我的订阅-按分类  --add by Darren_YCDing
    //subscribe_Manage_Class:urlWeb+'Subscribe_class_manage.json',
    subscribe_Manage_Class:urlWeb+'myapp/findUserSort.do',

    //管理-我的应用-我的订阅-取消订阅  --add by Darren_YCDing
    //subscribe_Manage_unDo:urlWeb+'Subscribe_unDo.json',
    subscribe_Manage_unDo:urlWeb+'apply/apply.do',

    //管理-企业应用-我的分类菜单-add by Hua
    //AppclassMenuManage:urlWeb+'AppclassMenuMgs.json',
    AppclassMenuManage:urlWeb+'sort/findcompanySort.do',

    //管理-企业应用-我的分类应用列表-add by Hua
    //AppclassListManage:urlWeb+'AppclassListMgs.json',
    AppclassListManage:urlWeb+'sort/findCompanyApp.do',

    //管理-企业应用-分类维护菜单-add by Hua
    //AppMaintainclassMenuManage:urlWeb+'AppclassMenuMgs.json',
    AppMaintainclassMenuManage:urlWeb+'sort/companySort.do',

    //管理-企业应用-分类维护应用列表-add by Hua
    //AppMaintainclassListManage:urlWeb+'AppclassListMgs.json',
    AppMaintainclassListManage:urlWeb+'sort/use/companyrSort.do',

    //管理-企业应用-分类维护添加应用列表-add by Hua
    //AppappListManage:urlWeb+'AppappListMgs.json',
    AppappListManage:urlWeb+'sort/use/findCompanySort.do',

    //管理-企业应用-企业信息基本信息上传logo-add by Hua
    //logoManage:urlWeb+'logoManage.json',
    logoManage:urlWeb+'logoManage.json',

    //管理-企业应用-企业信息基本信息查询和保存-add by Hua
    //businessInfoManage:urlWeb+'businessInfo.json',
    businessInfoManage:urlWeb+'company/findCompany.do',

    //管理-企业应用-企业信息基本信息查询和保存-add by Hua
    //businessLogoManage:'',
    businessLogoManage:urlWeb+'company/companyLogo.do',

    //管理-企业应用-企业信息基本信息配置服务查询-add by Hua
    //serverInfoManage:urlWeb+'serverInfoManage.json',
    serverInfoManage:urlWeb+'company/serverInfoManage.do',

    //管理-企业应用-企业信息基本信息配置服务确认-add by Hua
    //serverInfoSaveManage:urlWeb+'serverInfoManage.json',
    serverInfoSaveManage:urlWeb+'company/savaAuth.do',

    //管理-企业应用-企业信息基本信息配置服务测试-add by Hua
    //serverInfoTestManage:urlWeb+'serverInfoManage.json',
    serverInfoTestManage:urlWeb+'company/isSuccess.do',

    //管理-企业应用-企业信息用户管理（查询tree用户组）-add by Hua
    //userGroupManage:urlWeb+'userGroupManage.json',
    userGroupManage:urlWeb+'user/group/findGroup.do',

    //管理-企业应用-企业信息用户管理(查询用户)-add by Hua
    //userManage:urlWeb+'userManage.json',
    userManage:urlWeb+'user/group_user/findGroup.do',

    //管理-企业应用-企业信息用户管理(新建或编辑保存用户)-add by Hua
    //userSaveManage:urlWeb+'operationResult.json',
    userSaveManage:urlWeb+' user/group_user/saveGroup_User.do',

    //管理-企业应用-企业信息用户管理（上移，下移，删除用户）-add by Hua
    //userOprManage:urlWeb+'userManage.json',
    userOprManage:urlWeb+'user/group/updUser.do',

    //管理-企业应用-企业信息用户管理(批量删除用户)-add by Hua
    //userDelAllManage:urlWeb+'userManage.json',
    userDelAllManage:urlWeb+'user/delUser.do',

    //管理-企业应用-企业信息用户管理(全部用户组下删除用户)-add by Hua
    //userDelManage:urlWeb+'userManage.json',
    userDelManage:urlWeb+'user/delUser.do',

    //管理-企业应用-企业信息用户管理(导入用户查询)-add by Hua
    //userImportManage:urlWeb+'userManage.json',
    userImportManage:urlWeb+'user/inputUser.do',


    //管理-企业应用-企业信息用户管理(导入用户提交)-add by Hua
    //userImportAddManage:urlWeb+'userManage.json',
    userImportAddManage:urlWeb+'userManage.json',


    //管理-企业应用-企业信息用户管理（查询下拉框用户组）-add by Hua
    //userGroupSelectManage:urlWeb+'userGroupSelectManage.json',
    userGroupSelectManage:urlWeb+'user/group/findGroupSelect.do',

    //管理-企业应用-企业信息用户管理（查询用户组列表）-add by Hua
    //userGroupListManage:urlWeb+'userGroupListManage.json',
    userGroupListManage:urlWeb+'user/group/findGroupByParent.do',

    //管理-企业应用-企业信息用户管理（新建或编辑用户组保存）-add by Hua
    //userGroupListSaveManage:urlWeb+'operationResult.json',
    userGroupListSaveManage:urlWeb+'user/group/ssaveGroup.do',

    //管理-企业应用-企业信息用户管理（上移，下移，删除用户组列表）-add by Hua
    //userGroupListOprManage:urlWeb+'userGroupListManage.json',
    userGroupListOprManage:urlWeb+'user/group/moveGroup.do',

    //其他设置-个人信息-保存,--add by Ding
    //person_manage_save:urlWeb+'person_manage_save.json',
    person_manage_save:urlWeb+'user/saveUser.do',
    //person_manage_select:urlWeb+'person_manage_save.json',
    person_manage_select:urlWeb+'user/findUser.do',

    //我的应用的点击收藏取消收藏事件--add by Su
    //searchBussiness:urlWeb+'BSearchProduct.json',
    searchBussiness:urlWeb+'coll/addcoll.do',

    //历史查看 --add by Su
    //historyBussiness:urlWeb+'history.json',
    historyBussiness:urlWeb+'his/findhistory.do',

    //历史top查看 --add by Su
    //thistoryBussiness:urlWeb+'Thistory.json',
    thistoryBussiness:urlWeb+'his/findTOP10.do',

    //菜单  --add by su
    //menu:urlWeb+'menu.json',
    menu:urlWeb+'sort/findsort.do',

    //管理页面-企业应用-企业应用(查询)--add by Ding
    //select_manage_bus:urlWeb+'mas_bus_app.json',
    select_manage_bus:urlWeb+'company/companyApp.do',

    //管理_企业应用_企业应用_构建新版本(查询)--add by Ding
    //select_createNew_manage_bus:urlWeb+'mas_bus_create.json',
    select_createNew_manage_bus:urlWeb+'mas_bus_create.json',
    select_createNew_manage_bus:urlWeb+'use/findAppNew.do',

    //管理_企业应用_企业应用_构建新版本(保存)--add by Ding
    //save_createNew_manage_bus:'',
    save_createNew_manage_bus:urlWeb+'use/saveAppNew.do',

  //  //管理_应用设置_应用上架_基本信息(保存)--add by Ding
  //  //manage_appset_putup_no1_save:urlWeb+'public/test.json',
  //  manage_appset_putup_no1_save:urlWeb+'use/saveInfo1.do',
  // // manage_appset_putup_no1_select:urlWeb+'public/test.json',
  //  //manage_appset_putup_no1_select:'',
  //
  //  //管理_应用设置_应用上架_应用详情(保存)--add by Ding
  // // manage_appset_putup_no2_save:'',
  //  manage_appset_putup_no2_save:urlWeb+'use/saveInfo2.do',
  ////  manage_appset_putup_no2_select:'',
  //  //manage_appset_putup_no2_select:'',
    //管理_应用设置_应用上架_基本信息(保存)--add by Ding
   // manage_appset_putup_no1_save:urlWeb+'public/test.json',
    //manage_appset_putup_no1_save:urlWeb+'use/saveInfo1.do',
    manage_appset_putup_no1_save:urlWeb+'use/saveInfo1.do',
    //manage_appset_putup_no1_select:urlWeb+'public/test.json',
    manage_appset_putup_no1_select:urlWeb+'use/findinfo1.do',
    //管理_应用设置_应用上架_应用详情(保存)--add by Ding
    manage_appset_putup_no2_save:urlWeb+'use/saveInfo2.do',
    manage_appset_putup_no2_select:urlWeb+'use/findinfo2.do',
    //管理_应用设置_应用上架_发布应用(保存)--add by Ding
    //manage_appset_putup_no3_save:'',
    manage_appset_putup_no3_save:urlWeb+'use/saveInfo3.do',
    //manage_appset_putup_no3_select:'',
    manage_appset_putup_no3_select:urlWeb+'use/findinfo3.do',
    //管理_应用设置_企业应用_发布范围(保存)--add by Ding
    manage_appset_putup_no4_save:urlWeb+'use/saveInfo4.do',
    //管理_应用设置_应用上架_发布范围(保存)--add by Ding
    manage_appset_putup_no_urlWeb_sele:urlWeb+'use/saveRelease.do',
    manage_appset_putup_no4_save:urlWeb+'use/saveInfo4.do',
    //manage_appset_putup_no4_select:'',
  //  manage_appset_putup_no4_right::urlWeb+'use/saveInfo4.do',
    manage_appset_putup_no4_right:urlWeb+'use/findRelease.do',
    //manage_appset_putup_no4_left:urlWeb+'mas_appset_putup_no4.json',
    manage_appset_putup_no4_left:urlWeb+'use/findinfo4.do',

    //我的应用 应用列表
    //myproduct_insert_histery:'',
    myproduct_insert_histery:urlWeb+'his/addhistory.do',

    //省份查询
    //punlic_Select_Province:urlWeb+'public/province.json',
    punlic_Select_Province:urlWeb+'user/cities.do',
    //城市查询
    //public_Select_City:urlWeb+'public/city.json',
    public_Select_City:urlWeb+'user/provinces.do',
    //我的应用-我的收藏
    MCollection:urlWeb+'coll/findcollection.do',
    //后台管理-应用分类-添加应用
    AppappListAddManage:urlWeb+'sort/use/saveCompanySort.do',
    //后台管理-个人信息-邮箱验证
    AppappListAddManageEmail:urlWeb+'user/isEmail.do',
    //登录页的自动查询
    loginSelectLoginDataImg:urlWeb+'company/findLogo.do',
    //loginSelectLoginDataImg:urlWeb+'selectLoginImg.json',
    //应用上架第四步 查询 右边的查询
    findRelease:urlWeb+'use/findRelease.do',
    //前台-企业应用-应用详情-详情
    selectDataImgBussiness:urlWeb+'sort/appDetail.do',
   //前台-企业应用-应用详情-评论与评分_查询
    selectDataImgBussinessXiangqing:urlWeb+'use/findRreview.do',
    //selectDataImgBussinessXiangqing:'./TextData/bus_detail.json',
   //前台-企业应用-应用详情-评论与评分_评论
    selectDataImgBussinessPingLun:urlWeb+'use/saveRreview.do',
   //前台-企业应用-应用详情-相关
    selectDataImgBussinessPingLunXG:urlWeb+'companyApp/findRovio.do',
    selectDataImgBussinessPingLunXG_2:urlWeb+'companyApp/findAppUser.do',
    selectDataImgBussinessPingLunXG_3:urlWeb+'companyApp/findAppSort.do',
    selectZsXinxi:urlWeb+'cert/findAppCert.do',
    selectDelete:urlWeb+'company/updCompanyApp.do',
    //用户导入查询
    selectUserDaoRu:urlWeb+'user/inputOnUser.do',
   selectUserDaoRuSave:urlWeb+'user/inputUser.do',
   //证书密码修改
    upPwdZs:urlWeb+'cert/updateAppCert.do',
   //版本信息显示
   //showKindInfo:'./TextData/banbenxixin.json',
   showKindInfo:urlWeb+'use/findAppVersion.do',
   //邮箱验证
   validationCodeEmail:urlWeb+'user/email/validate.do',
//  new_Select_NewApp:urlWeb+'',
    //我的应用每页显示条数--add by Su
    myEverPageNum:16,
    //企业应用每页显示条数--add by Su
    productEverPageNum:6
};