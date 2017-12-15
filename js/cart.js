define(['jquery', 'public'], function() {
	function changeCookie(arr, obj, $num) {
		arr[obj.parents('.crone').index()].num = $num;
		var $obj = decodeURIComponent(JSON.stringify(arr[obj.parents('.crone').index()]));
		addCookie('list' + arr[obj.parents('.crone').index()].sid, $obj, 7)
	}

	function empty(arr) {
		if(getCookieAll()) {
			$('.cart-empty .message').show();
			$('.cart-empty .cart-list').hide();
			$('.cart-empty .goodsinfo').hide();
			$('.cart-empty .jiesuan').hide();
		}
	}
	return {
		cart: ~ function() {
			var objALL = getCookieAll();
			var arr = [];
			//console.log(objALL.list1);
			for(var key in objALL) {
				//if(key.indexOf("list") != -1) {//存在含有list的属性，
				arr.push(JSON.parse(objALL[key]));
				//var data=JSON.parse(arr);
				//}
			}
			//arr[0]=JSON.parse(arr[0]);
			console.log(arr);

			if(arr.length != 0) { //				
				var $html = '';
				for(var i = 0; i < arr.length; i++) {
					$html += '<div class="crone"><div class="xuan"><input type="checkbox"></div>' +
						'<div class="p-img">' +
						'<a href="##"><img class="loadimg" src="' + arr[i].url + '" alt="" sid="' + arr[i].sid + '" /></a>' +
						'</div>' +
						'<div class="p-name">' +
						'<a class="loadt" href="##">' + arr[i].title + '</a>' +
						'</div>' +
						'<div class="p-price"><strong><em>￥</em><i class="loadpcp">' + arr[i].price + '</i></strong></div>' +
						'<div class="add"><span id="del-one">&minus;</span><input type="text" value="' + arr[i].num + '"><span id="add-one">+</span></div>' +
						'<div class="p-btn"><a href="javascript:void(0)"><b></b>删除</a></div></div>'
				}
				$('.goodsinfo').append($html);
			} else {
				empty(arr);
			}

			$('.add #add-one').on('click', function() {
				var $num = $(this).siblings('input').val();
				$num++;
				$(this).siblings('input').val($num);
				changeCookie(arr, $(this), $num);
				var $danjia = $(this).parents('.add').siblings('.p-price').find('i').html();
				$('.jiesuan span em').html($num * $danjia);

			})
			$('.add #del-one').on('click', function() {
				//alert(1);
				var $num = $(this).siblings('input').val();
				$num--;
				$(this).siblings('input').val($num);
				changeCookie(arr, $(this), $num);
				if($num <= 1) {
					$num = 1;
					$(this).siblings('input').val($num);
				}
				var $danjia = $(this).parents('.add').siblings('.p-price').find('i').html();
				$('.jiesuan span em').html($num * $danjia);

			})
			$('.p-btn ').on('click', function() {
				var $num = $(this).siblings('input').val();
				delCookie('list' + arr[$(this).parents('.crone').index()].sid);
				$(this).parents('.crone').remove();
				if(getCookieAll()) {
					empty(arr);
				}

			})

		}()

	}

})