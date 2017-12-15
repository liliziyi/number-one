define(['jquery', 'public'], function() {
	
	return{
		bg: (function() {
					$('.hide-box a').on('mouseover', function() {
						$(this).css('background-color', '#bfbfbf').siblings('a').css('background-color', '')
					})

				})(),
		
		peisong: ~ function() {
					$('.xqcontent .address').hover(function() {
							//alert(1);
							$('.xqcontent .services .address .tan-box').show();
						},
						function() {
							$('.xqcontent .services .address .tan-box').hide();
						})
				}(),
				
		fdj: ~ function(){
			var id = window.location.search;
			if(id.indexOf("?") != -1) {
				var arr = id.split("?");
				if(arr[1].indexOf("=") != -1) {
					var arrId = arr[1].split("=");
				}
			}
			
			$.ajax({
				type: "get",
				url: 'php/shopinfo.php',
				dataType: 'json',
				data: {
					sid: arrId[1],
				}
			}).done(function(obj){
				//console.log(obj);
				var $image = $('.xqcontent .details-box .image');
							$image.find('.s-img').append('<img src="' + obj.url + '">');
							$image.find('.b-fdj').append('<img src="' + obj.url + '">');
							$image.find('.small-pic .pic-list').append('<img src="' + obj.url + '">' + '<img src="' + obj.url + '">');
							var $details = $('.xqcontent .details-box .details');
							$details.find('h2 span').html(obj.title);
							$details.find('h3 a').html(obj.message);
							$details.find('.price-box .price span').html(obj.price);
							var $simg = $image.find('.s-img');
							var $sfdj = $image.find('.s-img .s-fdj');
							var $bimg = $image.find('.b-fdj img');
							var $bfdj = $image.find('.b-fdj');
							//alert($bfdj.html())
							//计算小放大镜的宽高并设置
							$sfdj.width($bfdj.width() * $simg.width() / $bimg.width());
							$sfdj.height($sfdj.width());
//鼠标滑过小图片，小/大放大镜显示
							$simg.on('mouseover', function() {
								$sfdj.show();
								$bfdj.show();
								//使小放大镜随着鼠标在小图里移动			
								$(document).on('mousemove', function(e) {
									var $l = e.clientX - $sfdj.width() / 2;
									var $t = e.clientY - $sfdj.height() / 2 - 50;
									//console.log($l);
									$sfdj.css({
										'left': $l,
										'top': $t
									})
									if($l <= 0) {
										$sfdj.css('left', 0);
									} else if($l >= $simg.width() - $sfdj.width()) {
										$sfdj.css('left', $simg.width() - $sfdj.width());
									}
									if($t <= 0) {
										$sfdj.css('top', 0);
									} else if($t >= $simg.height() - $sfdj.height()) {
										$sfdj.css('top', $simg.height() - $sfdj.height());
									}
									var $scale = $bimg.width() / $bfdj.width();
									var $scale1 = $bimg.height() / $bfdj.height();
									//alert($scale);
									$bimg.css({
										left: -$scale * $l,
										top: -$scale1 * $t
									})
								})
							})
							//鼠标滑出小图片，小/大放大镜消失
							$simg.on('mouseout', function() {
								$sfdj.hide();
								$bfdj.hide();
							})
var $spic = $image.find('.small-pic .pic-list img')
							$spic.mouseover(function(ev) {
								$(this).addClass('chag-color').siblings('img').removeClass('chag-color')
								$simg.attr('src', $(this).attr('src'));
								$bimg.attr('src', $(this).attr('src'));
							})
							
							$('.amounts dd #add-one').on('click', function() {
								var $num = $('.amounts dd input').val();
								//console.log($num);
								$num++;
								$('.amounts dd input').val($num);
							})
							
							$('.amounts dd #del-one').on('click', function() {
								var $num = $('.amounts dd input').val();
								//console.log($num);
								if($num > 1) {
									$num--;
									$('.amounts dd input').val($num);
								} else {
									$num = 1;
								}
							})
							
							var setObj = obj;
							//console.log(setObj);
							//点击‘加入购物车’按钮
							$('.payment-btn .red-btn').on('click', function() {
								$('.zhezhao').show();
								$('.goumai').show();
								//1.获取商品sid和数量存在cook	
								//console.log(typeof $('.amounts dd input').val())//string
								var obj = getCookie(); //
								var newObj = setObj;
								newObj.num = $('.amounts dd input').val();

								for(var key in obj) {
									if(key == "list" + arrId[1]) {
										var newObj = JSON.parse(obj[key]);
										if(!newObj.num) {
											newObj.num = 0;
										}
										newObj.num = parseInt(newObj.num) + $('.amounts dd input').val();
									}
								}

								
								addCookie("list" + arrId[1], decodeURIComponent(JSON.stringify(newObj)), 7);
							});
					
				
				
				
			}
								
			)
			
		}(),
		shopcar:~function(){																											
			$('.goumai .closepop').on('click',function(){
				$('.zhezhao').hide();
				$('.goumai').hide();
			});						
		}(),
	}	
			
})