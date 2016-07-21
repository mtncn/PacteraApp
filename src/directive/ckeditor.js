/**
 * Created by ZXL on 2016/6/12.
 */
module.exports = function($parse){
    return {
        require : '?ngModel',
        link : function(scope, element, attrs, ngModel) {
            var ckeditor = CKEDITOR.replace(element[0], {});
            if (!ngModel) {
                return;
            }
            ckeditor.on('instanceReady', function() {
                ckeditor.setData(ngModel.$viewValue);
            });
            ckeditor.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ckeditor.getData());
                });
            });
            ngModel.$render = function(value) {
                ckeditor.setData(ngModel.$viewValue);
            };
        }
    };
};