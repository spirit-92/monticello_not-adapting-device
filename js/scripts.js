"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
!function (o) {
    var n = {};

    function r(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {i: e, l: !1, exports: {}};
        return o[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }

    r.m = o, r.c = n, r.d = function (e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == (void 0 === t ? "undefined" : _typeof(t)) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) r.d(o, n, function (e) {
            return t[e]
        }.bind(null, n));
        return o
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 1)
}([function (e, t, o) {
    o.r(t), t.default = function () {
        $(".js-slick").slick({
            dots: !0,
            arrows: !1,
            slidesToShow: 1,
            slidesToScroll: 1
        });

    }
}, function (e, t, o) {
    o.r(t);
    var n = o(0);
    Object(n.default)(), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (e) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length && (e.preventDefault(), $("html, body").animate({scrollTop: t.offset().top}, 1e3, function () {
                var e = $(t);
                if (e.focus(), e.is(":focus")) return !1;
                e.attr("tabindex", "-1"), e.focus()
            }))
        }
    })
}]);
//# sourceMappingURL=scripts.js.map
