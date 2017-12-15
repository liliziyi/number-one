define(['jquery', 'public'], function() {
	return {
		ids1: (function() {
			if(getCookie('phone')) {
				$('.dlu').html(getCookie('phone'));
				$('.zc').html('[退出]');
				$('.zc').on('click', function() {
					delCookie('phone');
					$('.dlu').html('请登录');
					$('.zc').html('免费注册');
				})

			} else {
				$('.zc').html('免费注册');
			}

		})(),

		ids2: (function() {
			$('.hide-box a').on('mouseover', function() {
				$(this).css('background-color', '#bfbfbf').siblings('a').css('background-color', '')
			});

			$('.car').hover(function() {
					$('.carbox').show();
					$(this).css('background-position', '0 -35px');
				},
				function() {
					$('.carbox').hide();
					$(this).css('background-position', '0 0');
				})
		})(),

		ids3: (function() {
			$('.left-menu').hover(function() {
					$(this).css('background-color', '#8f0024');
				},
				function() {
					$(this).css('background-color', '');
				});

			$('dd a').hover(function() {
					$(this).addClass('active').parent('span').siblings('span').children('a').removeClass('active');
				},
				function() {
					$(this).removeClass('active');
				});

			$('.part').hover(function() {
					$(this).find('h2').css({
						'background-position': '5px -142px'
					});
					$(this).find('h2').children('a').addClass('active');
					$(this).css('border-right-color', '#fff').find('dl').css({
						'border-bottom-color': '#8f0024'
					})
				},
				function() {
					$(this).find('h2').css({
						'background-position': '5px 0'
					});
					$(this).find('h2').children('a').removeClass('active');
					$(this).css('border-right-color', '#8f0024')
				});

		})(),

		leftside: (function() {
			$('.left-side li').hover(function() {
					$(this).addClass('change').siblings('li').not('.li1').removeClass('change');
					$(this).not('.li1').html('家纺');
				},
				function() {
					$('.li2').html('2F');
					$('.li3').html('3F');
					$('.li4').html('4F');
					$('.li5').html('5F');
					$('.li6').html('6F');
				});

			$(window).on('scroll', function() {
				var $top = $(this).scrollTop();
				//console.log($top);
				if($top > 900) {
					$('.left-side').show();
					if($top < 1500) {
						$('.left-side .li1').html('家具');
					}else{
						$('.left-side .li1').html('1F');
					};
					if($top > 1500 && $top < 2070) {
						$('.left-side .li2').html('家电');
					}else{
						$('.left-side .li2').html('2F');
					};
					if($top > 2070 && $top < 2640) {
						$('.left-side .li3').html('建材');
					}else{
						$('.left-side .li3').html('3F')
					};
					if($top > 2640 && $top < 3210) {
						$('.left-side .li4').html('家纺');
					}else{
						$('.left-side .li4').html('4F')
					};
					if($top > 3210 && $top < 3780) {
						$('.left-side .li5').html('家饰');
					}else{
						$('.left-side .li5').html('5F')
					};
					if($top > 3780 && $top < 4350) {
						$('.left-side .li6').html('资讯');
					}else{
						$('.left-side .li6').html('6F')
					};
					
				} else {
					$('.left-side').hide();
				};

			});

		})(),

		lunbo: ~ function() {
			$.ajax({
				type: "get",
				url: 'php/index.php',
				dataType: 'json',
				data: {
					img: 'lunbo',
				}

			}).done(function(d) {
				var $html = '';
				for(var i = 0; i < 5; i++) {
					//console.log(d[i].url);
					$html += '<li>' +
						'<img src="' + d[i].url + ' ">' +
						'</li>'
				}
				$('.banner ul').append($html);
				var $li = $('.banner ul li');
				var num = 0;
				$('.banner ul li').first().css('opacity', 1);
				$('.banner span').on('click', function() {
					$(this).addClass('active').siblings('span').removeClass('active');
					num = $(this).index();
					$li.eq(num).animate({
						opacity: 1
					},
					400,
					function() {
						$li.eq(num).siblings('li').animate({
							opacity: 0
						})
					});
					
				})

			})

		}(),

		nav: ~ function() {
			$('.nav>li>a').hover(function() {
				$(this).css('color', '#8F0024');
			}, function() {
				$(this).css('color', '#000');
			})
		}(),
		
		fammid: ~function(){
			$.ajax({
				type: "get",
				url: 'php/index.php',
				dataType: 'json',
				data: {
					img: 'dgtu',//名称为dgtu的图片，共有12张
				}
			}).done(function(b){//传入的图片
		
				var $a=$('.fam-mid ul div .img');
				for(var i=0;i<12;i++){
					$a.eq(i).append(`<img src="${b[i].url}"/>`)
					$a.eq(i+7).prop("href",`details.html?id=${i+1}`);
					
				}
				var num=0;								
				var $move=$('.fam-mid ul');				
				$('.fam-mid .dian span').on('click', function() {
					$(this).addClass('active').siblings('span').removeClass('active');
					
				});
				$('.fam-mid .dian .span1').on('click', function() {
					num-=603;
					if(num<-603){
						num=0;
					}
					$move.animate({
						left:num,
					});
				});
				$('.fam-mid .dian .span2').on('click', function() {
					num+=603;
					if(num>0){
						num=-603;
					}
					$move.animate({
						left:num,
					});
				});
				
				$('.fam-mid').hover(function(){
					$(this).find('.list').show();
				},
				function(){
					$(this).find('.list').hide();
				});

				
				$('.fam-mid .left').on('click',function(){
					num-=603;
					if(num<-603){
						num=0;
					}
					$move.animate({
						left:num,
					});
				})
				$('.fam-mid .right').on('click',function(){
					num+=603;
					if(num>0){
						num=-603;
					}
					$move.animate({
						left:num,
					});
				})
				
				
				
			})
		}(),
		
		xlunbo:~function(){
			$.ajax({
				type: "get",
				url: 'php/index.php',
				dataType: 'json',
				data: {
					img: 'xlunbo',
				}
			}).done(function(a){
				var $html = '';
				for(var i = 0; i < 2; i++) {
					//console.log(a[i].url);
					$html += '<li>' +
						'<img src="' + a[i].url + ' ">' +
						'</li>'
				}
				
				var $lunbo1=$('.one .inner-top .lunbo');
				var $index=0;
				$('.one .inner-top .lunbo ul').append($html);
				$('.one .lunbo li').first().css('opacity', 1);
				$lunbo1.find('span').on('mouseover',function(){
					$index=$(this).index();
					//alert($index);
					$(this).addClass('active').siblings('span').removeClass('active');
					$lunbo1.find('li').eq($index).animate({
						opacity:1
					},500,
					function(){
						$lunbo1.find('li').eq($index).siblings('li').css('opacity','0');
					})
				});
				
				var $lunbo2=$('.two .inner-top .lunbo');
				var $index=0;
				$('.two .inner-top .lunbo ul').append($html);
				$('.two .lunbo li').first().css('opacity', 1);
				$lunbo2.find('span').on('mouseover',function(){
					$index=$(this).index();
					//alert($index);
					$(this).addClass('active').siblings('span').removeClass('active');
					$lunbo2.find('li').eq($index).animate({
						opacity:1
					},500,
					function(){
						$lunbo2.find('li').eq($index).siblings('li').css('opacity','0');
					})
				});
				
				var $lunbo3=$('.three .inner-top .lunbo');
				var $index=0;
				$('.three .inner-top .lunbo ul').append($html);
				$('.three .lunbo li').first().css('opacity', 1);
				$lunbo3.find('span').on('mouseover',function(){
					$index=$(this).index();
					//alert($index);
					$(this).addClass('active').siblings('span').removeClass('active');
					$lunbo3.find('li').eq($index).animate({
						opacity:1
					},500,
					function(){
						$lunbo3.find('li').eq($index).siblings('li').css('opacity','0');
					})
				});
				
				var $lunbo4=$('.four .inner-top .lunbo');
				var $index=0;
				$('.four .inner-top .lunbo ul').append($html);
				$('.four .lunbo li').first().css('opacity', 1);
				$lunbo4.find('span').on('mouseover',function(){
					$index=$(this).index();
					//alert($index);
					$(this).addClass('active').siblings('span').removeClass('active');
					$lunbo4.find('li').eq($index).animate({
						opacity:1
					},500,
					function(){
						$lunbo4.find('li').eq($index).siblings('li').css('opacity','0');
					})
				});
				
				var $lunbo5=$('.five .inner-top .lunbo');
				var $index=0;
				$('.five .inner-top .lunbo ul').append($html);
				$('.five .lunbo li').first().css('opacity', 1);
				$lunbo5.find('span').on('mouseover',function(){
					$index=$(this).index();
					//alert($index);
					$(this).addClass('active').siblings('span').removeClass('active');
					$lunbo5.find('li').eq($index).animate({
						opacity:1
					},500,
					function(){
						$lunbo5.find('li').eq($index).siblings('li').css('opacity','0');
					})
				});
			})
		}(),
		
		
		
		
		imgmove:~function(){
			var $img=$('.floor-list .floor-one .inner .img img');
			$img.hover(function(){
				$(this).animate({
					right:10
				},400
				)
			},function(){
				$(this).animate({
					right:0
				},400
				)
			})
			
			
		}(),
		
		botlunbo:~function(){
			var $left=$('.btn-bot-left');
			var $right=$('.btn-bot-right');
			var $move=$('.iner-right').find('ul');
			var num=0;
			$('.iner-right').hover(function(){
				$left.css({'opacity':1});
				$right.css({'opacity':1});
			},function(){
				$left.css({'opacity':0});
				$right.css({'opacity':0});
			})
			$right.on('click',function(){
				num-=968;
				if(num<-968){
					num=0;
				}
				$move.animate({
					left:num,
				});
			})
			$left.on('click',function(){
				num+=968;
				if(num>0){
					num=-968;
				}
				$move.animate({
					left:num,
				});
			})
			
			
		}(),

		

		tab:~function(){
			var $tab=$('.floor-six .iner .left .tab');
			$tab.find('li').on('mouseover',function(){
				//alert($(this).index());
				var $index=$(this).index();
				$(this).addClass('active1').siblings('li').removeClass('active1')
				$('.floor-six .iner .left .tab-list').children('li').eq($index).show().siblings().hide();
				
			});
			
			var $tab1=$('.floor-six .iner .right .tab');
			$tab1.find('li').on('mouseover',function(){
				//alert($(this).index());
				var $index=$(this).index();
				$(this).addClass('active2').siblings('li').removeClass('active2')
				$('.floor-six .iner .right .tab-list').children('li').eq($index).show().siblings().hide();
				
			}); 
		}(),
	
	}
})



