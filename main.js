/***!  /media/system/js/core.js?02b620a3a7b245efea0c8fbb845ca65b  !***/
try {
    Joomla = window.Joomla || {}, Joomla.editors = Joomla.editors || {}, Joomla.editors.instances = Joomla.editors.instances || {},
        function(e, t) {
            "use strict";
            e.submitform = function(e, o, n) {
                o || (o = t.getElementById("adminForm")), e && (o.task.value = e), o.noValidate = !n, n ? o.hasAttribute("novalidate") && o.removeAttribute("novalidate") : o.setAttribute("novalidate", "");
                var r = t.createElement("input");
                r.style.display = "none", r.type = "submit", o.appendChild(r).click(), o.removeChild(r)
            }, e.submitbutton = function(t) {
                e.submitform(t)
            }, e.JText = {
                strings: {},
                _: function(t, o) {
                    var n = e.getOptions("joomla.jtext");
                    return n && (this.load(n), e.loadOptions({
                        "joomla.jtext": null
                    })), o = void 0 === o ? "" : o, t = t.toUpperCase(), void 0 !== this.strings[t] ? this.strings[t] : o
                },
                load: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this.strings[t.toUpperCase()] = e[t]);
                    return this
                }
            }, e.optionsStorage = e.optionsStorage || null, e.getOptions = function(t, o) {
                return e.optionsStorage || e.loadOptions(), void 0 !== e.optionsStorage[t] ? e.optionsStorage[t] : o
            }, e.loadOptions = function(o) {
                if (!o) {
                    for (var n, r, i, a = t.querySelectorAll(".joomla-script-options.new"), s = 0, l = 0, d = a.length; d > l; l++) r = a[l], n = r.text || r.textContent, i = JSON.parse(n), i && (e.loadOptions(i), s++), r.className = r.className.replace(" new", " loaded");
                    if (s) return
                }
                if (e.optionsStorage) {
                    if (o)
                        for (var c in o) o.hasOwnProperty(c) && (e.optionsStorage[c] = o[c])
                } else e.optionsStorage = o || {}
            }, e.replaceTokens = function(e) {
                if (/^[0-9A-F]{32}$/i.test(e)) {
                    var o, n, r, i = t.getElementsByTagName("input");
                    for (o = 0, r = i.length; r > o; o++) n = i[o], "hidden" == n.type && "1" == n.value && 32 == n.name.length && (n.name = e)
                }
            }, e.isEmail = function(e) {
                var t = /^[\w.!#$%&â€Ă„Ă´*+\/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]{2,})+$/i;
                return t.test(e)
            }, e.checkAll = function(e, t) {
                if (!e.form) return !1;
                t = t ? t : "cb";
                var o, n, r, i = 0;
                for (o = 0, r = e.form.elements.length; r > o; o++) n = e.form.elements[o], n.type == e.type && 0 === n.id.indexOf(t) && (n.checked = e.checked, i += n.checked ? 1 : 0);
                return e.form.boxchecked && (e.form.boxchecked.value = i), !0
            }, e.renderMessages = function(o) {
                e.removeMessages();
                var n, r, i, a, s, l, d, c, u = t.getElementById("system-message-container");
                for (n in o)
                    if (o.hasOwnProperty(n)) {
                        r = o[n], i = t.createElement("div"), c = "notice" == n ? "alert-info" : "alert-" + n, c = "message" == n ? "alert-success" : c, i.className = "alert " + c;
                        var f = t.createElement("button");
                        for (f.setAttribute("type", "button"), f.setAttribute("data-dismiss", "alert"), f.className = "close", f.innerHTML = "Ă—", i.appendChild(f), a = e.JText._(n), "undefined" != typeof a && (s = t.createElement("h4"), s.className = "alert-heading", s.innerHTML = e.JText._(n), i.appendChild(s)), l = r.length - 1; l >= 0; l--) d = t.createElement("div"), d.innerHTML = r[l], i.appendChild(d);
                        u.appendChild(i)
                    }
            }, e.removeMessages = function() {
                for (var e = t.getElementById("system-message-container"); e.firstChild;) e.removeChild(e.firstChild);
                e.style.display = "none", e.offsetHeight, e.style.display = ""
            }, e.ajaxErrorsMessages = function(t, o, n) {
                var r = {};
                if ("parsererror" === o) {
                    for (var i = t.responseText.trim(), a = [], s = i.length - 1; s >= 0; s--) a.unshift(["&#", i[s].charCodeAt(), ";"].join(""));
                    i = a.join(""), r.error = [e.JText._("JLIB_JS_AJAX_ERROR_PARSE").replace("%s", i)]
                } else "nocontent" === o ? r.error = [e.JText._("JLIB_JS_AJAX_ERROR_NO_CONTENT")] : "timeout" === o ? r.error = [e.JText._("JLIB_JS_AJAX_ERROR_TIMEOUT")] : "abort" === o ? r.error = [e.JText._("JLIB_JS_AJAX_ERROR_CONNECTION_ABORT")] : t.responseJSON && t.responseJSON.message ? r.error = [e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status) + " <em>" + t.responseJSON.message + "</em>"] : t.statusText ? r.error = [e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status) + " <em>" + t.statusText + "</em>"] : r.error = [e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status)];
                return r
            }, e.isChecked = function(e, o) {
                if ("undefined" == typeof o && (o = t.getElementById("adminForm")), o.boxchecked.value = e ? parseInt(o.boxchecked.value) + 1 : parseInt(o.boxchecked.value) - 1, o.elements["checkall-toggle"]) {
                    var n, r, i, a = !0;
                    for (n = 0, i = o.elements.length; i > n; n++)
                        if (r = o.elements[n], "checkbox" == r.type && "checkall-toggle" != r.name && !r.checked) {
                            a = !1;
                            break
                        } o.elements["checkall-toggle"].checked = a
                }
            }, e.popupWindow = function(e, t, o, n, r) {
                var i = (screen.width - o) / 2,
                    a = (screen.height - n) / 2,
                    s = "height=" + n + ",width=" + o + ",top=" + a + ",left=" + i + ",scrollbars=" + r + ",resizable";
                window.open(e, t, s).window.focus()
            }, e.tableOrdering = function(o, n, r, i) {
                "undefined" == typeof i && (i = t.getElementById("adminForm")), i.filter_order.value = o, i.filter_order_Dir.value = n, e.submitform(r, i)
            }, window.writeDynaList = function(e, o, n, r, i, a) {
                var s, l, d, c = "<select " + e + ">",
                    u = n == r,
                    f = 0;
                for (l in o) o.hasOwnProperty(l) && (d = o[l], d[0] == n && (s = "", (u && i == d[1] || !u && 0 === f) && (s = 'selected="selected"'), c += '<option value="' + d[1] + '" ' + s + ">" + d[2] + "</option>", f++));
                c += "</select>", a ? a.innerHTML = c : t.writeln(c)
            }, window.changeDynaList = function(e, o, n, r, i) {
                for (var a, s, l, d, c = t.adminForm[e], u = n == r; c.firstChild;) c.removeChild(c.firstChild);
                a = 0;
                for (s in o) o.hasOwnProperty(s) && (l = o[s], l[0] == n && (d = new Option, d.value = l[1], d.text = l[2], (u && i == d.value || !u && 0 === a) && (d.selected = !0), c.options[a++] = d));
                c.length = a
            }, window.radioGetCheckedValue = function(e) {
                if (!e) return "";
                var t, o = e.length;
                if (void 0 === o) return e.checked ? e.value : "";
                for (t = 0; o > t; t++)
                    if (e[t].checked) return e[t].value;
                return ""
            }, window.getSelectedValue = function(e, o) {
                var n = t[e][o],
                    r = n.selectedIndex;
                return null !== r && r > -1 ? n.options[r].value : null
            }, window.listItemTask = function(t, o) {
                return e.listItemTask(t, o)
            }, e.listItemTask = function(e, o) {
                var n, r = t.adminForm,
                    i = 0,
                    a = r[e];
                if (!a) return !1;
                for (;;) {
                    if (n = r["cb" + i], !n) break;
                    n.checked = !1, i++
                }
                return a.checked = !0, r.boxchecked.value = 1, window.submitform(o), !1
            }, window.submitbutton = function(t) {
                e.submitbutton(t)
            }, window.submitform = function(t) {
                e.submitform(t)
            }, window.saveorder = function(e, t) {
                window.checkAll_button(e, t)
            }, window.checkAll_button = function(o, n) {
                n = n ? n : "saveorder";
                var r, i;
                for (r = 0; o >= r; r++) {
                    if (i = t.adminForm["cb" + r], !i) return void alert("You cannot change the order of items, as an item in the list is `Checked Out`");
                    i.checked = !0
                }
                e.submitform(n)
            }, e.loadingLayer = function(o, n) {
                if (o = o || "show", n = n || t.body, "load" === o) {
                    var r = e.getOptions("system.paths") || {},
                        i = r.root || "",
                        a = t.createElement("div");
                    a.id = "loading-logo", a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.height = "100%", a.style.opacity = "0.8", a.style.filter = "alpha(opacity=80)", a.style.overflow = "hidden", a.style["z-index"] = "10000", a.style.display = "none", a.style["background-color"] = "#fff", a.style["background-image"] = 'url("' + i + '/media/jui/images/ajax-loader.gif")', a.style["background-position"] = "center", a.style["background-repeat"] = "no-repeat", a.style["background-attachment"] = "fixed", n.appendChild(a)
                } else t.getElementById("loading-logo") || e.loadingLayer("load", n), t.getElementById("loading-logo").style.display = "show" == o ? "block" : "none";
                return t.getElementById("loading-logo")
            }, e.extend = function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                return e
            }, e.request = function(t) {
                t = e.extend({
                    url: "",
                    method: "GET",
                    data: null,
                    perform: !0
                }, t), t.method = t.data ? "POST" : t.method.toUpperCase();
                try {
                    var o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0");
                    if (o.open(t.method, t.url, !0), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("X-Ajax-Engine", "Joomla!"), "POST" === t.method) {
                        var n = e.getOptions("csrf.token", "");
                        n && o.setRequestHeader("X-CSRF-Token", n), t.headers && t.headers["Content-Type"] || o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                    }
                    if (t.headers)
                        for (var r in t.headers) t.headers.hasOwnProperty(r) && o.setRequestHeader(r, t.headers[r]);
                    if (o.onreadystatechange = function() {
                            4 === o.readyState && (200 === o.status ? t.onSuccess && t.onSuccess.call(window, o.responseText, o) : t.onError && t.onError.call(window, o))
                        }, t.perform) {
                        if (t.onBefore && t.onBefore.call(window, o) === !1) return o;
                        o.send(t.data)
                    }
                } catch (i) {
                    return window.console ? console.log(i) : null, !1
                }
                return o
            }
        }(Joomla, document);
} catch (e) {
    console.error('Error in file:/media/system/js/core.js?02b620a3a7b245efea0c8fbb845ca65b; Error:' + e.message);
};

/***!  /media/jui/js/jquery.min.js?02b620a3a7b245efea0c8fbb845ca65b  !***/

try {
    ! function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        var c = [],
            d = a.document,
            e = c.slice,
            f = c.concat,
            g = c.push,
            h = c.indexOf,
            i = {},
            j = i.toString,
            k = i.hasOwnProperty,
            l = {},
            m = "1.12.4",
            n = function(a, b) {
                return new n.fn.init(a, b)
            },
            o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            q = /-([\da-z])/gi,
            r = function(a, b) {
                return b.toUpperCase()
            };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return e.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a) {
                return n.each(this, a)
            },
            map: function(a) {
                return this.pushStack(n.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(e.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: g,
            sort: c.sort,
            splice: c.splice
        }, n.extend = n.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === n.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === n.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
                try {
                    if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                if (!l.ownFirst)
                    for (b in a) return k.call(a, b);
                for (b in a);
                return void 0 === b || k.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && n.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(p, "ms-").replace(q, r)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b) {
                var c, d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++)
                        if (b.call(a[d], d, a[d]) === !1) break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1) break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(o, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (h) return h.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                var c = +b.length,
                    d = 0,
                    e = a.length;
                while (c > d) a[e++] = b[d++];
                if (c !== c)
                    while (void 0 !== b[d]) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, e, g = 0,
                    h = [];
                if (s(a))
                    for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
                else
                    for (g in a) e = b(a[g], g, c), null != e && h.push(e);
                return f.apply([], h)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, f;
                return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                    return a.apply(b || this, c.concat(e.call(arguments)))
                }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
            },
            now: function() {
                return +new Date
            },
            support: l
        }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            i["[object " + b + "]"] = b.toLowerCase()
        });

        function s(a) {
            var b = !!a && "length" in a && a.length,
                c = n.type(a);
            return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        var t = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = ga(),
                z = ga(),
                A = ga(),
                B = function(a, b) {
                    return a === b && (l = !0), 0
                },
                C = 1 << 31,
                D = {}.hasOwnProperty,
                E = [],
                F = E.pop,
                G = E.push,
                H = E.push,
                I = E.slice,
                J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
                O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
                P = new RegExp(L + "+", "g"),
                Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                R = new RegExp("^" + L + "*," + L + "*"),
                S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                U = new RegExp(O),
                V = new RegExp("^" + M + "$"),
                W = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + N),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _ = /[+~]/,
                aa = /'|\\/g,
                ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                ca = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                da = function() {
                    m()
                };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
            } catch (ea) {
                H = {
                    apply: E.length ? function(a, b) {
                        G.apply(a, I.call(b))
                    } : function(a, b) {
                        var c = a.length,
                            d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
                }
            }

            function fa(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                    x = b ? b.nodeType : 9;
                if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
                if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                    if (11 !== x && (o = $.exec(a)))
                        if (f = o[1]) {
                            if (9 === x) {
                                if (!(j = b.getElementById(f))) return d;
                                if (j.id === f) return d.push(j), d
                            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                        } else {
                            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                        } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (1 !== x) w = b, s = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) r[h] = l + " " + qa(r[h]);
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                        if (s) try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
                return i(a.replace(Q, "$1"), b, d, e)
            }

            function ga() {
                var a = [];

                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                return b
            }

            function ha(a) {
                return a[u] = !0, a
            }

            function ia(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function ja(a, b) {
                var c = a.split("|"),
                    e = c.length;
                while (e--) d.attrHandle[c[e]] = b
            }

            function ka(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) return d;
                if (c)
                    while (c = c.nextSibling)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function la(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function na(a) {
                return ha(function(b) {
                    return b = +b, ha(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function oa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            c = fa.support = {}, f = fa.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, m = fa.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ia(function(a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++]) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ia(function(a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        while (b = b.parentNode)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function(a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while (c = c.parentNode) g.unshift(c);
                    c = b;
                    while (c = c.parentNode) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }, n) : n
            }, fa.matches = function(a, b) {
                return fa(a, null, null, b)
            }, fa.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return fa(b, n, null, [a]).length > 0
            }, fa.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, fa.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, fa.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, fa.uniqueSort = function(a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    while (b = a[f++]) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = fa.getText = function(a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    while (b = a[d++]) c += e(b);
                return c
            }, d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fa.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        m = b;
                                        while (m = m[p])
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ha(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u] ? ha(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ha(function(a) {
                        return function(b) {
                            return fa(a, b).length > 0
                        }
                    }),
                    contains: ha(function(a) {
                        return a = a.replace(ba, ca),
                            function(b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ha(function(a) {
                        return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Y.test(a.nodeName)
                    },
                    input: function(a) {
                        return X.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: na(function() {
                        return [0]
                    }),
                    last: na(function(a, b) {
                        return [b - 1]
                    }),
                    eq: na(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: na(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: na(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[b] = la(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[b] = ma(b);

            function pa() {}
            pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = d.preFilter;
                while (h) {
                    c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
            };

            function qa(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function ra(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ? function(b, c, f) {
                    while (b = b[d])
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j, k = [w, f];
                    if (g) {
                        while (b = b[d])
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || e) {
                                if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                                if (i[d] = k, k[2] = a(b, c, g)) return !0
                            }
                }
            }

            function sa(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function ta(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
                return c
            }

            function ua(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function va(a, b, c, d, e, f) {
                return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : ua(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) {
                        j = ua(r, n), d(j, [], h, i), k = j.length;
                        while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [], k = r.length;
                                while (k--)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                })
            }

            function wa(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                        return a === b
                    }, h, !0), l = ra(function(a) {
                        return J(b, a) > -1
                    }, h, !0), m = [function(a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null, e
                    }]; f > i; i++)
                    if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e; e++)
                                if (d.relative[a[e].type]) break;
                            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                        }
                        m.push(c)
                    } return sa(m)
            }

            function xa(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l, o, q, r = 0,
                            s = "0",
                            t = f && [],
                            u = [],
                            v = j,
                            x = f || e && d.find.TAG("*", k),
                            y = w += null == v ? 1 : Math.random() || .1,
                            z = x.length;
                        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                            if (e && l) {
                                o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                                while (q = a[o++])
                                    if (q(l, g || n, h)) {
                                        i.push(l);
                                        break
                                    } k && (w = y)
                            }
                            c && ((l = !q && l) && r--, f && t.push(l))
                        }
                        if (r += s, c && s !== r) {
                            o = 0;
                            while (q = b[o++]) q(t, u, g, h);
                            if (f) {
                                if (r > 0)
                                    while (s--) t[s] || u[s] || (u[s] = F.call(i));
                                u = ua(u)
                            }
                            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                        }
                        return k && (w = y, j = v), t
                    };
                return c ? ha(f) : f
            }
            return h = fa.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), c = b.length;
                    while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, xa(e, d)), f.selector = a
                }
                return f
            }, i = fa.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    i = W.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i], d.relative[l = k.type]) break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }), ia(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || ja("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && ia(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || ja("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), ia(function(a) {
                return null == a.getAttribute("disabled")
            }) || ja(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), fa
        }(a);
        n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
        var u = function(a, b, c) {
                var d = [],
                    e = void 0 !== c;
                while ((a = a[b]) && 9 !== a.nodeType)
                    if (1 === a.nodeType) {
                        if (e && n(a).is(c)) break;
                        d.push(a)
                    } return d
            },
            v = function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            w = n.expr.match.needsContext,
            x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            y = /^.[^:#\[\.,]*$/;

        function z(a, b, c) {
            if (n.isFunction(b)) return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return n.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (y.test(b)) return n.filter(b, a, c);
                b = n.filter(b, a)
            }
            return n.grep(a, function(a) {
                return n.inArray(a, b) > -1 !== c
            })
        }
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, n.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) n.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) {
                return this.pushStack(z(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(z(this, a || [], !0))
            },
            is: function(a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
            }
        });
        var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            C = n.fn.init = function(a, b, c) {
                var e, f;
                if (!a) return this;
                if (c = c || A, "string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (e[1]) {
                        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                        return this
                    }
                    if (f = d.getElementById(e[2]), f && f.parentNode) {
                        if (f.id !== e[2]) return A.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = d, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
            };
        C.prototype = n.fn, A = n(d);
        var D = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        n.fn.extend({
            has: function(a) {
                var b, c = n(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (n.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });

        function F(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }
        n.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return u(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return u(a, "parentNode", c)
            },
            next: function(a) {
                return F(a, "nextSibling")
            },
            prev: function(a) {
                return F(a, "previousSibling")
            },
            nextAll: function(a) {
                return u(a, "nextSibling")
            },
            prevAll: function(a) {
                return u(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return u(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return u(a, "previousSibling", c)
            },
            siblings: function(a) {
                return v((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return v(a.firstChild)
            },
            contents: function(a) {
                return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
            }
        }, function(a, b) {
            n.fn[a] = function(c, d) {
                var e = n.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var G = /\S+/g;

        function H(a) {
            var b = {};
            return n.each(a.match(G) || [], function(a, c) {
                b[c] = !0
            }), b
        }
        n.Callbacks = function(a) {
            a = "string" == typeof a ? H(a) : n.extend({}, a);
            var b, c, d, e, f = [],
                g = [],
                h = -1,
                i = function() {
                    for (e = a.once, d = b = !0; g.length; h = -1) {
                        c = g.shift();
                        while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                j = {
                    add: function() {
                        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                            n.each(b, function(b, c) {
                                n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                            })
                        }(arguments), c && !b && i()), this
                    },
                    remove: function() {
                        return n.each(arguments, function(a, b) {
                            var c;
                            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                        }), this
                    },
                    has: function(a) {
                        return a ? n.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function() {
                        return f && (f = []), this
                    },
                    disable: function() {
                        return e = g = [], f = c = "", this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        return e = !0, c || j.disable(), this
                    },
                    locked: function() {
                        return !!e
                    },
                    fireWith: function(a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                    },
                    fire: function() {
                        return j.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return j
        }, n.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", n.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return n.Deferred(function(c) {
                                n.each(b, function(b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, n.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function(a, b, c) {
                        return function(d) {
                            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    },
                    i, j, k;
                if (d > 1)
                    for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
                return f || g.resolveWith(k, c), g.promise()
            }
        });
        var I;
        n.fn.ready = function(a) {
            return n.ready.promise().done(a), this
        }, n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
            }
        });

        function J() {
            d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
        }

        function K() {
            (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
        }
        n.ready.promise = function(b) {
            if (!I)
                if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
                else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && ! function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(), n.ready()
                    }
                }()
            }
            return I.promise(b)
        }, n.ready.promise();
        var L;
        for (L in n(l)) break;
        l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
                var a, b, c, e;
                c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
            }),
            function() {
                var a = d.createElement("div");
                l.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    l.deleteExpando = !1
                }
                a = null
            }();
        var M = function(a) {
                var b = n.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            },
            N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            O = /([A-Z])/g;

        function P(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(O, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                    } catch (e) {}
                    n.data(a, b, c)
                } else c = void 0;
            }
            return c
        }

        function Q(a) {
            var b;
            for (b in a)
                if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function R(a, b, d, e) {
            if (M(a)) {
                var f, g, h = n.expando,
                    i = a.nodeType,
                    j = i ? n.cache : a,
                    k = i ? a[h] : a[h] && h;
                if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
            }
        }

        function S(a, b, c) {
            if (M(a)) {
                var d, e, f = a.nodeType,
                    g = f ? n.cache : a,
                    h = f ? a[n.expando] : n.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        while (e--) delete d[b[e]];
                        if (c ? !Q(d) : !n.isEmptyObject(d)) return
                    }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
                }
            }
        }
        n.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(a) {
                    return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
                },
                data: function(a, b, c) {
                    return R(a, b, c)
                },
                removeData: function(a, b) {
                    return S(a, b)
                },
                _data: function(a, b, c) {
                    return R(a, b, c, !0)
                },
                _removeData: function(a, b) {
                    return S(a, b, !0)
                }
            }), n.fn.extend({
                data: function(a, b) {
                    var c, d, e, f = this[0],
                        g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                            c = g.length;
                            while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                            n._data(f, "parsedAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function() {
                        n.data(this, a)
                    }) : arguments.length > 1 ? this.each(function() {
                        n.data(this, a, b)
                    }) : f ? P(f, a, n.data(f, a)) : void 0
                },
                removeData: function(a) {
                    return this.each(function() {
                        n.removeData(this, a)
                    })
                }
            }), n.extend({
                queue: function(a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = n.queue(a, b),
                        d = c.length,
                        e = c.shift(),
                        f = n._queueHooks(a, b),
                        g = function() {
                            n.dequeue(a, b)
                        };
                    "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return n._data(a, c) || n._data(a, c, {
                        empty: n.Callbacks("once memory").add(function() {
                            n._removeData(a, b + "queue"), n._removeData(a, c)
                        })
                    })
                }
            }), n.fn.extend({
                queue: function(a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var c = n.queue(this, a, b);
                        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                    })
                },
                dequeue: function(a) {
                    return this.each(function() {
                        n.dequeue(this, a)
                    })
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", [])
                },
                promise: function(a, b) {
                    var c, d = 1,
                        e = n.Deferred(),
                        f = this,
                        g = this.length,
                        h = function() {
                            --d || e.resolveWith(f, [f])
                        };
                    "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                    while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b)
                }
            }),
            function() {
                var a;
                l.shrinkWrapBlocks = function() {
                    if (null != a) return a;
                    a = !1;
                    var b, c, e;
                    return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
                }
            }();
        var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
            V = ["Top", "Right", "Bottom", "Left"],
            W = function(a, b) {
                return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            };

        function X(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function() {
                    return d.cur()
                } : function() {
                    return n.css(a, b, "")
                },
                i = h(),
                j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
                k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }
        var Y = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c) Y(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Z = /^(?:checkbox|radio)$/i,
            $ = /<([\w:-]+)/,
            _ = /^$|\/(?:java|ecma)script/i,
            aa = /^\s+/,
            ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

        function ca(a) {
            var b = ba.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                while (b.length) c.createElement(b.pop());
            return c
        }! function() {
            var a = d.createElement("div"),
                b = d.createDocumentFragment(),
                c = d.createElement("input");
            a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
        }();
        var da = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

        function ea(a, b) {
            var c, d, e = 0,
                f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
        }

        function fa(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
        }
        var ga = /<|&#?\w+;/,
            ha = /<tbody/i;

        function ia(a) {
            Z.test(a.type) && (a.defaultChecked = a.checked)
        }

        function ja(a, b, c, d, e) {
            for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
                if (g = a[r], g || 0 === g)
                    if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                    else if (ga.test(g)) {
                i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                while (f--) i = i.lastChild;
                if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                    g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                    while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                }
                n.merge(q, i.childNodes), i.textContent = "";
                while (i.firstChild) i.removeChild(i.firstChild);
                i = p.lastChild
            } else q.push(b.createTextNode(g));
            i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
            while (g = q[r++])
                if (d && n.inArray(g, d) > -1) e && e.push(g);
                else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                f = 0;
                while (g = i[f++]) _.test(g.type || "") && c.push(g)
            }
            return i = null, p
        }! function() {
            var b, c, e = d.createElement("div");
            for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
            e = null
        }();
        var ka = /^(?:input|select|textarea)$/i,
            la = /^key/,
            ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            na = /^(?:focusinfocus|focusoutblur)$/,
            oa = /^([^.]*)(?:\.(.+)|)/;

        function pa() {
            return !0
        }

        function qa() {
            return !1
        }

        function ra() {
            try {
                return d.activeElement
            } catch (a) {}
        }

        function sa(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) sa(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
            else if (!e) return a;
            return 1 === f && (g = e, e = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
                n.event.add(this, b, e, d, c)
            })
        }
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
                if (r) {
                    c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                        return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                    while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
                if (r && (k = r.events)) {
                    b = (b || "").match(G) || [""], j = b.length;
                    while (j--)
                        if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                        } else
                            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
                }
            },
            trigger: function(b, c, e, f) {
                var g, h, i, j, l, m, o, p = [e || d],
                    q = k.call(b, "type") ? b.type : b,
                    r = k.call(b, "namespace") ? b.namespace.split(".") : [];
                if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                    if (!f && !l.noBubble && !n.isWindow(e)) {
                        for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                        m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                    }
                    o = 0;
                    while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                    if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                        m = e[h], m && (e[h] = null), n.event.triggered = q;
                        try {
                            e[q]()
                        } catch (s) {}
                        n.event.triggered = void 0, m && (e[h] = m)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, d, f, g, h = [],
                    i = e.call(arguments),
                    j = (n._data(this, "events") || {})[a.type] || [],
                    k = n.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    h = n.event.handlers.call(this, a, j), b = 0;
                    while ((f = h[b++]) && !a.isPropagationStopped()) {
                        a.currentTarget = f.elem, c = 0;
                        while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        } return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            fix: function(a) {
                if (a[n.expando]) return a;
                var b, c, e, f = a.type,
                    g = a,
                    h = this.fixHooks[f];
                h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
                while (b--) c = e[b], a[c] = g[c];
                return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, e, f, g = b.button,
                        h = b.fromElement;
                    return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== ra() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === ra() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c) {
                var d = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
            }
        }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
        }, n.Event = function(a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
        }, n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: qa,
            isPropagationStopped: qa,
            isImmediatePropagationStopped: qa,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), l.submit || (n.event.special.submit = {
            setup: function() {
                return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                    c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                        a._submitBubble = !0
                    }), n._data(c, "submit", !0))
                })
            },
            postDispatch: function(a) {
                a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
            },
            teardown: function() {
                return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
            }
        }), l.change || (n.event.special.change = {
            setup: function() {
                return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                }), n.event.add(this, "click._change", function(a) {
                    this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
                })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                    }), n._data(b, "change", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return n.event.remove(this, "._change"), !ka.test(this.nodeName)
            }
        }), l.focusin || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a))
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b);
                    e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b) - 1;
                    e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
                }
            }
        }), n.fn.extend({
            on: function(a, b, c, d) {
                return sa(this, a, b, c, d)
            },
            one: function(a, b, c, d) {
                return sa(this, a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                    n.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    n.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0
            }
        });
        var ta = / jQuery\d+="(?:null|\d+)"/g,
            ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
            va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            wa = /<script|<style|<link/i,
            xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ya = /^true\/(.*)/,
            za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Aa = ca(d),
            Ba = Aa.appendChild(d.createElement("div"));

        function Ca(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function Da(a) {
            return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
        }

        function Ea(a) {
            var b = ya.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function Fa(a, b) {
            if (1 === b.nodeType && n.hasData(a)) {
                var c, d, e, f = n._data(a),
                    g = n._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
                }
                g.data && (g.data = n.extend({}, g.data))
            }
        }

        function Ga(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                    e = n._data(b);
                    for (d in e.events) n.removeEvent(b, d, e.handle);
                    b.removeAttribute(n.expando)
                }
                "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
            }
        }

        function Ha(a, b, c, d) {
            b = f.apply([], b);
            var e, g, h, i, j, k, m = 0,
                o = a.length,
                p = o - 1,
                q = b[0],
                r = n.isFunction(q);
            if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            });
            if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
                for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
                if (h)
                    for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
                k = e = null
            }
            return a
        }

        function Ia(a, b, c) {
            for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
            return a
        }
        n.extend({
            htmlPrefilter: function(a) {
                return a.replace(va, "<$1></$2>")
            },
            clone: function(a, b, c) {
                var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
                if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                    for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                    else Fa(a, f);
                return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
            },
            cleanData: function(a, b) {
                for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                    if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                        if (g.events)
                            for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                        j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                    }
            }
        }), n.fn.extend({
            domManip: Ha,
            detach: function(a) {
                return Ia(this, a, !0)
            },
            remove: function(a) {
                return Ia(this, a)
            },
            text: function(a) {
                return Y(this, function(a) {
                    return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return Ha(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return Ha(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return Ha(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return Ha(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && n.cleanData(ea(a, !1));
                    while (a.firstChild) a.removeChild(a.firstChild);
                    a.options && n.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return n.clone(this, a, b)
                })
            },
            html: function(a) {
                return Y(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                    if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = n.htmlPrefilter(a);
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return Ha(this, arguments, function(b) {
                    var c = this.parentNode;
                    n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            n.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var Ja, Ka = {
            HTML: "block",
            BODY: "block"
        };

        function La(a, b) {
            var c = n(b.createElement(a)).appendTo(b.body),
                d = n.css(c[0], "display");
            return c.detach(), d
        }

        function Ma(a) {
            var b = d,
                c = Ka[a];
            return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
        }
        var Na = /^margin/,
            Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
            Pa = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Qa = d.documentElement;
        ! function() {
            var b, c, e, f, g, h, i = d.createElement("div"),
                j = d.createElement("div");
            if (j.style) {
                j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                    reliableHiddenOffsets: function() {
                        return null == b && k(), f
                    },
                    boxSizingReliable: function() {
                        return null == b && k(), e
                    },
                    pixelMarginRight: function() {
                        return null == b && k(), c
                    },
                    pixelPosition: function() {
                        return null == b && k(), b
                    },
                    reliableMarginRight: function() {
                        return null == b && k(), g
                    },
                    reliableMarginLeft: function() {
                        return null == b && k(), h
                    }
                });

                function k() {
                    var k, l, m = d.documentElement;
                    m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                        width: "4px"
                    }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                        marginRight: "4px"
                    }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
                }
            }
        }();
        var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (Ra = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        }, Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
        }) : Qa.currentStyle && (Ra = function(a) {
            return a.currentStyle
        }, Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        });

        function Ua(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        var Va = /alpha\([^)]*\)/i,
            Wa = /opacity\s*=\s*([^)]*)/i,
            Xa = /^(none|table(?!-c[ea]).+)/,
            Ya = new RegExp("^(" + T + ")(.*)$", "i"),
            Za = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            $a = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            _a = ["Webkit", "O", "Moz", "ms"],
            ab = d.createElement("div").style;

        function bb(a) {
            if (a in ab) return a;
            var b = a.charAt(0).toUpperCase() + a.slice(1),
                c = _a.length;
            while (c--)
                if (a = _a[c] + b, a in ab) return a
        }

        function cb(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function db(a, b, c) {
            var d = Ya.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function eb(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
            return g
        }

        function fb(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
                d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Sa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": l.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b),
                        i = a.style;
                    if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                        i[b] = c
                    } catch (j) {}
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
            }
        }), n.each(["height", "width"], function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                        return fb(a, b, d)
                    }) : fb(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), l.opacity || (n.cssHooks.opacity = {
            get: function(a, b) {
                return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
            }
        }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
            return b ? Pa(a, {
                display: "inline-block"
            }, Sa, [a, "marginRight"]) : void 0
        }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
            return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Na.test(a) || (n.cssHooks[a + b].set = db)
        }), n.fn.extend({
            css: function(a, b) {
                return Y(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (n.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return cb(this, !0)
            },
            hide: function() {
                return cb(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    W(this) ? n(this).show() : n(this).hide()
                })
            }
        });

        function gb(a, b, c, d, e) {
            return new gb.prototype.init(a, b, c, d, e)
        }
        n.Tween = gb, gb.prototype = {
            constructor: gb,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = gb.propHooks[this.prop];
                return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = gb.propHooks[this.prop];
                return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
            }
        }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                },
                set: function(a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, n.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        }, n.fx = gb.prototype.init, n.fx.step = {};
        var hb, ib, jb = /^(?:toggle|show|hide)$/,
            kb = /queueHooks$/;

        function lb() {
            return a.setTimeout(function() {
                hb = void 0
            }), hb = n.now()
        }

        function mb(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function nb(a, b, c) {
            for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function ob(a, b, c) {
            var d, e, f, g, h, i, j, k, m = this,
                o = {},
                p = a.style,
                q = a.nodeType && W(a),
                r = n._data(a, "fxshow");
            c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, m.always(function() {
                m.always(function() {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
                p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], jb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d]) continue;
                        q = !0
                    }
                    o[d] = r && r[d] || n.style(a, d)
                } else j = void 0;
            if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
            else {
                r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                    n(a).hide()
                }), m.done(function() {
                    var b;
                    n._removeData(a, "fxshow");
                    for (b in o) n.style(a, b, o[b])
                });
                for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function pb(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function qb(a, b, c) {
            var d, e, f = 0,
                g = qb.prefilters.length,
                h = n.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {
                        specialEasing: {},
                        easing: n.easing._default
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: hb || lb(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (pb(k, j.opts.specialEasing); g > f; f++)
                if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
            return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        n.Animation = n.extend(qb, {
                tweeners: {
                    "*": [function(a, b) {
                        var c = this.createTween(a, b);
                        return X(c.elem, a, U.exec(b), c), c
                    }]
                },
                tweener: function(a, b) {
                    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
                },
                prefilters: [ob],
                prefilter: function(a, b) {
                    b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
                }
            }), n.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? n.extend({}, a) : {
                    complete: c || !c && b || n.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !n.isFunction(b) && b
                };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
                }, d
            }, n.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(W).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = n.isEmptyObject(a),
                        f = n.speed(b, c, d),
                        g = function() {
                            var b = qb(this, n.extend({}, a), f);
                            (e || n._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = n.timers,
                            g = n._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        !b && c || n.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = n._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), n.each(["toggle", "show", "hide"], function(a, b) {
                var c = n.fn[b];
                n.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
                }
            }), n.each({
                slideDown: mb("show"),
                slideUp: mb("hide"),
                slideToggle: mb("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                n.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), n.timers = [], n.fx.tick = function() {
                var a, b = n.timers,
                    c = 0;
                for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || n.fx.stop(), hb = void 0
            }, n.fx.timer = function(a) {
                n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
            }, n.fx.interval = 13, n.fx.start = function() {
                ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
            }, n.fx.stop = function() {
                a.clearInterval(ib), ib = null
            }, n.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, n.fn.delay = function(b, c) {
                return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function() {
                        a.clearTimeout(e)
                    }
                })
            },
            function() {
                var a, b = d.createElement("input"),
                    c = d.createElement("div"),
                    e = d.createElement("select"),
                    f = e.appendChild(d.createElement("option"));
                c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
            }();
        var rb = /\r/g,
            sb = /[\x20\t\r\n\f]+/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
                }
            }
        }), n.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                                if (b = n(c).val(), f) return b;
                                g.push(b)
                            } return g
                    },
                    set: function(a, b) {
                        var c, d, e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--)
                            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), n.each(["radio", "checkbox"], function() {
            n.valHooks[this] = {
                set: function(a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
                }
            }, l.checkOn || (n.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var tb, ub, vb = n.expr.attrHandle,
            wb = /^(?:checked|selected)$/i,
            xb = l.getSetAttribute,
            yb = l.input;
        n.fn.extend({
            attr: function(a, b) {
                return Y(this, n.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    n.removeAttr(this, a)
                })
            }
        }), n.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
            }
        }), ub = {
            set: function(a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = vb[b] || n.find.attr;
            yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
                var e, f;
                return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
            } : vb[b] = function(a, b, c) {
                return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), yb && xb || (n.attrHooks.value = {
            set: function(a, b, c) {
                return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
            }
        }), xb || (tb = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, vb.id = vb.name = vb.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, n.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: tb.set
        }, n.attrHooks.contenteditable = {
            set: function(a, b, c) {
                tb.set(a, "" === b ? !1 : b, c)
            }
        }, n.each(["width", "height"], function(a, b) {
            n.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), l.style || (n.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var zb = /^(?:input|select|textarea|button|object)$/i,
            Ab = /^(?:a|area)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return Y(this, n.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = n.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {}
                })
            }
        }), n.extend({
            prop: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = n.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
            n.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), l.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            n.propFix[this.toLowerCase()] = this
        }), l.enctype || (n.propFix.enctype = "encoding");
        var Bb = /[\t\r\n\f]/g;

        function Cb(a) {
            return n.attr(a, "class") || ""
        }
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++])
                        if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                            g = 0;
                            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = n.trim(d), e !== h && n.attr(c, "class", h)
                        }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++])
                        if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                            g = 0;
                            while (f = b[g++])
                                while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                            h = n.trim(d), e !== h && n.attr(c, "class", h)
                        }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                    n(this).toggleClass(a.call(this, c, Cb(this), b), b)
                }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c) {
                        d = 0, e = n(this), f = a.match(G) || [];
                        while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                b = " " + a + " ";
                while (c = this[d++])
                    if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
                return !1
            }
        }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            n.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), n.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
        var Db = a.location,
            Eb = n.now(),
            Fb = /\?/,
            Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        n.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = n.trim(b + "");
            return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
        }, n.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
        };
        var Hb = /#.*$/,
            Ib = /([?&])_=[^&]*/,
            Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Lb = /^(?:GET|HEAD)$/,
            Mb = /^\/\//,
            Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ob = {},
            Pb = {},
            Qb = "*/".concat("*"),
            Rb = Db.href,
            Sb = Nb.exec(Rb.toLowerCase()) || [];

        function Tb(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(G) || [];
                if (n.isFunction(c))
                    while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function Ub(a, b, c, d) {
            var e = {},
                f = a === Pb;

            function g(h) {
                var i;
                return e[h] = !0, n.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                }), i
            }
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }

        function Vb(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && n.extend(!0, a, c), a
        }

        function Wb(a, b, c) {
            var d, e, f, g, h = a.contents,
                i = a.dataTypes;
            while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    } if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function Xb(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            f = k.shift();
            while (f)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        } if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Rb,
                type: "GET",
                isLocal: Kb.test(Sb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
            },
            ajaxPrefilter: Tb(Ob),
            ajaxTransport: Tb(Pb),
            ajax: function(b, c) {
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                    m = l.context || l,
                    o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                    p = n.Deferred(),
                    q = n.Callbacks("once memory"),
                    r = l.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === u) {
                                if (!k) {
                                    k = {};
                                    while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                                }
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === u ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return u || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > u)
                                    for (b in a) r[b] = [r[b], a[b]];
                                else w.always(a[w.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || v;
                            return j && j.abort(b), y(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
                i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
                v = "abort";
                for (e in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[e](l[e]);
                if (j = Ub(Pb, l, c, w)) {
                    if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                    l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                        w.abort("timeout")
                    }, l.timeout));
                    try {
                        u = 1, j.send(s, y)
                    } catch (x) {
                        if (!(2 > u)) throw x;
                        y(-1, x)
                    }
                } else y(-1, "No Transport");

                function y(b, c, d, e) {
                    var k, s, t, v, x, y = c;
                    2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }), n.each(["get", "post"], function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, n.isPlainObject(a) && a))
            }
        }), n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, n.fn.extend({
            wrapAll: function(a) {
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = n(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each(function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        });

        function Yb(a) {
            return a.style && a.style.display || n.css(a, "display")
        }

        function Zb(a) {
            if (!n.contains(a.ownerDocument || d, a)) return !0;
            while (a && 1 === a.nodeType) {
                if ("none" === Yb(a) || "hidden" === a.type) return !0;
                a = a.parentNode
            }
            return !1
        }
        n.expr.filters.hidden = function(a) {
            return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
        }, n.expr.filters.visible = function(a) {
            return !n.expr.filters.hidden(a)
        };
        var $b = /%20/g,
            _b = /\[\]$/,
            ac = /\r?\n/g,
            bc = /^(?:submit|button|image|reset|file)$/i,
            cc = /^(?:input|select|textarea|keygen)/i;

        function dc(a, b, c, d) {
            var e;
            if (n.isArray(b)) n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== n.type(b)) d(a, b);
            else
                for (e in b) dc(a + "[" + e + "]", b[e], c, d)
        }
        n.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) dc(c, a[c], b, e);
            return d.join("&").replace($b, "+")
        }, n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
                }).map(function(a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(ac, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(ac, "\r\n")
                    }
                }).get()
            }
        }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
        } : hc;
        var ec = 0,
            fc = {},
            gc = n.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in fc) fc[a](void 0, !0)
        }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function(d, e) {
                        var f, g = b.xhr(),
                            h = ++ec;
                        if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                            for (f in b.xhrFields) g[f] = b.xhrFields[f];
                        b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                        g.send(b.hasContent && b.data || null), c = function(a, d) {
                            var f, i, j;
                            if (c && (d || 4 === g.readyState))
                                if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                                else {
                                    j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                    try {
                                        i = g.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                                } j && e(f, i, j, g.getAllResponseHeaders())
                        }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                    },
                    abort: function() {
                        c && c(void 0, !0)
                    }
                }
            }
        });

        function hc() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function ic() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return n.globalEval(a), a
                }
            }
        }), n.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), n.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = d.head || n("head")[0] || d.documentElement;
                return {
                    send: function(e, f) {
                        b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var jc = [],
            kc = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = jc.pop() || n.expando + "_" + Eb++;
                return this[a] = !0, a
            }
        }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || n.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), n.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || d;
            var e = x.exec(a),
                f = !c && [];
            return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
        };
        var lc = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && lc) return lc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }), this
        }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            n.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), n.expr.filters.animated = function(a) {
            return n.grep(n.timers, function(b) {
                return a === b.elem
            }).length
        };

        function mc(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - n.css(d, "marginTop", !0),
                        left: b.left - c.left - n.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent;
                    while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                    return a || Qa
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            n.fn[a] = function(d) {
                return Y(this, function(a, d, e) {
                    var f = mc(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
                return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Y(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), n.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }), n.fn.size = function() {
            return this.length
        }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        });
        var nc = a.jQuery,
            oc = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
        }, b || (a.jQuery = a.$ = n), n
    });
} catch (e) {
    console.error('Error in file:/media/jui/js/jquery.min.js?02b620a3a7b245efea0c8fbb845ca65b; Error:' + e.message);
};

/***!  /media/jui/js/jquery-noconflict.js?02b620a3a7b245efea0c8fbb845ca65b  !***/

try {
    jQuery.noConflict();
} catch (e) {
    console.error('Error in file:/media/jui/js/jquery-noconflict.js?02b620a3a7b245efea0c8fbb845ca65b; Error:' + e.message);
};

/***!  /media/jui/js/jquery-migrate.min.js?02b620a3a7b245efea0c8fbb845ca65b  !***/

try {
    "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
        function(a, b, c) {
            function d(c) {
                var d = b.console;
                f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
            }

            function e(b, c, e, f) {
                if (Object.defineProperty) try {
                    return void Object.defineProperty(b, c, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return d(f), e
                        },
                        set: function(a) {
                            d(f), e = a
                        }
                    })
                } catch (g) {}
                a._definePropertyBroken = !0, b[c] = e
            }
            a.migrateVersion = "1.4.1";
            var f = {};
            a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
                f = {}, a.migrateWarnings.length = 0
            }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
            var g = a("<input/>", {
                    size: 1
                }).attr("size") && a.attrFn,
                h = a.attr,
                i = a.attrHooks.value && a.attrHooks.value.get || function() {
                    return null
                },
                j = a.attrHooks.value && a.attrHooks.value.set || function() {
                    return c
                },
                k = /^(?:input|button)$/i,
                l = /^[238]$/,
                m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                n = /^(?:checked|selected)$/i;
            e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
                var j = e.toLowerCase(),
                    o = b && b.nodeType;
                return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                    get: function(b, d) {
                        var e, f = a.prop(b, d);
                        return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                    },
                    set: function(b, c, d) {
                        var e;
                        return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                    }
                }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
            }, a.attrHooks.value = {
                get: function(a, b) {
                    var c = (a.nodeName || "").toLowerCase();
                    return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
                },
                set: function(a, b) {
                    var c = (a.nodeName || "").toLowerCase();
                    return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
                }
            };
            var o, p, q = a.fn.init,
                r = a.find,
                s = a.parseJSON,
                t = /^\s*</,
                u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
                v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
                w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
            a.fn.init = function(b, e, f) {
                var g, h;
                return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
            }, a.fn.init.prototype = a.fn, a.find = function(a) {
                var b = Array.prototype.slice.call(arguments);
                if ("string" == typeof a && u.test(a)) try {
                    document.querySelector(a)
                } catch (c) {
                    a = a.replace(v, function(a, b, c, d) {
                        return "[" + b + c + '"' + d + '"]'
                    });
                    try {
                        document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                    } catch (e) {
                        d("Attribute selector with '#' was not fixed: " + b[0])
                    }
                }
                return r.apply(this, b)
            };
            var x;
            for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
            a.parseJSON = function(a) {
                return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
            }, a.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
                function b(a, c) {
                    return new b.fn.init(a, c)
                }
                a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                    var f = a.fn.init.call(this, d, e, c);
                    return f instanceof b ? f : b(f)
                }, b.fn.init.prototype = b.fn;
                var c = b(document);
                return d("jQuery.sub() is deprecated"), b
            }, a.fn.size = function() {
                return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
            };
            var y = !1;
            a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
                var d = a.cssHooks[c] && a.cssHooks[c].get;
                d && (a.cssHooks[c].get = function() {
                    var a;
                    return y = !0, a = d.apply(this, arguments), y = !1, a
                })
            }), a.swap = function(a, b, c, e) {
                var f, g, h = {};
                y || d("jQuery.swap() is undocumented and deprecated");
                for (g in b) h[g] = a.style[g], a.style[g] = b[g];
                f = c.apply(a, e || []);
                for (g in b) a.style[g] = h[g];
                return f
            }, a.ajaxSetup({
                converters: {
                    "text json": a.parseJSON
                }
            });
            var z = a.fn.data;
            a.fn.data = function(b) {
                var e, f, g = this[0];
                return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
            };
            var A = /\/(java|ecma)script/i;
            a.clean || (a.clean = function(b, c, e, f) {
                c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
                var g, h, i, j, k = [];
                if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                    for (i = function(a) {
                            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                        }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
                return k
            });
            var B = a.event.add,
                C = a.event.remove,
                D = a.event.trigger,
                E = a.fn.toggle,
                F = a.fn.live,
                G = a.fn.die,
                H = a.fn.load,
                I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
                J = new RegExp("\\b(?:" + I + ")\\b"),
                K = /(?:^|\s)hover(\.\S+|)\b/,
                L = function(b) {
                    return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
                };
            a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
                a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
            }, a.event.remove = function(a, b, c, d, e) {
                C.call(this, a, L(b) || "", c, d, e)
            }, a.each(["load", "unload", "error"], function(b, c) {
                a.fn[c] = function() {
                    var a = Array.prototype.slice.call(arguments, 0);
                    return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
                }
            }), a.fn.toggle = function(b, c) {
                if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
                d("jQuery.fn.toggle(handler, handler...) is deprecated");
                var e = arguments,
                    f = b.guid || a.guid++,
                    g = 0,
                    h = function(c) {
                        var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                        return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                    };
                for (h.guid = f; g < e.length;) e[g++].guid = f;
                return this.click(h)
            }, a.fn.live = function(b, c, e) {
                return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
            }, a.fn.die = function(b, c) {
                return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
            }, a.event.trigger = function(a, b, c, e) {
                return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
            }, a.each(I.split("|"), function(b, c) {
                a.event.special[c] = {
                    setup: function() {
                        var b = this;
                        return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                            a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                        }), a._data(this, c, a.guid++)), !1
                    },
                    teardown: function() {
                        return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                    }
                }
            }), a.event.special.ready = {
                setup: function() {
                    this === document && d("'ready' event is deprecated")
                }
            };
            var M = a.fn.andSelf || a.fn.addBack,
                N = a.fn.find;
            if (a.fn.andSelf = function() {
                    return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
                }, a.fn.find = function(a) {
                    var b = N.apply(this, arguments);
                    return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
                }, a.Callbacks) {
                var O = a.Deferred,
                    P = [
                        ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                    ];
                a.Deferred = function(b) {
                    var c = O(),
                        e = c.promise();
                    return c.pipe = e.pipe = function() {
                        var b = arguments;
                        return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                            a.each(P, function(f, g) {
                                var h = a.isFunction(b[f]) && b[f];
                                c[g[1]](function() {
                                    var b = h && h.apply(this, arguments);
                                    b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                                })
                            }), b = null
                        }).promise()
                    }, c.isResolved = function() {
                        return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                    }, c.isRejected = function() {
                        return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                    }, b && b.call(c, c), c
                }
            }
        }(jQuery, window);
} catch (e) {
    console.error('Error in file:/media/jui/js/jquery-migrate.min.js?02b620a3a7b245efea0c8fbb845ca65b; Error:' + e.message);
};

/***!  /components/com_sppagebuilder/assets/js/sppagebuilder.js  !***/

try {
    + function(t) {
        "use strict";
        var e = '[data-dismiss="sppb-alert"]',
            i = function(i) {
                t(i).on("click", e, this.close)
            };
        i.VERSION = "3.2.0", i.prototype.close = function(e) {
            function i() {
                s.detach().trigger("closed.sppb.alert").remove()
            }
            var n = t(this),
                o = n.attr("data-target");
            o || (o = (o = n.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
            var s = t(o);
            e && e.preventDefault(), s.length || (s = n.hasClass("sppb-alert") ? n : n.parent()), s.trigger(e = t.Event("close.sppb.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("sppb-fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i())
        };
        var n = t.fn.spbalert;
        t.fn.spbalert = function(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("sppb.alert");
                o || n.data("sppb.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
            })
        }, t.fn.spbalert.Constructor = i, t.fn.spbalert.noConflict = function() {
            return t.fn.spbalert = n, this
        }, t(document).on("click.sppb.alert.data-api", e, i.prototype.close)
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("sppb.carousel"),
                    s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    r = "string" == typeof e ? e : s.slide;
                o || n.data("sppb.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
            })
        }
        var i = function(e, i) {
            this.$element = t(e).on("keydown.sppb.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".sppb-carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.sppb.carousel", t.proxy(this.pause, this)).on("mouseleave.sppb.carousel", t.proxy(this.cycle, this))
        };
        i.VERSION = "3.2.0", i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0
        }, i.prototype.keydown = function(t) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }, i.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".sppb-item"), this.$items.index(t || this.$active)
        }, i.prototype.to = function(e) {
            var i = this,
                n = this.getItemIndex(this.$active = this.$element.find(".sppb-item.active"));
            if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.sppb.carousel", function() {
                i.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
        }, i.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function() {
            if (!this.sliding) return this.slide("next")
        }, i.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev")
        }, i.prototype.slide = function(e, i) {
            var n = this.$element.find(".sppb-item.active"),
                o = i || n[e](),
                s = this.interval,
                r = "next" == e ? "left" : "right",
                a = "next" == e ? "first" : "last",
                p = this;
            if (!o.length) {
                if (!this.options.wrap) return;
                o = this.$element.find(".sppb-item")[a]()
            }
            if (o.hasClass("active")) return this.sliding = !1;
            var l = o[0],
                h = t.Event("slide.sppb.carousel", {
                    relatedTarget: l,
                    direction: r
                });
            if (this.$element.trigger(h), !h.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var c = t(this.$indicators.children()[this.getItemIndex(o)]);
                    c && c.addClass("active")
                }
                var d = t.Event("slid.sppb.carousel", {
                    relatedTarget: l,
                    direction: r
                });
                return t.support.transition && this.$element.hasClass("sppb-slide") ? (o.addClass(e), o[0].offsetWidth, n.addClass(r), o.addClass(r), n.one("bsTransitionEnd", function() {
                    o.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), p.sliding = !1, setTimeout(function() {
                        p.$element.trigger(d)
                    }, 0)
                }).emulateTransitionEnd(1e3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
            }
        };
        var n = t.fn.sppbcarousel;
        t.fn.sppbcarousel = e, t.fn.sppbcarousel.Constructor = i, t.fn.sppbcarousel.noConflict = function() {
            return t.fn.sppbcarousel = n, this
        }, t(document).ready(function() {
            t(".sppb-carousel").each(function(e) {
                var i = t(this).find(".sppb-item"),
                    n = "sppb-carousel" + (e + 1),
                    o = "";
                t(this).attr("id", n);
                for (var s = 0; s < i.length; s++) o += 0 == s ? '<li data-sppb-target="#' + n + '" class="active" data-sppb-slide-to="0"></li>' : '\n<li data-sppb-target="#' + n + '" data-sppb-slide-to="' + s + '"></li>';
                t(this).find(">.sppb-carousel-indicators").html(o), t(this).find(".sppb-carousel-control").attr("href", "#" + n), t(this).find(".sppb-item").first().addClass("active")
            })
        }), t(document).on("click.sppb.carousel.data-api", "[data-slide], [data-sppb-slide-to]", function(i) {
            var n, o = t(this),
                s = t(o.attr("data-sppb-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (s.hasClass("sppb-carousel")) {
                var r = t.extend({}, s.data(), o.data()),
                    a = o.attr("data-sppb-slide-to");
                a && (r.interval = !1), e.call(s, r), a && s.data("sppb.carousel").to(a), i.preventDefault()
            }
        }), t(window).on("load", function() {
            t('[data-sppb-ride="sppb-carousel"]').each(function() {
                var i = t(this);
                e.call(i, i.data())
            })
        })
    }(jQuery),
    function(t) {
        "use strict";
        t(document).on("click", ".sppb-panel-heading", function(e) {
            e.preventDefault();
            var i = t(this).closest(".sppb-panel-group").find(">div"),
                n = i.find(".sppb-panel-heading"),
                o = i.find(".sppb-panel-collapse");
            t(this).hasClass("active") ? (t(this).removeClass("active"), o.slideUp()) : (n.removeClass("active"), o.slideUp(), t(this).addClass("active").next().slideDown())
        })
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("sppb.tab");
                o || n.data("sppb.tab", o = new i(this)), "string" == typeof e && o[e]()
            })
        }
        var i = function(e) {
            this.element = t(e)
        };
        i.VERSION = "3.2.0", i.prototype.show = function() {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
            if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = i.find(".active:last a")[0],
                    s = t.Event("show.sppb.tab", {
                        relatedTarget: o
                    });
                if (e.trigger(s), !s.isDefaultPrevented()) {
                    var r = t(n);
                    this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                        e.trigger({
                            type: "shown.sppb.tab",
                            relatedTarget: o
                        })
                    })
                }
            }
        }, i.prototype.activate = function(e, i, n) {
            function o() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("sppb-fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
            }
            var s = i.find("> .active"),
                r = n && t.support.transition && s.hasClass("sppb-fade");
            r ? s.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), s.removeClass("in")
        };
        var n = t.fn.sppbtab;
        t.fn.sppbtab = e, t.fn.sppbtab.Constructor = i, t.fn.sppbtab.noConflict = function() {
            return t.fn.sppbtab = n, this
        }, t(document).ready(function() {
            t(".sppb-tab").each(function(e) {
                var i = "sppb-tab" + (e + 1);
                t(this).find(">.sppb-nav").children().each(function(e) {
                    t(this).find(">a").attr("href", "#" + i + "-" + (e + 1))
                }), t(this).find(">.sppb-tab-content").children().each(function(e) {
                    t(this).attr("id", i + "-" + (e + 1))
                })
            })
        }), t(document).on("click.sppb.tab.data-api", '[data-toggle="sppb-tab"], [data-toggle="sppb-pill"]', function(i) {
            i.preventDefault(), e.call(t(this), "show")
        })
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(t, e) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("sppbtooltip", t, e)
        };
        e.VERSION = "3.2.0", e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="sppb-tooltip" role="tooltip"><div class="sppb-tooltip-arrow"></div><div class="sppb-tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, e.prototype.init = function(e, i, n) {
            this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
            for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
                var r = o[s];
                if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != r) {
                    var a = "hover" == r ? "mouseenter" : "focusin",
                        p = "hover" == r ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(p + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, e.prototype.getDefaults = function() {
            return e.DEFAULTS
        }, e.prototype.getOptions = function(e) {
            return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, e.prototype.getDelegateOptions = function() {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, function(t, n) {
                i[t] != n && (e[t] = n)
            }), e
        }, e.prototype.enter = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("sppb." + this.type);
            if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("sppb." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)
        }, e.prototype.leave = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("sppb." + this.type);
            if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("sppb." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)
        }, e.prototype.show = function() {
            var e = t.Event("show.sppb." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var i = t.contains(document.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !i) return;
                var n = this,
                    o = this.tip(),
                    s = this.getUID(this.type);
                this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("sppb-fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                    a = /\s?auto?\s?/i,
                    p = a.test(r);
                p && (r = r.replace(a, "") || "top"), o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(r).data("sppb." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
                var l = this.getPosition(),
                    h = o[0].offsetWidth,
                    c = o[0].offsetHeight;
                if (p) {
                    var d = r,
                        u = this.$element.parent(),
                        f = this.getPosition(u);
                    r = "bottom" == r && l.top + l.height + c - f.scroll > f.height ? "top" : "top" == r && l.top - f.scroll - c < 0 ? "bottom" : "right" == r && l.right + h > f.width ? "left" : "left" == r && l.left - h < f.left ? "right" : r, o.removeClass(d).addClass(r)
                }
                var v = this.getCalculatedOffset(r, l, h, c);
                this.applyPlacement(v, r);
                var b = function() {
                    n.$element.trigger("shown.sppb." + n.type), n.hoverState = null
                };
                t.support.transition && this.$tip.hasClass("sppb-") ? o.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
            }
        }, e.prototype.applyPlacement = function(e, i) {
            var n = this.tip(),
                o = n[0].offsetWidth,
                s = n[0].offsetHeight,
                r = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
                using: function(t) {
                    n.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), n.addClass("in");
            var p = n[0].offsetWidth,
                l = n[0].offsetHeight;
            "top" == i && l != s && (e.top = e.top + s - l);
            var h = this.getViewportAdjustedDelta(i, e, p, l);
            h.left ? e.left += h.left : e.top += h.top;
            var c = h.left ? 2 * h.left - o + p : 2 * h.top - s + l,
                d = h.left ? "left" : "top",
                u = h.left ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(c, n[0][u], d)
        }, e.prototype.replaceArrow = function(t, e, i) {
            this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
        }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".sppb-tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("sppb-fade in top bottom left right")
        }, e.prototype.hide = function() {
            function e() {
                "in" != i.hoverState && n.detach(), i.$element.trigger("hidden.sppb." + i.type)
            }
            var i = this,
                n = this.tip(),
                o = t.Event("hide.sppb." + this.type);
            if (this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), !o.isDefaultPrevented()) return n.removeClass("in"), t.support.transition && this.$tip.hasClass("sppb-fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this
        }, e.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function() {
            return this.getTitle()
        }, e.prototype.getPosition = function(e) {
            var i = (e = e || this.$element)[0],
                n = "BODY" == i.tagName;
            return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
                width: n ? t(window).width() : e.outerWidth(),
                height: n ? t(window).height() : e.outerHeight()
            }, n ? {
                top: 0,
                left: 0
            } : e.offset())
        }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - i / 2
            } : "top" == t ? {
                top: e.top - n,
                left: e.left + e.width / 2 - i / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - n / 2,
                left: e.left - i
            } : {
                top: e.top + e.height / 2 - n / 2,
                left: e.left + e.width
            }
        }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var s = this.options.viewport && this.options.viewport.padding || 0,
                r = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - s - r.scroll,
                    p = e.top + s - r.scroll + n;
                a < r.top ? o.top = r.top - a : p > r.top + r.height && (o.top = r.top + r.height - p)
            } else {
                var l = e.left - s,
                    h = e.left + s + i;
                l < r.left ? o.left = r.left - l : h > r.width && (o.left = r.left + r.width - h)
            }
            return o
        }, e.prototype.getTitle = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, e.prototype.getUID = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, e.prototype.tip = function() {
            return this.$tip = this.$tip || t(this.options.template)
        }, e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".sppb-tooltip-arrow")
        }, e.prototype.validate = function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, e.prototype.enable = function() {
            this.enabled = !0
        }, e.prototype.disable = function() {
            this.enabled = !1
        }, e.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, e.prototype.toggle = function(e) {
            var i = this;
            e && ((i = t(e.currentTarget).data("sppb." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("sppb." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, e.prototype.destroy = function() {
            clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("sppb." + this.type)
        };
        var i = t.fn.sppbtooltip;
        t.fn.sppbtooltip = function(i) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("sppb.tooltip"),
                    s = "object" == typeof i && i;
                (o || "destroy" != i) && (o || n.data("sppb.tooltip", o = new e(this, s)), "string" == typeof i && o[i]())
            })
        }, t.fn.sppbtooltip.Constructor = e, t.fn.sppbtooltip.noConflict = function() {
            return t.fn.sppbtooltip = i, this
        }
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(t, e) {
            this.init("sppbpopover", t, e)
        };
        if (!t.fn.sppbtooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.2.0", e.DEFAULTS = t.extend({}, t.fn.sppbtooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="sppb-popover" role="tooltip"><div class="arrow"></div><h3 class="sppb-popover-title"></h3><div class="sppb-popover-content"></div></div>'
        }), e.prototype = t.extend({}, t.fn.sppbtooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
            return e.DEFAULTS
        }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".sppb-popover-title")[this.options.html ? "html" : "text"](e), t.find(".sppb-popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("sppb-fade top bottom left right in"), t.find(".sppb-popover-title").html() || t.find(".sppb-popover-title").hide()
        }, e.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, e.prototype.tip = function() {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        };
        var i = t.fn.sppbpopover;
        t.fn.sppbpopover = function(i) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("sppb.popover"),
                    s = "object" == typeof i && i;
                (o || "destroy" != i) && (o || n.data("sppb.popover", o = new e(this, s)), "string" == typeof i && o[i]())
            })
        }, t.fn.sppbpopover.Constructor = e, t.fn.sppbpopover.noConflict = function() {
            return t.fn.sppbpopover = i, this
        }
    }(jQuery),
    function(t) {
        "use strict";
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() {
                i = !0
            });
            return setTimeout(function() {
                i || t(n).trigger(t.support.transition.end)
            }, e), this
        }, t(function() {
            t.support.transition = function() {
                var t = document.createElement("bootstrap"),
                    e = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (var i in e)
                    if (void 0 !== t.style[i]) return {
                        end: e[i]
                    };
                return !1
            }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery), "undefined" != typeof jQuery && "undefined" != typeof MooTools && function(t) {
            t(document).ready(function() {
                t(".sppb-carousel").each(function(e, i) {
                    t(this)[e].slide = null
                })
            })
        }(jQuery),
        function(t, e, i, n) {
            "use strict";

            function o(e, i, n) {
                this.element = t(e), this._defaults = r, this._name = s, i = i.replace(/\.\w*$/, ""), this.settings = t.extend({}, r, n), this.path = i, this.init()
            }
            var s = "vide",
                r = {
                    volume: 1,
                    playbackRate: 1,
                    muted: !0,
                    loop: !0,
                    autoplay: !0,
                    position: "50% 50%"
                },
                a = /iPad|iPhone|iPod/i.test(n.userAgent),
                p = /Android/i.test(n.userAgent);
            t[s] = {
                lookup: []
            };
            o.prototype.init = function() {
                var e = this;
                this.wrapper = t("<div>");
                var i = function(t) {
                    for (var e, i = (t = "" + t).split(/\s+/), n = "50%", o = "50%", s = 0, r = i.length; s < r; s++) "left" === (e = i[s]) ? n = "0%" : "right" === e ? n = "100%" : "top" === e ? o = "0%" : "bottom" === e ? o = "100%" : "center" === e ? 0 === s ? n = "50%" : o = "50%" : 0 === s ? n = e : o = e;
                    return {
                        x: n,
                        y: o
                    }
                }(this.settings.position);
                if (this.wrapper.css({
                        position: "absolute",
                        "z-index": -1,
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        overflow: "hidden",
                        "-webkit-background-size": "cover",
                        "-moz-background-size": "cover",
                        "-o-background-size": "cover",
                        "background-size": "cover",
                        "background-repeat": "no-repeat",
                        "background-position": i.x + " " + i.y
                    }), t(this.element).data("vide-image") && this.wrapper.css("background-image", "url(" + t(this.element).data("vide-image") + ")"), "static" === this.element.css("position") && this.element.css("position", "relative"), this.element.prepend(this.wrapper), !a && !p) {
                    var n = "";
                    t(this.element).data("vide-mp4") && (n += "<source src='" + t(this.element).data("vide-mp4") + "' type='video/mp4'>"), t(this.element).data("vide-ogv") && (n += "<source src='" + t(this.element).data("vide-ogv") + "' type='video/ogg'>"), this.video = t("<video>" + n + "</video>"), this.video.css("visibility", "hidden"), this.video.prop({
                        autoplay: this.settings.autoplay,
                        loop: this.settings.loop,
                        volume: this.settings.volume,
                        muted: this.settings.muted,
                        playbackRate: this.settings.playbackRate
                    }), this.wrapper.append(this.video), this.video.css({
                        margin: "auto",
                        position: "absolute",
                        "z-index": -1,
                        top: i.y,
                        left: i.x,
                        "-webkit-transform": "translate(-" + i.x + ", -" + i.y + ")",
                        "-ms-transform": "translate(-" + i.x + ", -" + i.y + ")",
                        transform: "translate(-" + i.x + ", -" + i.y + ")"
                    }), this.video.bind("loadedmetadata." + s, function() {
                        e.video.css("visibility", "visible"), e.resize()
                    }), t(this.element).bind("resize." + s, function() {
                        e.resize()
                    })
                }
            }, o.prototype.getVideoObject = function() {
                return this.video ? this.video[0] : null
            }, o.prototype.resize = function() {
                if (this.video) {
                    var t = this.video[0].videoHeight,
                        e = this.video[0].videoWidth,
                        i = this.wrapper.height(),
                        n = this.wrapper.width();
                    n / e > i / t ? this.video.css({
                        width: n + 2,
                        height: "auto"
                    }) : this.video.css({
                        width: "auto",
                        height: i + 2
                    })
                }
            }, o.prototype.destroy = function() {
                this.element.unbind(s), this.video && this.video.unbind(s), delete t[s].lookup[this.index], this.element.removeData(s), this.wrapper.remove()
            }, t.fn[s] = function(e, i) {
                var n;
                return this.each(function() {
                    (n = t.data(this, s)) && n.destroy(), (n = new o(this, e, i)).index = t[s].lookup.push(n) - 1, t.data(this, s, n)
                }), this
            }, t(i).ready(function() {
                t(e).bind("resize." + s, function() {
                    for (var e, i = t[s].lookup.length, n = 0; n < i; n++)(e = t[s].lookup[n]) && e.resize()
                }), t(i).find("[data-" + s + "-bg]").each(function(e, i) {
                    var n = t(i),
                        o = n.data(s + "-options");
                    o = o ? function(t) {
                        var e, i, n, o, s = {};
                        for (i = 0, n = (e = t.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",")).length; i < n; i++) e[i] = e[i].split(":"), (o = e[i][1]) || (o = void 0), ("string" == typeof o || o instanceof String) && (o = "true" === o || "false" !== o && o), ("string" == typeof o || o instanceof String) && (o = isNaN(o) ? o : +o), s[e[i][0]] = o;
                        return s
                    }(o) : {}, n[s]("", o)
                })
            })
        }(window.jQuery, window, document, navigator),
        function() {
            var t, e, i, n = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                o = [].indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (e in this && this[e] === t) return e;
                    return -1
                };
            e = function() {
                function t() {}
                return t.prototype.extend = function(t, e) {
                    var i, n;
                    for (i in e) n = e[i], null == t[i] && (t[i] = n);
                    return t
                }, t.prototype.isMobile = function(t) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
                }, t
            }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
                function t() {
                    this.keys = [], this.values = []
                }
                return t.prototype.get = function(t) {
                    var e, i, n, o;
                    for (e = i = 0, n = (o = this.keys).length; n > i; e = ++i)
                        if (o[e] === t) return this.values[e]
                }, t.prototype.set = function(t, e) {
                    var i, n, o, s;
                    for (i = n = 0, o = (s = this.keys).length; o > n; i = ++n)
                        if (s[i] === t) return void(this.values[i] = e);
                    return this.keys.push(t), this.values.push(e)
                }, t
            }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
                function t() {
                    console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                }
                return t.notSupported = !0, t.prototype.observe = function() {}, t
            }()), this.SPPBWOW = function() {
                function s(t) {
                    null == t && (t = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i
                }
                return s.prototype.defaults = {
                    boxClass: "sppb-wow",
                    animateClass: "sppb-animated",
                    offset: 0,
                    mobile: !0,
                    live: !0
                }, s.prototype.init = function() {
                    var t;
                    return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
                }, s.prototype.start = function() {
                    var e, i, n, o;
                    if (this.stopped = !1, this.boxes = function() {
                            var t, i, n, o;
                            for (o = [], t = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > t; t++) e = n[t], o.push(e);
                            return o
                        }.call(this), this.all = function() {
                            var t, i, n, o;
                            for (o = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], o.push(e);
                            return o
                        }.call(this), this.boxes.length, this.disabled()) this.resetStyle();
                    else {
                        for (i = 0, n = (o = this.boxes).length; n > i; i++) e = o[i], this.applyStyle(e, !0);
                        window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                    }
                    return this.config.live ? new t(function(t) {
                        return function(e) {
                            var i, n, o, s, r;
                            for (r = [], o = 0, s = e.length; s > o; o++) n = e[o], r.push(function() {
                                var t, e, o, s;
                                for (s = [], t = 0, e = (o = n.addedNodes || []).length; e > t; t++) i = o[t], s.push(this.doSync(i));
                                return s
                            }.call(t));
                            return r
                        }
                    }(this)).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    }) : void 0
                }, s.prototype.stop = function() {
                    return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
                }, s.prototype.sync = function() {
                    return t.notSupported ? this.doSync(this.element) : void 0
                }, s.prototype.doSync = function(t) {
                    var e, i, n, s, r;
                    if (!this.stopped) {
                        if (null == t && (t = this.element), 1 !== t.nodeType) return;
                        for (r = [], i = 0, n = (s = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) e = s[i], o.call(this.all, e) < 0 ? (this.applyStyle(e, !0), this.boxes.push(e), this.all.push(e), r.push(this.scrolled = !0)) : r.push(void 0);
                        return r
                    }
                }, s.prototype.show = function(t) {
                    return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass
                }, s.prototype.applyStyle = function(t, e) {
                    var i, n, o;
                    return n = t.getAttribute("data-sppb-wow-duration"), i = t.getAttribute("data-sppb-wow-delay"), o = t.getAttribute("data-sppb-wow-iteration"), this.animate(function(s) {
                        return function() {
                            return s.customStyle(t, e, n, i, o)
                        }
                    }(this))
                }, s.prototype.animate = "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }, s.prototype.resetStyle = function() {
                    var t, e, i, n, o;
                    for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], o.push(t.setAttribute("style", "visibility: visible;"));
                    return o
                }, s.prototype.customStyle = function(t, e, i, n, o) {
                    return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                        animationDuration: i
                    }), n && this.vendorSet(t.style, {
                        animationDelay: n
                    }), o && this.vendorSet(t.style, {
                        animationIterationCount: o
                    }), this.vendorSet(t.style, {
                        animationName: e ? "none" : this.cachedAnimationName(t)
                    }), t
                }, s.prototype.vendors = ["moz", "webkit"], s.prototype.vendorSet = function(t, e) {
                    var i, n, o, s;
                    s = [];
                    for (i in e) n = e[i], t["" + i] = n, s.push(function() {
                        var e, s, r, a;
                        for (a = [], e = 0, s = (r = this.vendors).length; s > e; e++) o = r[e], a.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                        return a
                    }.call(this));
                    return s
                }, s.prototype.vendorCSS = function(t, e) {
                    var i, n, o, s, r, a;
                    for (i = (n = window.getComputedStyle(t)).getPropertyCSSValue(e), s = 0, r = (a = this.vendors).length; r > s; s++) o = a[s], i = i || n.getPropertyCSSValue("-" + o + "-" + e);
                    return i
                }, s.prototype.animationName = function(t) {
                    var e;
                    try {
                        e = this.vendorCSS(t, "animation-name").cssText
                    } catch (i) {
                        e = window.getComputedStyle(t).getPropertyValue("animation-name")
                    }
                    return "none" === e ? "" : e
                }, s.prototype.cacheAnimationName = function(t) {
                    return this.animationNameCache.set(t, this.animationName(t))
                }, s.prototype.cachedAnimationName = function(t) {
                    return this.animationNameCache.get(t)
                }, s.prototype.scrollHandler = function() {
                    return this.scrolled = !0
                }, s.prototype.scrollCallback = function() {
                    var t;
                    return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                        var e, i, n, o;
                        for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++)(t = n[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                        return o
                    }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
                }, s.prototype.offsetTop = function(t) {
                    for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                    for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                    return e
                }, s.prototype.isVisible = function(t) {
                    var e, i, n, o, s;
                    return i = t.getAttribute("data-sppb-wow-offset") || this.config.offset, s = window.pageYOffset, o = s + Math.min(this.element.clientHeight, innerHeight) - i, n = this.offsetTop(t), e = n + t.clientHeight, o >= n && e >= s
                }, s.prototype.util = function() {
                    return null != this._util ? this._util : this._util = new e
                }, s.prototype.disabled = function() {
                    return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                }, s
            }()
        }.call(this), jQuery(function(t) {
            (new SPPBWOW).init()
        }),
        function(t) {
            function e() {
                var e, o = t(),
                    l = 0;
                if (t.each(s, function(t, e) {
                        var i = e.data.selector,
                            n = e.$element;
                        o = o.add(i ? n.find(i) : n)
                    }), e = o.length)
                    for (i = i || function() {
                            var e, i, n = {
                                height: a.innerHeight,
                                width: a.innerWidth
                            };
                            return n.height || !(e = r.compatMode) && t.support.boxModel || (n = {
                                height: (i = "CSS1Compat" === e ? p : r.body).clientHeight,
                                width: i.clientWidth
                            }), n
                        }(), n = n || {
                            top: a.pageYOffset || p.scrollTop || r.body.scrollTop,
                            left: a.pageXOffset || p.scrollLeft || r.body.scrollLeft
                        }; l < e; l++)
                        if (t.contains(p, o[l])) {
                            var h, c, d, u = t(o[l]),
                                f = {
                                    height: u.height(),
                                    width: u.width()
                                },
                                v = u.offset(),
                                b = u.data("inview");
                            if (!n || !i) return;
                            v.top + f.height > n.top && v.top < n.top + i.height && v.left + f.width > n.left && v.left < n.left + i.width ? (d = (h = n.left > v.left ? "right" : n.left + i.width < v.left + f.width ? "left" : "both") + "-" + (c = n.top > v.top ? "bottom" : n.top + i.height < v.top + f.height ? "top" : "both"), b && b === d || u.data("inview", d).trigger("inview", [!0, h, c])) : b && u.data("inview", !1).trigger("inview", [!1])
                        }
            }
            var i, n, o, s = {},
                r = document,
                a = window,
                p = r.documentElement,
                l = t.expando;
            t.event.special.inview = {
                add: function(i) {
                    s[i.guid + "-" + this[l]] = {
                        data: i,
                        $element: t(this)
                    }, o || t.isEmptyObject(s) || (o = setInterval(e, 250))
                },
                remove: function(e) {
                    try {
                        delete s[e.guid + "-" + this[l]]
                    } catch (t) {}
                    t.isEmptyObject(s) && (clearInterval(o), o = null)
                }
            }, t(a).bind("scroll resize scrollstop", function() {
                i = n = null
            }), !p.addEventListener && p.attachEvent && p.attachEvent("onfocusin", function() {
                n = null
            }), t(document).on("inview", ".sppb-progress", function(e, i, n, o) {
                var s = t(this).find(".sppb-progress-bar");
                i && (s.css("width", s.data("width")), t(this).unbind("inview"))
            }), t.fn.sppbanimateNumbers = function(e, i, n, o) {
                return this.each(function() {
                    var s = t(this),
                        r = parseInt(s.text().replace(/,/g, ""));
                    i = void 0 === i || i, t({
                        value: r
                    }).animate({
                        value: e
                    }, {
                        duration: void 0 == n ? 1e3 : n,
                        easing: void 0 == o ? "swing" : o,
                        step: function() {
                            s.text(Math.floor(this.value)), i && s.text(s.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                        },
                        complete: function() {
                            parseInt(s.text()) !== e && (s.text(e), i && s.text(s.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                        }
                    })
                })
            }, t(document).on("inview", ".sppb-animated-number", function(e, i, n, o) {
                var s = t(this);
                i && (s.sppbanimateNumbers(s.data("digit"), !1, s.data("duration")), s.unbind("inview"))
            }), t(document).on("inview", ".sppb-pie-chart", function(e, i, n, o) {
                var s = t(this);
                i && (s.easyPieChart({
                    barColor: s.data("barcolor"),
                    trackColor: s.data("trackcolor"),
                    scaleColor: !1,
                    lineWidth: s.data("width"),
                    size: s.data("size"),
                    onStep: function(t, e, i) {
                        s.find(".sppb-chart-percent > span").text(Math.round(i) + "%")
                    }
                }), s.unbind("inview"))
            })
        }(jQuery), jQuery(function(t) {
            t(document).on("submit", ".sppb-ajaxt-contact-form", function(e) {
                e.preventDefault();
                var i = t(this),
                    n = t(this).serializeArray(),
                    o = {
                        option: "com_sppagebuilder",
                        task: "ajax",
                        addon: "ajax_contact",
                        "g-recaptcha-response": i.find("#g-recaptcha-response").val(),
                        data: n
                    };
                return t.ajax({
                    type: "POST",
                    data: o,
                    beforeSend: function() {
                        i.find(".fa").addClass("fa-spinner fa-spin")
                    },
                    success: function(e) {
                        var n = t.parseJSON(e);
                        try {
                            var o = t.parseJSON(n.data),
                                s = o.content,
                                r = "json"
                        } catch (t) {
                            var s = n.data,
                                r = "strings"
                        }
                        "json" == r ? o.status && i.trigger("reset") : i.trigger("reset"), i.find(".fa-spin").removeClass("fa-spinner fa-spin"), i.next(".sppb-ajax-contact-status").html(s).fadeIn().delay(4e3).fadeOut(500)
                    }
                }), !1
            })
        }), jQuery(function(t) {
            t(document).on("submit", ".sppb-optin-form", function(e) {
                e.preventDefault();
                var i = t(this),
                    n = {
                        option: "com_sppagebuilder",
                        task: "ajax",
                        addon: "optin_form",
                        data: t(this).serializeArray()
                    };
                return t.ajax({
                    type: "POST",
                    data: n,
                    beforeSend: function() {
                        i.find(".fa").addClass("fa-spinner fa-spin")
                    },
                    success: function(e) {
                        var n = t.parseJSON(e),
                            o = t.parseJSON(n.data),
                            s = "sppb-alert sppb-alert-warning";
                        if (o.status) {
                            s = "sppb-alert sppb-alert-success";
                            i.trigger("reset")
                        }
                        i.find(".fa-spin").removeClass("fa-spinner fa-spin"), i.next(".sppb-optin-form-status").html('<p class="' + s + '">' + o.content + "</p>").fadeIn().delay(4e3).fadeOut(1e3)
                    }
                }), !1
            })
        }), jQuery(function(t) {
            t(document).on("click", ".sppb-magnific-popup", function(e) {
                e.preventDefault();
                var i = t(this);
                i.magnificPopup({
                    type: i.data("popup_type"),
                    mainClass: i.data("mainclass")
                }).magnificPopup("open")
            })
        }), jQuery(function(t) {
            t(document).on("click", ".sppb-addon-sppb-flibox.flipon-click .sppb-flipbox-panel, .threeD-flipbox.flipon-click .threeD-content-wrap", function(e) {
                t(this).toggleClass("flip")
            }), t(document).on("mouseenter", ".sppb-addon-sppb-flibox.flipon-hover .sppb-flipbox-panel, .threeD-flipbox.flipon-hover .threeD-content-wrap", function() {
                t(this).addClass("flip")
            }), t(document).on("mouseleave", ".sppb-addon-sppb-flibox.flipon-hover .sppb-flipbox-panel, .threeD-flipbox.flipon-hover .threeD-content-wrap", function() {
                t(this).removeClass("flip")
            })
        }), jQuery(function(t) {
            new MutationObserver(function(e) {
                e.forEach(function(e) {
                    var i = e.addedNodes;
                    if (null !== i) {
                        t(i).each(function() {
                            t(this).find(".sppb-addon-countdown .sppb-countdown-timer").each(function() {
                                var e = t(this),
                                    i = e.data("date") + " " + e.data("time");
                                e.countdown(i, function(i) {
                                    t(this).html(i.strftime('<div class="sppb-countdown-days sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%-D</span><span class="sppb-countdown-text">%!D: ' + Joomla.JText._("COM_SPPAGEBUILDER_DAY") + "," + Joomla.JText._("COM_SPPAGEBUILDER_DAYS") + ';</span></div><div class="sppb-countdown-hours sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%H</span><span class="sppb-countdown-text">%!H: ' + Joomla.JText._("COM_SPPAGEBUILDER_HOUR") + "," + Joomla.JText._("COM_SPPAGEBUILDER_HOURS") + ';</span></div><div class="sppb-countdown-minutes sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%M</span><span class="sppb-countdown-text">%!M:' + Joomla.JText._("COM_SPPAGEBUILDER_MINUTE") + "," + Joomla.JText._("COM_SPPAGEBUILDER_MINUTES") + ';</span></div><div class="sppb-countdown-seconds sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%S</span><span class="sppb-countdown-text">%!S:' + Joomla.JText._("COM_SPPAGEBUILDER_SECOND") + "," + Joomla.JText._("COM_SPPAGEBUILDER_SECONDS") + ";</span></div>")).on("finish.countdown", function() {
                                        t(this).html('<div class="sppb-countdown-finishedtext-wrap sppb-col-xs-12 sppb-col-sm-12 sppb-text-center"><h3 class="sppb-countdown-finishedtext">' + e.data("finish-text") + "</h3></div>")
                                    })
                                })
                            })
                        })
                    }
                })
            }).observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }),
        function(t) {
            window.sppbVideoBackgroundResize = function(t) {
                t.find(".sppb-youtube-video-bg").removeClass("hidden");
                var e = t.innerWidth(),
                    i = t.innerHeight();
                iframeW = e, iframeH = e * (9 / 16), marginTop = -Math.round((iframeH - i) / 2), marginLeft = -Math.round((iframeW - e) / 2), e / i < 16 / 9 && (iframeW = i * (16 / 9), iframeH = i, marginLeft = -Math.round((iframeW - e) / 2), marginTop = -Math.round((iframeH - i) / 2)), t.find(".sppb-youtube-video-bg iframe").css({
                    maxWidth: "1000%",
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                    width: iframeW,
                    height: iframeH
                })
            }, t(window).on("load resize", function() {
                t(".sppb-row-have-ext-bg").each(function() {
                    sppbVideoBackgroundResize(t(this))
                })
            })
        }(jQuery);
} catch (e) {
    console.error('Error in file:/components/com_sppagebuilder/assets/js/sppagebuilder.js; Error:' + e.message);
};

/***!  /modules/mod_slideshowck/assets/jquery.easing.1.3.js  !***/

try {
    (function($, undefined) {
        $.easing.jswing = $.easing.swing, $.extend($.easing, {
            def: "easeOutQuad",
            swing: function(n, e, t, u, a) {
                return $.easing[$.easing.def](n, e, t, u, a)
            },
            easeInQuad: function(n, e, t, u, a) {
                return u * (e /= a) * e + t
            },
            easeOutQuad: function(n, e, t, u, a) {
                return -u * (e /= a) * (e - 2) + t
            },
            easeInOutQuad: function(n, e, t, u, a) {
                return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
            },
            easeInCubic: function(n, e, t, u, a) {
                return u * (e /= a) * e * e + t
            },
            easeOutCubic: function(n, e, t, u, a) {
                return u * ((e = e / a - 1) * e * e + 1) + t
            },
            easeInOutCubic: function(n, e, t, u, a) {
                return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
            },
            easeInQuart: function(n, e, t, u, a) {
                return u * (e /= a) * e * e * e + t
            },
            easeOutQuart: function(n, e, t, u, a) {
                return -u * ((e = e / a - 1) * e * e * e - 1) + t
            },
            easeInOutQuart: function(n, e, t, u, a) {
                return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
            },
            easeInQuint: function(n, e, t, u, a) {
                return u * (e /= a) * e * e * e * e + t
            },
            easeOutQuint: function(n, e, t, u, a) {
                return u * ((e = e / a - 1) * e * e * e * e + 1) + t
            },
            easeInOutQuint: function(n, e, t, u, a) {
                return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
            },
            easeInSine: function(n, e, t, u, a) {
                return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
            },
            easeOutSine: function(n, e, t, u, a) {
                return u * Math.sin(e / a * (Math.PI / 2)) + t
            },
            easeInOutSine: function(n, e, t, u, a) {
                return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
            },
            easeInExpo: function(n, e, t, u, a) {
                return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
            },
            easeOutExpo: function(n, e, t, u, a) {
                return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
            },
            easeInOutExpo: function(n, e, t, u, a) {
                return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
            },
            easeInCirc: function(n, e, t, u, a) {
                return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
            },
            easeOutCirc: function(n, e, t, u, a) {
                return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
            },
            easeInOutCirc: function(n, e, t, u, a) {
                return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
            },
            easeInElastic: function(n, e, t, u, a) {
                var r = 1.70158,
                    i = 0,
                    s = u;
                if (0 == e) return t;
                if (1 == (e /= a)) return t + u;
                if (i || (i = .3 * a), s < Math.abs(u)) {
                    s = u;
                    var r = i / 4
                } else var r = i / (2 * Math.PI) * Math.asin(u / s);
                return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
            },
            easeOutElastic: function(n, e, t, u, a) {
                var r = 1.70158,
                    i = 0,
                    s = u;
                if (0 == e) return t;
                if (1 == (e /= a)) return t + u;
                if (i || (i = .3 * a), s < Math.abs(u)) {
                    s = u;
                    var r = i / 4
                } else var r = i / (2 * Math.PI) * Math.asin(u / s);
                return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
            },
            easeInOutElastic: function(n, e, t, u, a) {
                var r = 1.70158,
                    i = 0,
                    s = u;
                if (0 == e) return t;
                if (2 == (e /= a / 2)) return t + u;
                if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
                    s = u;
                    var r = i / 4
                } else var r = i / (2 * Math.PI) * Math.asin(u / s);
                return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
            },
            easeInBack: function(n, e, t, u, a, r) {
                return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
            },
            easeOutBack: function(n, e, t, u, a, r) {
                return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
            },
            easeInOutBack: function(n, e, t, u, a, r) {
                return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
            },
            easeInBounce: function(n, e, t, u, a) {
                return u - $.easing.easeOutBounce(n, a - e, 0, u, a) + t
            },
            easeOutBounce: function(n, e, t, u, a) {
                return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
            },
            easeInOutBounce: function(n, e, t, u, a) {
                return a / 2 > e ? .5 * $.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * $.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
            }
        });
    })(jQuery);
} catch (e) {
    console.error('Error in file:/modules/mod_slideshowck/assets/jquery.easing.1.3.js; Error:' + e.message);
};

/***!  /modules/mod_slideshowck/assets/camera.min.js  !***/

try {
    ! function(a) {
        var t = function(e, r, o) {
            function n() {
                if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) return !0
            }

            function s() {
                c();
                var t = a(W).width();
                a("li", W).removeClass("camera_visThumb"), a("li", W).each(function() {
                    var e = a(this).position(),
                        i = (a("ul", W).outerWidth(), a("ul", W).offset().left),
                        r = a("> div", W).offset().left - i;
                    a(".camera_prevThumbs", pa).removeClass("hideNav").css("visibility", "visible"), a(".camera_nextThumbs", pa).removeClass("hideNav").css("visibility", "visible");
                    var o = e.left;
                    e.left + a(this).width() - r <= t && o - r >= 0 && a(this).addClass("camera_visThumb")
                })
            }

            function c() {
                a("ul", W).width(Y.length * (parseInt(r.thumbwidth) + 20))
            }

            function l() {
                var t = C.width() / 700;
                a(".camera_caption > div").css("font-size", t + "em")
            }

            function m() {
                if (ia = C.width(), -1 != r.height.indexOf("%")) {
                    var t = Math.round(ia / (100 / parseFloat(r.height)));
                    ra = "" != r.minHeight && t < parseFloat(r.minHeight) ? parseFloat(r.minHeight) : t, C.css({
                        height: ra
                    })
                } else "auto" == r.height ? ra = C.height() : (ra = parseFloat(r.height), C.css({
                    height: ra
                }));
                1 == r.fullpage ? (ra = a(window).height(), C.css({
                    height: ra
                })) : 0 != r.container && (ra = a(r.container).height()), C.css({
                    height: ra
                })
            }

            function h() {
                function t() {
                    ia = C.width(), m(), a(".camerarelative", F).css({
                        width: ia,
                        height: ra
                    }), a(".imgLoaded", F).each(function() {
                        var t, e, i = a(this),
                            o = i.attr("width"),
                            n = i.attr("height"),
                            s = (i.index(), i.attr("data-alignment")),
                            c = i.attr("data-portrait");
                        if ("kenburns" == r.fx) i.css({
                            position: "absolute",
                            visibility: "visible"
                        });
                        else if (void 0 !== s && !1 !== s && "" !== s || (s = r.alignment), void 0 !== c && !1 !== c && "" !== c || (c = r.portrait), 1 == r.fullpage) {
                            l = n / o;
                            t = 0, (d = (m = a(window).height()) / (h = a(window).width())) > l ? (imgH = m, imgW = imgH / l, e = Math.abs((h - imgW) / 2), t = 0) : (imgW = h, imgH = imgW * l, e = 0, t = 0), i.css({
                                height: imgH,
                                "margin-left": -e,
                                "margin-right": -e,
                                "margin-top": t,
                                position: "absolute",
                                visibility: "visible",
                                left: 0,
                                top: 0,
                                width: imgW
                            })
                        } else if (0 != r.container) {
                            var l = n / o,
                                m = a(r.container).height(),
                                h = a(r.container).width(),
                                d = m / h;
                            t = 0, d > l ? (imgH = m, imgW = imgH / l, e = Math.abs((h - imgW) / 2), t = 0) : (imgW = h, imgH = imgW * l, e = 0, t = 0), i.css({
                                height: imgH,
                                "margin-left": -e,
                                "margin-right": -e,
                                "margin-top": t,
                                position: "absolute",
                                visibility: "visible",
                                left: 0,
                                top: 0,
                                width: imgW
                            })
                        } else if (0 == c || "false" == c)
                            if (o / n < ia / ra) {
                                var p = ia / o,
                                    g = .5 * Math.abs(ra - n * p);
                                switch (s) {
                                    case "topLeft":
                                    case "topCenter":
                                    case "topRight":
                                        t = 0;
                                        break;
                                    case "centerLeft":
                                    case "center":
                                    case "centerRight":
                                        t = "-" + g + "px";
                                        break;
                                    case "bottomLeft":
                                    case "bottomCenter":
                                    case "bottomRight":
                                        t = "-" + 2 * g + "px"
                                }
                                i.css({
                                    height: n * p,
                                    "margin-left": 0,
                                    "margin-right": 0,
                                    "margin-top": t,
                                    position: "absolute",
                                    visibility: "visible",
                                    width: ia
                                })
                            } else {
                                var p = ra / n,
                                    g = .5 * Math.abs(ia - o * p);
                                switch (s) {
                                    case "topLeft":
                                        e = 0;
                                        break;
                                    case "topCenter":
                                        e = "-" + g + "px";
                                        break;
                                    case "topRight":
                                        e = "-" + 2 * g + "px";
                                        break;
                                    case "centerLeft":
                                        e = 0;
                                        break;
                                    case "center":
                                        e = "-" + g + "px";
                                        break;
                                    case "centerRight":
                                        e = "-" + 2 * g + "px";
                                        break;
                                    case "bottomLeft":
                                        e = 0;
                                        break;
                                    case "bottomCenter":
                                        e = "-" + g + "px";
                                        break;
                                    case "bottomRight":
                                        e = "-" + 2 * g + "px"
                                }
                                i.css({
                                    height: ra,
                                    "margin-left": e,
                                    "margin-right": e,
                                    "margin-top": 0,
                                    position: "absolute",
                                    visibility: "visible",
                                    width: o * p
                                })
                            }
                        else if (o / n < ia / ra) {
                            var p = ra / n,
                                g = .5 * Math.abs(ia - o * p);
                            switch (s) {
                                case "topLeft":
                                    e = 0;
                                    break;
                                case "topCenter":
                                    e = g + "px";
                                    break;
                                case "topRight":
                                    e = 2 * g + "px";
                                    break;
                                case "centerLeft":
                                    e = 0;
                                    break;
                                case "center":
                                    e = g + "px";
                                    break;
                                case "centerRight":
                                    e = 2 * g + "px";
                                    break;
                                case "bottomLeft":
                                    e = 0;
                                    break;
                                case "bottomCenter":
                                    e = g + "px";
                                    break;
                                case "bottomRight":
                                    e = 2 * g + "px"
                            }
                            i.css({
                                height: ra,
                                "margin-left": e,
                                "margin-right": e,
                                "margin-top": 0,
                                position: "absolute",
                                visibility: "visible",
                                width: o * p
                            })
                        } else {
                            var p = ia / o,
                                g = .5 * Math.abs(ra - n * p);
                            switch (s) {
                                case "topLeft":
                                case "topCenter":
                                case "topRight":
                                    t = 0;
                                    break;
                                case "centerLeft":
                                case "center":
                                case "centerRight":
                                    t = g + "px";
                                    break;
                                case "bottomLeft":
                                case "bottomCenter":
                                case "bottomRight":
                                    t = 2 * g + "px"
                            }
                            i.css({
                                height: n * p,
                                "margin-left": 0,
                                "margin-right": 0,
                                "margin-top": t,
                                position: "absolute",
                                visibility: "visible",
                                width: ia
                            })
                        }
                    })
                }
                var e;
                1 == ta ? (clearTimeout(e), e = setTimeout(t, 200)) : t(), ta = !0
            }

            function d() {
                a("iframe", k).each(function() {
                    a(".camera_caption", k).show();
                    var t = a(this),
                        e = t.attr("data-src");
                    t.attr("src", e);
                    var i = r.imagePath + "blank.gif",
                        o = new Image;
                    o.src = i, m(), t.after(a(o).attr({
                        class: "imgFake",
                        width: ia,
                        height: ra
                    }));
                    var n = t.clone();
                    t.remove(), a(o).bind("click", function() {
                        "absolute" == a(this).css("position") ? (a(this).remove(), autoplay = "", -1 != e.indexOf("vimeo") || -1 != e.indexOf("youtube") ? -1 != e.indexOf("?") ? autoplay = "&autoplay=1" : autoplay = "?autoplay=1" : -1 != e.indexOf("dailymotion") && (-1 != e.indexOf("?") ? autoplay = "&autoPlay=1" : autoplay = "?autoPlay=1"), n.attr("src", e + autoplay), ma = !0) : (a(this).css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 10
                        }).after(n), n.css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 9
                        }))
                    })
                })
            }

            function p(a) {
                for (var t, e, i = a.length; i; t = parseInt(Math.random() * i), e = a[--i], a[i] = a[t], a[t] = e);
                return a
            }

            function g() {
                if (a(W).length && !a(H).length) {
                    var t, e = a(W).outerWidth(),
                        i = (a("ul > li", W).outerWidth(), a("li.cameracurrent", W).length ? a("li.cameracurrent", W).position() : ""),
                        r = a("ul > li", W).length * a("ul > li", W).outerWidth(),
                        o = a("ul", W).offset().left,
                        n = a("> div", W).offset().left;
                    t = o < 0 ? "-" + (n - o) : n - o, 1 == _a && (ulthumbwidth = 0, a.each(Y, function(t, e) {
                        ulthumbwidth += parseFloat(a("li.pix_thumb_" + t, W).outerWidth()) + parseFloat(a("li.pix_thumb_" + t, W).css("marginLeft")) + parseFloat(a("li.pix_thumb_" + t, W).css("marginRight"))
                    }), a("ul", W).width(ulthumbwidth + 2), a(W).length && !a(H).lenght && C.css({
                        marginBottom: a(W).outerHeight()
                    }), s(), a(W).length && !a(H).lenght && C.css({
                        marginBottom: a(W).outerHeight()
                    })), _a = !1;
                    var c = a("li.cameracurrent", W).length ? i.left : "",
                        l = a("li.cameracurrent", W).length ? i.left + a("li.cameracurrent", W).outerWidth() : "";
                    c < a("li.cameracurrent", W).outerWidth() && (c = 0), l - t > e ? c + e < r ? a("ul", W).animate({
                        "margin-left": "-" + c + "px"
                    }, 500, s) : a("ul", W).animate({
                        "margin-left": "-" + (a("ul", W).outerWidth() - e) + "px"
                    }, 500, s) : c - t < 0 ? a("ul", W).animate({
                        "margin-left": "-" + c + "px"
                    }, 500, s) : (a("ul", W).css({
                        "margin-left": "auto",
                        "margin-right": "auto"
                    }), setTimeout(s, 100))
                }
            }

            function u() {
                fa = 0;
                var t = a(".camera_bar_cont", pa).width(),
                    e = a(".camera_bar_cont", pa).height();
                if ("pie" != T) switch (da) {
                    case "leftToRight":
                        a("#" + L).css({
                            right: t
                        });
                        break;
                    case "rightToLeft":
                        a("#" + L).css({
                            left: t
                        });
                        break;
                    case "topToBottom":
                        a("#" + L).css({
                            bottom: e
                        });
                        break;
                    case "bottomToTop":
                        a("#" + L).css({
                            top: e
                        })
                } else ba.clearRect(0, 0, r.pieDiameter, r.pieDiameter)
            }

            function f(t) {
                R.addClass("camerasliding"), ma = !1;
                var e = parseFloat(a("div.cameraSlide.cameracurrent", F).index());
                if (t > 0) i = t - 1;
                else if (e == $ - 1) i = 0;
                else var i = e + 1;
                var o = a(".cameraSlide:eq(" + i + ")", F),
                    s = a(".cameraSlide:eq(" + (i + 1) + ")", F).addClass("cameranext");
                if (e != i + 1 && s.hide(), a(".cameraContent", k).fadeOut(600), a(".camera_caption", k).show(), a(".camerarelative", o).append(a("> div ", R).eq(i).find("> div.camera_effected")), a(".camera_target_content .cameraContent:eq(" + i + ")", C).append(a("> div ", R).eq(i).find("> div")), a(".imgLoaded", o).length) {
                    if (E.length > i + 1 && !a(".imgLoaded", s).length) {
                        var c = E[i + 1],
                            l = new Image;
                        l.src = c, s.prepend(a(l).attr("class", "imgLoaded").css("visibility", "hidden")), l.onload = function() {
                            _a = l.naturalWidth, ya = l.naturalHeight, a(l).attr("data-alignment", X[i + 1]).attr("data-portrait", Q[i + 1]), a(l).attr("width", _a), a(l).attr("height", ya), a(l).attr("alt", U[i + 1]), h()
                        }
                    }
                    r.onLoaded.call(this);
                    var m, v, b, w, _, y = r.rows,
                        x = r.cols,
                        S = 1,
                        M = 0,
                        B = new Array("simpleFade", "curtainTopLeft", "curtainTopRight", "curtainBottomLeft", "curtainBottomRight", "curtainSliceLeft", "curtainSliceRight", "blindCurtainTopLeft", "blindCurtainTopRight", "blindCurtainBottomLeft", "blindCurtainBottomRight", "blindCurtainSliceBottom", "blindCurtainSliceTop", "stampede", "mosaic", "mosaicReverse", "mosaicRandom", "mosaicSpiral", "mosaicSpiralReverse", "topLeftBottomRight", "bottomRightTopLeft", "bottomLeftTopRight", "topRightBottomLeft", "scrollLeft", "scrollRight", "scrollTop", "scrollBottom", "scrollHorz");
                    marginLeft = 0, marginTop = 0, opacityOnGrid = 0, 1 == r.opacityOnGrid ? opacityOnGrid = 0 : opacityOnGrid = 1;
                    var q = a(" > div", R).eq(i).attr("data-fx");
                    if (w = n() && "" != r.mobileFx && "default" != r.mobileFx ? r.mobileFx : void 0 !== q && !1 !== q && "default" !== q ? q : r.fx, "random" == w ? (w = p(B), w = w[0]) : (w = w).indexOf(",") > 0 && (w = w.replace(/ /g, ""), w = w.split(","), w = p(w), w = w[0]), dataEasing = a(" > div", R).eq(i).attr("data-easing"), mobileEasing = a(" > div", R).eq(i).attr("data-mobileEasing"), _ = n() && "" != r.mobileEasing && "default" != r.mobileEasing ? "undefined" != typeof mobileEasing && !1 !== mobileEasing && "default" !== mobileEasing ? mobileEasing : r.mobileEasing : "undefined" != typeof dataEasing && !1 !== dataEasing && "default" !== dataEasing ? dataEasing : r.easing, void 0 !== (m = a(" > div", R).eq(i).attr("data-slideOn")) && !1 !== m) I = m;
                    else if ("random" == r.slideOn) {
                        var I = new Array("next", "prev");
                        I = p(I), I = I[0]
                    } else I = r.slideOn;
                    var O = a(" > div", R).eq(i).attr("data-time");
                    v = void 0 !== O && !1 !== O && "" !== O ? parseFloat(O) : r.time;
                    var A = a(" > div", R).eq(i).attr("data-transPeriod");
                    switch (b = void 0 !== A && !1 !== A && "" !== A ? parseFloat(A) : r.transPeriod, a(R).hasClass("camerastarted") || ("kenburns" != w && (w = "simpleFade"), I = "next", _ = "", b = 400, a(R).addClass("camerastarted")), w) {
                        case "simpleFade":
                        case "kenburns":
                            x = 1, y = 1;
                            break;
                        case "curtainTopLeft":
                        case "curtainTopRight":
                        case "curtainBottomLeft":
                        case "curtainBottomRight":
                        case "curtainSliceLeft":
                        case "curtainSliceRight":
                            x = 0 == r.slicedCols ? r.cols : r.slicedCols, y = 1;
                            break;
                        case "blindCurtainTopLeft":
                        case "blindCurtainTopRight":
                        case "blindCurtainBottomLeft":
                        case "blindCurtainBottomRight":
                        case "blindCurtainSliceTop":
                        case "blindCurtainSliceBottom":
                            y = 0 == r.slicedRows ? r.rows : r.slicedRows, x = 1;
                            break;
                        case "stampede":
                            M = "-" + b;
                            break;
                        case "mosaic":
                        case "mosaicReverse":
                            M = r.gridDifference;
                            break;
                        case "mosaicRandom":
                            break;
                        case "mosaicSpiral":
                        case "mosaicSpiralReverse":
                            M = r.gridDifference, S = 1.7;
                            break;
                        case "topLeftBottomRight":
                        case "bottomRightTopLeft":
                        case "bottomLeftTopRight":
                        case "topRightBottomLeft":
                            M = r.gridDifference, S = 6;
                            break;
                        case "scrollLeft":
                        case "scrollRight":
                        case "scrollTop":
                        case "scrollBottom":
                        case "scrollHorz":
                            x = 1, y = 1
                    }
                    for (var P, z, D = 0, G = y * x, N = ia - Math.floor(ia / x) * x, j = ra - Math.floor(ra / y) * y, Y = 0, J = 0, K = new Array, V = new Array, aa = new Array; D < G;) {
                        K.push(D), V.push(D), Z.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
                        var ta = a(".cameraappended:eq(" + D + ")", F);
                        "scrollLeft" == w || "scrollRight" == w || "scrollTop" == w || "scrollBottom" == w || "scrollHorz" == w ? ha.eq(i).clone().show().appendTo(ta) : "kenburns" != w && ("next" == I ? ha.eq(i).clone().show().appendTo(ta) : ha.eq(e).clone().show().appendTo(ta)), P = D % x < N ? 1 : 0, D % x == 0 && (Y = 0), z = Math.floor(D / x) < j ? 1 : 0, ta.css({
                            height: Math.floor(ra / y + z + 1),
                            left: Y,
                            top: J,
                            width: Math.floor(ia / x + P + 1)
                        }), a("> .cameraSlide", ta).css({
                            height: ra,
                            "margin-left": "-" + Y + "px",
                            "margin-top": "-" + J + "px",
                            width: ia
                        }), Y = Y + ta.width() - 1, D % x == x - 1 && (J = J + ta.height() - 1), D++
                    }
                    switch (w) {
                        case "curtainTopLeft":
                        case "curtainBottomLeft":
                        case "curtainSliceLeft":
                            break;
                        case "curtainTopRight":
                        case "curtainBottomRight":
                        case "curtainSliceRight":
                            K = K.reverse();
                            break;
                        case "blindCurtainTopLeft":
                            break;
                        case "blindCurtainBottomLeft":
                            K = K.reverse();
                            break;
                        case "blindCurtainSliceTop":
                        case "blindCurtainTopRight":
                            break;
                        case "blindCurtainBottomRight":
                        case "blindCurtainSliceBottom":
                            K = K.reverse();
                            break;
                        case "stampede":
                            K = p(K);
                            break;
                        case "mosaic":
                            break;
                        case "mosaicReverse":
                            K = K.reverse();
                            break;
                        case "mosaicRandom":
                            K = p(K);
                            break;
                        case "mosaicSpiral":
                            var ea = y / 2,
                                sa = 0;
                            for (ca = 0; ca < ea; ca++) {
                                for (la = ca, ga = ca; ga < x - ca - 1; ga++) aa[sa++] = la * x + ga;
                                for (ga = x - ca - 1, la = ca; la < y - ca - 1; la++) aa[sa++] = la * x + ga;
                                for (la = y - ca - 1, ga = x - ca - 1; ga > ca; ga--) aa[sa++] = la * x + ga;
                                for (ga = ca, la = y - ca - 1; la > ca; la--) aa[sa++] = la * x + ga
                            }
                            K = aa;
                            break;
                        case "mosaicSpiralReverse":
                            var ca, ea = y / 2,
                                sa = G - 1;
                            for (ca = 0; ca < ea; ca++) {
                                for (la = ca, ga = ca; ga < x - ca - 1; ga++) aa[sa--] = la * x + ga;
                                for (ga = x - ca - 1, la = ca; la < y - ca - 1; la++) aa[sa--] = la * x + ga;
                                for (la = y - ca - 1, ga = x - ca - 1; ga > ca; ga--) aa[sa--] = la * x + ga;
                                for (ga = ca, la = y - ca - 1; la > ca; la--) aa[sa--] = la * x + ga
                            }
                            K = aa;
                            break;
                        case "topLeftBottomRight":
                            for (la = 0; la < y; la++)
                                for (ga = 0; ga < x; ga++) aa.push(ga + la);
                            V = aa;
                            break;
                        case "bottomRightTopLeft":
                            for (la = 0; la < y; la++)
                                for (ga = 0; ga < x; ga++) aa.push(ga + la);
                            V = aa.reverse();
                            break;
                        case "bottomLeftTopRight":
                            for (la = y; la > 0; la--)
                                for (ga = 0; ga < x; ga++) aa.push(ga + la);
                            V = aa;
                            break;
                        case "topRightBottomLeft":
                            for (var la = 0; la < y; la++)
                                for (var ga = x; ga > 0; ga--) aa.push(ga + la);
                            V = aa
                    }
                    a.each(K, function(t, o) {
                        function n() {
                            if (a(this).addClass("cameraeased"), a(".cameraeased", F).length >= 0 && a(W).css({
                                    visibility: "visible"
                                }), a(".cameraeased", F).length == G) {
                                g(), a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", k).each(function() {
                                    a(this).css("visibility", "hidden")
                                }), ha.eq(i).show().css("z-index", "999").removeClass("cameranext").addClass("cameracurrent"), ha.eq(e).css("z-index", "1").removeClass("cameracurrent"), a(".cameraContent", k).eq(i).addClass("cameracurrent"), e >= 0 && a(".cameraContent", k).eq(e).removeClass("cameracurrent"), r.onEndTransition.call(this), "hide" != a("> div", R).eq(i).attr("data-video") && a(".cameraContent.cameracurrent .imgFake", k).length && a(".cameraContent.cameracurrent .imgFake", k).click();
                                var t = ha.eq(i).find(".fadeIn").length,
                                    o = a(".cameraContent", k).eq(i).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;
                                0 != t && a(".cameraSlide.cameracurrent .fadeIn", k).each(function() {
                                    if ("" != a(this).attr("data-easing")) e = a(this).attr("data-easing");
                                    else var e = _;
                                    var i = a(this);
                                    if (void 0 === i.attr("data-outerWidth") || !1 === i.attr("data-outerWidth") || "" === i.attr("data-outerWidth")) {
                                        r = i.outerWidth();
                                        i.attr("data-outerWidth", r)
                                    } else var r = i.attr("data-outerWidth");
                                    if (void 0 === i.attr("data-outerHeight") || !1 === i.attr("data-outerHeight") || "" === i.attr("data-outerHeight")) {
                                        o = i.outerHeight();
                                        i.attr("data-outerHeight", o)
                                    } else var o = i.attr("data-outerHeight");
                                    var n = i.position(),
                                        s = (n.left, n.top, i.attr("class")),
                                        c = i.index();
                                    i.parents(".camerarelative").outerHeight(), i.parents(".camerarelative").outerWidth(); - 1 != s.indexOf("fadeIn") ? i.animate({
                                        opacity: 0
                                    }, 0).css("visibility", "visible").delay(v / t * (.1 * (c - 1))).animate({
                                        opacity: 1
                                    }, v / t * .15, e) : i.css("visibility", "visible")
                                }), a(".cameraContent.cameracurrent", k).show(), 0 != o && a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom", k).each(function() {
                                    if ("" != a(this).attr("data-easing")) t = a(this).attr("data-easing");
                                    else var t = _;
                                    var e = a(this),
                                        i = e.position(),
                                        r = (i.left, i.top, e.attr("class")),
                                        n = e.index(),
                                        s = e.outerHeight(); - 1 != r.indexOf("moveFromLeft") ? (e.css({
                                        left: "-" + ia + "px",
                                        right: "auto"
                                    }), e.css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        left: i.left
                                    }, v / o * .15, t)) : -1 != r.indexOf("moveFromRight") ? (e.css({
                                        left: ia + "px",
                                        right: "auto"
                                    }), e.css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        left: i.left
                                    }, v / o * .15, t)) : -1 != r.indexOf("moveFromTop") ? (e.css({
                                        top: "-" + ra + "px",
                                        bottom: "auto"
                                    }), e.css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        top: i.top
                                    }, v / o * .15, t, function() {
                                        e.css({
                                            top: "auto",
                                            bottom: 0
                                        })
                                    })) : -1 != r.indexOf("moveFromBottom") ? (e.css({
                                        top: ra + "px",
                                        bottom: "auto"
                                    }), e.css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        top: i.top
                                    }, v / o * .15, t)) : -1 != r.indexOf("fadeFromLeft") ? (e.animate({
                                        opacity: 0
                                    }, 0).css({
                                        left: "-" + ia + "px",
                                        right: "auto"
                                    }), e.css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        left: i.left,
                                        opacity: 1
                                    }, v / o * .15, t)) : -1 != r.indexOf("fadeFromRight") ? (e.animate({
                                        opacity: 0
                                    }, 0).css({
                                        left: ia + "px",
                                        right: "auto"
                                    }), e.css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        left: i.left,
                                        opacity: 1
                                    }, v / o * .15, t)) : -1 != r.indexOf("fadeFromTop") ? (e.animate({
                                        opacity: 0
                                    }, 0).css({
                                        top: "-" + ra + "px",
                                        bottom: "auto"
                                    }), e.css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        top: i.top,
                                        opacity: 1
                                    }, v / o * .15, t, function() {
                                        e.css({
                                            top: "auto",
                                            bottom: 0
                                        })
                                    })) : -1 != r.indexOf("fadeFromBottom") ? (e.animate({
                                        opacity: 0
                                    }, 0).css({
                                        bottom: "-" + s + "px"
                                    }), e.css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        bottom: "0",
                                        opacity: 1
                                    }, v / o * .15, t)) : -1 != r.indexOf("fadeIn") ? e.animate({
                                        opacity: 0
                                    }, 0).css("visibility", "visible").delay(v / o * (.1 * (n - 1))).animate({
                                        opacity: 1
                                    }, v / o * .15, t) : e.css("visibility", "visible")
                                }), a(".cameraappended", F).remove(), R.removeClass("camerasliding"), ha.eq(e).hide();
                                var n, s = a(".camera_bar_cont", pa).width(),
                                    l = a(".camera_bar_cont", pa).height();
                                n = "pie" != T ? .05 : .005, a("#" + L).animate({
                                    opacity: r.loaderOpacity
                                }, 200), oa = setInterval(function() {
                                    if (R.hasClass("stopped") && clearInterval(oa), "pie" != T) switch (fa <= 1.002 && !R.hasClass("stopped") && !R.hasClass("paused") && !R.hasClass("hovered") ? fa += n : fa <= 1 && (R.hasClass("stopped") || R.hasClass("paused") || R.hasClass("stopped") || R.hasClass("hovered")) ? fa = fa : R.hasClass("stopped") || R.hasClass("paused") || R.hasClass("hovered") || (clearInterval(oa), d(), a("#" + L).animate({
                                        opacity: 0
                                    }, 200, function() {
                                        clearTimeout(na), na = setTimeout(u, c), f(), r.onStartLoading.call(this)
                                    })), da) {
                                        case "leftToRight":
                                            a("#" + L).animate({
                                                right: s - s * fa
                                            }, v * n, "linear");
                                            break;
                                        case "rightToLeft":
                                            a("#" + L).animate({
                                                left: s - s * fa
                                            }, v * n, "linear");
                                            break;
                                        case "topToBottom":
                                        case "bottomToTop":
                                            a("#" + L).animate({
                                                bottom: l - l * fa
                                            }, v * n, "linear")
                                    } else va = fa, ba.clearRect(0, 0, r.pieDiameter, r.pieDiameter), ba.globalCompositeOperation = "destination-over", ba.beginPath(), ba.arc(r.pieDiameter / 2, r.pieDiameter / 2, r.pieDiameter / 2 - r.loaderStroke, 0, 2 * Math.PI, !1), ba.lineWidth = r.loaderStroke, ba.strokeStyle = r.loaderBgColor, ba.stroke(), ba.closePath(), ba.globalCompositeOperation = "source-over", ba.beginPath(), ba.arc(r.pieDiameter / 2, r.pieDiameter / 2, r.pieDiameter / 2 - r.loaderStroke, 0, 2 * Math.PI * va, !1), ba.lineWidth = r.loaderStroke - 2 * r.loaderPadding, ba.strokeStyle = r.loaderColor, ba.stroke(), ba.closePath(), fa <= 1.002 && !R.hasClass("stopped") && !R.hasClass("paused") && !R.hasClass("hovered") ? fa += n : fa <= 1 && (R.hasClass("stopped") || R.hasClass("paused") || R.hasClass("hovered")) ? fa = fa : R.hasClass("stopped") || R.hasClass("paused") || R.hasClass("hovered") || (clearInterval(oa), d(), a("#" + L + ", .camera_canvas_wrap", pa).animate({
                                        opacity: 0
                                    }, 200, function() {
                                        clearTimeout(na), na = setTimeout(u, c), f(), r.onStartLoading.call(this)
                                    }))
                                }, v * n)
                            }
                        }
                        switch (P = o % x < N ? 1 : 0, o % x == 0 && (Y = 0), z = Math.floor(o / x) < j ? 1 : 0, w) {
                            case "simpleFade":
                            case "kenburns":
                                height = ra, width = ia, opacityOnGrid = 0;
                                break;
                            case "curtainTopLeft":
                            case "curtainTopRight":
                                height = 0, width = Math.floor(ia / x + P + 1), marginTop = "-" + Math.floor(ra / y + z + 1) + "px";
                                break;
                            case "curtainBottomLeft":
                            case "curtainBottomRight":
                                height = 0, width = Math.floor(ia / x + P + 1), marginTop = Math.floor(ra / y + z + 1) + "px";
                                break;
                            case "curtainSliceLeft":
                            case "curtainSliceRight":
                                height = 0, width = Math.floor(ia / x + P + 1), marginTop = o % 2 == 0 ? Math.floor(ra / y + z + 1) + "px" : "-" + Math.floor(ra / y + z + 1) + "px";
                                break;
                            case "blindCurtainTopLeft":
                                height = Math.floor(ra / y + z + 1), width = 0, marginLeft = "-" + Math.floor(ia / x + P + 1) + "px";
                                break;
                            case "blindCurtainTopRight":
                                height = Math.floor(ra / y + z + 1), width = 0, marginLeft = Math.floor(ia / x + P + 1) + "px";
                                break;
                            case "blindCurtainBottomLeft":
                                height = Math.floor(ra / y + z + 1), width = 0, marginLeft = "-" + Math.floor(ia / x + P + 1) + "px";
                                break;
                            case "blindCurtainBottomRight":
                                height = Math.floor(ra / y + z + 1), width = 0, marginLeft = Math.floor(ia / x + P + 1) + "px";
                                break;
                            case "blindCurtainSliceBottom":
                            case "blindCurtainSliceTop":
                                height = Math.floor(ra / y + z + 1), width = 0, marginLeft = o % 2 == 0 ? "-" + Math.floor(ia / x + P + 1) + "px" : Math.floor(ia / x + P + 1) + "px";
                                break;
                            case "stampede":
                                height = 0, width = 0, marginLeft = .2 * ia * (t % x - (x - Math.floor(x / 2))) + "px", marginTop = .2 * ra * (Math.floor(t / x) + 1 - (y - Math.floor(y / 2))) + "px";
                                break;
                            case "mosaic":
                                height = 0, width = 0;
                                break;
                            case "mosaicReverse":
                                height = 0, width = 0, marginLeft = Math.floor(ia / x + P + 1) + "px", marginTop = Math.floor(ra / y + z + 1) + "px";
                                break;
                            case "mosaicRandom":
                            case "mosaicSpiral":
                            case "mosaicSpiralReverse":
                                height = 0, width = 0, marginLeft = .5 * Math.floor(ia / x + P + 1) + "px", marginTop = .5 * Math.floor(ra / y + z + 1) + "px";
                                break;
                            case "topLeftBottomRight":
                                height = 0, width = 0;
                                break;
                            case "bottomRightTopLeft":
                                height = 0, width = 0, marginLeft = Math.floor(ia / x + P + 1) + "px", marginTop = Math.floor(ra / y + z + 1) + "px";
                                break;
                            case "bottomLeftTopRight":
                                height = 0, width = 0, marginLeft = 0, marginTop = Math.floor(ra / y + z + 1) + "px";
                                break;
                            case "topRightBottomLeft":
                                height = 0, width = 0, marginLeft = Math.floor(ia / x + P + 1) + "px", marginTop = 0;
                                break;
                            case "scrollRight":
                                height = ra, width = ia, marginLeft = -ia;
                                break;
                            case "scrollLeft":
                                height = ra, width = ia, marginLeft = ia;
                                break;
                            case "scrollTop":
                                height = ra, width = ia, marginTop = ra;
                                break;
                            case "scrollBottom":
                                height = ra, width = ia, marginTop = -ra;
                                break;
                            case "scrollHorz":
                                height = ra, width = ia, marginLeft = 0 == e && i == $ - 1 ? -ia : e < i || e == $ - 1 && 0 == i ? ia : -ia
                        }
                        var s = a(".cameraappended:eq(" + o + ")", F);
                        void 0 !== oa && (clearInterval(oa), clearTimeout(na), na = setTimeout(u, b + M)), a(H).length && (a(".camera_pag li", C).removeClass("cameracurrent"), a(".camera_pag li", C).eq(i).addClass("cameracurrent")), a(W).length && (a("li", W).removeClass("cameracurrent"), a("li", W).eq(i).addClass("cameracurrent"), a("li", W).not(".cameracurrent").find("img").animate({
                            opacity: .5
                        }, 0), a("li.cameracurrent img", W).animate({
                            opacity: 1
                        }, 0), a("li", W).hover(function() {
                            a("img", this).stop(!0, !1).animate({
                                opacity: 1
                            }, 150)
                        }, function() {
                            a(this).hasClass("cameracurrent") || a("img", this).stop(!0, !1).animate({
                                opacity: .5
                            }, 150)
                        }));
                        var c = parseFloat(b) + parseFloat(M);
                        if ("kenburns" != w) "scrollLeft" == w || "scrollRight" == w || "scrollTop" == w || "scrollBottom" == w || "scrollHorz" == w ? (r.onStartTransition.call(this), c = 0, s.delay((b + M) / G * V[t] * S * .5).css({
                            display: "block",
                            height: height,
                            "margin-left": marginLeft,
                            "margin-top": marginTop,
                            width: width
                        }).animate({
                            height: Math.floor(ra / y + z + 1),
                            "margin-top": 0,
                            "margin-left": 0,
                            width: Math.floor(ia / x + P + 1)
                        }, b - M, _, n), ha.eq(e).delay((b + M) / G * V[t] * S * .5).animate({
                            "margin-left": -1 * marginLeft,
                            "margin-top": -1 * marginTop
                        }, b - M, _, function() {
                            a(this).css({
                                "margin-top": 0,
                                "margin-left": 0
                            })
                        })) : (r.onStartTransition.call(this), c = parseFloat(b) + parseFloat(M), "next" == I ? s.delay((b + M) / G * V[t] * S * .5).css({
                            display: "block",
                            height: height,
                            "margin-left": marginLeft,
                            "margin-top": marginTop,
                            width: width,
                            opacity: opacityOnGrid
                        }).animate({
                            height: Math.floor(ra / y + z + 1),
                            "margin-top": 0,
                            "margin-left": 0,
                            opacity: 1,
                            width: Math.floor(ia / x + P + 1)
                        }, b - M, _, n) : (ha.eq(i).show().css("z-index", "999").addClass("cameracurrent"), ha.eq(e).css("z-index", "1").removeClass("cameracurrent"), a(".cameraContent", k).eq(i).addClass("cameracurrent"), a(".cameraContent", k).eq(e).removeClass("cameracurrent"), s.delay((b + M) / G * V[t] * S * .5).css({
                            display: "block",
                            height: Math.floor(ra / y + z + 1),
                            "margin-top": 0,
                            "margin-left": 0,
                            opacity: 1,
                            width: Math.floor(ia / x + P + 1)
                        }).animate({
                            height: height,
                            "margin-left": marginLeft,
                            "margin-top": marginTop,
                            width: width,
                            opacity: opacityOnGrid
                        }, b - M, _, n)));
                        else {
                            if (r.onStartTransition.call(this), c = 0, s.delay((b + M) / G * V[t] * S * .5).css({
                                    display: "block",
                                    "margin-left": marginLeft,
                                    "margin-top": marginTop
                                }).animate({
                                    "margin-top": 0,
                                    "margin-left": 0
                                }, b - M, _, n), Math.random() < .5) var l = "0",
                                m = "auto";
                            else var l = "auto",
                                m = "0";
                            if (Math.random() < .5) var h = "0",
                                p = "auto";
                            else var h = "auto",
                                p = "0";
                            ha.eq(i).css({
                                opacity: "0",
                                display: "block",
                                "z-index": ha.eq(e).css("z-index") + 1
                            }).animate({
                                opacity: "1"
                            }, {
                                duration: b - M,
                                easing: "linear",
                                complete: function() {
                                    n()
                                },
                                start: function(t, e) {
                                    a(this).find("img").stop(!0, !0).css({
                                        width: "100%",
                                        height: "100%",
                                        "margin-top": "0",
                                        "margin-left": "0",
                                        left: l,
                                        right: m,
                                        top: h,
                                        bottom: p
                                    }).animate({
                                        width: "130%",
                                        height: "130%"
                                    }, 2 * v)
                                }
                            })
                        }
                    })
                } else {
                    var ua = E[i],
                        wa = new Image;
                    wa.src = ua, o.css("visibility", "hidden"), o.prepend(a(wa).attr("class", "imgLoaded").css("visibility", "hidden"));
                    var _a, ya;
                    a(wa).get(0).complete && "0" != _a && "0" != ya && void 0 !== _a && !1 !== _a && void 0 !== ya && !1 !== ya || (a(".camera_loader", C).delay(500).fadeIn(400), wa.onload = function() {
                        _a = wa.naturalWidth, ya = wa.naturalHeight, a(wa).attr("data-alignment", X[i]).attr("data-portrait", Q[i]), a(wa).attr("width", _a), a(wa).attr("height", ya), a(wa).attr("alt", U[i]), F.find(".cameraSlide_" + i).css("visibility", "visible"), h(), f(i + 1), a(".camera_loader", C).is(":visible") ? a(".camera_loader", C).fadeOut(400) : (a(".camera_loader", C).css({
                            visibility: "hidden"
                        }), a(".camera_loader", C).fadeOut(400, function() {
                            a(".camera_loader", C).css({
                                visibility: "visible"
                            })
                        }))
                    })
                }
            }

            function v(a) {
                xa = 0, Ca = 0, ka = 0, Ta = 0, La = 0, Ra = 0, Fa = 0, Sa = 0, Ma = 0, qa = 0, Ia = null, Oa = null, ya = null, Ha = null, Wa = null
            }

            function b() {
                var a = Ca - Ta,
                    t = La - ka,
                    e = (Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(t, 2))), Math.atan2(t, a));
                (Ia = Math.round(180 * e / Math.PI)) < 0 && (Ia = 360 - Math.abs(Ia))
            }

            function w() {
                Oa = Ia <= 45 && Ia >= 0 ? "left" : Ia <= 360 && Ia >= 315 ? "left" : Ia >= 135 && Ia <= 225 ? "right" : Ia > 45 && Ia < 135 ? "down" : "up"
            }

            function _() {
                if ("left" == Oa) {
                    if (!R.hasClass("camerasliding")) {
                        t = parseFloat(a(".cameraSlide.cameracurrent", F).index());
                        clearInterval(oa), d(), a("#" + L + ", .camera_canvas_wrap", pa).animate({
                            opacity: 0
                        }, 0), u(), f(t == $ - 1 ? 1 : t + 2), r.onStartLoading.call(this)
                    }
                } else if ("right" == Oa && !R.hasClass("camerasliding")) {
                    var t = parseFloat(a(".cameraSlide.cameracurrent", F).index());
                    clearInterval(oa), d(), a("#" + L + ", .camera_canvas_wrap", pa).animate({
                        opacity: 0
                    }, 0), u(), f(0 != t ? t : $), r.onStartLoading.call(this)
                }
            }
            var y = {
                alignment: "center",
                autoAdvance: !0,
                mobileAutoAdvance: !0,
                barDirection: "leftToRight",
                barPosition: "bottom",
                cols: 6,
                easing: "easeInOutExpo",
                mobileEasing: "",
                fx: "random",
                mobileFx: "",
                gridDifference: 250,
                height: "50%",
                imagePath: "images/",
                hover: !0,
                loader: "pie",
                loaderColor: "#eeeeee",
                loaderBgColor: "#222222",
                loaderOpacity: .8,
                loaderPadding: 2,
                loaderStroke: 7,
                minHeight: "200px",
                navigation: !0,
                navigationHover: !0,
                mobileNavHover: !0,
                opacityOnGrid: !1,
                overlayer: !0,
                pagination: !0,
                playPause: !1,
                pauseOnClick: !0,
                pieDiameter: 38,
                piePosition: "rightTop",
                portrait: !1,
                rows: 4,
                slicedCols: 12,
                slicedRows: 8,
                slideOn: "random",
                thumbnails: !1,
                thumbheight: "100",
                thumbwidth: "75",
                time: 7e3,
                transPeriod: 1500,
                fullpage: !1,
                lightbox: "none",
                mobileimageresolution: 0,
                container: "",
                responsiveCaption: !1,
                onEndTransition: function() {},
                onLoaded: function() {},
                onStartLoading: function() {},
                onStartTransition: function() {}
            };
            if (!(this instanceof t)) return new t(e, r, o);
            var x = window.slideshowcks || [];
            if (!(x.indexOf(e) > -1)) {
                x.push(e), window.slideshowcks = x;
                var r = a.extend({}, y, r),
                    C = a(e).addClass("camera_wrap");
                1 == r.fullpage ? (a(document.body).css("background", "none").prepend(C), C.css({
                    height: "100%",
                    "margin-left": 0,
                    "margin-right": 0,
                    "margin-top": 0,
                    position: "fixed",
                    visibility: "visible",
                    left: 0,
                    right: 0,
                    top: 0,
                    "min-width": "100%",
                    "min-height": "100%",
                    width: "100%",
                    "z-index": "-1"
                })) : 0 != r.container && (a(r.container).css("background", "none").prepend('<div class="slideshowck_container_wrap"></div>'), a(".slideshowck_container_wrap", r.container).prepend(C), "relative" != a(r.container).css("position") && "absolute" != a(r.container).css("position") && a(r.container).css("position", "relative").css("z-index", "0"), C.parent(".slideshowck_container_wrap").css({
                    height: "100%",
                    "margin-left": 0,
                    "margin-right": 0,
                    "margin-top": 0,
                    position: "absolute",
                    visibility: "visible",
                    left: 0,
                    right: 0,
                    "min-width": "100%",
                    "min-height": "100%",
                    width: "100%",
                    overflow: "hidden",
                    "z-index": "-1"
                })), C.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');
                var k = a(".camera_fakehover", C);
                k.append('<div class="camera_target"></div>'), 1 == r.overlayer && k.append('<div class="camera_overlayer"></div>'), k.append('<div class="camera_target_content"></div>');
                var T;
                "pie" == (T = (navigator.userAgent.match(/MSIE 8.0/i) || navigator.userAgent.match(/MSIE 7.0/i) || navigator.userAgent.match(/MSIE 6.0/i)) && "none" != r.loader ? "bar" : r.loader) ? k.append('<div class="camera_pie"></div>'): "bar" == T ? k.append('<div class="camera_bar"></div>') : k.append('<div class="camera_bar" style="display:none"></div>'), 1 == r.playPause && k.append('<div class="camera_commands"></div>'), 1 == r.navigation && k.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'), 1 == r.thumbnails && C.append('<div class="camera_thumbs_cont" />'), 1 == r.thumbnails && 1 != r.pagination && a(".camera_thumbs_cont", C).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'), 1 == r.pagination && C.append('<div class="camera_pag"></div>'), C.append('<div class="camera_loader"></div>'), a(".camera_caption", C).each(function() {
                    a(this).wrapInner("<div />")
                });
                var L = "pie_" + C.attr("id"),
                    R = a(".camera_src", C),
                    F = a(".camera_target", C),
                    S = a(".camera_target_content", C),
                    M = a(".camera_pie", C),
                    B = a(".camera_bar", C),
                    q = a(".camera_prev", C),
                    I = a(".camera_next", C),
                    O = a(".camera_commands", C),
                    H = a(".camera_pag", C),
                    W = a(".camera_thumbs_cont", C),
                    A = parseInt(a(document.body).width());
                if (imgresolution = 0, r.mobileimageresolution) {
                    var P = r.mobileimageresolution.split(",");
                    for (i = 0; i < P.length; i++) A <= P[i] && (0 != imgresolution && P[i] <= imgresolution || 0 == imgresolution && A < Math.max.apply(Math, P)) && (imgresolution = P[i])
                }
                var z, E = new Array;
                a("> div", R).each(function() {
                    z = a(this).attr("data-src"), imgresolution && (imgsrctmp = z.split("/"), imgnametmp = imgsrctmp[imgsrctmp.length - 1], imgsrctmp[imgsrctmp.length - 1] = imgresolution + "/" + imgnametmp, z = imgsrctmp.join("/")), E.push(z)
                });
                var D = new Array,
                    G = new Array,
                    N = new Array;
                a("> div", R).each(function() {
                    a(this).attr("data-link") ? D.push(a(this).attr("data-link")) : D.push(""), a(this).attr("data-rel") ? G.push('rel="' + a(this).attr("data-rel") + '" ') : G.push(""), a(this).attr("data-title") ? N.push('title="' + a(this).attr("data-title") + '" ') : N.push("")
                });
                var j = new Array;
                a("> div", R).each(function() {
                    a(this).attr("data-target") ? j.push(a(this).attr("data-target")) : j.push("")
                });
                var Q = new Array;
                a("> div", R).each(function() {
                    a(this).attr("data-portrait") ? Q.push(a(this).attr("data-portrait")) : Q.push("")
                });
                var X = new Array;
                a("> div", R).each(function() {
                    a(this).attr("data-alignment") ? X.push(a(this).attr("data-alignment")) : X.push("")
                });
                var Y = new Array;
                a("> div", R).each(function() {
                    a(this).attr("data-thumb") ? Y.push(a(this).attr("data-thumb")) : Y.push("")
                });
                var $ = E.length;
                a(S).append('<div class="cameraContents" />');
                var J;
                for (J = 0; J < $; J++)
                    if (a(".cameraContents", S).append('<div class="cameraContent" />'), "" != D[J]) {
                        var K = a("> div ", R).eq(J).attr("data-box");
                        K = void 0 !== K && !1 !== K && "" != K ? 'data-box="' + a("> div ", R).eq(J).attr("data-box") + '"' : "", a(".camera_target_content .cameraContent:eq(" + J + ")", C).append('<a class="camera_link" ' + G[J] + N[J] + 'href="' + D[J] + '" ' + K + ' target="' + j[J] + '"></a>')
                    } var U = new Array;
                a(".camera_caption", C).each(function() {
                    var t = a(this).parent().index(),
                        e = C.find(".cameraContent").eq(t),
                        i = a(this).find(".camera_caption_title").text().trim(),
                        r = a(this).find(".camera_caption_desc").text().trim(),
                        o = i.length ? i : r || E[t];
                    U.push(o), a(this).appendTo(e)
                }), F.append('<div class="cameraCont" />');
                var V, Z = a(".cameraCont", C);
                for (V = 0; V < $; V++) {
                    Z.append('<div class="cameraSlide cameraSlide_' + V + '" />');
                    var aa = a("> div:eq(" + V + ")", R);
                    F.find(".cameraSlide_" + V).clone(aa)
                }
                a(window).bind("load resize pageshow", function() {
                    g(), s(), r.responsiveCaption && l()
                }), a(window).bind("cameraupdate", function() {
                    c(), a(window).trigger("resize")
                }), Z.append('<div class="cameraSlide cameraSlide_' + V + '" />');
                var ta;
                C.show();
                var ea, ia = F.width(),
                    ra = F.height();
                a(window).bind("resize pageshow", function() {
                    1 == ta && h(), a("ul", W).animate({
                        "margin-top": 0
                    }, 0, g), R.hasClass("paused") || (R.addClass("paused"), a(".camera_stop", pa).length ? (a(".camera_stop", pa).hide(), a(".camera_play", pa).show(), "none" != T && a("#" + L).hide()) : "none" != T && a("#" + L).hide(), clearTimeout(ea), ea = setTimeout(function() {
                        R.removeClass("paused"), a(".camera_play", pa).length ? (a(".camera_play", pa).hide(), a(".camera_stop", pa).show(), "none" != T && a("#" + L).fadeIn()) : "none" != T && a("#" + L).fadeIn()
                    }, 1500))
                }), m();
                var oa, na, sa, ca, la, ma;
                if (0 == (sa = n() && "" != r.mobileAutoAdvance ? r.mobileAutoAdvance : r.autoAdvance) && R.addClass("paused"), ca = n() && "" != r.mobileNavHover ? r.mobileNavHover : r.navigationHover, 0 != R.length) {
                    var ha = a(".cameraSlide", F);
                    ha.wrapInner('<div class="camerarelative" />');
                    var da = r.barDirection,
                        pa = C;
                    a("iframe", k).each(function() {
                        var t = a(this),
                            e = t.attr("src");
                        t.attr("data-src", e);
                        var i = t.parent().index("#" + C.attr("id") + " .camera_src > div");
                        a(".camera_target_content .cameraContent:eq(" + i + ")", C).append(t)
                    }), d(), 1 == r.hover && (n() || "kenburns" == r.fx || k.hover(function() {
                        R.addClass("hovered")
                    }, function() {
                        R.removeClass("hovered")
                    })), 1 == ca && (a(q, C).animate({
                        opacity: 0
                    }, 0), a(I, C).animate({
                        opacity: 0
                    }, 0), a(O, C).animate({
                        opacity: 0
                    }, 0), n() ? (k.on("vmouseover", function() {
                        a(q, C).animate({
                            opacity: 1
                        }, 200), a(I, C).animate({
                            opacity: 1
                        }, 200), a(O, C).animate({
                            opacity: 1
                        }, 200)
                    }), k.on("vmouseout", function() {
                        a(q, C).delay(500).animate({
                            opacity: 0
                        }, 200), a(I, C).delay(500).animate({
                            opacity: 0
                        }, 200), a(O, C).delay(500).animate({
                            opacity: 0
                        }, 200)
                    })) : k.hover(function() {
                        a(q, C).animate({
                            opacity: 1
                        }, 200), a(I, C).animate({
                            opacity: 1
                        }, 200), a(O, C).animate({
                            opacity: 1
                        }, 200)
                    }, function() {
                        a(q, C).animate({
                            opacity: 0
                        }, 200), a(I, C).animate({
                            opacity: 0
                        }, 200), a(O, C).animate({
                            opacity: 0
                        }, 200)
                    })), pa.on("click", ".camera_stop", function() {
                        sa = !1, R.addClass("paused"), a(".camera_stop", pa).length ? (a(".camera_stop", pa).hide(), a(".camera_play", pa).show(), "none" != T && a("#" + L).hide()) : "none" != T && a("#" + L).hide()
                    }), pa.on("click", ".camera_play", function() {
                        sa = !0, R.removeClass("paused"), a(".camera_play", pa).length ? (a(".camera_play", pa).hide(), a(".camera_stop", pa).show(), "none" != T && a("#" + L).show()) : "none" != T && a("#" + L).show()
                    }), 1 == r.pauseOnClick && a(".camera_target_content", k).mouseup(function() {
                        sa = !1, R.addClass("paused"), a(".camera_stop", pa).hide(), a(".camera_play", pa).show(), a("#" + L).hide()
                    }), a(".cameraContent, .imgFake", k).hover(function() {
                        la = !0
                    }, function() {
                        la = !1
                    }), a(".cameraContent, .imgFake", k).bind("click", function() {
                        1 == ma && 1 == la && (sa = !1, a(".camera_caption", k).hide(), R.addClass("paused"), a(".camera_stop", pa).hide(), a(".camera_play", pa).show(), a("#" + L).hide())
                    })
                }
                if ("pie" != T) {
                    switch (B.append('<span class="camera_bar_cont" />'), a(".camera_bar_cont", B).animate({
                        opacity: r.loaderOpacity
                    }, 0).css({
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        "background-color": r.loaderBgColor
                    }).append('<span id="' + L + '" />'), a("#" + L).animate({
                        opacity: 0
                    }, 0), (ga = a("#" + L)).css({
                        position: "absolute",
                        "background-color": r.loaderColor
                    }), r.barPosition) {
                        case "left":
                            B.css({
                                right: "auto",
                                width: r.loaderStroke
                            });
                            break;
                        case "right":
                            B.css({
                                left: "auto",
                                width: r.loaderStroke
                            });
                            break;
                        case "top":
                            B.css({
                                bottom: "auto",
                                height: r.loaderStroke
                            });
                            break;
                        case "bottom":
                            B.css({
                                top: "auto",
                                height: r.loaderStroke
                            })
                    }
                    switch (da) {
                        case "leftToRight":
                        case "rightToLeft":
                            ga.css({
                                left: 0,
                                right: 0,
                                top: r.loaderPadding,
                                bottom: r.loaderPadding
                            });
                            break;
                        case "topToBottom":
                        case "bottomToTop":
                            ga.css({
                                left: r.loaderPadding,
                                right: r.loaderPadding,
                                top: 0,
                                bottom: 0
                            })
                    }
                } else {
                    M.append('<canvas id="' + L + '"></canvas>');
                    var ga = document.getElementById(L);
                    ga.setAttribute("width", r.pieDiameter), ga.setAttribute("height", r.pieDiameter);
                    var ua;
                    switch (r.piePosition) {
                        case "leftTop":
                            ua = "left:0; top:0;";
                            break;
                        case "rightTop":
                            ua = "right:0; top:0;";
                            break;
                        case "leftBottom":
                            ua = "left:0; bottom:0;";
                            break;
                        case "rightBottom":
                            ua = "right:0; bottom:0;"
                    }
                    ga.setAttribute("style", "position:absolute; z-index:1002; " + ua);
                    var fa, va;
                    if (ga && ga.getContext) {
                        var ba = ga.getContext("2d");
                        ba.rotate(1.5 * Math.PI), ba.translate(-r.pieDiameter, 0)
                    }
                }
                if ("none" != T && 0 != sa || (a("#" + L).hide(), a(".camera_canvas_wrap", pa).hide()), a(H).length) {
                    a(H).append('<ul class="camera_pag_ul" />');
                    var wa;
                    for (wa = 0; wa < $; wa++) a(".camera_pag_ul", C).append('<li class="pag_nav_' + wa + '" style="position:relative; z-index:1002"><span><span>' + wa + "</span></span></li>");
                    a(".camera_pag_ul li", C).hover(function() {
                        if (a(this).addClass("camera_hover"), a(".camera_thumb", this).length) {
                            var t = a(".camera_thumb", this).outerWidth(),
                                e = a(".camera_thumb", this).outerHeight(),
                                i = a(this).outerWidth();
                            a(".camera_thumb", this).show().css({
                                top: "-" + e + "px",
                                left: "-" + (t - i) / 2 + "px"
                            }).animate({
                                opacity: 1,
                                "margin-top": "-3px"
                            }, 200), a(".thumb_arrow", this).show().animate({
                                opacity: 1,
                                "margin-top": "-3px"
                            }, 200)
                        }
                    }, function() {
                        a(this).removeClass("camera_hover"), a(".camera_thumb", this).animate({
                            "margin-top": "-20px",
                            opacity: 0
                        }, 200, function() {
                            a(this).css({
                                marginTop: "5px"
                            }).hide()
                        }), a(".thumb_arrow", this).animate({
                            "margin-top": "-20px",
                            opacity: 0
                        }, 200, function() {
                            a(this).css({
                                marginTop: "5px"
                            }).hide()
                        })
                    })
                }
                r.onStartLoading.call(this), f(), a(W).length ? a(H).length ? (a.each(Y, function(t, e) {
                    if ("" != a("> div", R).eq(t).attr("data-thumb")) {
                        var i = a("> div", R).eq(t).attr("data-thumb"),
                            r = new Image;
                        r.src = i, a("li.pag_nav_" + t, H).append(a(r).attr("class", "camera_thumb").css({
                            position: "absolute"
                        }).animate({
                            opacity: 0
                        }, 0)), a("li.pag_nav_" + t + " > img", H).after('<div class="thumb_arrow" />'), a("li.pag_nav_" + t + " > .thumb_arrow", H).animate({
                            opacity: 0
                        }, 0)
                    }
                }), C.css({
                    marginBottom: a(H).outerHeight()
                })) : (a(W).append("<div />"), a(W).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'), a("> div", W).append("<ul />"), a("ul", W).width(Y.length * (parseInt(r.thumbwidth) + 2)), a("ul", W).height(parseInt(r.thumbheight)), ulthumbwidth = 0, a.each(Y, function(t, e) {
                    if ("" != a("> div", R).eq(t).attr("data-thumb")) {
                        var i = a("> div", R).eq(t).attr("data-thumb"),
                            r = new Image;
                        r.src = i, a("ul", W).append('<li class="pix_thumb pix_thumb_' + t + '" />'), a("li.pix_thumb_" + t, W).append(a(r).attr("class", "camera_thumb")), ulthumbwidth += parseFloat(a("li.pix_thumb_" + t, W).outerWidth()) + parseFloat(a("li.pix_thumb_" + t, W).css("marginLeft")) + parseFloat(a("li.pix_thumb_" + t, W).css("marginRight"))
                    }
                }), a("ul", W).width(ulthumbwidth)) : !a(W).length && a(H).length && C.css({
                    marginBottom: a(H).outerHeight()
                });
                var _a = !0;
                a(O).length && (a(O).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'), 1 == sa ? (a(".camera_play", pa).hide(), a(".camera_stop", pa).show()) : (a(".camera_stop", pa).hide(), a(".camera_play", pa).show())), u(), a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", k).each(function() {
                    a(this).css("visibility", "hidden")
                }), "mediaboxck" == r.lightbox && "undefined" != typeof Mediabox ? Mediabox.scanPage() : "squeezebox" == r.lightbox && "undefined" != typeof SqueezeBox && (SqueezeBox.initialize({}), SqueezeBox.assign($$("a.camera_link[rel=lightbox]"), {})), a(q).length && a(q).click(function() {
                    if (!R.hasClass("camerasliding")) {
                        var t = parseFloat(a(".cameraSlide.cameracurrent", F).index());
                        clearInterval(oa), d(), a("#" + L + ", .camera_canvas_wrap", C).animate({
                            opacity: 0
                        }, 0), u(), f(0 != t ? t : $), r.onStartLoading.call(this)
                    }
                }), a(I).length && a(I).click(function() {
                    if (!R.hasClass("camerasliding")) {
                        var t = parseFloat(a(".cameraSlide.cameracurrent", F).index());
                        clearInterval(oa), d(), a("#" + L + ", .camera_canvas_wrap", pa).animate({
                            opacity: 0
                        }, 0), u(), f(t == $ - 1 ? 1 : t + 2), r.onStartLoading.call(this)
                    }
                });
                var ya = null,
                    xa = 0,
                    Ca = 0,
                    ka = 0,
                    Ta = 0,
                    La = 0,
                    Ra = 0,
                    Fa = 0,
                    Sa = 0,
                    Ma = 0,
                    Ba = 72,
                    qa = 0,
                    Ia = null,
                    Oa = null,
                    Ha = null,
                    Wa = null;
                n() && (k[0].addEventListener("touchstart", function(a) {
                    1 == (xa = a.touches.length) ? (Ca = a.touches[0].pageX, ka = a.touches[0].pageY, ya = "") : v(a)
                }, !1), k[0].addEventListener("touchmove", function(a) {
                    1 == a.touches.length ? (Ta = a.touches[0].pageX, La = a.touches[0].pageY) : v(a)
                }, !1), k[0].addEventListener("touchend", function(a) {
                    1 == xa && 0 != Ta && (qa = Math.round(Math.sqrt(Math.pow(Ta - Ca, 2) + Math.pow(La - ka, 2)))) >= Ba ? (b(), w(), _(), v(a)) : v(a)
                }, !1), k[0].addEventListener("touchcancel", v, !1)), a(H).length && a(".camera_pag li", C).click(function() {
                    if (!R.hasClass("camerasliding")) {
                        var t = parseFloat(a(this).index());
                        t != parseFloat(a(".cameraSlide.cameracurrent", F).index()) && (clearInterval(oa), d(), a("#" + L + ", .camera_canvas_wrap", pa).animate({
                            opacity: 0
                        }, 0), u(), f(t + 1), r.onStartLoading.call(this))
                    }
                }), a(W).length && (a(".pix_thumb img", W).click(function() {
                    if (!R.hasClass("camerasliding")) {
                        var t = parseFloat(a(this).parents("li").index());
                        t != parseFloat(a(".cameracurrent", F).index()) && (clearInterval(oa), d(), a("#" + L + ", .camera_canvas_wrap", pa).animate({
                            opacity: 0
                        }, 0), a(".pix_thumb", W).removeClass("cameracurrent"), a(this).parents("li").addClass("cameracurrent"), u(), f(t + 1), g(), r.onStartLoading.call(this))
                    }
                }), a(".camera_thumbs_cont .camera_prevThumbs", pa).hover(function() {
                    a(this).stop(!0, !1).animate({
                        opacity: 1
                    }, 250)
                }, function() {
                    a(this).stop(!0, !1).animate({
                        opacity: .7
                    }, 250)
                }), a(".camera_prevThumbs", pa).click(function() {
                    var t = 0,
                        e = (a(W).outerWidth(), a("ul", W).offset().left),
                        i = a("> div", W).offset().left - e;
                    a(".camera_visThumb", W).each(function() {
                        var e = a(this).outerWidth();
                        t += e
                    }), i - t > 0 ? a("ul", W).animate({
                        "margin-left": "-" + (i - t) + "px"
                    }, 500, s) : a("ul", W).animate({
                        "margin-left": 0
                    }, 500, s)
                }), a(".camera_thumbs_cont .camera_nextThumbs", pa).hover(function() {
                    a(this).stop(!0, !1).animate({
                        opacity: 1
                    }, 250)
                }, function() {
                    a(this).stop(!0, !1).animate({
                        opacity: .7
                    }, 250)
                }), a(".camera_nextThumbs", pa).click(function() {
                    var t = 0,
                        e = a(W).outerWidth(),
                        i = a("ul", W).outerWidth(),
                        r = a("ul", W).offset().left,
                        o = a("> div", W).offset().left - r;
                    a(".camera_visThumb", W).each(function() {
                        var e = a(this).outerWidth();
                        t += e
                    }), o + t + t < i ? a("ul", W).animate({
                        "margin-left": "-" + (o + t) + "px"
                    }, 500, s) : a("ul", W).animate({
                        "margin-left": "-" + (i - e) + "px"
                    }, 500, s)
                }))
            }
        };
        window.Slideshowck = t
    }(jQuery),
    function(a) {
        a.fn.cameraStop = function() {
            var t = a(this),
                e = a(".camera_src", t);
            t.index();
            if (e.addClass("stopped"), a(".camera_showcommands").length) a(".camera_thumbs_wrap", t);
            else;
        }
    }(jQuery),
    function(a) {
        a.fn.cameraPause = function() {
            var t = a(this);
            a(".camera_src", t).addClass("paused")
        }
    }(jQuery),
    function(a) {
        a.fn.cameraResume = function() {
            var t = a(this),
                e = a(".camera_src", t);
            "undefined" != typeof autoAdv && !0 === autoAdv || e.removeClass("paused")
        }
    }(jQuery);
} catch (e) {
    console.error('Error in file:/modules/mod_slideshowck/assets/camera.min.js; Error:' + e.message);
};

/***!  /components/com_sppagebuilder/assets/js/jquery.magnific-popup.min.js  !***/

try {
    ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(e) {
        var t, i, n, o, r, a, s = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            d = "Open",
            u = "Change",
            p = "mfp",
            f = "." + p,
            m = "mfp-ready",
            g = "mfp-removing",
            v = "mfp-prevent-close",
            h = function() {},
            y = !!window.jQuery,
            C = e(window),
            w = function(e, i) {
                t.ev.on(p + e + f, i)
            },
            b = function(t, i, n, o) {
                var r = document.createElement("div");
                return r.className = "mfp-" + t, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = e(r), i && r.appendTo(i)), r
            },
            I = function(i, n) {
                t.ev.triggerHandler(p + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
            },
            x = function(i) {
                return i === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = i), t.currTemplate.closeBtn
            },
            k = function() {
                e.magnificPopup.instance || ((t = new h).init(), e.magnificPopup.instance = t)
            };
        h.prototype = {
            constructor: h,
            init: function() {
                var i = navigator.appVersion;
                t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function() {
                    var e = document.createElement("p").style,
                        t = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== e.transition) return !0;
                    for (; t.length;)
                        if (t.pop() + "Transition" in e) return !0;
                    return !1
                }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
            },
            open: function(i) {
                var o;
                if (!1 === i.isObj) {
                    t.items = i.items.toArray(), t.index = 0;
                    var a, s = i.items;
                    for (o = 0; o < s.length; o++)
                        if ((a = s[o]).parsed && (a = a.el[0]), a === i.el[0]) {
                            t.index = o;
                            break
                        }
                } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0; {
                    if (!t.isOpen) {
                        t.types = [], r = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = b("bg").on("click" + f, function() {
                            t.close()
                        }), t.wrap = b("wrap").attr("tabindex", -1).on("click" + f, function(e) {
                            t._checkIfClose(e.target) && t.close()
                        }), t.container = b("container", t.wrap)), t.contentContainer = b("content"), t.st.preloader && (t.preloader = b("preloader", t.container, t.st.tLoading));
                        var l = e.magnificPopup.modules;
                        for (o = 0; o < l.length; o++) {
                            var u = l[o];
                            u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
                        }
                        I("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(c, function(e, t, i, n) {
                            i.close_replaceWith = x(n.type)
                        }), r += " mfp-close-btn-in") : t.wrap.append(x())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                            overflow: t.st.overflowY,
                            overflowX: "hidden",
                            overflowY: t.st.overflowY
                        }) : t.wrap.css({
                            top: C.scrollTop(),
                            position: "absolute"
                        }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                            height: n.height(),
                            position: "absolute"
                        }), t.st.enableEscapeKey && n.on("keyup" + f, function(e) {
                            27 === e.keyCode && t.close()
                        }), C.on("resize" + f, function() {
                            t.updateSize()
                        }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
                        var p = t.wH = C.height(),
                            g = {};
                        if (t.fixedContentPos && t._hasScrollBar(p)) {
                            var v = t._getScrollbarSize();
                            v && (g.marginRight = v)
                        }
                        t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");
                        var h = t.st.mainClass;
                        return t.isIE7 && (h += " mfp-ie7"), h && t._addClassToMFP(h), t.updateItemHTML(), I("BuildControls"), e("html").css(g), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                            t.content ? (t._addClassToMFP(m), t._setFocus()) : t.bgOverlay.addClass(m), n.on("focusin" + f, t._onFocusIn)
                        }, 16), t.isOpen = !0, t.updateSize(p), I(d), i
                    }
                    t.updateItemHTML()
                }
            },
            close: function() {
                t.isOpen && (I(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g), setTimeout(function() {
                    t._close()
                }, t.st.removalDelay)) : t._close())
            },
            _close: function() {
                I(s);
                var i = g + " " + m + " ";
                if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
                }
                n.off("keyup.mfp focusin" + f), t.ev.off(f), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, I("AfterClose")
            },
            updateSize: function(e) {
                if (t.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    t.wrap.css("height", n), t.wH = n
                } else t.wH = e || C.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), I("Resize")
            },
            updateItemHTML: function() {
                var i = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
                var n = i.type;
                if (I("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                    var r = !!t.st[n] && t.st[n].markup;
                    I("FirstMarkupParse", r), t.currTemplate[n] = !r || e(r)
                }
                o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
                var a = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
                t.appendContent(a, n), i.preloaded = !0, I(u, i), o = i.type, t.container.prepend(t.contentContainer), I("AfterChange")
            },
            appendContent: function(e, i) {
                t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(x()) : t.content = e : t.content = "", I("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
            },
            parseEl: function(i) {
                var n, o = t.items[i];
                if (o.tagName ? o = {
                        el: e(o)
                    } : (n = o.type, o = {
                        data: o,
                        src: o.src
                    }), o.el) {
                    for (var r = t.types, a = 0; a < r.length; a++)
                        if (o.el.hasClass("mfp-" + r[a])) {
                            n = r[a];
                            break
                        } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, I("ElementParse", o), t.items[i]
            },
            addGroup: function(e, i) {
                var n = function(n) {
                    n.mfpEl = this, t._openClick(n, e, i)
                };
                i || (i = {});
                var o = "click.magnificPopup";
                i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
            },
            _openClick: function(i, n, o) {
                if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                    if (r)
                        if (e.isFunction(r)) {
                            if (!r.call(t)) return !0
                        } else if (C.width() < r) return !0;
                    i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
                }
            },
            updateStatus: function(e, n) {
                if (t.preloader) {
                    i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                    var o = {
                        status: e,
                        text: n
                    };
                    I("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), t.container.addClass("mfp-s-" + e), i = e
                }
            },
            _checkIfClose: function(i) {
                if (!e(i).hasClass(v)) {
                    var n = t.st.closeOnContentClick,
                        o = t.st.closeOnBgClick;
                    if (n && o) return !0;
                    if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                    if (i === t.content[0] || e.contains(t.content[0], i)) {
                        if (n) return !0
                    } else if (o && e.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || C.height())
            },
            _setFocus: function() {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function(i) {
                return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
            },
            _parseMarkup: function(t, i, n) {
                var o;
                n.data && (i = e.extend(n.data, i)), I(c, [t, i, n]), e.each(i, function(i, n) {
                    if (void 0 === n || !1 === n) return !0;
                    if ((o = i.split("_")).length > 1) {
                        var r = t.find(f + "-" + o[0]);
                        if (r.length > 0) {
                            var a = o[1];
                            "replaceWith" === a ? r[0] !== n[0] && r.replaceWith(n) : "img" === a ? r.is("img") ? r.attr("src", n) : r.replaceWith(e("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
                        }
                    } else t.find(f + "-" + i).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        }, e.magnificPopup = {
            instance: null,
            proto: h.prototype,
            modules: [],
            open: function(t, i) {
                return k(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
            },
            close: function() {
                return e.magnificPopup.instance && e.magnificPopup.instance.close()
            },
            registerModule: function(t, i) {
                i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, e.fn.magnificPopup = function(i) {
            k();
            var n = e(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var o, r = y ? n.data("magnificPopup") : n[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    r.items ? o = r.items[a] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                        mfpEl: o
                    }, n, r)
                } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
            else i = e.extend(!0, {}, i), y ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
            return n
        };
        var T, _, P, S = "inline",
            E = function() {
                P && (_.after(P.addClass(T)).detach(), P = null)
            };
        e.magnificPopup.registerModule(S, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    t.types.push(S), w(s + "." + S, function() {
                        E()
                    })
                },
                getInline: function(i, n) {
                    if (E(), i.src) {
                        var o = t.st.inline,
                            r = e(i.src);
                        if (r.length) {
                            var a = r[0].parentNode;
                            a && a.tagName && (_ || (T = o.hiddenClass, _ = b(T), T = "mfp-" + T), P = r.after(_).detach().removeClass(T)), t.updateStatus("ready")
                        } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                        return i.inlineElement = r, r
                    }
                    return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
                }
            }
        });
        var z, O = "ajax",
            M = function() {
                z && e(document.body).removeClass(z)
            },
            B = function() {
                M(), t.req && t.req.abort()
            };
        e.magnificPopup.registerModule(O, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    t.types.push(O), z = t.st.ajax.cursor, w(s + "." + O, B), w("BeforeChange." + O, B)
                },
                getAjax: function(i) {
                    z && e(document.body).addClass(z), t.updateStatus("loading");
                    var n = e.extend({
                        url: i.src,
                        success: function(n, o, r) {
                            var a = {
                                data: n,
                                xhr: r
                            };
                            I("ParseAjax", a), t.appendContent(e(a.data), O), i.finished = !0, M(), t._setFocus(), setTimeout(function() {
                                t.wrap.addClass(m)
                            }, 16), t.updateStatus("ready"), I("AjaxContentAdded")
                        },
                        error: function() {
                            M(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(n), ""
                }
            }
        });
        var L;
        e.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = t.st.image,
                        n = ".image";
                    t.types.push("image"), w(d + n, function() {
                        "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                    }), w(s + n, function() {
                        i.cursor && e(document.body).removeClass(i.cursor), C.off("resize" + f)
                    }), w("Resize" + n, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
                },
                resizeImage: function() {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var i = 0;
                        t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, I("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var i = 0,
                        n = e.img[0],
                        o = function(r) {
                            L && clearInterval(L), L = setInterval(function() {
                                return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(L), void(3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                            }, r)
                        };
                    o(1)
                },
                getImage: function(i, n) {
                    var o = 0,
                        r = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, I("ImageLoadComplete")) : 200 > ++o ? setTimeout(r, 100) : a())
                        },
                        a = function() {
                            i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        s = t.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return t._parseMarkup(n, {
                        title: function(i) {
                            if (i.data && void 0 !== i.data.title) return i.data.title;
                            var n = t.st.image.titleSrc;
                            if (n) {
                                if (e.isFunction(n)) return n.call(t, i);
                                if (i.el) return i.el.attr(n) || ""
                            }
                            return ""
                        }(i),
                        img_replaceWith: i.img
                    }, i), t.resizeImage(), i.hasSize ? (L && clearInterval(L), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
                }
            }
        });
        var H;
        e.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, i = t.st.zoom,
                        n = ".zoom";
                    if (i.enabled && t.supportsTransition) {
                        var o, r, a = i.duration,
                            c = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    r = "transition";
                                return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, t.css(o), t
                            },
                            d = function() {
                                t.content.css("visibility", "visible")
                            };
                        w("BuildControls" + n, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void d();
                                (r = c(e)).css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                    r.css(t._getOffset(!0)), o = setTimeout(function() {
                                        d(), setTimeout(function() {
                                            r.remove(), e = r = null, I("ZoomAnimationEnded")
                                        }, 16)
                                    }, a)
                                }, 16)
                            }
                        }), w(l + n, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                    if (!(e = t._getItemToZoom())) return;
                                    r = c(e)
                                }
                                r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                    r.css(t._getOffset())
                                }, 16)
                            }
                        }), w(s + n, function() {
                            t._allowZoom() && (d(), r && r.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === t.currItem.type
                },
                _getItemToZoom: function() {
                    return !!t.currItem.hasSize && t.currItem.img
                },
                _getOffset: function(i) {
                    var n, o = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                        r = parseInt(n.css("padding-top"), 10),
                        a = parseInt(n.css("padding-bottom"), 10);
                    o.top -= e(window).scrollTop() - r;
                    var s = {
                        width: n.width(),
                        height: (y ? n.innerHeight() : n[0].offsetHeight) - a - r
                    };
                    return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
                }
            }
        });
        var A = "iframe",
            F = function(e) {
                if (t.currTemplate[A]) {
                    var i = t.currTemplate[A].find("iframe");
                    i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"))
                }
            };
        e.magnificPopup.registerModule(A, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    t.types.push(A), w("BeforeChange", function(e, t, i) {
                        t !== i && (t === A ? F() : i === A && F(!0))
                    }), w(s + "." + A, function() {
                        F()
                    })
                },
                getIframe: function(i, n) {
                    var o = i.src,
                        r = t.st.iframe;
                    e.each(r.patterns, function() {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    });
                    var a = {};
                    return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(n, a, i), t.updateStatus("ready"), n
                }
            }
        });
        var j = function(e) {
                var i = t.items.length;
                return e > i - 1 ? e - i : 0 > e ? i + e : e
            },
            N = function(e, t, i) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = t.st.gallery,
                        o = ".mfp-gallery";
                    return t.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", w(d + o, function() {
                        i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                            return t.items.length > 1 ? (t.next(), !1) : void 0
                        }), n.on("keydown" + o, function(e) {
                            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                        })
                    }), w("UpdateStatus" + o, function(e, i) {
                        i.text && (i.text = N(i.text, t.currItem.index, t.items.length))
                    }), w(c + o, function(e, n, o, r) {
                        var a = t.items.length;
                        o.counter = a > 1 ? N(i.tCounter, r.index, a) : ""
                    }), w("BuildControls" + o, function() {
                        if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                            var n = i.arrowMarkup,
                                o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(v),
                                r = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(v);
                            o.click(function() {
                                t.prev()
                            }), r.click(function() {
                                t.next()
                            }), t.container.append(o.add(r))
                        }
                    }), w(u + o, function() {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                            t.preloadNearbyImages(), t._preloadTimeout = null
                        }, 16)
                    }), void w(s + o, function() {
                        n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                    }))
                },
                next: function() {
                    t.direction = !0, t.index = j(t.index + 1), t.updateItemHTML()
                },
                prev: function() {
                    t.direction = !1, t.index = j(t.index - 1), t.updateItemHTML()
                },
                goTo: function(e) {
                    t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, i = t.st.gallery.preload,
                        n = Math.min(i[0], t.items.length),
                        o = Math.min(i[1], t.items.length);
                    for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e)
                },
                _preloadItem: function(i) {
                    if (i = j(i), !t.items[i].preloaded) {
                        var n = t.items[i];
                        n.parsed || (n = t.parseEl(i)), I("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, I("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var W = "retina";
        e.magnificPopup.registerModule(W, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            i = e.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (w("ImageHasSize." + W, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), w("ElementParse." + W, function(t, n) {
                            n.src = e.replaceSrc(n, i)
                        }))
                    }
                }
            }
        }), k()
    });
} catch (e) {
    console.error('Error in file:/components/com_sppagebuilder/assets/js/jquery.magnific-popup.min.js; Error:' + e.message);
};

/***!  /templates/shaper_helix3/js/bootstrap.min.js  !***/

try {
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
        "use strict";
        var b = a.fn.jquery.split(" ")[0].split(".");
        if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(jQuery), + function(a) {
        "use strict";

        function b() {
            var a = document.createElement("bootstrap"),
                b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var c in b)
                if (void 0 !== a.style[c]) return {
                    end: b[c]
                };
            return !1
        }
        a.fn.emulateTransitionEnd = function(b) {
            var c = !1,
                d = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0
            });
            var e = function() {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b), this
        }, a(function() {
            a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function(b) {
                    if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var c = a(this),
                    e = c.data("bs.alert");
                e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
            })
        }
        var c = '[data-dismiss="alert"]',
            d = function(b) {
                a(b).on("click", c, this.close)
            };
        d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
            function c() {
                g.detach().trigger("closed.bs.alert").remove()
            }
            var e = a(this),
                f = e.attr("data-target");
            f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
            var g = a("#" === f ? [] : f);
            b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
        };
        var e = a.fn.alert;
        a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
            return a.fn.alert = e, this
        }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.button"),
                    f = "object" == typeof b && b;
                e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
            })
        }
        var c = function(b, d) {
            this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
        };
        c.VERSION = "3.3.7", c.DEFAULTS = {
            loadingText: "loading..."
        }, c.prototype.setState = function(b) {
            var c = "disabled",
                d = this.$element,
                e = d.is("input") ? "val" : "html",
                f = d.data();
            b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
                d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
            }, this), 0)
        }, c.prototype.toggle = function() {
            var a = !0,
                b = this.$element.closest('[data-toggle="buttons"]');
            if (b.length) {
                var c = this.$element.find("input");
                "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var d = a.fn.button;
        a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
            return a.fn.button = d, this
        }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
            a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
        })
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                    g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }
        var c = function(b, c) {
            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
        };
        c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, c.prototype.keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName)) {
                switch (a.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                a.preventDefault()
            }
        }, c.prototype.cycle = function(b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
        }, c.prototype.getItemIndex = function(a) {
            return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
        }, c.prototype.getItemForDirection = function(a, b) {
            var c = this.getItemIndex(b),
                d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
            if (d && !this.options.wrap) return b;
            var e = "prev" == a ? -1 : 1,
                f = (c + e) % this.$items.length;
            return this.$items.eq(f)
        }, c.prototype.to = function(a) {
            var b = this,
                c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                b.to(a)
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
        }, c.prototype.pause = function(b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, c.prototype.next = function() {
            if (!this.sliding) return this.slide("next")
        }, c.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev")
        }, c.prototype.slide = function(b, d) {
            var e = this.$element.find(".item.active"),
                f = d || this.getItemForDirection(b, e),
                g = this.interval,
                h = "next" == b ? "left" : "right",
                i = this;
            if (f.hasClass("active")) return this.sliding = !1;
            var j = f[0],
                k = a.Event("slide.bs.carousel", {
                    relatedTarget: j,
                    direction: h
                });
            if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                    l && l.addClass("active")
                }
                var m = a.Event("slid.bs.carousel", {
                    relatedTarget: j,
                    direction: h
                });
                return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                    f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                        i.$element.trigger(m)
                    }, 0)
                }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
            }
        };
        var d = a.fn.carousel;
        a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
            return a.fn.carousel = d, this
        };
        var e = function(c) {
            var d, e = a(this),
                f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data()),
                    h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
            }
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
            a('[data-ride="carousel"]').each(function() {
                var c = a(this);
                b.call(c, c.data())
            })
        })
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
            return a(d)
        }

        function c(b) {
            return this.each(function() {
                var c = a(this),
                    e = c.data("bs.collapse"),
                    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
            })
        }
        var d = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
            toggle: !0
        }, d.prototype.dimension = function() {
            var a = this.$element.hasClass("width");
            return a ? "width" : "height"
        }, d.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                    var f = a.Event("show.bs.collapse");
                    if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                        e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                        var g = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var h = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!a.support.transition) return h.call(this);
                        var i = a.camelCase(["scroll", g].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                    }
                }
            }
        }, d.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var e = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                }
            }
        }, d.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, d.prototype.getParent = function() {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e)
            }, this)).end()
        }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
            var c = a.hasClass("in");
            a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
        };
        var e = a.fn.collapse;
        a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
            return a.fn.collapse = e, this
        }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
            var e = a(this);
            e.attr("data-target") || d.preventDefault();
            var f = b(e),
                g = f.data("bs.collapse"),
                h = g ? "toggle" : e.data();
            c.call(f, h)
        })
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            var c = b.attr("data-target");
            c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
            var d = c && a(c);
            return d && d.length ? d : b.parent()
        }

        function c(c) {
            c && 3 === c.which || (a(e).remove(), a(f).each(function() {
                var d = a(this),
                    e = b(d),
                    f = {
                        relatedTarget: this
                    };
                e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
            }))
        }

        function d(b) {
            return this.each(function() {
                var c = a(this),
                    d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
            })
        }
        var e = ".dropdown-backdrop",
            f = '[data-toggle="dropdown"]',
            g = function(b) {
                a(b).on("click.bs.dropdown", this.toggle)
            };
        g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
            var e = a(this);
            if (!e.is(".disabled, :disabled")) {
                var f = b(e),
                    g = f.hasClass("open");
                if (c(), !g) {
                    "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                    var h = {
                        relatedTarget: this
                    };
                    if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                    e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
                }
                return !1
            }
        }, g.prototype.keydown = function(c) {
            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                var d = a(this);
                if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                    var e = b(d),
                        g = e.hasClass("open");
                    if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                    var h = " li:not(.disabled):visible a",
                        i = e.find(".dropdown-menu" + h);
                    if (i.length) {
                        var j = i.index(c.target);
                        38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                    }
                }
            }
        };
        var h = a.fn.dropdown;
        a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
            return a.fn.dropdown = h, this
        }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
            a.stopPropagation()
        }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
    }(jQuery), + function(a) {
        "use strict";

        function b(b, d) {
            return this.each(function() {
                var e = a(this),
                    f = e.data("bs.modal"),
                    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
            })
        }
        var c = function(b, c) {
            this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, c.prototype.toggle = function(a) {
            return this.isShown ? this.hide() : this.show(a)
        }, c.prototype.show = function(b) {
            var d = this,
                e = a.Event("show.bs.modal", {
                    relatedTarget: b
                });
            this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                    a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var e = a.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                var f = a.Event("shown.bs.modal", {
                    relatedTarget: b
                });
                e ? d.$dialog.one("bsTransitionEnd", function() {
                    d.$element.trigger("focus").trigger(f)
                }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
            }))
        }, c.prototype.hide = function(b) {
            b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
        }, c.prototype.enforceFocus = function() {
            a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
                document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
            }, this))
        }, c.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
                27 == a.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, c.prototype.resize = function() {
            this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
        }, c.prototype.hideModal = function() {
            var a = this;
            this.$element.hide(), this.backdrop(function() {
                a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
            })
        }, c.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, c.prototype.backdrop = function(b) {
            var d = this,
                e = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var f = a.support.transition && e;
                if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var g = function() {
                    d.removeBackdrop(), b && b()
                };
                a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
            } else b && b()
        }, c.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, c.prototype.adjustDialog = function() {
            var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
            })
        }, c.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, c.prototype.checkScrollbar = function() {
            var a = window.innerWidth;
            if (!a) {
                var b = document.documentElement.getBoundingClientRect();
                a = b.right - Math.abs(b.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
        }, c.prototype.setScrollbar = function() {
            var a = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
        }, c.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, c.prototype.measureScrollbar = function() {
            var a = document.createElement("div");
            a.className = "modal-scrollbar-measure", this.$body.append(a);
            var b = a.offsetWidth - a.clientWidth;
            return this.$body[0].removeChild(a), b
        };
        var d = a.fn.modal;
        a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
            return a.fn.modal = d, this
        }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
            var d = a(this),
                e = d.attr("href"),
                f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
                g = f.data("bs.modal") ? "toggle" : a.extend({
                    remote: !/#/.test(e) && e
                }, f.data(), d.data());
            d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
                a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                    d.is(":visible") && d.trigger("focus")
                })
            }), b.call(f, g, this)
        })
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.tooltip"),
                    f = "object" == typeof b && b;
                !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
        };
        c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, c.prototype.init = function(b, c, d) {
            if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                var g = e[f];
                if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                else if ("manual" != g) {
                    var h = "hover" == g ? "mouseenter" : "focusin",
                        i = "hover" == g ? "mouseleave" : "focusout";
                    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, c.prototype.getDefaults = function() {
            return c.DEFAULTS
        }, c.prototype.getOptions = function(b) {
            return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        }, c.prototype.getDelegateOptions = function() {
            var b = {},
                c = this.getDefaults();
            return this._options && a.each(this._options, function(a, d) {
                c[a] != d && (b[a] = d)
            }), b
        }, c.prototype.enter = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show)) : c.show())
        }, c.prototype.isInStateTrue = function() {
            for (var a in this.inState)
                if (this.inState[a]) return !0;
            return !1
        }, c.prototype.leave = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) : c.hide()
        }, c.prototype.show = function() {
            var b = a.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(b);
                var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (b.isDefaultPrevented() || !d) return;
                var e = this,
                    f = this.tip(),
                    g = this.getUID(this.type);
                this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                    i = /\s?auto?\s?/i,
                    j = i.test(h);
                j && (h = h.replace(i, "") || "top"), f.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var k = this.getPosition(),
                    l = f[0].offsetWidth,
                    m = f[0].offsetHeight;
                if (j) {
                    var n = h,
                        o = this.getPosition(this.$viewport);
                    h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
                }
                var p = this.getCalculatedOffset(h, k, l, m);
                this.applyPlacement(p, h);
                var q = function() {
                    var a = e.hoverState;
                    e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
                };
                a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
            }
        }, c.prototype.applyPlacement = function(b, c) {
            var d = this.tip(),
                e = d[0].offsetWidth,
                f = d[0].offsetHeight,
                g = parseInt(d.css("margin-top"), 10),
                h = parseInt(d.css("margin-left"), 10);
            isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
                using: function(a) {
                    d.css({
                        top: Math.round(a.top),
                        left: Math.round(a.left)
                    })
                }
            }, b), 0), d.addClass("in");
            var i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            "top" == c && j != f && (b.top = b.top + f - j);
            var k = this.getViewportAdjustedDelta(c, b, i, j);
            k.left ? b.left += k.left : b.top += k.top;
            var l = /top|bottom/.test(c),
                m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                n = l ? "offsetWidth" : "offsetHeight";
            d.offset(b), this.replaceArrow(m, d[0][n], l)
        }, c.prototype.replaceArrow = function(a, b, c) {
            this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
        }, c.prototype.setContent = function() {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        }, c.prototype.hide = function(b) {
            function d() {
                "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
            }
            var e = this,
                f = a(this.$tip),
                g = a.Event("hide.bs." + this.type);
            if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
        }, c.prototype.fixTitle = function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        }, c.prototype.hasContent = function() {
            return this.getTitle()
        }, c.prototype.getPosition = function(b) {
            b = b || this.$element;
            var c = b[0],
                d = "BODY" == c.tagName,
                e = c.getBoundingClientRect();
            null == e.width && (e = a.extend({}, e, {
                width: e.right - e.left,
                height: e.bottom - e.top
            }));
            var f = window.SVGElement && c instanceof window.SVGElement,
                g = d ? {
                    top: 0,
                    left: 0
                } : f ? null : b.offset(),
                h = {
                    scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
                },
                i = d ? {
                    width: a(window).width(),
                    height: a(window).height()
                } : null;
            return a.extend({}, e, h, i, g)
        }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
            return "bottom" == a ? {
                top: b.top + b.height,
                left: b.left + b.width / 2 - c / 2
            } : "top" == a ? {
                top: b.top - d,
                left: b.left + b.width / 2 - c / 2
            } : "left" == a ? {
                top: b.top + b.height / 2 - d / 2,
                left: b.left - c
            } : {
                top: b.top + b.height / 2 - d / 2,
                left: b.left + b.width
            }
        }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
            var e = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return e;
            var f = this.options.viewport && this.options.viewport.padding || 0,
                g = this.getPosition(this.$viewport);
            if (/right|left/.test(a)) {
                var h = b.top - f - g.scroll,
                    i = b.top + f - g.scroll + d;
                h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
            } else {
                var j = b.left - f,
                    k = b.left + f + c;
                j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
            }
            return e
        }, c.prototype.getTitle = function() {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        }, c.prototype.getUID = function(a) {
            do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
            return a
        }, c.prototype.tip = function() {
            if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, c.prototype.enable = function() {
            this.enabled = !0
        }, c.prototype.disable = function() {
            this.enabled = !1
        }, c.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, c.prototype.toggle = function(b) {
            var c = this;
            b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
        }, c.prototype.destroy = function() {
            var a = this;
            clearTimeout(this.timeout), this.hide(function() {
                a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
            })
        };
        var d = a.fn.tooltip;
        a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
            return a.fn.tooltip = d, this
        }
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.popover"),
                    f = "object" == typeof b && b;
                !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.init("popover", a, b)
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
            return c.DEFAULTS
        }, c.prototype.setContent = function() {
            var a = this.tip(),
                b = this.getTitle(),
                c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
        }, c.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, c.prototype.getContent = function() {
            var a = this.$element,
                b = this.options;
            return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        }, c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var d = a.fn.popover;
        a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
            return a.fn.popover = d, this
        }
    }(jQuery), + function(a) {
        "use strict";

        function b(c, d) {
            this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
        }

        function c(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }
        b.VERSION = "3.3.7", b.DEFAULTS = {
            offset: 10
        }, b.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, b.prototype.refresh = function() {
            var b = this,
                c = "offset",
                d = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var b = a(this),
                    e = b.data("target") || b.attr("href"),
                    f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [
                    [f[c]().top + d, e]
                ] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                b.offsets.push(this[0]), b.targets.push(this[1])
            })
        }, b.prototype.process = function() {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                c = this.getScrollHeight(),
                d = this.options.offset + c - this.$scrollElement.height(),
                e = this.offsets,
                f = this.targets,
                g = this.activeTarget;
            if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
            if (g && b < e[0]) return this.activeTarget = null, this.clear();
            for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
        }, b.prototype.activate = function(b) {
            this.activeTarget = b, this.clear();
            var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                d = a(c).parents("li").addClass("active");
            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
        }, b.prototype.clear = function() {
            a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var d = a.fn.scrollspy;
        a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
            return a.fn.scrollspy = d, this
        }, a(window).on("load.bs.scrollspy.data-api", function() {
            a('[data-spy="scroll"]').each(function() {
                var b = a(this);
                c.call(b, b.data())
            })
        })
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.tab");
                e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
            })
        }
        var c = function(b) {
            this.element = a(b)
        };
        c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
            var b = this.element,
                c = b.closest("ul:not(.dropdown-menu)"),
                d = b.data("target");
            if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                var e = c.find(".active:last a"),
                    f = a.Event("hide.bs.tab", {
                        relatedTarget: b[0]
                    }),
                    g = a.Event("show.bs.tab", {
                        relatedTarget: e[0]
                    });
                if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                    var h = a(d);
                    this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                        e.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: b[0]
                        }), b.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: e[0]
                        })
                    })
                }
            }
        }, c.prototype.activate = function(b, d, e) {
            function f() {
                g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
            }
            var g = d.find("> .active"),
                h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
            g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
        };
        var d = a.fn.tab;
        a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
            return a.fn.tab = d, this
        };
        var e = function(c) {
            c.preventDefault(), b.call(a(this), "show")
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.affix"),
                    f = "object" == typeof b && b;
                e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
            })
        }
        var c = function(b, d) {
            this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
            offset: 0,
            target: window
        }, c.prototype.getState = function(a, b, c, d) {
            var e = this.$target.scrollTop(),
                f = this.$element.offset(),
                g = this.$target.height();
            if (null != c && "top" == this.affixed) return e < c && "top";
            if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
            var h = null == this.affixed,
                i = h ? e : f.top,
                j = h ? g : b;
            return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
        }, c.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(c.RESET).addClass("affix");
            var a = this.$target.scrollTop(),
                b = this.$element.offset();
            return this.pinnedOffset = b.top - a
        }, c.prototype.checkPositionWithEventLoop = function() {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        }, c.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var b = this.$element.height(),
                    d = this.options.offset,
                    e = d.top,
                    f = d.bottom,
                    g = Math.max(a(document).height(), a(document.body).height());
                "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                var h = this.getState(g, b, e, f);
                if (this.affixed != h) {
                    null != this.unpin && this.$element.css("top", "");
                    var i = "affix" + (h ? "-" + h : ""),
                        j = a.Event(i + ".bs.affix");
                    if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                    this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == h && this.$element.offset({
                    top: g - b - f
                })
            }
        };
        var d = a.fn.affix;
        a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
            return a.fn.affix = d, this
        }, a(window).on("load", function() {
            a('[data-spy="affix"]').each(function() {
                var c = a(this),
                    d = c.data();
                d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
            })
        })
    }(jQuery);
} catch (e) {
    console.error('Error in file:/templates/shaper_helix3/js/bootstrap.min.js; Error:' + e.message);
};

/***!  /templates/shaper_helix3/js/jquery.sticky.js  !***/

try {
    (function($) {
        var defaults = {
                topSpacing: 0,
                bottomSpacing: 0,
                className: 'is-sticky',
                wrapperClassName: 'sticky-wrapper',
                center: false,
                getWidthFrom: '',
                responsiveWidth: false
            },
            $window = $(window),
            $document = $(document),
            sticked = [],
            windowHeight = $window.height(),
            scroller = function() {
                var scrollTop = $window.scrollTop(),
                    documentHeight = $document.height(),
                    dwh = documentHeight - windowHeight,
                    extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
                for (var i = 0; i < sticked.length; i++) {
                    var s = sticked[i],
                        elementTop = s.stickyWrapper.offset().top,
                        etse = elementTop - s.topSpacing - extra;
                    if (scrollTop <= etse) {
                        if (s.currentTop !== null) {
                            s.stickyElement.css('width', '').css('position', '').css('top', '');
                            s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
                            s.currentTop = null;
                        }
                    } else {
                        var newTop = documentHeight - s.stickyElement.outerHeight() -
                            s.topSpacing - s.bottomSpacing - scrollTop - extra;
                        if (newTop < 0) {
                            newTop = newTop + s.topSpacing;
                        } else {
                            newTop = s.topSpacing;
                        }
                        if (s.currentTop != newTop) {
                            s.stickyElement.css('width', s.stickyElement.width()).css('position', 'fixed').css('top', newTop);
                            if (typeof s.getWidthFrom !== 'undefined') {
                                s.stickyElement.css('width', $(s.getWidthFrom).width());
                            }
                            s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
                            s.currentTop = newTop;
                        }
                    }
                }
            },
            resizer = function() {
                windowHeight = $window.height();
                for (var i = 0; i < sticked.length; i++) {
                    var s = sticked[i];
                    if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
                        s.stickyElement.css('width', $(s.getWidthFrom).width());
                    }
                }
            },
            methods = {
                init: function(options) {
                    var o = $.extend({}, defaults, options);
                    return this.each(function() {
                        var stickyElement = $(this);
                        var stickyId = stickyElement.attr('id');
                        var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
                        var wrapper = $('<div></div>').attr('id', stickyId + '-sticky-wrapper').addClass(o.wrapperClassName);
                        stickyElement.wrapAll(wrapper);
                        if (o.center) {
                            stickyElement.parent().css({
                                width: stickyElement.outerWidth(),
                                marginLeft: "auto",
                                marginRight: "auto"
                            });
                        }
                        if (stickyElement.css("float") == "right") {
                            stickyElement.css({
                                "float": "none"
                            }).parent().css({
                                "float": "right"
                            });
                        }
                        var stickyWrapper = stickyElement.parent();
                        stickyWrapper.css('height', stickyElement.outerHeight());
                        sticked.push({
                            topSpacing: o.topSpacing,
                            bottomSpacing: o.bottomSpacing,
                            stickyElement: stickyElement,
                            currentTop: null,
                            stickyWrapper: stickyWrapper,
                            className: o.className,
                            getWidthFrom: o.getWidthFrom,
                            responsiveWidth: o.responsiveWidth
                        });
                    });
                },
                update: scroller,
                unstick: function(options) {
                    return this.each(function() {
                        var unstickyElement = $(this);
                        var removeIdx = -1;
                        for (var i = 0; i < sticked.length; i++) {
                            if (sticked[i].stickyElement.get(0) == unstickyElement.get(0)) {
                                removeIdx = i;
                            }
                        }
                        if (removeIdx != -1) {
                            sticked.splice(removeIdx, 1);
                            unstickyElement.unwrap();
                            unstickyElement.removeAttr('style');
                        }
                    });
                }
            };
        if (window.addEventListener) {
            window.addEventListener('scroll', scroller, false);
            window.addEventListener('resize', resizer, false);
        } else if (window.attachEvent) {
            window.attachEvent('onscroll', scroller);
            window.attachEvent('onresize', resizer);
        }
        $.fn.sticky = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.sticky');
            }
        };
        $.fn.unstick = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.unstick.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.sticky');
            }
        };
        $(function() {
            setTimeout(scroller, 0);
        });
    })(jQuery);
} catch (e) {
    console.error('Error in file:/templates/shaper_helix3/js/jquery.sticky.js; Error:' + e.message);
};

/***!  /templates/shaper_helix3/js/main.js  !***/

try {
    jQuery(function($) {
        if (typeof sp_offanimation === 'undefined' || sp_offanimation === '') {
            sp_offanimation = 'default';
        }
        if (sp_offanimation == 'default') {
            $('#offcanvas-toggler').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').addClass('offcanvas');
            });
            $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
            $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').removeClass('offcanvas');
            });
        }
        if (sp_offanimation == 'slidetop') {
            $('#offcanvas-toggler').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').addClass('slide-top-menu');
            });
            $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
            $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').removeClass('slide-top-menu');
            });
        }
        if (sp_offanimation == 'fullscreen') {
            $('#offcanvas-toggler').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').addClass('full-screen-off-canvas');
            });
            $(document).ready(function() {
                $('.off-canvas-menu-init').addClass('full-screen');
            });
            $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').removeClass('full-screen-off-canvas');
            });
        }
        if (sp_offanimation == 'fullScreen-top') {
            $('#offcanvas-toggler').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').addClass('full-screen-off-canvas-ftop');
            });
            $(document).ready(function() {
                $('.off-canvas-menu-init').addClass('full-screen-ftop');
            });
            $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').removeClass('full-screen-off-canvas-ftop');
            });
        }
        if (sp_offanimation == 'drarkplus') {
            $('#offcanvas-toggler').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').addClass('new-look-off-canvas');
            });
            $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
            $(document).ready(function() {
                $('.off-canvas-menu-init').addClass('new-look');
            });
            $('.close-offcanvas,.offcanvas-overlay').on('click', function(event) {
                event.preventDefault();
                $('.off-canvas-menu-init').removeClass('new-look-off-canvas');
            });
        }
        if ($("body.sticky-header").length > 0) {
            var fixedSection = $('#sp-header');
            var headerHeight = fixedSection.outerHeight();
            var stickyNavTop = fixedSection.offset().top;
            fixedSection.addClass('animated');
            fixedSection.before('<div class="nav-placeholder"></div>');
            $('.nav-placeholder').height('inherit');
            fixedSection.addClass('menu-fixed-out');
            var stickyNav = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > stickyNavTop) {
                    fixedSection.removeClass('menu-fixed-out').addClass('menu-fixed');
                    $('.nav-placeholder').height(headerHeight);
                } else {
                    if (fixedSection.hasClass('menu-fixed')) {
                        fixedSection.removeClass('menu-fixed').addClass('menu-fixed-out');
                        $('.nav-placeholder').height('inherit');
                    }
                }
            };
            stickyNav();
            $(window).scroll(function() {
                stickyNav();
            });
        }
        if (typeof sp_gotop === 'undefined') {
            sp_gotop = '';
        }
        if (sp_gotop) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut(400);
                }
            });
            $('.scrollup').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        }
        if (typeof sp_preloader === 'undefined') {
            sp_preloader = '';
        }
        if (sp_preloader) {
            $(window).on('load', function() {
                if ($('.sp-loader-with-logo').length > 0) {
                    move();
                }
                setTimeout(function() {
                    $('.sp-pre-loader').fadeOut();
                }, 1000);
            });
        }

        function move() {
            var elem = document.getElementById("line-load");
            var width = 1;
            var id = setInterval(frame, 10);

            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        }
        $('.sp-megamenu-wrapper').parent().parent().css('position', 'static').parent().css('position', 'relative');
        $('.sp-menu-full').each(function() {
            $(this).parent().addClass('menu-justify');
        });
        if ($("body.layout-boxed").length > 0) {
            var windowWidth = $('#sp-header').parent().outerWidth();
            $("#sp-header").css({
                "max-width": windowWidth,
                "left": "auto"
            });
        }
        $('[data-toggle="tooltip"]').tooltip();
        $(document).on('click', '.sp-rating .star', function(event) {
            event.preventDefault();
            var data = {
                'action': 'voting',
                'user_rating': $(this).data('number'),
                'id': $(this).closest('.post_rating').attr('id')
            };
            var request = {
                'option': 'com_ajax',
                'plugin': 'helix3',
                'data': data,
                'format': 'json'
            };
            $.ajax({
                type: 'POST',
                data: request,
                beforeSend: function() {
                    $('.post_rating .ajax-loader').show();
                },
                success: function(response) {
                    var data = $.parseJSON(response.data);
                    $('.post_rating .ajax-loader').hide();
                    if (data.status == 'invalid') {
                        $('.post_rating .voting-result').text('You have already rated this entry!').fadeIn('fast');
                    } else if (data.status == 'false') {
                        $('.post_rating .voting-result').text('Somethings wrong here, try again!').fadeIn('fast');
                    } else if (data.status == 'true') {
                        var rate = data.action;
                        $('.voting-symbol').find('.star').each(function(i) {
                            if (i < rate) {
                                $(".star").eq(-(i + 1)).addClass('active');
                            }
                        });
                        $('.post_rating .voting-result').text('Thank You!').fadeIn('fast');
                    }
                },
                error: function() {
                    $('.post_rating .ajax-loader').hide();
                    $('.post_rating .voting-result').text('Failed to rate, try again!').fadeIn('fast');
                }
            });
        });
    });
} catch (e) {
    console.error('Error in file:/templates/shaper_helix3/js/main.js; Error:' + e.message);
};

/***!  /templates/shaper_helix3/js/frontend-edit.js  !***/

try {
    jQuery(function($) {
        $(document).ready(function() {
            $('.radio.btn-group label').addClass('btn btn-default');
            $(".btn-group label:not(.active)").click(function() {
                var label = $(this);
                var input = $('#' + label.attr('for'));
                if (!input.prop('checked')) {
                    label.closest('.btn-group').find("label").removeClass('active btn-success btn-danger btn-primary');
                    if (input.val() == '') {
                        label.addClass('active btn-primary');
                    } else if (input.val() == 0) {
                        label.addClass('active btn-danger');
                    } else {
                        label.addClass('active btn-success');
                    }
                    input.prop('checked', true);
                }
            });
            $(".btn-group input[checked=checked]").each(function() {
                if ($(this).val() == '') {
                    $("label[for=" + $(this).attr('id') + "]").addClass('active btn-primary');
                } else if ($(this).val() == 0) {
                    $("label[for=" + $(this).attr('id') + "]").addClass('active btn-danger');
                } else {
                    $("label[for=" + $(this).attr('id') + "]").addClass('active btn-success');
                }
            });
        })
    });
    if (typeof jQuery != 'undefined' && typeof MooTools != 'undefined') {
        jQuery(function($) {
            $(document).ready(function() {
                $('.carousel').each(function(index, element) {
                    $(this)[index].slide = null;
                });
            });
            window.addEvent('domready', function() {
                Element.prototype.hide = function() {};
            });
        });
    }
} catch (e) {
    console.error('Error in file:/templates/shaper_helix3/js/frontend-edit.js; Error:' + e.message);
};;