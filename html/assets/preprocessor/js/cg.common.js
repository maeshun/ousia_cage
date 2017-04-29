import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Velocity from 'velocity-animate';
((root)=>{
	class Common {
		constructor(){
			this.cashElements()
			this.bindEvents()
			this.init()
		}
		cashElements(){
			this.$cg = $('.cg')
			this.$cgGnavItemMenu = $('.cg__gnav__item--menu-btn')
			this.$cgGnavItemClose = $('.cg__gnav__item--close')
			this.ua = navigator.userAgent.toLowerCase();
			this.isMobile = this.ua.indexOf('iphone') > -1 || this.ua.indexOf('ipad') > -1 || this.ua.indexOf('android') > -1 ? true : false
			this.scr = $(window).scrollTop()
			this.isMenuOpen = false
		}
		bindEvents(){
			$(window).on('scroll', (event)=> {
				event.preventDefault();
				var $win = $(window);
				this.scr = !this.isMenuOpen ? $win.scrollTop() : this.scr
			});
			this.$cgGnavItemMenu.on('click', (event)=> {
				this.isMenuOpen = true;
				this.$cg.addClass('js-menu-open')
			});
			this.$cgGnavItemClose.on('click', (event)=> {
				this.$cg.removeClass('js-menu-open')
				$(window).scrollTop(this.scr)
				this.isMenuOpen = false;
			});
		}
		init(){
			$('.cg__inpage, .cg__feed--article, .cg__feed--list').velocity({opacity:1},{delay:250,duration:750,easing:'easeInOutCubic'})
		}
	}
	root.CG = root.CG || {}
	root.CG.Common = Common || {}
	root.addEventListener('DOMContentLoaded',function(){
		jQueryBridget( 'velocity', Velocity, $ );
		new root.CG.Common;
	})
})(window)
