const jo={};!function JetThemeScript(){var K=window,aF=document,a=setTimeout,bV=clearTimeout,bX=Date,bN=Math,j=parseInt,bB=encodeURIComponent,Z=RegExp,bK=XMLHttpRequest,bk=localStorage,ap=JSON,aP=Image,av="forEach",aZ="innerHTML",bz="tagName",r="getElementById",bc="querySelector",cj="querySelectorAll",b5="childNodes",bw="createElement",w="className",C="replace",bJ="indexOf",f="lastIndexOf",aQ="EventListener",bY="add",aC="remove",b6="id",ba="key",ab="parse",cl="length",bq="slice",z="reset",ak="push",W="Date",aU="Month",aR="FullYear",Y="onreadystatechange",b3="readyState",aO="Attribute",a4="set",bi="get",ao="post",E="checked",al="focus",bP="height",bZ="offsetWidth",b8="offsetHeight",aq="toFixed",aw="pageYOffset",cm="appendChild",bh="firstChild",b7="insert",bA="Before",at="value",az="match",T="href",a3="src",R="onload",ag="onerror",J="target",bH="closest",a0="location",aV="split",aT="trim",bL="open",a1="send",a5="random",ct="status",a7="toString",aK="parentElement",bW="preventDefault",aW="substr",ce="setRequestHeader",au="responseText",b9="response",aI="title",ae="test",aJ="ceil",af="floor",bb="round",ac="min",ch="map",S="contains",bD="textContent",aH="Item",bs="nextSibling",cr="load",s="false",bI="scroll",F="click",aL="submit",by="mousemove",U="touchstart",aN="change",cs="undefined",a8="function",bd="Content-Type",N="text/html",bU="application/x-www-form-urlencoded",c="pagination",cf="loadCustomPosts",e="custom_posts",M="config",cq="adsbygoogle",bo="analytics",co=typeof isPreview!==cs?isPreview:false,ax=typeof siteUrl!==cs?siteUrl:"",aD=typeof currentUrl!==cs?currentUrl:"",k=typeof blogId!==cs?blogId:"",ca=typeof blogTitle!==cs?blogTitle:"",a9=typeof titleSeparator!==cs?titleSeparator:" - ",bS=typeof pageTitle!==cs?pageTitle:"Page",q=typeof analyticId!==cs?analyticId:false,p=typeof caPubAdsense!==cs?caPubAdsense[C](/^\D+/g,""):false,aG=p?"ca-pub-"+p:false,bx=typeof innerAdsDelimiter!==cs?innerAdsDelimiter:"p,br,div",bv=typeof ignoreAdsDelimiter!==cs?ignoreAdsDelimiter:"pre,ul,ol,table,blockquote",a6=typeof autoTOC!==cs?autoTOC:false,ah=typeof toc_temp===a8?toc_temp:false,g=typeof positionTOC!==cs?positionTOC:false,aX=typeof jtCallback===a8?jtCallback:false,b1="https://",V="www.blogger.com/",an="-rw";function I(i,h){return -1<(" "+i[w]+" ")[bJ](" "+h+" ")}function H(n,i){var h;I(n,i)||(""!=(h=n[w])&&(i=" "+i),n[w]=h+i)}function bg(i,h){i[w]=i[w][C](new Z("(?:^|\\s)"+h+"(?!\\S)"),"")[aT]()}function be(i,h){(I(i,h)?bg:H)(i,h)}function aB(i,h){H(i,"d-block"),a(function(){H(i,h)},100)}function bT(n,i,h){bg(n,i),a(function(){bg(n,"d-block")},h||300)}function y(n,i){for(var h=0;h<n[cl];h++){if(n[h]===i){return !0}}return !1}function ay(){return(bN[a5]()+1)[a7](36)[aW](7)}function cb(i,h){return !!(i=new Z("[?&]"+i+"=([^&#=]*)"))[ae](h)&&h[az](i)[1]}function P(cv,cz,cx,cy){cv=j(cv),cz=j(cz),cx=j(cx),cy=j(cy);var cu,h,i=bN[aJ](cv/cx);cz<1?cz=1:i<cz&&(cz=i),h=i<=cy?(cu=1,i):(cv=bN[af](cy/2),cx=bN[aJ](cy/2)-1,cz<=cv?(cu=1,cy):i<=cz+cx?(cu=i-cy+1,i):(cu=cz-cv,cz+cx));for(var x=(cz-1)*cx,cy=bN[ac](x+cx-1,cv-1),cA=[],cw=0;cw<h+1-cu;cw++){cA[ak](cw)}return cA=cA[ch](function(n){return cu+n}),{totalItems:cv,currentPage:cz,pageSize:cx,totalPages:i,startPage:cu,endPage:h,startIndex:x,endIndex:cy,pages:cA}}function cg(x){for(var o=x.slice(),i=o[cl]-1;0<i;i--){var n=bN[af](bN[a5]()*(i+1)),h=o[i];o[i]=o[n],o[n]=h}return o}function aj(h){try{return ap[ab](h)}catch(h){return !1}}!function(i){var h=new aP;h[R]=h[ag]=function(){i(2==h[bP])},h[a3]="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}(function(h){h||(an="")});var ci=aF[r]("header"),bG=aF[r]("search-toggle"),Q=aF[r]("search-header"),d=aF[r]("navbar-toggle"),aS=aF[r]("navbar"),am=aF[r]("back-to-top"),cn=aF[r]("dark-toggler"),aM=aF[bc]("html"),bF=aF[r]("comment-button"),X=aF[r]("threaded-comment-form"),cd=aF[r]("comment-editor"),cc=aF[r]("comment-editor-src"),L=aF[r]("comment-script"),bf=aF[cj](".comment-reply"),G=aF[cj](".entry-text noscript"),bM=aF[cj](".contact-form-blogger"),ar=aF[r]("ads-post"),b4=aF[r]("post-body"),aA=aF[bc](".related-posts"),aE=aF[bc](".related-inline"),aa=cb("page",aD);!function(h){K[bY+aQ](bI,function(){var n,i=this[aw];i<h&&I(ci,"header-hidden")?n=a(function(){bg(ci,"header-hidden")},500):h<i&&I(ci,"header-animate")&&(bV(n),H(ci,"header-hidden")),h=i},!1)}(0);var D=function(cw){var x,h,i,cv,cx,cy,cu;"IMG"==cw[bz]&&((cu=cw[bi+aO]("data-src"))[az](/(bp.blogspot|googleusercontent)/)?(x=cw[bZ][aq](0),h=cw[aK][bZ][aq](0),i=cw[aK][aK][bZ][aq](0),cv=cw[b8][aq](0),cx=cu[aV]("/"),cy="",cy=I(cw[aK],"ratio")?"w"+x+an+"-h"+cv+"-c":"s"+(cy=x<10?h<10?i:h:x)+an,cu=0<cu[bJ]("blogger.googleusercontent")?(l=cu[f]("=")+1,l?cu[bq](0,l)+cy:cu+"="+cy):cu[C](cx[cx[cl]-2],cy),cw[a4+aO]("data-src",cu)):cu[az](/(img.youtube|i.ytimg)/)&&(cu=cu[aW](0,cu[f]("/"))+"/mqdefault.jpg",cw[a4+aO]("data-src",cu)))};if(0<G[cl]){for(var bt=0;bt<G[cl];++bt){var bR=G[bt],b0=bR[aZ],bE='src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"',b2=aF[bw]("textarea");b2[aZ]=b0[C](/src="(.*?)"/g,bE);var aY=aF[bw]("div");aY[aZ]=b2.value,0==bt&&H(aY,"feature-image mb-3 rounded"),bR[aK][b7+bA](aY,bR)}Defer.dom('[lazyload="true"]',1,"loaded",D,null,{rootMargin:"200%"})}if(null!==b4){if(null!==aA&&null!==aE&&(aE[aZ]=aA[aZ],aE[a4+aO]("data-no-item",aA[bi+aO]("data-no-item"))),null!==ar){for(var bO=b4[cj](bx+","+bv),bC=ar[b5],ai=bC[cl],A=[],bt=0;bt<bO[cl];bt++){var ck=bO[bt][bH](bv);ck&&bO[bt]!=ck||A[ak](bO[bt])}for(var bl,bj,bt=0;bt<ai;bt++){bt==ai-1?b4[cm](bC[0]):(bl=bt==ai-1?A[cl]-1:bN[bb](A[cl]/ai)*bt,(bj=0==bt?A[0]:A[bl][bs])&&bj[aK][b7+bA](bC[0],bj))}}if(a6&&a6!=s&&ah&&null!==b4[bh]){for(var B=b4[cj]("h2,h3,h4,h5,h6"),bn=aF[bw]("div"),m=b4[bc](g),bp=[],bt=0;bt<B[cl];bt++){var bu=B[bt],bm=bu[bD][C](/[^\w!?]/g,"_")[C](/__/g,"_"),br=j(bu[bz][C]("H",""));bu[b6]=bm,bp[ak]({level:br,title:bu[bD],id:bm})}null===m&&(m=b4[bh]),0<bp[cl]&&(bn[aZ]=ah(bp)[aT](),m&&m[aK][b7+bA](bn,m))}}var cp=function(x){var cu,h,cB,cy,cx,cA,cw,cz;function cv(cD,cC,n){var o=aF[bw]("li"),i=aF[bw]("span");return H(i,"btn btn-sm rounded-pill jt-icon-center"),i[aZ]=n||cD,i[a4+aO]("data-page",cD),cD==cC?H(i,"jt-btn-primary"):(H(i,"jt-btn-light hover-btn-primary"),i[bY+aQ](F,function(cF){var cE;cF[bW](),1==(cz=i[bi+aO]("data-page"))?(cE=h?ax+"search"+cy+"?max-results="+cu+"&page="+cz:ax,K[a0][T]=cE):(cE=(cz-1)*cu,Defer.js(ax+"feeds/posts/summary/"+cB+"?start-index="+cE+"&alt=json&callback=jo."+c+"_date&max-results=1"))})),o[cm](i),o}x[bi+aO]("data-pagination")!=s?(cu=x[bi+aO]("data-posts"),h=x[bi+aO]("data-label"),cB=(h=bB(h))?"-/"+h+"/":"",cy=h?"/label/"+h:"",Defer.js(ax+"feeds/posts/summary/"+cB+"?alt=json&callback=jo."+c+"_"+ba+"&max-results=1"),cx=cb("max-results",aD),cA=cb("page",aD),cw=cx||cu,cz=cA||1,jo[c+"_"+ba]=function(cE){var cC=cE.feed,n=j(cC.openSearch$totalResults.$t);if(cu<n){var cE=P(n,cz,cw,5),o=aF[bw]("ul"),cC=cE.totalPages;1!=cE.currentPage&&(n=cv(cE.currentPage-1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'),o[cm](n)),y(cE.pages,1)||(cD=cv(1,cE.currentPage,"1 . ."),o[cm](cD));for(var i=0;i<cE.pages[cl];i++){var cD=cv(cE.pages[i],cE.currentPage);o[cm](cD)}y(cE.pages,cC)||(cD=cv(cC,cE.currentPage,". . "+cC),o[cm](cD)),cE.currentPage!=cC&&(cC=cv(cE.currentPage+1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'),o[cm](cC)),x[aZ]="",H(o,"pagination mb-0"),x[cm](o),bg(x,"visually-hidden")}},jo[c+"_date"]=function(i){i=i.feed.entry[0],i=(i=i.published.$t[aW](0,19)+i.published.$t[aW](23,29))[C]("+","%2B"),i=ax+"search"+cy+"?updated-max="+i+"&max-results="+cw+"&page="+cz;K[a0][T]=i}):bg(x,"visually-hidden")};function bQ(n,i){var h=new bK;h[bL](bi,n),h[ce](bd,N),h[a1](null),h[bY+aQ](cr,function(){var o=h[au][az](/<title>(.*?)<\/title>/);i[aZ]=o[1][C](a9+ca,"")})}jo[cf]=function(cw){var n=ay(),cv=cw[bi+aO]("data-label"),x=cw[bi+aO]("data-title"),o=cw[bi+aO]("data-items"),cB=cw[bi+aO]("data-shuffle"),i=cw[bi+aO]("data-no-item"),cu=cw[bi+aO]("data-func"),cA=cw[bi+aO]("data-callback"),cC=i?j(o)+1:o,cx=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],cy=cv||cw[aZ],cz=cy[aV](","),cv="",cv=1<cz[cl]?cy?"-/"+bB(cz[bN[af](bN[a5]()*cz[cl])])+"/?":"?":cy&&cy!=s?"-/"+bB(cy[aT]())+"/?":"?";Defer.js(ax+"feeds/posts/summary/"+cv+"alt=json&callback=jo."+e+"_"+ba+"_"+n+"&max-results="+cC),jo[e+"_"+ba+"_"+n]=function(cH){var cL=j(cH.feed.openSearch$totalResults.$t),cJ=cH.feed.category;if(0<cL){for(var cK={title:x,posts:[],categories:cJ},cF=cH.feed.entry,h=0,cD=0;cD<cF[cl];++cD){var cE,cM,cI=cF[cD],cG=cI.link[cI.link[cl]-1][T];if(h==o){break}cG!=i&&(h++,(cE={}).grup_id=n,cE.url=cG,cE.title=cI[aI].$t,cE.summary=cI.summary.$t[aT](),cE.img=cI.media$thumbnail&&cI.media$thumbnail.url,cE.author=cI.author[0].name.$t,cE.comment=cI.thr$total&&cI.thr$total.$t,cE.label=cI.category,cM=cI.published.$t,cI=(cG=new bX(cM))[bi+W](),cM=cx[cG[bi+aU]()],cG=cG[bi+aR](),cE.date=cI+" "+cM+", "+cG,cK.posts[ak](cE))}cH=K[cu];typeof cH===a8&&0<cK.posts[cl]&&(cB&&(cK.posts=cg(cK.posts)[bq](0,cB)),cw[aZ]=cH(cK)[aT](),bg(cw,"visually-hidden"),Defer.dom(".lazy-"+n,1,"loaded",D),!cA||typeof(cH=K[cA])===a8&&cH())}}};var u=function(cu){for(var o=cu[cj]("a"),i=0;i<o[cl];++i){var n=o[i],h=n[T],x=aF[bw]("span");H(x,"d-block fw-bold pt-2 jt-text-primary"),n[cm](x),bQ(h,x)}};function ad(){(bG&&bG[E]||d&&d[E]?bg:H)(ci,"header-animate")}function v(n,h){function o(t){n[S](t[J])||(h(),i())}var i=function(){aF[aC+aQ](F,o)};aF[bY+aQ](F,o)}function O(h){h!=cc[T]&&(H(X,"loader"),cc[T]=h,cd[a3]=h),I(X,"d-none")&&(bg(X,"d-none"),h=L[at][az](/<script.*?src='(.*?)'/)[1],Defer.js(h,"comment-js",500,function(){BLOG_CMT_createIframe(b1+V+"rpc_relay.html")}))}bG&&bG[bY+aQ](aN,function(){ad(),this[E]&&a(function(){aF[r]("search-input")[al]()},100),v(Q,function(){bG[E]=!1,ad()})}),d&&d[bY+aQ](aN,function(){ad(),this[E]?(aB(aS,"show"),v(aS,function(){d[E]=!1,ad(),bT(aS,"show")})):bT(aS,"show")}),cn&&cn[bY+aQ](F,function(h){h[bW](),be(aM,"dark-mode"),null!==bk&&bk[a4+aH]("theme",I(aM,"dark-mode")?"dark":"light")}),K[bY+aQ](bI,function(){(1<=this[aw]&&null!==ci?H:bg)(ci,"shadow-sm"),(1000<=this[aw]&&null!==am?bg:H)(am,"d-none")},!1),cd&&cd[bY+aQ](cr,function(h){bg(X,"loader")}),bF&&bF[bY+aQ](F,function(h){h[bW](),O(this[T]),"add-comment"!=X[aK][b6]&&aF[r]("add-comment")[cm](X)});for(bt=0;bt<bf[cl];++bt){bf[bt][bY+aQ](F,function(h){h[bW]();h=this[bi+aO]("data-comment-id");O(this[T]),X[aK][b6]!="c"+h&&aF[r]("c"+h)[cm](X)})}for(bt=0;bt<bM[cl];++bt){var a2=bM[bt];a2[bY+aQ](aL,function(o){o[bW]();var n=o[J];H(n,"loading");var h=new FormData(n),i="blogID="+k;h[av](function(cu,x){i+="&"+bB(x)+"="+bB(cu)});o=b1+V+"contact-form.do",h=new bK;h[bL](ao,o),h[ce](bd,bU),h[a1](i),h[Y]=function(){var t;bg(n,"loading"),4===this[b3]&&200===this[ct]&&""!=this[b9]&&((t=aj(this[au][aT]()))&&"true"==t.details.emailSentStatus?(n[z](),bg(n,"send-error"),H(n,"send-success")):(bg(n,"send-success"),H(n,"send-error")))}})}function b(){aF[aC+aQ](by,b),aF[aC+aQ](U,b),aF[aC+aQ](bI,b),co||(aG&&((adsbygoogle=K[cq]||[])[ak]({google_ad_client:aG,enable_page_level_ads:!0,overlays:{bottom:!0}}),Defer.js(b1+"pagead2.googlesyndication.com/pagead/js/"+cq+".js?client="+aG,cq,100)),q&&q!=s&&Defer.js(b1+"www.googletagmanager.com/gtag/js?id="+q,bo,100,function(){function h(){dataLayer[ak](arguments)}h("js",new Date),h(M,q)}),aX&&aX()),k&&Defer.css(b1+V+"dyn-css/authorization.css?targetBlogID="+k)}aa&&(aF[aI]=aF[aI][C](a9,a9+bS+" "+aa+a9)),Defer.dom(".lazyload",1,"loaded",D),Defer.dom("#post-pager",1,null,u,null,{rootMargin:"200%"}),Defer.dom("#pagination",1,null,cp,null,{rootMargin:"200%"}),Defer.dom(".custom-posts",1,null,jo[cf],null,{rootMargin:"200%"}),aF[bY+aQ](by,b),aF[bY+aQ](U,b),aF[bY+aQ](bI,b)}();
