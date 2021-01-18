! function() {
  function f() {
    var a = document.createElement("div");
    a.id = "dewablock";
    a.innerHTML = '
    <div class="inner"> 
    <div class="header"> 
    <h2>Matikan AdBlockmu dong!</h2> 
    </div> 
    <div class="isi"> 
    <p>Dukung blog ini untuk terus memberi manfaat secara gratis, tapi mohon matikan adblock kalian atau masukkan blog ini ke dalam whitelist.<br/><a href="https://www.rsetiawan.com/p/whitelisting.html" target="_blank">Lihat caranya disini</a>.</p> 
   </div> </div>';
    document.body.append(a);
    document.body.style.overflow = "hidden";
    var b = a.querySelectorAll("button");
    a.querySelector(".close");
    var d = a.querySelectorAll(".fixblock > div");
    for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
      a.preventDefault();
      a = this.getAttribute("class").split(" ")[0];
      for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
      b[a - 1].classList.add("active");
      d[a - 1].classList.add("active")
    })
  }
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.async = !0;
  b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  b.onerror = function() {
    f();
    window.adblock = !0
  };
  var e = document.getElementsByTagName("script")[0];
  e.parentNode.insertBefore(b, e)
}();
