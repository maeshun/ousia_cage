import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Masonry from 'masonry-layout';
import Velocity from 'velocity-animate';
((root)=>{
	class Top {
		constructor(){
			this.cashElements()
			this.initilaize()
		}
		cashElements(){
			this.$jsScroll = $('.js-scroll')
			this.$cg = $('.cg')
			this.$cgFeed = $('.cg__feed')
			this.$cgFeedItem = $('.cg__feed__item')
			this.$cgFeedItems = $('.cg__feed__items')
			this.$masnory = '';
			this.ua = navigator.userAgent.toLowerCase();
			this.isMobile = this.ua.indexOf('iphone') > -1 || this.ua.indexOf('ipad') > -1 || this.ua.indexOf('android') > -1 ? true : false
		}
		initilaize(){
			if(this.isMobile){
				this.$cgFeedItems.addClass('cg__feed__items--mode-sp')
				this.displayFeedItem()
			} else {
				this.setFeedWidth()
			}
		}
		setFeedWidth(){

			this.$cgFeedItem.each((index, el)=>{
				let style = this.getRandomWidth()
				$(el).hasClass('cg__feed__item--type3') ? style.width="auto" : ""
				$(el).css(style)
			});
			this.executionMasonry()
		}
		getRandomWidth(){
			var rand = Math.floor(Math.random()*100);
			var style;
			if(rand >= 0 && rand < 20){
				style = {
					'width':250,
					'padding-top':'100px',
					'padding-left':'25px'
				}
			}
			if(rand >= 20 && rand < 40){
				style = {
					'width':350,
					'padding-top':'20px',
					'padding-left':'100px'
				}
			}
			if(rand >= 40 && rand < 60){
				style = {
					'width':400,
					'padding-top':'60px',
					'padding-left':'0px'
				}
			}
			if(rand >= 60 && rand < 80){
				style = {
					'width':450,
					'padding-top':'40px',
					'padding-left':'75px'
				}
			}
			if(rand >= 80 && rand < 100){
				style = {
					'width':500,
					'padding-top':'0px',
					'padding-left':'50px'
				}
			}
			return style;
		}

		executionMasonry(){
			setTimeout(()=>{
				this.$masnory = this.$cgFeedItems.masonry({
					columnWidth: 120,
					itemSelector: '.cg__feed__item',
					gutter: 40,
					isFitWidth:true
				});
				this.displayFeedItem()
			},300)
		}
		displayFeedItem(){
			$('.cg__feed__item').each(function(i, e) {
				$(this).velocity({'opacity':1},{'delay':i*100,'easing':'easeInOutCubic','duration':750})
			});
		}
	}
	root.CG = root.CG || {}
	root.CG.Top = Top || {}
	root.addEventListener('DOMContentLoaded',function(){
		jQueryBridget( 'masonry', Masonry, $ );
		jQueryBridget( 'velocity', Velocity, $ );
		new root.CG.Top;
	})
})(window)
