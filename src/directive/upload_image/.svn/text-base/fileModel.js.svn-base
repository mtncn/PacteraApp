/**
 * Created by vision on 16/3/30.
 */
module.exports = function($parse){
    return {
        restrict: 'AE',
        template:'<input type="file" />',
        replace:true,
        link: function(scope, element, attrs, ngModel) {
            //var model = $parse(attrs.fileModel);
            //var modelSetter = model.assign;
            element.bind('change', function(event){
                //scope.$apply(function(){
                //    modelSetter(scope, element[0].files[0]);
                //});
                //附件预览
                scope.file = (event.srcElement || event.target).files[0];
                scope.$apply(attrs.fileModel);
                //console.log(attrs.fileModel);
                //scope.getFile();
            });
        }
    };
};