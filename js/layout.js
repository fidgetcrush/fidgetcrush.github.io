	// simulating an async upload function 
		function uploadPic(v,cb) {
	  	var percent = v;
	  	var intervalID = setInterval(function () { 

		    percent = percent - 1;

		    localStorage.setItem('candy_hint_c', percent);

		    // console.log(percent);
		    cb && cb(percent);
		    if(percent <= 0) {
		    	//alert("ok");
		    	$('.hintLb').text("hint");
		      clearInterval(intervalID);
		      percent = 100;
		    } // end of if
		  }, 1000); // end of setInterval()
		}


		function countStart(v){
			$(document).ready(function(){
				  $('.hintLb').text("");
					progressBtnObj =$('.hint').data('plugin-' + 'progressBtn');
					var updateProgress = progressBtnObj && progressBtnObj.setProgress;
					uploadPic(v, $.proxy( updateProgress, progressBtnObj));
			});
		}


		$(document).ready(function(){
			console.log('doc ready');
			$('.hintBox').on('click','.hint', function(event){
				countStart(100);
			}); // end of on()
		}); // end of ready()


		if(localStorage.getItem('candy_hint_c') == null){
			countStart(100);
		}else{
			var v = parseInt(localStorage.getItem('candy_hint_c'));
			if(v <= 0){
				v=0;
			}

			if(v > 100){
				v=100;
			}
			countStart(v);
		}