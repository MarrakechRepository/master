/* created bY MOHSSINE_ABOUTAJ 1438/2017 */
/* Scrtpts for LOGO , HEADER , FOOTER */

(function () {
    "use strict";

    // footer Elements 
    var footer = document.getElementById('footer'),
        right = document.createElement('div'),
        left = document.createElement('div');

    right.innerHTML = "جميع الحقوق &copy; محفوظة لاصحابها";
    left.innerHTML = 'تصميم و برمجة محسن ابوتاج 1438/2017';
    
    footer.appendChild(right);
    footer.appendChild(left);
})();

