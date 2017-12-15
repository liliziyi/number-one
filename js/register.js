var bstop = true;
$phone = $('#phone');
$password = $('#password');
$phone.on('blur', function() {
	if(/^[1][3578][\d]{9}$/.test($(this).val())) {
		$.ajax({
			type: "post",
			url: "php/register.php",
			dataType: 'json',
			async: true,
			data: {
				phone: $phone.val(),
			}
		}).done(function(a) {
			if(a) {
				$('.error').show().html('该用户名已经存在');
				bstop = false;
			} else {
				$('.error').hide();
				bstop = true;
			}
		})
	} else {
		$('.error').show().html('请输入正确的手机号');
		bstop = false;
	}
})

$password.on('blur', function() {
	if($(this).val() != '') { //不为空
		if(/^\S{6,18}$/.test($(this).val())) {
			bstop = true;
			$('.error').hide();
		} else {
			$('.error').show().html(' 密码长度不对');
			bstop = false;
		}
	} else { //为空
		$('.error').show().html('密码不能为空');
		bstop = false;
	}
});

function yzm() {
	var arr = [];
	for(var i = 48; i <= 57; i++) {
		arr.push(String.fromCharCode(i));
	}
	for(var i = 97; i <= 122; i++) {
		arr.push(String.fromCharCode(i));
	}
	var str = '';
	for(var j = 0; j < 4; j++) {
		var ranIndex = parseInt(Math.random() * arr.length);
		if(ranIndex > 9) {
			var bool = Math.random() > 0.5 ? true : false;
			if(bool) {
				str += arr[ranIndex].toUpperCase();
			} else {
				str += arr[ranIndex];
			}
		} else {
			str += arr[ranIndex];
		}
	}
	return str;

}
$('.btn').on('click', function() {
	$('.codeBox').show();
	$('#txtimgCode').val(yzm());
	$('.change-code').on('click', function() {
		$('#txtimgCode').val(yzm());
	})
	$('.ensure-btn').on('click', function() {
		$('#code').val($('#txtimgCode').val());
		$('.codeBox').hide();
	})
})

$('.register-btn').on('click', function() {
	if(bstop) {
		$.ajax({
			type: "post",
			url: "php/register.php",
			dataType: 'json',
			async: true,
			data: {
				phone:$phone.val(),
				pass:$password.val(),
				uuu:98,
			}
		})
		var d=new Date();
			d.setDate(d.getDate()+7);//10天后的时间
			document.cookie="phone="+$phone.val()+";expires="+d;
		location.href = 'index.html';
	}
})