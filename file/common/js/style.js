/*------------------------------

  ページ固有スクリプト

------------------------------*/

/*

  Function

------------------------------ */

const modules = {};

const toggleActive = function (el, options) {
  this.el = el;
	this.target = document.querySelectorAll("." + el.dataset.target)[0];
  this.init();
};

toggleActive.prototype = {
  init() {
    this.bind();
  },
  bind() {
    const _t = this;
		_t.el.addEventListener("click", function() {
			_t.toggleClass();
		})
  },
	toggleClass() {
		if(!this.target.classList.contains("active")) {
			document.querySelectorAll(".active").forEach(function(e) {
				e.classList.remove("active");
			});
		}
		
		this.target.classList.toggle("active");
		return false;
	}
};

modules.toggleActive = toggleActive;


const removeClass = function (el, options) {
  this.el = el;
	this.target = document.querySelectorAll("." + el.dataset.target)[0];
  this.init();
};

removeClass.prototype = {
  init() {
    this.bind();
  },
  bind() {
    const _t = this;
		_t.el.addEventListener("click", function() {
			_t.toggleClass();
		})
  },
	toggleClass() {
		this.target.classList.remove("active");
		return false;
	}
};

modules.removeClass = removeClass;

/*

  Instance

------------------------------ */

Array.prototype.forEach.call(document.querySelectorAll('[data-module]'), (element) => {
  const keys = element.getAttribute('data-module').split(/\s+/);
  const opts = element.getAttribute('data-options') || null;

  keys.forEach((key) => {
    const options = opts ? (keys.length > 1 ? JSON.parse(opts)[key] : JSON.parse(opts)) : {};
    if (key !== void 0) return new modules[key](element, options);
  });
});


window.addEventListener("DOMContentLoaded", function() {
	if(window.innerWidth < 900) {
		document.querySelector(".nav").classList.remove("active");
	}
})

//追記
$(function(){
  $(document).ready(function() {

    $('table tr').click(function() {
      let $c = $(this).children('td').children('input[type=checkbox]');
        if($c.prop('checked'))
            $c.prop('checked', '');
        else
            $c.prop('checked', 'checked');
    });

    $('#checkAll').change(function() {
      $('.c-check').prop('checked', $(this).prop('checked'));
    });
  });
})