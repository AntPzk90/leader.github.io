(function () {
	var fotoArr = document.querySelectorAll(".foto-list-item");
	var prev = document.querySelector(".prev");
	var next = document.querySelector(".next");
	var i = 0;
	next.addEventListener("click", function(){
		fotoArr[i].classList.remove("show");
	 	i++;
	 	if(i >= fotoArr.length){
	 		i = 0;
	 	}
	 	console.log(i)
	 	fotoArr[i].classList.add("show");
	 });
	prev.addEventListener("click", function(){
		console.log(i)
		fotoArr[i].classList.remove("show");
	 	i--;
	 	if(i < 0){
	 		i = fotoArr.length-1;
	 	}
	 	console.log(i)
	 	fotoArr[i].classList.add("show");
	 });
})();

(function () {
  var header =  $(".header");
  var headHeight = header.height();
  $(window).on("scroll", function(){
  	var scroll =  $(window).scrollTop();
  	if(scroll > headHeight){
      /*if(headHeight == 252){
        headHeight = 60;
      }*/
  		header.addClass("fix");
  		$("body").css("paddingTop", headHeight);
  		$(".up").fadeIn(200);
      $(".navigation__list").addClass("dn");
  	}else if(scroll < 1){
  		header.removeClass("fix");
  		$("body").css("paddingTop", 0);
  		$(".up").fadeOut(0);
  	}
  });
  $("#time").on("click",function(e){
  	e.preventDefault();
  	var plansOffset = $(".main__before-after").offset().top;
  	$("html, body").animate({scrollTop:plansOffset},300);
  });
  $("#about").on("click",function(e){
  	e.preventDefault();
  	var plansOffset = $(".about-us").offset().top;
  	$("html, body").animate({scrollTop:plansOffset},300);
  });
  $("#map").on("click",function(e){
  	e.preventDefault();
  	var plansOffset = $(".map").offset().top;
  	$("html, body").animate({scrollTop:plansOffset},300);
  });
  $(".up").on("click",function(e){
  	e.preventDefault();
  	$("html, body").animate({scrollTop:0},300);
  })
  /*=== открытие мобильного меню ===*/
  var mobyBtn = $(".moby-btn");
  mobyBtn.on("click",function(e){
    e.preventDefault();
    if($(".navigation__list").hasClass("dn")){
      $(".navigation__list").removeClass("dn");
    }
    $(".navigation__list").addClass("df");
  });
})();