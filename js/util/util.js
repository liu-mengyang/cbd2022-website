/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
/**
 * Created by timzhang on 15/10/9.
 */

var Util = {
    dom:'http://127.0.0.1:8080',//http://mgr.ttkuaifu.com/kuaifu
    huixiuUrl:'http://127.0.0.1:8080',//http://mgr.ttkuaifu.com/kuaifu
    uploadPath:'/file/sid/default',
    fileServer:'http://127.0.0.1:8080',//http://wx.ttkuaifu.com
    request: function (path, type, data, successCallback, errorCallback, async) {
        $.ajax({
            url: Util.dom+path,
            type: type,
            data: data,
            contentType: "application/json",
            dataType: "json",
            async: async,
            success: function (data) {
                if(data.jsonp && data.jsonp.code==1113){
                    window.top.location.href='login.html';
                }else if (successCallback !== null) {
                    successCallback(data);
                }
            },
            error: function (xhr, type, exception) {
                errorCallback(xhr, type, exception);
            }
        });
    },

    requestFormData: function (path, type, data, successCallback, errorCallback, async) {
        $.ajax({
            url: Util.dom+path,
            type: type,
            data: data,
            dataType: "json",
            async: async,
            success: function (data) {
                if(data.jsonp && data.jsonp.code==1113){
                    window.top.location.href='login.html';
                }else if (successCallback !== null) {
                    successCallback(data);
                }
            },
            error: function (xhr, type, exception) {
                errorCallback(xhr, type, exception);
            }
        });
    },
    getQueryString:function (e) {
            var n;
            var r = String(window.document.location.href);
            var t = new RegExp("(^|)" + e + "=([^&]*)(&|$)", "gi").exec(r);
            return (n = t) ? n[2] : ""
    },
    onQueryError:function(data){
        if(data.jsonp && data.jsonp.code==1113){
            window.top.location.href='login.html';
        }
    }
};