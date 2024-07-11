import X, { useState as gr, useEffect as mr } from "react";
import s from "prop-types";
import { motion as ie } from "framer-motion";
var ce = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function hr() {
  if (ze) return M;
  ze = 1;
  var d = X, v = Symbol.for("react.element"), m = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, _ = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(C, f, O) {
    var b, j = {}, x = null, S = null;
    O !== void 0 && (x = "" + O), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (b in f) h.call(f, b) && !$.hasOwnProperty(b) && (j[b] = f[b]);
    if (C && C.defaultProps) for (b in f = C.defaultProps, f) j[b] === void 0 && (j[b] = f[b]);
    return { $$typeof: v, type: C, key: x, ref: S, props: j, _owner: _.current };
  }
  return M.Fragment = m, M.jsx = k, M.jsxs = k, M;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function $r() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var d = X, v = Symbol.for("react.element"), m = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), C = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), q = Symbol.iterator, H = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[H];
      return typeof r == "function" ? r : null;
    }
    var P = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        qe("error", e, t);
      }
    }
    function qe(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var c = t.map(function(a) {
          return String(a);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Fe = !1, We = !1, Ae = !1, Me = !1, Ye = !1, le;
    le = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === $ || Ye || e === _ || e === O || e === b || Me || e === S || Fe || We || Ae || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === j || e.$$typeof === k || e.$$typeof === C || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case m:
          return "Portal";
        case $:
          return "Profiler";
        case _:
          return "StrictMode";
        case O:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return ue(r) + ".Consumer";
          case k:
            var t = e;
            return ue(t._context) + ".Provider";
          case f:
            return Ve(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case x: {
            var i = e, c = i._payload, a = i._init;
            try {
              return T(a(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, F = 0, _e, fe, de, ve, pe, ye, be;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          _e = console.log, fe = console.info, de = console.warn, ve = console.error, pe = console.group, ye = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ue() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: _e
            }),
            info: z({}, e, {
              value: fe
            }),
            warn: z({}, e, {
              value: de
            }),
            error: z({}, e, {
              value: ve
            }),
            group: z({}, e, {
              value: pe
            }),
            groupCollapsed: z({}, e, {
              value: ye
            }),
            groupEnd: z({}, e, {
              value: be
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = P.ReactCurrentDispatcher, Q;
    function V(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Q = n && n[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, L;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ge();
    }
    function me(e, r) {
      if (!e || ee)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ee = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Z.current, Z.current = null, Le();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (w) {
              n = w;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (w) {
              n = w;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            n = w;
          }
          e();
        }
      } catch (w) {
        if (w && n && typeof w.stack == "string") {
          for (var o = w.stack.split(`
`), g = n.stack.split(`
`), l = o.length - 1, u = g.length - 1; l >= 1 && u >= 0 && o[l] !== g[u]; )
            u--;
          for (; l >= 1 && u >= 0; l--, u--)
            if (o[l] !== g[u]) {
              if (l !== 1 || u !== 1)
                do
                  if (l--, u--, u < 0 || o[l] !== g[u]) {
                    var E = `
` + o[l].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, E), E;
                  }
                while (l >= 1 && u >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = c, Ue(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", B = I ? V(I) : "";
      return typeof e == "function" && L.set(e, B), B;
    }
    function Je(e, r, t) {
      return me(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ke(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case O:
          return V("Suspense");
        case b:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Je(e.render);
          case j:
            return U(e.type, r, t);
          case x: {
            var n = e, i = n._payload, c = n._init;
            try {
              return U(c(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, he = {}, $e = P.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        $e.setExtraStackFrame(t);
      } else
        $e.setExtraStackFrame(null);
    }
    function Xe(e, r, t, n, i) {
      {
        var c = Function.call.bind(W);
        for (var a in e)
          if (c(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              o = l;
            }
            o && !(o instanceof Error) && (G(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), G(null)), o instanceof Error && !(o.message in he) && (he[o.message] = !0, G(i), p("Failed %s type: %s", t, o.message), G(null));
          }
      }
    }
    var He = Array.isArray;
    function re(e) {
      return He(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Re(e) {
      if (Qe(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), we(e);
    }
    var A = P.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, ke, te;
    te = {};
    function rr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = T(A.current.type);
        te[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(A.current.type), e.ref), te[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          ke || (ke = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, n, i, c, a) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: a,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ir(e, r, t, n, i) {
      {
        var c, a = {}, o = null, g = null;
        t !== void 0 && (Re(t), o = "" + t), tr(r) && (Re(r.key), o = "" + r.key), rr(r) && (g = r.ref, nr(r, i));
        for (c in r)
          W.call(r, c) && !er.hasOwnProperty(c) && (a[c] = r[c]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (c in l)
            a[c] === void 0 && (a[c] = l[c]);
        }
        if (o || g) {
          var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && or(a, u), g && ar(a, u);
        }
        return sr(e, o, g, i, n, A.current, a);
      }
    }
    var ne = P.ReactCurrentOwner, je = P.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function xe() {
      {
        if (ne.current) {
          var e = T(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      return "";
    }
    var Te = {};
    function lr(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = lr(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ne.current && (n = " It was passed a child from " + T(e._owner.type) + "."), D(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ae(n) && Ce(n, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = N(e);
          if (typeof i == "function" && i !== e.entries)
            for (var c = i.call(e), a; !(a = c.next()).done; )
              ae(a.value) && Ce(a.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Xe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var i = T(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Pe = {};
    function Se(e, r, t, n, i, c) {
      {
        var a = Ne(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = cr();
          g ? o += g : o += xe();
          var l;
          e === null ? l = "null" : re(e) ? l = "array" : e !== void 0 && e.$$typeof === v ? (l = "<" + (T(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, o);
        }
        var u = ir(e, r, t, i, c);
        if (u == null)
          return u;
        if (a) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (re(E)) {
                for (var I = 0; I < E.length; I++)
                  Oe(E[I], e);
                Object.freeze && Object.freeze(E);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(E, e);
        }
        if (W.call(r, "key")) {
          var B = T(e), w = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), se = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[B + se]) {
            var yr = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, B, yr, B), Pe[B + se] = !0;
          }
        }
        return e === h ? _r(u) : ur(u), u;
      }
    }
    function fr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var vr = dr, pr = fr;
    Y.Fragment = h, Y.jsx = vr, Y.jsxs = pr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ce.exports = hr() : ce.exports = $r();
var y = ce.exports;
const wr = "_buiCode_dc0it_1", Rr = "_slate_dc0it_4", Er = "_gray_dc0it_7", kr = "_zinc_dc0it_10", jr = "_neutral_dc0it_13", xr = "_stone_dc0it_16", Tr = "_red_dc0it_19", Cr = "_orange_dc0it_22", Or = "_amber_dc0it_25", Pr = "_yellow_dc0it_28", Sr = "_lime_dc0it_31", zr = "_green_dc0it_34", Br = "_emerald_dc0it_37", Dr = "_teal_dc0it_40", Ir = "_cyan_dc0it_43", qr = "_sky_dc0it_46", Fr = "_blue_dc0it_49", Wr = "_indigo_dc0it_52", Ar = "_violet_dc0it_55", Mr = "_purple_dc0it_58", Yr = "_fuchsia_dc0it_61", Nr = "_pink_dc0it_64", Vr = "_rose_dc0it_67", De = {
  buiCode: wr,
  slate: Rr,
  gray: Er,
  zinc: kr,
  neutral: jr,
  stone: xr,
  red: Tr,
  orange: Cr,
  amber: Or,
  yellow: Pr,
  lime: Sr,
  green: zr,
  emerald: Br,
  teal: Dr,
  cyan: Ir,
  sky: qr,
  blue: Fr,
  indigo: Wr,
  violet: Ar,
  purple: Mr,
  fuchsia: Yr,
  pink: Nr,
  rose: Vr
};
function Lr({ children: d, color: v = "blue" }) {
  return /* @__PURE__ */ y.jsx("code", { className: `${De.buiCode} ${De[v]}`, children: d });
}
Lr.propTypes = {
  children: s.node.isRequired,
  color: s.string
};
const Ur = "_BuiButtonGroupWrapper_1e15f_1", Gr = "_horizontal_1e15f_4", Jr = "_vertical_1e15f_13", Ie = {
  BuiButtonGroupWrapper: Ur,
  horizontal: Gr,
  vertical: Jr
};
function Kr({ children: d, orientation: v = "horizontal" }) {
  return /* @__PURE__ */ y.jsx("div", { className: `${Ie.BuiButtonGroupWrapper} ${Ie[v]}`, children: X.Children.map(d, (m) => X.cloneElement(m, { animation: !1 })) });
}
Kr.propTypes = {
  children: s.node.isRequired,
  orientation: s.string
};
const Xr = "_buiButton_syvvc_1", Hr = "_onlyIcon_syvvc_23", Zr = "_raised_syvvc_26", Qr = "_roundedMax_syvvc_29", et = "_slate_syvvc_32", rt = "_basic_syvvc_36", tt = "_outlined_syvvc_40", nt = "_text_syvvc_45", ot = "_gray_syvvc_49", at = "_zinc_syvvc_66", st = "_neutral_syvvc_83", it = "_stone_syvvc_100", ct = "_red_syvvc_117", lt = "_orange_syvvc_134", ut = "_amber_syvvc_151", _t = "_yellow_syvvc_168", ft = "_lime_syvvc_185", dt = "_green_syvvc_202", vt = "_emerald_syvvc_219", pt = "_teal_syvvc_236", yt = "_cyan_syvvc_253", bt = "_sky_syvvc_270", gt = "_blue_syvvc_287", mt = "_indigo_syvvc_304", ht = "_violet_syvvc_321", $t = "_purple_syvvc_338", wt = "_fuchsia_syvvc_355", Rt = "_pink_syvvc_372", Et = "_rose_syvvc_389", kt = "_xs_syvvc_406", jt = "_sm_syvvc_410", xt = "_base_syvvc_414", Tt = "_lg_syvvc_418", Ct = "_xl_syvvc_422", R = {
  buiButton: Xr,
  onlyIcon: Hr,
  raised: Zr,
  roundedMax: Qr,
  slate: et,
  basic: rt,
  outlined: tt,
  text: nt,
  gray: ot,
  zinc: at,
  neutral: st,
  stone: it,
  red: ct,
  orange: lt,
  amber: ut,
  yellow: _t,
  lime: ft,
  green: dt,
  emerald: vt,
  teal: pt,
  cyan: yt,
  sky: bt,
  blue: gt,
  indigo: mt,
  violet: ht,
  purple: $t,
  fuchsia: wt,
  pink: Rt,
  rose: Et,
  xs: kt,
  sm: jt,
  base: xt,
  lg: Tt,
  xl: Ct
};
function Ot() {
  return /* @__PURE__ */ y.jsx(
    ie.svg,
    {
      animate: { rotate: 360 },
      transition: { repeat: 1 / 0, duration: 0.7, ease: "linear" },
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ y.jsx("path", { fill: "currentColor", d: "M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8" })
    }
  );
}
function Pt({
  type: d = "button",
  variant: v = "basic",
  color: m = "blue",
  size: h = "base",
  isLoading: _ = !1,
  disabled: $ = !1,
  children: k,
  startIcon: C,
  endIcon: f,
  // link section
  href: O,
  target: b = "_target",
  // link section
  onClick: j,
  animation: x = !0,
  raised: S = !1,
  rounded: q = !1,
  ariaLabel: H = "button",
  classes: N
}) {
  const P = /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    _ && /* @__PURE__ */ y.jsx(Ot, {}),
    !_ && C,
    k,
    !_ && f
  ] });
  return O ? /* @__PURE__ */ y.jsx(
    ie.a,
    {
      href: O,
      role: "button",
      target: b,
      whileTap: { scale: $ || _ || !x ? 1 : 0.95 },
      disabled: $ || _,
      className: `${R.buiButton} ${R[m]} ${R[h]} ${R[v]} ${k ? "" : R.onlyIcon} ${S ? R.raised : ""} ${q ? R.roundedMax : ""} ${N}`,
      children: P
    }
  ) : /* @__PURE__ */ y.jsx(
    ie.button,
    {
      type: d,
      "aria-label": H,
      onClick: j,
      whileTap: { scale: $ || _ || !x ? 1 : 0.95 },
      disabled: $ || _,
      className: `${R.buiButton} ${R[m]} ${R[h]} ${R[v]} ${k ? "" : R.onlyIcon} ${S ? R.raised : ""} ${q ? R.roundedMax : ""} ${N}`,
      children: P
    }
  );
}
Pt.propTypes = {
  type: s.string,
  variant: s.string,
  color: s.string,
  size: s.string,
  isLoading: s.bool,
  disabled: s.bool,
  children: s.node,
  startIcon: s.elementType,
  endIcon: s.elementType,
  href: s.string,
  target: s.string,
  onClick: s.func,
  animation: s.bool,
  raised: s.bool,
  rounded: s.bool,
  ariaLabel: s.string,
  classes: s.string
};
const St = "_BuiBadgeWrapper_wjbzs_1", zt = "_slate_wjbzs_4", Bt = "_gray_wjbzs_8", Dt = "_zinc_wjbzs_12", It = "_neutral_wjbzs_16", qt = "_stone_wjbzs_20", Ft = "_red_wjbzs_24", Wt = "_orange_wjbzs_28", At = "_amber_wjbzs_32", Mt = "_yellow_wjbzs_36", Yt = "_lime_wjbzs_40", Nt = "_green_wjbzs_44", Vt = "_emerald_wjbzs_48", Lt = "_teal_wjbzs_52", Ut = "_cyan_wjbzs_56", Gt = "_sky_wjbzs_60", Jt = "_blue_wjbzs_64", Kt = "_indigo_wjbzs_68", Xt = "_violet_wjbzs_72", Ht = "_purple_wjbzs_76", Zt = "_fuchsia_wjbzs_80", Qt = "_pink_wjbzs_84", en = "_rose_wjbzs_88", rn = "_havePosition_wjbzs_92", tn = "_xs_wjbzs_95", nn = "_sm_wjbzs_99", on = "_base_wjbzs_103", J = {
  BuiBadgeWrapper: St,
  slate: zt,
  gray: Bt,
  zinc: Dt,
  neutral: It,
  stone: qt,
  red: Ft,
  orange: Wt,
  amber: At,
  yellow: Mt,
  lime: Yt,
  green: Nt,
  emerald: Vt,
  teal: Lt,
  cyan: Ut,
  sky: Gt,
  blue: Jt,
  indigo: Kt,
  violet: Xt,
  purple: Ht,
  fuchsia: Zt,
  pink: Qt,
  rose: en,
  havePosition: rn,
  xs: tn,
  sm: nn,
  base: on
};
function an({ value: d, size: v = "xs", color: m = "red", positions: h }) {
  const [_, $] = gr("");
  return mr(() => {
    d > 99 ? $("9+") : $(d.toString());
  }, [d]), /* @__PURE__ */ y.jsx("div", { style: { ...h }, className: `${J.BuiBadgeWrapper} ${J[v]} ${J[m]} ${h ? J.havePosition : ""}`, children: _ });
}
an.propTypes = {
  value: s.string,
  size: s.string,
  color: s.string,
  positions: s.object
};
const sn = "_BuiCheckboxWrapper_i16qk_1", cn = "_slate_i16qk_4", ln = "_gray_i16qk_7", un = "_zinc_i16qk_10", _n = "_neutral_i16qk_13", fn = "_stone_i16qk_16", dn = "_red_i16qk_19", vn = "_orange_i16qk_22", pn = "_amber_i16qk_25", yn = "_yellow_i16qk_28", bn = "_lime_i16qk_31", gn = "_green_i16qk_34", mn = "_emerald_i16qk_37", hn = "_teal_i16qk_40", $n = "_cyan_i16qk_43", wn = "_sky_i16qk_46", Rn = "_blue_i16qk_49", En = "_indigo_i16qk_52", kn = "_violet_i16qk_55", jn = "_purple_i16qk_58", xn = "_fuchsia_i16qk_61", Tn = "_pink_i16qk_64", Cn = "_rose_i16qk_67", On = "_isInvalid_i16qk_233", Pn = "_isDisabled_i16qk_239", K = {
  BuiCheckboxWrapper: sn,
  slate: cn,
  gray: ln,
  zinc: un,
  neutral: _n,
  stone: fn,
  red: dn,
  orange: vn,
  amber: pn,
  yellow: yn,
  lime: bn,
  green: gn,
  emerald: mn,
  teal: hn,
  cyan: $n,
  sky: wn,
  blue: Rn,
  indigo: En,
  violet: kn,
  purple: jn,
  fuchsia: xn,
  pink: Tn,
  rose: Cn,
  isInvalid: On,
  isDisabled: Pn
};
function Sn() {
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ y.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
        }
      )
    }
  );
}
function zn({
  disabled: d = !1,
  invalid: v = !1,
  checked: m = !1,
  onChange: h,
  label: _ = "",
  color: $ = "blue",
  ariaLabel: k = ""
}) {
  return /* @__PURE__ */ y.jsxs(
    "label",
    {
      className: `${K.BuiCheckboxWrapper} ${v ? K.isInvalid : ""} ${d ? K.isDisabled : ""}`,
      children: [
        /* @__PURE__ */ y.jsx(
          "input",
          {
            disabled: d,
            type: "checkbox",
            onChange: h,
            checked: m,
            "aria-checked": m,
            "aria-label": k ?? _
          }
        ),
        /* @__PURE__ */ y.jsx("span", { className: `${K[$]}`, children: m && /* @__PURE__ */ y.jsx(Sn, {}) }),
        _
      ]
    }
  );
}
zn.propTypes = {
  disabled: s.bool,
  invalid: s.bool,
  checked: s.bool.isRequired,
  onChange: s.func.isRequired,
  label: s.string,
  color: s.string,
  ariaLabel: s.string
};
export {
  an as BuiBadge,
  Pt as BuiButton,
  Kr as BuiButtonGroup,
  zn as BuiCheckbox,
  Lr as BuiCode
};
