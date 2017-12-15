define(['jquery', 'public'], function() {

	return {
		denglu: (function() {
			var $phone = $('.username');
			var $pass = $('.psw');
			var $login = $('.login-btn');
			//var bstop = true;
			$login.on('click', function() {
				if($phone.val() == '') {
					$('.error').show().html('用户名不能为空');
					//bstop = false;
				} else if($pass.val() == '') {
					$('.error').show().html('密码不能为空');
					//bstop = false;
				} else {
					$.ajax({
						type: "post",
						url: "php/register.php",
//						dataType: 'json',
//						async: true,
						data: {
							phone: $phone.val(),
							pass: $pass.val(),
							zzz: 1,
						}
					}).done(function(data) {
						if(!data) { //用户名或者密码错误
							$('.error').show().html('用户名或者密码错误');
							$pass.val('');
						} else { //成功
							addCookie($phone, phone, 7);
							location.href = 'index.html';
						}

					})

				}

			})

		})(),

		xianshi: (function() {
			$('.wx-nav').on('click', function() {
				$('.wx-hide').show();
				$('.a-login').hide();
				$('.wx-nav').css('border-bottom-color', 'red');
				$('.zh-nav').css('border-bottom-color', '#d9d9d9');
			});
			$('.zh-nav').on('click', function() {
				$('.wx-hide').hide();
				$('.a-login').show();
				$('.zh-nav').css('border-bottom-color', 'red');
				$('.wx-nav').css('border-bottom-color', '#d9d9d9');
			})
		})(),

	}

})