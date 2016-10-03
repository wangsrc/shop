/**
 * Created by Administrator on 2016/9/29.
 */
$(function(){
    $("#car").hover(function(){
        $("#info_display").slideToggle(300);
    });
    $("#xiaomi").hover(function(){
        $(".active").slideToggle(300);
        $(".active #hongmi_div").hide();
        $(".active #xiaomi_xiaomi").show();
    });
    $("#hongmi").hover(function () {
        $(".active").slideToggle(300);
        $(".active #hongmi_div").show();
        $(".active #xiaomi_xiaomi").hide();
    })
    $("#ls").click(function(){
        $('.head_hot_goods_wrap .head_hot_goods_content ul').animate({left:'-1226px'},300);
    })
    $("#rs").click(function(){
        $('.head_hot_goods_wrap .head_hot_goods_content ul').animate({left:'0'},300);
    })
});
$(function(){
    var i=0;
    var big_banner_pic = $("#big_banner_pic");
    var allimg=$("#big_banner_pic li").length;
    function img_change(){
        var img_i=i*-1226+"px";
        big_banner_pic.animate({opacity:".2"},100,function(){
            big_banner_pic.css("left",img_i );
            big_banner_pic.animate({
                opacity: "1"
            }, 100);
        })
    }
    function automatic(){
        i+=1;
        if(i>=allimg){
            i=0;
        }
        img_change();
    }
    change_self_time = setInterval(automatic, 3000);
    //轮播上一张下一张图标控制
    $("#big_banner_change_wrap").hover(function(){
        clearInterval(change_self_time);
        $("#big_banner_change_wrap").children().show();
    },function(){
        change_self_time = setInterval(automatic, 3000);
        $("#big_banner_change_wrap").children().hide();
    })
    $("#big_banner_change_prev").click(function(){
        i += 1;
        if (i >= allimg) {
            i = 0;
        }
        img_change();
    })
    $("#big_banner_change_next").click(function(){
        i -= 1;
        if (i <= 0) {
            i = allimg - 1;
        }
        img_change();
    })
});
