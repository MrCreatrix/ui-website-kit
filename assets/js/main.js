// js Document

// Created on   : 08-02-2023
// Theme Name   : Ui Website Kit
// Version      : 1.0.0
// Developed by : (uicreatedesign@gmail.com)

(function ($) {
    "use strict";

    // mobile nav script
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
          $(".navbar-nav > li  a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
          // $(this).parent("li").addClass("active");
        })

// ------------------------ Navigation Scroll
        $(window).on('scroll', function (){   
            var sticky = $('.sticky-menu'),
            scroll = $(window).scrollTop();
            if (scroll >= 100) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
  
          });

          // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });

});