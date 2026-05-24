(function() {
  'use strict';

  // 移动端导航切换
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('open');
    });

    // 点击导航项后关闭菜单
    var items = menu.querySelectorAll('.nav-item a');
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function() {
        menu.classList.remove('open');
      });
    }
  }
})();
