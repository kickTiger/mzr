(function(B){B.fn.colorTip=function(D){var E={timeout:300,margin:true,className:"normal"};D=B.extend(E,D);return this.each(function(){var H=B(this);if(!H.attr("title")){return true}var F=new C();var I=H.attr("title"),G=new A(I,D.margin,D.className);H.append(G.generate()).addClass("colorTipContainer");H.hover(function(){H.removeAttr("title");G.show();F.clear()},function(){F.set(function(){G.hide();H.attr("title",I)},D.timeout)})})};function C(){}C.prototype={set:function(E,D){this.timer=setTimeout(E,D)},clear:function(){clearTimeout(this.timer)}};function A(D,F,E){this.content=D;this.margin=F;this.className=E;this.shown=false}A.prototype={generate:function(){return this.tip||(this.tip=B('<span class="colorTip">'+this.content+'<span class="pointyTip"></span></span>'))},show:function(){if(this.shown){return}this.margin?(this.tip.css("margin-left",-this.tip.outerWidth()/2)):"";this.tip.addClass(this.className);this.tip.fadeIn("fast");this.shown=true},hide:function(){this.tip.fadeOut();this.shown=false}}})(jQuery);jQuery(document).ready(function(E){var B=E(".search-input").val(),A=(window.opera)?(document.compatMode=="CSS1Compat"?E("html"):E("body")):E("html,body");E(".pages-next a").attr("title",E(".pages-next a").text());E(".pages-prev a").attr("title",E(".pages-prev a").text());E(".pages-next a,.pages-prev a").text("").css({"text-indent":0});E(".pages-prev a").colorTip({margin:false,className:"left"});E(".pages-next a").colorTip({margin:false,className:"right"});E("#goback").hide();if(E("#widgets-sns").length&&E("#widgets-sns ul a").length){E("#widgets-sns ul a").colorTip({})}E(".search-input").focus(function(){if(E.trim(E(this).val())==B){E(this).val("")}}).blur(function(){if(E(this).val()==""){E(this).val(B)}});if(E("#sidebar-fixed").length>0){var C=E("#sidebar-fixed").offset().top}E(window).scroll(function(){var D=E(window).scrollTop();if(D>50){E("#goback").show()}else{E("#goback").hide()}if(E("#sidebar-fixed").length>0&&E(".main").height()>E("#sidebar").height()){if(D>C+60){E("#sidebar-fixed").addClass("fixed")}else{E("#sidebar-fixed").removeClass("fixed")}}});E("#goback").click(function(D){D.preventDefault();D.returnValue=false;A.animate({scrollTop:0},600,function(){E("#goback").hide()});return false});E(".more-active").hover(function(){E(this).children(".more-items").show()},function(){if(!(E.browser.msie&&E.browser.version=="6.0")){E(this).children(".more-items").hide()}});E(".menu-parent-item").hover(function(){E(this).children(".sub-menu").show()},function(){if(!(E.browser.msie&&E.browser.version=="6.0")){E(this).children(".sub-menu").hide()}})});window.localData={hname:location.hostname?location.hostname:"localStatus",isLocalStorage:window.localStorage?true:false,dataDom:null,initDom:function(){if(!this.dataDom){try{this.dataDom=document.createElement("input");this.dataDom.type="hidden";this.dataDom.style.display="none";this.dataDom.addBehavior("#default#userData");document.body.appendChild(this.dataDom);var B=new Date();B=B.getDate()+30;this.dataDom.expires=B.toUTCString()}catch(A){return false}}return true},set:function(A,B){if(this.isLocalStorage){window.localStorage.setItem(A,B)}else{if(this.initDom()){this.dataDom.load(this.hname);this.dataDom.setAttribute(A,B);this.dataDom.save(this.hname)}}},get:function(A){if(this.isLocalStorage){return window.localStorage.getItem(A)}else{if(this.initDom()){this.dataDom.load(this.hname);return this.dataDom.getAttribute(A)}}},remove:function(A){if(this.isLocalStorage){localStorage.removeItem(A)}else{if(this.initDom()){this.dataDom.load(this.hname);this.dataDom.removeAttribute(A);this.dataDom.save(this.hname)}}}};jQuery(document).ready(function(O){var C=localData.get("column")!=null?localData.get("column"):layout;O(".main-nav-right a").eq(C).addClass("selected");O("#postlist").get(0).className="column-"+C+" clx";if(C==1){D()}else{if(C==0){Q()}}O(".main-nav-right a,.likeButton,.viewsButton").colorTip({});O(".main-nav-right a").click(function(E){E.preventDefault();E.returnValue=false;if(!O(this).hasClass("selected")){var B=O(this),S=O(".main-nav-right a").index(B);O(".main-nav-right a.selected").removeClass("selected");B.addClass("selected");localData.set("column",S);O("#postlist").get(0).className="column-"+S+" clx";O(".pin").addClass("transform");if(S==1){D()}else{if(S==0){Q()}else{return false}}}return false});if(O(".film img").length>0&&O("#filmstrip")!=null){var A=O(".film"),N=O("#filmstrip-left ul li"),F=O("#filmstrip-right ul li a"),K=A.length-1,G=new Image(),L,P=function(B){var E=B.attr("original");if(E!=undefined){B.attr("src",E).removeAttr("original")}},I=function(){var E=A.index(O(".film.current")),B=E<K?(E+1):0;F.eq(B).click()};A.hide();N.eq(0).show();G.onload=function(){P(A.eq(0).children("img"));P(A.eq(1).children("img"));O("#filmstrip-footer").animate({bottom:0},600);A.eq(0).addClass("current").fadeIn(600);O("#filmstrip").css({background:"#fff"});F.eq(0).addClass("current");L=setInterval(I,6000)};G.src=A.eq(0).children("img").attr("original");F.click(function(E){E.preventDefault();E.returnValue=false;var B=O(this);if(!B.hasClass("current")){var T=F.index(B),S=T<K?(T+1):0,U=O(".film.current"),W=O("#filmstrip-right ul li a.current"),V=A.eq(T);P(A.eq(T).children("img"));P(A.eq(S).children("img"));W.removeClass("current");U.removeClass("current").fadeOut();V.addClass("current").fadeIn();O(this).addClass("current");N.hide();N.eq(T).show()}return false});O("#filmstrip").hover(function(){clearInterval(L);L=null},function(){clearInterval(L);L=null;L=setInterval(I,6000)})}var M=O(window),H=M.width();J(0);M.resize(function(){if(O(this).width()==H){return false}H=O(this).width();J(M.scrollTop());return false}).scroll(function(){J(M.scrollTop())});function J(B){O(".imageLink img").each(function(){var V=O(this).offset().top,E=M.height()+B;if(V<E){var U=O(this).attr("original");if(U!=undefined){O(this).attr("src",U).removeAttr("original").addClass("lazy").parent().removeClass("loading")}else{O(this).addClass("lazy").parent().removeClass("loading")}}else{var U=O(this).attr("original");if(U!=undefined){O(this).attr("src",U).removeAttr("original")}return false}})}function Q(){O(".image img").each(function(){var B=O(this),V=B.attr("src"),E=B.attr("oriheight"),T=B.attr("src"),U=B.attr("original");if(U!=undefined){U=U.replace("_200.jpg","_150.jpg");B.attr({"original":U,"height":150})}else{T=T.replace("_200.jpg","_150.jpg");B.attr({"src":T,"height":150})}});O(".pin").removeClass("stack").css({top:"",left:"",position:""});O("#postlist").css({height:""})}function D(){O(".image img").each(function(){var B=O(this),V=B.attr("src"),E=B.attr("oriheight"),T=B.attr("src"),U=B.attr("original");if(U!=undefined){U=U.replace("_150.jpg","_200.jpg");B.attr({"original":U,"height":E})}else{T=T.replace("_150.jpg","_200.jpg");B.attr({"src":T,"height":E})}});R()}function R(){var E=[0,0,0],B=O("#postlist");B.children().not(".stack").each(function(){var S=O(this),T=O.inArray(Math.min.apply(Math,E),E);S.css({left:T*S.outerWidth(true),top:E[T],position:"absolute"}).addClass("stack");E[T]+=S.outerHeight(true)});B.css("height",Math.max.apply(Math,E))}});