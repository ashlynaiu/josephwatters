'use strict';
angular.module('portfolio')
    .directive('ngCodeBlock', function() {
        return {
            restrict: 'AE',
            scope: true,
            transclude: 'true',
            template: '<pre><code class="hljs">{{code}}</code></pre>',
            link: function(scope, element) {
                console.log('scope', scope);
                console.log('element', element.html());
                scope.code = element.replaceWith(element.children());
            }
        };
});