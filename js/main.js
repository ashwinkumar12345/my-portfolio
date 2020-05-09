(function(e) {
    function n(n) {
        for (var o, a, l = n[0], i = n[1], u = n[2], d = 0, g = []; d < l.length; d++) a = l[d], Object.prototype.hasOwnProperty.call(r, a) && r[a] && g.push(r[a][0]), r[a] = 0;
        for (o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
        c && c(n);
        while (g.length) g.shift()();
        return s.push.apply(s, u || []), t()
    }

    function t() {
        for (var e, n = 0; n < s.length; n++) {
            for (var t = s[n], o = !0, l = 1; l < t.length; l++) {
                var i = t[l];
                0 !== r[i] && (o = !1)
            }
            o && (s.splice(n--, 1), e = a(a.s = t[0]))
        }
        return e
    }
    var o = {},
        r = {
            app: 0
        },
        s = [];

    function a(n) {
        if (o[n]) return o[n].exports;
        var t = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, a), t.l = !0, t.exports
    }
    a.m = e, a.c = o, a.d = function(e, n, t) {
        a.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, a.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, n) {
        if (1 & n && (e = a(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (a.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) a.d(t, o, function(n) {
                return e[n]
            }.bind(null, o));
        return t
    }, a.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return a.d(n, "a", n), n
    }, a.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, a.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        i = l.push.bind(l);
    l.push = n, l = l.slice();
    for (var u = 0; u < l.length; u++) n(l[u]);
    var c = i;
    s.push([0, "chunk-vendors"]), t()
})({
    0: function(e, n, t) {
        e.exports = t("56d7")
    },
    "56d7": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("2b0e"),
            r = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("b-container", [t("b-jumbotron", [t("h1", {
                    staticClass: "display-5"
                }, [e._v("Configuring a Custom Domain with Amazon Cognito")]), t("h4", [e._v("Hands-on Lab")])]), t("router-view")], 1)], 1)
            },
            s = [],
            a = t("19b2"),
            l = t("bf82"),
            i = {
                name: "app",
                components: {
                    components: a["components"]
                },
                data() {
                    return {
                        signedIn: !1,
                        username: null
                    }
                },
                methods: {
                    signIn: () => {
                        l["a"].federatedSignIn()
                    },
                    signOut: () => {
                        l["a"].signOut().then(e => console.log(e)).catch(e => console.log(e))
                    }
                },
                async beforeCreate() {
                    try {
                        const e = await l["a"].currentAuthenticatedUser();
                        console.log(e), this.signedIn = !0
                    } catch (e) {
                        this.signedIn = !1
                    }
                    a["AmplifyEventBus"].$on("authState", e => {
                        console.log("authState = " + e), this.signedIn = "signedIn" === e
                    })
                },
                data() {
                    return {
                        signedIn: !1
                    }
                }
            },
            u = i,
            c = t("2877"),
            d = Object(c["a"])(u, r, s, !1, null, null, null),
            g = d.exports,
            p = t("8c4f"),
            f = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("div", {
                    staticClass: "home"
                }, [t("HelloWorld")], 1)
            },
            h = [],
            m = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("div", [t("b-container", [t("b-row", {
                    attrs: {
                        "align-h": "center"
                    }
                }, [e.signedIn ? e._e() : t("div", [t("b-button", {
                    attrs: {
                        variant: "success"
                    },
                    on: {
                        click: e.signIn
                    }
                }, [e._v("Sign in with Cognito")])], 1), e.signedIn ? t("div", [t("h4", [e._v("Welcome, " + e._s(e.username) + "!")]), t("b-button", {
                    attrs: {
                        variant: "danger"
                    },
                    on: {
                        click: e.signOut
                    }
                }, [e._v("Sign out")])], 1) : e._e()])], 1)], 1)
            },
            b = [],
            v = t("4327"),
            y = {
                name: "HelloWorld",
                props: {},
                data() {
                    return {
                        signedIn: !1,
                        username: String
                    }
                },
                methods: {
                    signIn: () => {
                        console.log("HelloWorld signIn()"), l["a"].federatedSignIn()
                    },
                    signOut: () => {
                        console.log("HelloWorld signOut()"), l["a"].signOut().then(e => {
                            console.log(e)
                        }).catch(e => console.log(e))
                    }
                },
                mounted() {
                    console.log("HelloWorld mounted()"), v["a"].listen("auth", ({
                        payload: {
                            event: e,
                            data: n
                        }
                    }) => {
                        switch (console.log("Auth event: " + e), e) {
                            case "signIn":
                                console.log("signIn data: " + JSON.stringify(n)), this.signedIn = !0, this.username = n.username;
                                break;
                            case "signOut":
                                this.signedIn = !1, this.username = null;
                                break
                        }
                    }), l["a"].currentAuthenticatedUser().then(e => {
                        const {
                            attributes: n
                        } = e;
                        console.log(n), console.log(n.email), console.log("Username: " + e.username), console.log("Refreshing access and id tokens"), l["a"].currentSession().then(e => console.log(e)).catch(e => console.log("Error refreshing tokens: " + e)), this.signedIn = !0, this.username = e.username
                    }).catch(e => console.log("Auth.currentAuthenticatedUser(): " + e))
                }
            },
            w = y,
            I = Object(c["a"])(w, m, b, !1, null, "d558f712", null),
            O = I.exports,
            _ = {
                name: "Home",
                components: {
                    HelloWorld: O
                }
            },
            S = _,
            j = Object(c["a"])(S, f, h, !1, null, null, null),
            P = j.exports;
        o["default"].use(p["a"]);
        const k = [{
                path: "/",
                name: "Home",
                component: P
            }],
            x = new p["a"]({
                mode: "history",
                base: "/",
                routes: k
            });
        var A = x,
            H = t("00bd"),
            C = t("5f5b");
        t("f9e3"), t("2dd8");
        o["default"].use(a["AmplifyPlugin"], H), o["default"].use(C["a"]), o["default"].config.productionTip = !1, H["default"].configure({
            Auth: {
                region: "us-east-1",
                userPoolId: "us-east-1_1txPFVGIf",
                userPoolWebClientId: "7l239piv4q79aa88mvmcg0usf0",
                oauth: {
                    domain: "",
                    scope: ["email", "profile", "openid"],
                    redirectSignIn: "https://www.aitopy.com",
                    redirectSignOut: "https://www.aitopy.com",
                    responseType: "code"
                }
            }
        }), new o["default"]({
            router: A,
            render: e => e(g)
        }).$mount("#app")
    }
});
