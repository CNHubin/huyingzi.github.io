/**
 * Created by hujiaohui on 2018/8/18.
 */

    //入口函数
window.onload = function(){
    //1.老三步。
    var first = document.getElementById("logo");
    var second = document.getElementById("menubar");
    var third = document.getElementById("site_content");

    // unfold();//加载文字展开效果
    //2.注册事件
    window.onscroll = function(){

        if(scroll().top>=first.scrollHeight){
            second.className = "fixed";
            //解决一个小bag
            third.style.marginTop =second.scrollHeight+"px";
        }else{
            second.className  = "";
            third.style.marginTop =0;
        }
    }
};
//        获取页面被卷去的头部和左侧部分。
function scroll() {
    return {
        //pageYOffset IE678不支持其它浏览器都支持; ||有dtd约束 支持IE678
        top: window.pageYOffset || document.documentElement.scrollTop,
        let: window.pageXOffset || document.documentElement.scrollLeft
    }
}


  // 对文字执行展开
function unfold(){
        var len = 110;      //默认显示字数
        var ctn = document.getElementById("unfold");  //获取div对象
        var content = ctn.innerHTML;                   //获取div里的内容

        //alert(content);
        var span = document.createElement("span");     //创建<span>元素
        var a = document.createElement("a");           //创建<a>元素
        span.innerHTML = content.substring(0,len);     //span里的内容为content的前len个字符

        a.innerHTML = content.length>len?"... 展开":"";  ////判断显示的字数是否大于默认显示的字数    来设置a的显示        
        a.href = "javascript:void(0)";//让a链接点击不跳转
        a.style.color = "red";

        a.onclick = function(){
            if(a.innerHTML.indexOf("展开")>0){      //如果a中含有"展开"则显示"收起"
              a.innerHTML = "<<&nbsp;收起";
              span.innerHTML = content;
            }else{
                a.innerHTML = "... 展开";
                span.innerHTML = content.substring(0,len);
            }
        };
        // 设置div内容为空，span元素 a元素加入到div中
        ctn.innerHTML = "";
        ctn.appendChild(span);
        ctn.appendChild(a);
}
