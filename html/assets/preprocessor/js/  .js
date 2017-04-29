import $ from 'jquery';
((root)=>{
	class About {
		constructor(){
			this.cashElements()
			this.bindEvents()
		}
		cashElements(){
			this.$form = $('#mailform');
			this.$mailformSubmit = $('#mailform_submit')
			this.$name = $('.cg__contact__form__item__input__name')
			this.$mailaddress = $('.cg__contact__form__item__input__mailaddress')
			this.$subject = $('.cg__contact__form__item__input__subject')
			this.$inquiry = $('.cg__contact__form__item__input__inquiry')
		}
		bindEvents(){
			this.$mailformSubmit.on('click',()=>{
				var result = this.$name.val().length == 0 || this.$mailaddress.val().length == 0 || this.$subject.val().length == 0 || this.$inquiry.val().length == 0 ? false : true;
				result ? this.$form.submit() : alert('必須項目が入力されていません。');
				return result;
			})
		}
	}
	root.CG = root.CG || {}
	root.CG.About = About || {}
	root.addEventListener('DOMContentLoaded',function(){
		new root.CG.About;
	})
})(window)
