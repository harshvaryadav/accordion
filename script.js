function fun()
{
      var acc=$(".accordion");
      var n=acc.length;
      for(var i=0;i<n;i++)
      {
          acc[i].addEventListener("click",function(){
                 $(this).toggleClass("show");
                 var ele=$(this).next();
                 var font=$(this).find("i");
                 ele.slideToggle(800);
                 font.toggleClass("fa fa-plus");
                 font.toggleClass("fa fa-minus");
          });
      } 
}