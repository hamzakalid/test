var baseURL = 'https://labibbot.azurewebsites.net';
(this.webpackJsonpfev = this.webpackJsonpfev || []).push([
  [0],
  {
    10: function (e, t, n) { },
    12: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        c = n.n(a),
        i = n(4),
        s = n.n(i),
        o = (n(9), n(3)),
        r = (n(10), "https://labibbot.azurewebsites.net/Content/images/bot_logo.png"),
        u = n(1);
      var d = function () {
        var e = Object(a.useState)(!0),
          t = Object(o.a)(e, 2),
          n = t[0],
          c = t[1],
          i = Object(a.useState)(0),
          s = Object(o.a)(i, 2),
          d = s[0],
          l = s[1];
        return (
          Object(a.useEffect)(function () {
            window.addEventListener(
              "message",
              function (e) {
                "miniValue" === e.data.message &&
                  void 0 !== e.data.value &&
                  c(e.data.value);
              },
              !1
            );
          }, []),
          Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)("img", {
                src: n ? r : null,
                className: "botlogo",
                onClick: function () {
                  return c(!n), void l(d + 1);
                },
                alt: "",
              }),
              d > 0
                ? Object(u.jsx)("iframe", {
                  src: baseURL,
                  className: n ? "hide" : "size",
                  frameborder: "0",
                  title: "chatbot",
                })
                : null,
            ],
          })
        );
      },
        l = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 13))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  c = t.getFCP,
                  i = t.getLCP,
                  s = t.getTTFB;
                n(e), a(e), c(e), i(e), s(e);
              });
        };
      s.a.render(
        Object(u.jsx)(c.a.StrictMode, { children: Object(u.jsx)(d, {}) }),
        document.getElementById("r")
      ),
        l();
    },
    9: function (e, t, n) { },
  },
  [[12, 1, 2]],
]);
//# sourceMappingURL=main.a229a823.chunk.js.map    <script>

!(function (e) {
  function r(r) {
    for (
      var n, a, i = r[0], c = r[1], f = r[2], s = 0, p = [];
      s < i.length;
      s++
    )
      (a = i[s]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]),
        (o[a] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (l && l(r); p.length;) p.shift()();
    return u.push.apply(u, f || []), t();
  }
  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var c = t[i];
        0 !== o[c] && (n = !1);
      }
      n && (u.splice(r--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var n = {},
    o = { 1: 0 },
    u = [];
  function a(r) {
    if (n[r]) return n[r].exports;
    var t = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
  }
  (a.e = function (e) {
    var r = [],
      t = o[e];
    if (0 !== t)
      if (t) r.push(t[2]);
      else {
        var n = new Promise(function (r, n) {
          t = o[e] = [r, n];
        });
        r.push((t[2] = n));
        var u,
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          a.nc && i.setAttribute("nonce", a.nc),
          (i.src = (function (e) {
            return (
              a.p +
              "page/" +
              ({}[e] || e) +
              "." +
              { 3: "0ba8f27b" }[e] +
              ".chunk.js"
            );
          })(e));
        var c = new Error();
        u = function (r) {
          (i.onerror = i.onload = null), clearTimeout(f);
          var t = o[e];
          if (0 !== t) {
            if (t) {
              var n = r && ("load" === r.type ? "missing" : r.type),
                u = r && r.target && r.target.src;
              (c.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + u + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = n),
                (c.request = u),
                t[1](c);
            }
            o[e] = void 0;
          }
        };
        var f = setTimeout(function () {
          u({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = u), document.head.appendChild(i);
      }
    return Promise.all(r);
  }),
    (a.m = e),
    (a.c = n),
    (a.d = function (e, r, t) {
      a.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, r) {
      if ((1 & r && (e = a(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (a.r(t),
          Object.defineProperty(t, "default", { enumerable: !0, value: e }),
          2 & r && "string" != typeof e)
      )
        for (var n in e)
          a.d(
            t,
            n,
            function (r) {
              return e[r];
            }.bind(null, n)
          );
      return t;
    }),
    (a.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
            return e.default;
          }
          : function () {
            return e;
          };
      return a.d(r, "a", r), r;
    }),
    (a.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (a.p = "/"),
    (a.oe = function (e) {
      throw (console.error(e), e);
    });
  var i = (this.webpackJsonpfev = this.webpackJsonpfev || []),
    c = i.push.bind(i);
  (i.push = r), (i = i.slice());
  for (var f = 0; f < i.length; f++) r(i[f]);
  var l = c;
  t();
})([]);
