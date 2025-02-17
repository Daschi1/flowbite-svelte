(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) n(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const a of i.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function n(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = r(l);
    fetch(l.href, i);
  }
})();
function q() {}
function M(t, e) {
  for (const r in e) t[r] = e[r];
  return t;
}
function We(t) {
  return t();
}
function ze() {
  return Object.create(null);
}
function K(t) {
  t.forEach(We);
}
function ye(t) {
  return typeof t == 'function';
}
function F(t, e) {
  return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let be;
function $(t, e) {
  return be || (be = document.createElement('a')), (be.href = e), t === be.href;
}
function ht(t) {
  return Object.keys(t).length === 0;
}
function mt(t, ...e) {
  if (t == null) return q;
  const r = t.subscribe(...e);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function ae(t, e, r, n) {
  if (t) {
    const l = Je(t, e, r, n);
    return t[0](l);
  }
}
function Je(t, e, r, n) {
  return t[1] && n ? M(r.ctx.slice(), t[1](n(e))) : r.ctx;
}
function ue(t, e, r, n) {
  if (t[2] && n) {
    const l = t[2](n(r));
    if (e.dirty === void 0) return l;
    if (typeof l == 'object') {
      const i = [],
        a = Math.max(e.dirty.length, l.length);
      for (let s = 0; s < a; s += 1) i[s] = e.dirty[s] | l[s];
      return i;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function ce(t, e, r, n, l, i) {
  if (l) {
    const a = Je(e, r, n, i);
    t.p(a, l);
  }
}
function fe(t) {
  if (t.ctx.length > 32) {
    const e = [],
      r = t.ctx.length / 32;
    for (let n = 0; n < r; n++) e[n] = -1;
    return e;
  }
  return -1;
}
function ee(t) {
  const e = {};
  for (const r in t) r[0] !== '$' && (e[r] = t[r]);
  return e;
}
function te(t, e) {
  const r = {};
  e = new Set(e);
  for (const n in t) !e.has(n) && n[0] !== '$' && (r[n] = t[n]);
  return r;
}
function bt(t) {
  return t && ye(t.destroy) ? t.destroy : q;
}
function w(t, e) {
  t.appendChild(e);
}
function S(t, e, r) {
  t.insertBefore(e, r || null);
}
function C(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Qe(t, e) {
  for (let r = 0; r < t.length; r += 1) t[r] && t[r].d(e);
}
function A(t) {
  return document.createElement(t);
}
function re(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function T(t) {
  return document.createTextNode(t);
}
function z() {
  return T(' ');
}
function le() {
  return T('');
}
function X(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function b(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function ne(t, e) {
  const r = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null
      ? t.removeAttribute(n)
      : n === 'style'
      ? (t.style.cssText = e[n])
      : n === '__value'
      ? (t.value = t[n] = e[n])
      : r[n] && r[n].set
      ? (t[n] = e[n])
      : b(t, n, e[n]);
}
function qe(t, e) {
  Object.keys(e).forEach((r) => {
    pt(t, r, e[r]);
  });
}
function pt(t, e, r) {
  e in t ? (t[e] = typeof t[e] == 'boolean' && r === '' ? !0 : r) : b(t, e, r);
}
function _t(t) {
  return Array.from(t.childNodes);
}
function U(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function kt(t, e, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  const l = document.createEvent('CustomEvent');
  return l.initCustomEvent(t, r, n, e), l;
}
function ke(t, e) {
  return new t(e);
}
let de;
function se(t) {
  de = t;
}
function he() {
  if (!de) throw new Error('Function called outside component initialization');
  return de;
}
function yt(t) {
  he().$$.on_mount.push(t);
}
function wt(t) {
  he().$$.after_update.push(t);
}
function vt(t) {
  he().$$.on_destroy.push(t);
}
function xt() {
  const t = he();
  return (e, r, { cancelable: n = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const i = kt(e, r, { cancelable: n });
      return (
        l.slice().forEach((a) => {
          a.call(t, i);
        }),
        !i.defaultPrevented
      );
    }
    return !0;
  };
}
function Ct(t) {
  return he().$$.context.get(t);
}
function Y(t, e) {
  const r = t.$$.callbacks[e.type];
  r && r.slice().forEach((n) => n.call(this, e));
}
const Q = [],
  Te = [],
  pe = [],
  Ie = [],
  $e = Promise.resolve();
let Ee = !1;
function et() {
  Ee || ((Ee = !0), $e.then(rt));
}
function tt() {
  return et(), $e;
}
function Se(t) {
  pe.push(t);
}
const ve = new Set();
let W = 0;
function rt() {
  if (W !== 0) return;
  const t = de;
  do {
    try {
      for (; W < Q.length; ) {
        const e = Q[W];
        W++, se(e), Et(e.$$);
      }
    } catch (e) {
      throw ((Q.length = 0), (W = 0), e);
    }
    for (se(null), Q.length = 0, W = 0; Te.length; ) Te.pop()();
    for (let e = 0; e < pe.length; e += 1) {
      const r = pe[e];
      ve.has(r) || (ve.add(r), r());
    }
    pe.length = 0;
  } while (Q.length);
  for (; Ie.length; ) Ie.pop()();
  (Ee = !1), ve.clear(), se(t);
}
function Et(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Se);
  }
}
const _e = new Set();
let G;
function ie() {
  G = { r: 0, c: [], p: G };
}
function oe() {
  G.r || K(G.c), (G = G.p);
}
function N(t, e) {
  t && t.i && (_e.delete(t), t.i(e));
}
function L(t, e, r, n) {
  if (t && t.o) {
    if (_e.has(t)) return;
    _e.add(t),
      G.c.push(() => {
        _e.delete(t), n && (r && t.d(1), n());
      }),
      t.o(e);
  } else n && n();
}
function me(t, e) {
  const r = {},
    n = {},
    l = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const a = t[i],
      s = e[i];
    if (s) {
      for (const o in a) o in s || (n[o] = 1);
      for (const o in s) l[o] || ((r[o] = s[o]), (l[o] = 1));
      t[i] = s;
    } else for (const o in a) l[o] = 1;
  }
  for (const a in n) a in r || (r[a] = void 0);
  return r;
}
function nt(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function V(t) {
  t && t.c();
}
function R(t, e, r, n) {
  const { fragment: l, after_update: i } = t.$$;
  l && l.m(e, r),
    n ||
      Se(() => {
        const a = t.$$.on_mount.map(We).filter(ye);
        t.$$.on_destroy ? t.$$.on_destroy.push(...a) : K(a), (t.$$.on_mount = []);
      }),
    i.forEach(Se);
}
function B(t, e) {
  const r = t.$$;
  r.fragment !== null &&
    (K(r.on_destroy), r.fragment && r.fragment.d(e), (r.on_destroy = r.fragment = null), (r.ctx = []));
}
function St(t, e) {
  t.$$.dirty[0] === -1 && (Q.push(t), et(), t.$$.dirty.fill(0)), (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Z(t, e, r, n, l, i, a, s = [-1]) {
  const o = de;
  se(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: q,
    not_equal: l,
    bound: ze(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    callbacks: ze(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  });
  a && a(u.root);
  let f = !1;
  if (
    ((u.ctx = r
      ? r(t, e.props || {}, (c, g, ...d) => {
          const _ = d.length ? d[0] : g;
          return (
            u.ctx &&
              l(u.ctx[c], (u.ctx[c] = _)) &&
              (!u.skip_bound && u.bound[c] && u.bound[c](_), f && St(t, c)),
            g
          );
        })
      : []),
    u.update(),
    (f = !0),
    K(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const c = _t(e.target);
      u.fragment && u.fragment.l(c), c.forEach(C);
    } else u.fragment && u.fragment.c();
    e.intro && N(t.$$.fragment), R(t, e.target, e.anchor, e.customElement), rt();
  }
  se(o);
}
class H {
  $destroy() {
    B(this, 1), (this.$destroy = q);
  }
  $on(e, r) {
    if (!ye(r)) return q;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      n.push(r),
      () => {
        const l = n.indexOf(r);
        l !== -1 && n.splice(l, 1);
      }
    );
  }
  $set(e) {
    this.$$set && !ht(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const J = [];
function lt(t, e) {
  return { subscribe: it(t, e).subscribe };
}
function it(t, e = q) {
  let r;
  const n = new Set();
  function l(s) {
    if (F(t, s) && ((t = s), r)) {
      const o = !J.length;
      for (const u of n) u[1](), J.push(u, t);
      if (o) {
        for (let u = 0; u < J.length; u += 2) J[u][0](J[u + 1]);
        J.length = 0;
      }
    }
  }
  function i(s) {
    l(s(t));
  }
  function a(s, o = q) {
    const u = [s, o];
    return (
      n.add(u),
      n.size === 1 && (r = e(l) || q),
      s(t),
      () => {
        n.delete(u), n.size === 0 && (r(), (r = null));
      }
    );
  }
  return { set: l, update: i, subscribe: a };
}
function ot(t, e, r) {
  const n = !Array.isArray(t),
    l = n ? [t] : t,
    i = e.length < 2;
  return lt(r, (a) => {
    let s = !1;
    const o = [];
    let u = 0,
      f = q;
    const c = () => {
        if (u) return;
        f();
        const d = e(n ? o[0] : o, a);
        i ? a(d) : (f = ye(d) ? d : q);
      },
      g = l.map((d, _) =>
        mt(
          d,
          (k) => {
            (o[_] = k), (u &= ~(1 << _)), s && c();
          },
          () => {
            u |= 1 << _;
          }
        )
      );
    return (
      (s = !0),
      c(),
      function () {
        K(g), f();
      }
    );
  });
}
function Dt(t, e) {
  if (t instanceof RegExp) return { keys: !1, pattern: t };
  var r,
    n,
    l,
    i,
    a = [],
    s = '',
    o = t.split('/');
  for (o[0] || o.shift(); (l = o.shift()); )
    (r = l[0]),
      r === '*'
        ? (a.push('wild'), (s += '/(.*)'))
        : r === ':'
        ? ((n = l.indexOf('?', 1)),
          (i = l.indexOf('.', 1)),
          a.push(l.substring(1, ~n ? n : ~i ? i : l.length)),
          (s += ~n && !~i ? '(?:/([^/]+?))?' : '/([^/]+?)'),
          ~i && (s += (~n ? '?' : '') + '\\' + l.substring(i)))
        : (s += '/' + l);
  return { keys: a, pattern: new RegExp('^' + s + (e ? '(?=$|/)' : '/?$'), 'i') };
}
function At(t) {
  let e, r, n;
  const l = [t[2]];
  var i = t[0];
  function a(s) {
    let o = {};
    for (let u = 0; u < l.length; u += 1) o = M(o, l[u]);
    return { props: o };
  }
  return (
    i && ((e = ke(i, a())), e.$on('routeEvent', t[7])),
    {
      c() {
        e && V(e.$$.fragment), (r = le());
      },
      m(s, o) {
        e && R(e, s, o), S(s, r, o), (n = !0);
      },
      p(s, o) {
        const u = o & 4 ? me(l, [nt(s[2])]) : {};
        if (i !== (i = s[0])) {
          if (e) {
            ie();
            const f = e;
            L(f.$$.fragment, 1, 0, () => {
              B(f, 1);
            }),
              oe();
          }
          i
            ? ((e = ke(i, a())),
              e.$on('routeEvent', s[7]),
              V(e.$$.fragment),
              N(e.$$.fragment, 1),
              R(e, r.parentNode, r))
            : (e = null);
        } else i && e.$set(u);
      },
      i(s) {
        n || (e && N(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        e && L(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(r), e && B(e, s);
      }
    }
  );
}
function jt(t) {
  let e, r, n;
  const l = [{ params: t[1] }, t[2]];
  var i = t[0];
  function a(s) {
    let o = {};
    for (let u = 0; u < l.length; u += 1) o = M(o, l[u]);
    return { props: o };
  }
  return (
    i && ((e = ke(i, a())), e.$on('routeEvent', t[6])),
    {
      c() {
        e && V(e.$$.fragment), (r = le());
      },
      m(s, o) {
        e && R(e, s, o), S(s, r, o), (n = !0);
      },
      p(s, o) {
        const u = o & 6 ? me(l, [o & 2 && { params: s[1] }, o & 4 && nt(s[2])]) : {};
        if (i !== (i = s[0])) {
          if (e) {
            ie();
            const f = e;
            L(f.$$.fragment, 1, 0, () => {
              B(f, 1);
            }),
              oe();
          }
          i
            ? ((e = ke(i, a())),
              e.$on('routeEvent', s[6]),
              V(e.$$.fragment),
              N(e.$$.fragment, 1),
              R(e, r.parentNode, r))
            : (e = null);
        } else i && e.$set(u);
      },
      i(s) {
        n || (e && N(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        e && L(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(r), e && B(e, s);
      }
    }
  );
}
function Nt(t) {
  let e, r, n, l;
  const i = [jt, At],
    a = [];
  function s(o, u) {
    return o[1] ? 0 : 1;
  }
  return (
    (e = s(t)),
    (r = a[e] = i[e](t)),
    {
      c() {
        r.c(), (n = le());
      },
      m(o, u) {
        a[e].m(o, u), S(o, n, u), (l = !0);
      },
      p(o, [u]) {
        let f = e;
        (e = s(o)),
          e === f
            ? a[e].p(o, u)
            : (ie(),
              L(a[f], 1, 1, () => {
                a[f] = null;
              }),
              oe(),
              (r = a[e]),
              r ? r.p(o, u) : ((r = a[e] = i[e](o)), r.c()),
              N(r, 1),
              r.m(n.parentNode, n));
      },
      i(o) {
        l || (N(r), (l = !0));
      },
      o(o) {
        L(r), (l = !1);
      },
      d(o) {
        a[e].d(o), o && C(n);
      }
    }
  );
}
function Pe() {
  const t = window.location.href.indexOf('#/');
  let e = t > -1 ? window.location.href.substr(t + 1) : '/';
  const r = e.indexOf('?');
  let n = '';
  return r > -1 && ((n = e.substr(r + 1)), (e = e.substr(0, r))), { location: e, querystring: n };
}
const Oe = lt(null, function (e) {
  e(Pe());
  const r = () => {
    e(Pe());
  };
  return (
    window.addEventListener('hashchange', r, !1),
    function () {
      window.removeEventListener('hashchange', r, !1);
    }
  );
});
ot(Oe, (t) => t.location);
ot(Oe, (t) => t.querystring);
const Me = it(void 0);
async function Lt() {
  await tt(), window.history.back();
}
function Ot(t, e) {
  if (((e = Be(e)), !t || !t.tagName || t.tagName.toLowerCase() != 'a'))
    throw Error('Action "link" can only be used with <a> tags');
  return (
    Re(t, e),
    {
      update(r) {
        (r = Be(r)), Re(t, r);
      }
    }
  );
}
function zt(t) {
  t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
}
function Re(t, e) {
  let r = e.href || t.getAttribute('href');
  if (r && r.charAt(0) == '/') r = '#' + r;
  else if (!r || r.length < 2 || r.slice(0, 2) != '#/')
    throw Error('Invalid value for "href" attribute: ' + r);
  t.setAttribute('href', r),
    t.addEventListener('click', (n) => {
      n.preventDefault(), e.disabled || qt(n.currentTarget.getAttribute('href'));
    });
}
function Be(t) {
  return t && typeof t == 'string' ? { href: t } : t || {};
}
function qt(t) {
  history.replaceState(
    {
      ...history.state,
      __svelte_spa_router_scrollX: window.scrollX,
      __svelte_spa_router_scrollY: window.scrollY
    },
    void 0
  ),
    (window.location.hash = t);
}
function Tt(t, e, r) {
  let { routes: n = {} } = e,
    { prefix: l = '' } = e,
    { restoreScrollState: i = !1 } = e;
  class a {
    constructor(y, x) {
      if (!x || (typeof x != 'function' && (typeof x != 'object' || x._sveltesparouter !== !0)))
        throw Error('Invalid component object');
      if (
        !y ||
        (typeof y == 'string' && (y.length < 1 || (y.charAt(0) != '/' && y.charAt(0) != '*'))) ||
        (typeof y == 'object' && !(y instanceof RegExp))
      )
        throw Error('Invalid value for "path" argument - strings must start with / or *');
      const { pattern: I, keys: O } = Dt(y);
      (this.path = y),
        typeof x == 'object' && x._sveltesparouter === !0
          ? ((this.component = x.component),
            (this.conditions = x.conditions || []),
            (this.userData = x.userData),
            (this.props = x.props || {}))
          : ((this.component = () => Promise.resolve(x)), (this.conditions = []), (this.props = {})),
        (this._pattern = I),
        (this._keys = O);
    }
    match(y) {
      if (l) {
        if (typeof l == 'string')
          if (y.startsWith(l)) y = y.substr(l.length) || '/';
          else return null;
        else if (l instanceof RegExp) {
          const P = y.match(l);
          if (P && P[0]) y = y.substr(P[0].length) || '/';
          else return null;
        }
      }
      const x = this._pattern.exec(y);
      if (x === null) return null;
      if (this._keys === !1) return x;
      const I = {};
      let O = 0;
      for (; O < this._keys.length; ) {
        try {
          I[this._keys[O]] = decodeURIComponent(x[O + 1] || '') || null;
        } catch {
          I[this._keys[O]] = null;
        }
        O++;
      }
      return I;
    }
    async checkConditions(y) {
      for (let x = 0; x < this.conditions.length; x++) if (!(await this.conditions[x](y))) return !1;
      return !0;
    }
  }
  const s = [];
  n instanceof Map
    ? n.forEach((h, y) => {
        s.push(new a(y, h));
      })
    : Object.keys(n).forEach((h) => {
        s.push(new a(h, n[h]));
      });
  let o = null,
    u = null,
    f = {};
  const c = xt();
  async function g(h, y) {
    await tt(), c(h, y);
  }
  let d = null,
    _ = null;
  i &&
    ((_ = (h) => {
      h.state && (h.state.__svelte_spa_router_scrollY || h.state.__svelte_spa_router_scrollX)
        ? (d = h.state)
        : (d = null);
    }),
    window.addEventListener('popstate', _),
    wt(() => {
      zt(d);
    }));
  let k = null,
    p = null;
  const j = Oe.subscribe(async (h) => {
    k = h;
    let y = 0;
    for (; y < s.length; ) {
      const x = s[y].match(h.location);
      if (!x) {
        y++;
        continue;
      }
      const I = {
        route: s[y].path,
        location: h.location,
        querystring: h.querystring,
        userData: s[y].userData,
        params: x && typeof x == 'object' && Object.keys(x).length ? x : null
      };
      if (!(await s[y].checkConditions(I))) {
        r(0, (o = null)), (p = null), g('conditionsFailed', I);
        return;
      }
      g('routeLoading', Object.assign({}, I));
      const O = s[y].component;
      if (p != O) {
        O.loading
          ? (r(0, (o = O.loading)),
            (p = O),
            r(1, (u = O.loadingParams)),
            r(2, (f = {})),
            g('routeLoaded', Object.assign({}, I, { component: o, name: o.name, params: u })))
          : (r(0, (o = null)), (p = null));
        const P = await O();
        if (h != k) return;
        r(0, (o = (P && P.default) || P)), (p = O);
      }
      x && typeof x == 'object' && Object.keys(x).length ? r(1, (u = x)) : r(1, (u = null)),
        r(2, (f = s[y].props)),
        g('routeLoaded', Object.assign({}, I, { component: o, name: o.name, params: u })).then(() => {
          Me.set(u);
        });
      return;
    }
    r(0, (o = null)), (p = null), Me.set(void 0);
  });
  vt(() => {
    j(), _ && window.removeEventListener('popstate', _);
  });
  function v(h) {
    Y.call(this, t, h);
  }
  function m(h) {
    Y.call(this, t, h);
  }
  return (
    (t.$$set = (h) => {
      'routes' in h && r(3, (n = h.routes)),
        'prefix' in h && r(4, (l = h.prefix)),
        'restoreScrollState' in h && r(5, (i = h.restoreScrollState));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 32 && (history.scrollRestoration = i ? 'manual' : 'auto');
    }),
    [o, u, f, n, l, i, v, m]
  );
}
class It extends H {
  constructor(e) {
    super(), Z(this, e, Tt, Nt, F, { routes: 3, prefix: 4, restoreScrollState: 5 });
  }
}
var Pt = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
function Mt(t, e) {
  if (e === 0) return ['just now', 'right now'];
  var r = Pt[Math.floor(e / 2)];
  return t > 1 && (r += 's'), [t + ' ' + r + ' ago', 'in ' + t + ' ' + r];
}
var Rt = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
function Bt(t, e) {
  if (e === 0) return ['刚刚', '片刻后'];
  var r = Rt[~~(e / 2)];
  return [t + ' ' + r + '前', t + ' ' + r + '后'];
}
var De = {},
  st = function (t, e) {
    De[t] = e;
  },
  Ft = function (t) {
    return De[t] || De.en_US;
  },
  xe = [60, 60, 24, 7, 365 / 7 / 12, 12];
function Fe(t) {
  return t instanceof Date
    ? t
    : !isNaN(t) || /^\d+$/.test(t)
    ? new Date(parseInt(t))
    : ((t = (t || '')
        .trim()
        .replace(/\.\d+/, '')
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC')
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2')),
      new Date(t));
}
function Ut(t, e) {
  var r = t < 0 ? 1 : 0;
  t = Math.abs(t);
  for (var n = t, l = 0; t >= xe[l] && l < xe.length; l++) t /= xe[l];
  return (
    (t = Math.floor(t)),
    (l *= 2),
    t > (l === 0 ? 9 : 1) && (l += 1),
    e(t, l, n)[r].replace('%s', t.toString())
  );
}
function Vt(t, e) {
  var r = e ? Fe(e) : new Date();
  return (+r - +Fe(t)) / 1e3;
}
var Ae = function (t, e, r) {
  var n = Vt(t, r && r.relativeDate);
  return Ut(n, Ft(e));
};
st('en_US', Mt);
st('zh_CN', Bt);
const Zt = function (t, e) {
    return t.join(e).toLowerCase();
  },
  Ht = '(?:[a-z](?=[A-Z])|[A-Z](?=[A-Z][a-z]))';
function Yt(t, e) {
  for (let r = 0, n = t.length; r < n; r++) {
    const l = t[r],
      i = e[l];
    if (i !== void 0) {
      t = t.substr(0, r) + i + t.substr(r + 1);
      const a = String(i).length - 1;
      (r += a), (n += a);
    }
  }
  return t;
}
const Xt = /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF]+/g,
  Gt = /[A-Za-z\d]+/g,
  Kt = new RegExp('[A-Za-z\\d]*?' + Ht + '|[A-Za-z\\d]+', 'g');
function je(t, e) {
  e = e || {};
  const r = e.camelCase !== void 0 ? e.camelCase : !0,
    n = e.separator !== void 0 ? e.separator : '-',
    l = e.transformer !== void 0 ? e.transformer : Zt,
    i = (e.dictionary ? Yt(String(t), e.dictionary) : String(t))
      .normalize('NFKD')
      .replace(Xt, '')
      .match(r ? Kt : Gt);
  return i ? (l ? l(i, n) : i.join(n)) : '';
}
function Ue(t) {
  let e, r, n;
  return {
    c() {
      (e = A('p')), (r = T('Published: ')), (n = T(t[3])), b(e, 'class', 'text-lg dark:text-white');
    },
    m(l, i) {
      S(l, e, i), w(e, r), w(e, n);
    },
    p(l, i) {
      i & 8 && U(n, l[3]);
    },
    d(l) {
      l && C(e);
    }
  };
}
function Wt(t) {
  let e,
    r,
    n,
    l,
    i,
    a,
    s,
    o,
    u,
    f,
    c,
    g = t[1].substring(0, 180) + '',
    d,
    _,
    k,
    p,
    j,
    v = t[3] && Ue(t);
  return {
    c() {
      (e = A('div')),
        (r = A('img')),
        (l = z()),
        (i = A('div')),
        (a = A('h2')),
        (s = A('a')),
        (o = T(t[0])),
        (f = z()),
        (c = A('p')),
        (d = T(g)),
        (_ = T('...')),
        (k = z()),
        v && v.c(),
        $(r.src, (n = t[2])) || b(r, 'src', n),
        b(r, 'alt', 'img'),
        b(r, 'class', 'rounded-md max-w-xs mr-4'),
        b(s, 'href', (u = `/article/${je(t[0])}`)),
        b(a, 'class', 'mb-2 text-2xl font-medium dark:text-white'),
        b(c, 'class', 'my-2 text-lg dark:text-white'),
        b(e, 'class', 'flex py-8 px-4');
    },
    m(m, h) {
      S(m, e, h),
        w(e, r),
        w(e, l),
        w(e, i),
        w(i, a),
        w(a, s),
        w(s, o),
        w(i, f),
        w(i, c),
        w(c, d),
        w(c, _),
        w(i, k),
        v && v.m(i, null),
        p || ((j = bt(Ot.call(null, s))), (p = !0));
    },
    p(m, [h]) {
      h & 4 && !$(r.src, (n = m[2])) && b(r, 'src', n),
        h & 1 && U(o, m[0]),
        h & 1 && u !== (u = `/article/${je(m[0])}`) && b(s, 'href', u),
        h & 2 && g !== (g = m[1].substring(0, 180) + '') && U(d, g),
        m[3] ? (v ? v.p(m, h) : ((v = Ue(m)), v.c(), v.m(i, null))) : v && (v.d(1), (v = null));
    },
    i: q,
    o: q,
    d(m) {
      m && C(e), v && v.d(), (p = !1), j();
    }
  };
}
function Jt(t, e, r) {
  let { title: n, description: l, image: i, publishDate: a } = e;
  return (
    (t.$$set = (s) => {
      'title' in s && r(0, (n = s.title)),
        'description' in s && r(1, (l = s.description)),
        'image' in s && r(2, (i = s.image)),
        'publishDate' in s && r(3, (a = s.publishDate));
    }),
    [n, l, i, a]
  );
}
class Qt extends H {
  constructor(e) {
    super(), Z(this, e, Jt, Wt, F, { title: 0, description: 1, image: 2, publishDate: 3 });
  }
}
const Ne = [
  {
    title: '17 Awesome Places to Visit in Germany',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/id/1040/800/400',
    publishDate: '2021/12/12'
  },
  {
    title: '21 Essential Backpack Items for Hiking',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/id/1018/800/400',
    publishDate: '2021/11/17'
  },
  {
    title: '10 Safety Tips Every Traveller Should Know',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/id/206/800/400',
    publishDate: '2021/09/06'
  }
];
function Ve(t, e, r) {
  const n = t.slice();
  return (n[0] = e[r]), (n[2] = r), n;
}
function Ze(t) {
  let e, r;
  return (
    (e = new Qt({
      props: {
        title: t[0].title,
        description: t[0].content,
        image: t[0].image,
        publishDate: Ae(t[0].publishDate)
      }
    })),
    {
      c() {
        V(e.$$.fragment);
      },
      m(n, l) {
        R(e, n, l), (r = !0);
      },
      p: q,
      i(n) {
        r || (N(e.$$.fragment, n), (r = !0));
      },
      o(n) {
        L(e.$$.fragment, n), (r = !1);
      },
      d(n) {
        B(e, n);
      }
    }
  );
}
function $t(t) {
  let e,
    r,
    n,
    l,
    i,
    a,
    s = Ne,
    o = [];
  for (let f = 0; f < s.length; f += 1) o[f] = Ze(Ve(t, s, f));
  const u = (f) =>
    L(o[f], 1, 1, () => {
      o[f] = null;
    });
  return {
    c() {
      (e = A('h1')),
        (e.textContent = 'Svelte TS Starter'),
        (r = z()),
        (n = A('p')),
        (n.textContent = 'Svelte + Vite + Typescript + TailwindCSS + Flowbite-Svelte + Svelte-Spa-Router'),
        (l = z());
      for (let f = 0; f < o.length; f += 1) o[f].c();
      (i = le()), b(e, 'class', 'text-3xl dark:text-white'), b(n, 'class', 'text-xl dark:text-white');
    },
    m(f, c) {
      S(f, e, c), S(f, r, c), S(f, n, c), S(f, l, c);
      for (let g = 0; g < o.length; g += 1) o[g].m(f, c);
      S(f, i, c), (a = !0);
    },
    p(f, [c]) {
      if (c & 0) {
        s = Ne;
        let g;
        for (g = 0; g < s.length; g += 1) {
          const d = Ve(f, s, g);
          o[g]
            ? (o[g].p(d, c), N(o[g], 1))
            : ((o[g] = Ze(d)), o[g].c(), N(o[g], 1), o[g].m(i.parentNode, i));
        }
        for (ie(), g = s.length; g < o.length; g += 1) u(g);
        oe();
      }
    },
    i(f) {
      if (!a) {
        for (let c = 0; c < s.length; c += 1) N(o[c]);
        a = !0;
      }
    },
    o(f) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1) L(o[c]);
      a = !1;
    },
    d(f) {
      f && C(e), f && C(r), f && C(n), f && C(l), Qe(o, f), f && C(i);
    }
  };
}
class er extends H {
  constructor(e) {
    super(), Z(this, e, null, $t, F, {});
  }
}
var Le = {},
  tr = {
    get exports() {
      return Le;
    },
    set exports(t) {
      Le = t;
    }
  };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (t) {
  (function () {
    var e = {}.hasOwnProperty;
    function r() {
      for (var n = [], l = 0; l < arguments.length; l++) {
        var i = arguments[l];
        if (i) {
          var a = typeof i;
          if (a === 'string' || a === 'number') n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = r.apply(null, i);
              s && n.push(s);
            }
          } else if (a === 'object') {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes('[native code]')
            ) {
              n.push(i.toString());
              continue;
            }
            for (var o in i) e.call(i, o) && i[o] && n.push(o);
          }
        }
      }
      return n.join(' ');
    }
    t.exports ? ((r.default = r), (t.exports = r)) : (window.classNames = r);
  })();
})(tr);
const ge = Le;
function rr(t) {
  let e;
  const r = t[13].default,
    n = ae(r, t, t[12], null);
  return {
    c() {
      n && n.c();
    },
    m(l, i) {
      n && n.m(l, i), (e = !0);
    },
    p(l, i) {
      n && n.p && (!e || i & 4096) && ce(n, r, l, l[12], e ? ue(r, l[12], i, null) : fe(l[12]), null);
    },
    i(l) {
      e || (N(n, l), (e = !0));
    },
    o(l) {
      L(n, l), (e = !1);
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function nr(t) {
  let e, r;
  const n = t[13].default,
    l = ae(n, t, t[12], null);
  return {
    c() {
      (e = A('span')), l && l.c(), b(e, 'class', t[5]);
    },
    m(i, a) {
      S(i, e, a), l && l.m(e, null), (r = !0);
    },
    p(i, a) {
      l && l.p && (!r || a & 4096) && ce(l, n, i, i[12], r ? ue(n, i[12], a, null) : fe(i[12]), null),
        (!r || a & 32) && b(e, 'class', i[5]);
    },
    i(i) {
      r || (N(l, i), (r = !0));
    },
    o(i) {
      L(l, i), (r = !1);
    },
    d(i) {
      i && C(e), l && l.d(i);
    }
  };
}
function Ce(t) {
  let e, r, n, l, i, a, s;
  const o = [nr, rr],
    u = [];
  function f(d, _) {
    return d[0] && d[1] ? 0 : 1;
  }
  (r = f(t)), (n = u[r] = o[r](t));
  let c = [{ type: (l = t[2] ? void 0 : t[3]) }, { href: t[2] }, t[6], { class: t[4] }],
    g = {};
  for (let d = 0; d < c.length; d += 1) g = M(g, c[d]);
  return {
    c() {
      (e = A(t[2] ? 'a' : 'button')), n.c(), /-/.test(t[2] ? 'a' : 'button') ? qe(e, g) : ne(e, g);
    },
    m(d, _) {
      S(d, e, _),
        u[r].m(e, null),
        (i = !0),
        a ||
          ((s = [
            X(e, 'click', t[14]),
            X(e, 'change', t[15]),
            X(e, 'keydown', t[16]),
            X(e, 'keyup', t[17]),
            X(e, 'mouseenter', t[18]),
            X(e, 'mouseleave', t[19])
          ]),
          (a = !0));
    },
    p(d, _) {
      let k = r;
      (r = f(d)),
        r === k
          ? u[r].p(d, _)
          : (ie(),
            L(u[k], 1, 1, () => {
              u[k] = null;
            }),
            oe(),
            (n = u[r]),
            n ? n.p(d, _) : ((n = u[r] = o[r](d)), n.c()),
            N(n, 1),
            n.m(e, null)),
        (g = me(c, [
          (!i || (_ & 12 && l !== (l = d[2] ? void 0 : d[3]))) && { type: l },
          (!i || _ & 4) && { href: d[2] },
          _ & 64 && d[6],
          (!i || _ & 16) && { class: d[4] }
        ])),
        /-/.test(d[2] ? 'a' : 'button') ? qe(e, g) : ne(e, g);
    },
    i(d) {
      i || (N(n), (i = !0));
    },
    o(d) {
      L(n), (i = !1);
    },
    d(d) {
      d && C(e), u[r].d(), (a = !1), K(s);
    }
  };
}
function lr(t) {
  let e = t[2] ? 'a' : 'button',
    r,
    n,
    l = (t[2] ? 'a' : 'button') && Ce(t);
  return {
    c() {
      l && l.c(), (r = le());
    },
    m(i, a) {
      l && l.m(i, a), S(i, r, a), (n = !0);
    },
    p(i, [a]) {
      i[2],
        e
          ? F(e, i[2] ? 'a' : 'button')
            ? (l.d(1), (l = Ce(i)), l.c(), l.m(r.parentNode, r))
            : l.p(i, a)
          : ((l = Ce(i)), l.c(), l.m(r.parentNode, r)),
        (e = i[2] ? 'a' : 'button');
    },
    i(i) {
      n || (N(l), (n = !0));
    },
    o(i) {
      L(l), (n = !1);
    },
    d(i) {
      i && C(r), l && l.d(i);
    }
  };
}
function ir(t, e, r) {
  const n = ['pill', 'outline', 'gradient', 'size', 'href', 'btnClass', 'type', 'color', 'shadow'];
  let l = te(e, n),
    { $$slots: i = {}, $$scope: a } = e;
  const s = Ct('group');
  let { pill: o = !1 } = e,
    { outline: u = !1 } = e,
    { gradient: f = !1 } = e,
    { size: c = s ? 'sm' : 'md' } = e,
    { href: g = void 0 } = e,
    { btnClass: d = void 0 } = e,
    { type: _ = 'button' } = e,
    { color: k = s ? (u ? 'dark' : 'alternative') : 'blue' } = e,
    { shadow: p = null } = e;
  const j = {
      blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      alternative:
        'text-gray-900 bg-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 hover:text-blue-700 focus:text-blue-700 dark:focus:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      light:
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
      green:
        'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
      red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      yellow:
        'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900',
      primary:
        'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
      purple:
        'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
    },
    v = {
      blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ',
      green:
        'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800',
      cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800',
      teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800',
      lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800',
      red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800',
      pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800',
      purple:
        'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800',
      purpleToBlue:
        'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800',
      cyanToBlue:
        'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800',
      greenToBlue:
        'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800',
      purpleToPink:
        'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800',
      pinkToOrange:
        'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800',
      tealToLime:
        'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700',
      redToYellow:
        'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400'
    },
    m = {
      blue: 'shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80',
      green: 'shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80',
      cyan: 'shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80',
      teal: 'shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ',
      lime: 'shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80',
      red: 'shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ',
      pink: 'shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80',
      purple: 'shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80'
    },
    h = {
      blue: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
      light:
        'text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400',
      dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
      green:
        'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
      red: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
      yellow:
        'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
      purple:
        'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
    },
    y = {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5 text-base'
    };
  function x(E = !1) {
    return s
      ? o
        ? 'first:rounded-l-full last:rounded-r-full'
        : E
        ? 'first:rounded-l-md last:rounded-r-md'
        : 'first:rounded-l-lg last:rounded-r-lg'
      : o
      ? 'rounded-full'
      : E
      ? 'rounded-md'
      : 'rounded-lg';
  }
  const I = () => u || k === 'alternative' || k === 'light';
  let O, P;
  function we(E) {
    Y.call(this, t, E);
  }
  function D(E) {
    Y.call(this, t, E);
  }
  function ct(E) {
    Y.call(this, t, E);
  }
  function ft(E) {
    Y.call(this, t, E);
  }
  function dt(E) {
    Y.call(this, t, E);
  }
  function gt(E) {
    Y.call(this, t, E);
  }
  return (
    (t.$$set = (E) => {
      r(28, (e = M(M({}, e), ee(E)))),
        r(6, (l = te(e, n))),
        'pill' in E && r(7, (o = E.pill)),
        'outline' in E && r(0, (u = E.outline)),
        'gradient' in E && r(1, (f = E.gradient)),
        'size' in E && r(8, (c = E.size)),
        'href' in E && r(2, (g = E.href)),
        'btnClass' in E && r(9, (d = E.btnClass)),
        'type' in E && r(3, (_ = E.type)),
        'color' in E && r(10, (k = E.color)),
        'shadow' in E && r(11, (p = E.shadow)),
        '$$scope' in E && r(12, (a = E.$$scope));
    }),
    (t.$$.update = () => {
      r(
        4,
        (O =
          d ||
          ge(
            'text-center font-medium',
            s ? 'focus:ring-2' : 'focus:ring-4',
            s && 'focus:z-10',
            s || 'focus:outline-none',
            u && f ? 'p-0.5' : 'inline-flex items-center justify-center ' + y[c],
            f ? v[k] : u ? h[k] : j[k],
            k === 'alternative' &&
              (s
                ? 'dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600'
                : 'dark:bg-transparent dark:border-gray-800 dark:hover:border-gray-700'),
            u &&
              k === 'dark' &&
              (s ? 'dark:text-white dark:border-white' : 'dark:text-gray-400 dark:border-gray-700'),
            I() && s && 'border-l-0 first:border-l',
            x(!1),
            p && m[p],
            e.disabled && 'cursor-not-allowed opacity-50',
            e.class
          ))
      ),
        t.$$.dirty & 256 &&
          r(
            5,
            (P = ge(
              'inline-flex items-center justify-center',
              y[c],
              x(!0),
              'bg-white text-gray-900 dark:bg-gray-900 dark:text-white',
              'transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit'
            ))
          );
    }),
    (e = ee(e)),
    [u, f, g, _, O, P, l, o, c, d, k, p, a, i, we, D, ct, ft, dt, gt]
  );
}
class at extends H {
  constructor(e) {
    super(),
      Z(this, e, ir, lr, F, {
        pill: 7,
        outline: 0,
        gradient: 1,
        size: 8,
        href: 2,
        btnClass: 9,
        type: 3,
        color: 10,
        shadow: 11
      });
  }
}
const or = (t) => ({}),
  He = (t) => ({}),
  sr = (t) => ({}),
  Ye = (t) => ({});
function ar(t) {
  let e, r;
  return {
    c() {
      (e = re('svg')),
        (r = re('path')),
        b(
          r,
          'd',
          `M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z`
        ),
        b(r, 'fill-rule', 'evenodd'),
        b(r, 'clip-rule', 'evenodd'),
        b(e, 'class', 'w-5 h-5'),
        b(e, 'fill', 'currentColor'),
        b(e, 'viewBox', '0 0 20 20'),
        b(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(n, l) {
      S(n, e, l), w(e, r);
    },
    p: q,
    d(n) {
      n && C(e);
    }
  };
}
function ur(t) {
  let e, r;
  return {
    c() {
      (e = re('svg')),
        (r = re('path')),
        b(r, 'd', 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'),
        b(e, 'class', 'w-5 h-5'),
        b(e, 'fill', 'currentColor'),
        b(e, 'viewBox', '0 0 20 20'),
        b(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(n, l) {
      S(n, e, l), w(e, r);
    },
    p: q,
    d(n) {
      n && C(e);
    }
  };
}
function cr(t) {
  let e, r, n, l, i, a, s, o, u, f;
  const c = t[5].lightIcon,
    g = ae(c, t, t[4], Ye),
    d = g || ar(),
    _ = t[5].darkIcon,
    k = ae(_, t, t[4], He),
    p = k || ur();
  let j = [{ 'aria-label': 'Dark mode' }, { type: 'button' }, t[2], { class: (s = ge(t[0], t[3].class)) }],
    v = {};
  for (let m = 0; m < j.length; m += 1) v = M(v, j[m]);
  return {
    c() {
      (e = A('script')),
        (e.textContent = `if (window) {
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? window.document.documentElement.classList.add('dark')
        : window.document.documentElement.classList.remove('dark');
    }`),
        (r = z()),
        (n = A('button')),
        (l = A('span')),
        d && d.c(),
        (i = z()),
        (a = A('span')),
        p && p.c(),
        b(l, 'class', 'hidden dark:block'),
        b(a, 'class', 'dark:hidden'),
        ne(n, v);
    },
    m(m, h) {
      w(document.head, e),
        S(m, r, h),
        S(m, n, h),
        w(n, l),
        d && d.m(l, null),
        w(n, i),
        w(n, a),
        p && p.m(a, null),
        n.autofocus && n.focus(),
        (o = !0),
        u || ((f = X(n, 'click', t[1])), (u = !0));
    },
    p(m, [h]) {
      g && g.p && (!o || h & 16) && ce(g, c, m, m[4], o ? ue(c, m[4], h, sr) : fe(m[4]), Ye),
        k && k.p && (!o || h & 16) && ce(k, _, m, m[4], o ? ue(_, m[4], h, or) : fe(m[4]), He),
        ne(
          n,
          (v = me(j, [
            { 'aria-label': 'Dark mode' },
            { type: 'button' },
            h & 4 && m[2],
            (!o || (h & 9 && s !== (s = ge(m[0], m[3].class)))) && { class: s }
          ]))
        );
    },
    i(m) {
      o || (N(d, m), N(p, m), (o = !0));
    },
    o(m) {
      L(d, m), L(p, m), (o = !1);
    },
    d(m) {
      C(e), m && C(r), m && C(n), d && d.d(m), p && p.d(m), (u = !1), f();
    }
  };
}
function fr(t, e, r) {
  const n = ['btnClass'];
  let l = te(e, n),
    { $$slots: i = {}, $$scope: a } = e,
    {
      btnClass:
        s = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'
    } = e;
  const o = () => {
    const u = window.document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', u ? 'dark' : 'light');
  };
  return (
    (t.$$set = (u) => {
      r(3, (e = M(M({}, e), ee(u)))),
        r(2, (l = te(e, n))),
        'btnClass' in u && r(0, (s = u.btnClass)),
        '$$scope' in u && r(4, (a = u.$$scope));
    }),
    (e = ee(e)),
    [s, o, l, e, a, i]
  );
}
class dr extends H {
  constructor(e) {
    super(), Z(this, e, fr, cr, F, { btnClass: 0 });
  }
}
function gr(t) {
  let e, r;
  const n = t[15].default,
    l = ae(n, t, t[14], null);
  let i = [t[1], { class: t[0] }],
    a = {};
  for (let s = 0; s < i.length; s += 1) a = M(a, i[s]);
  return {
    c() {
      (e = A('p')), l && l.c(), ne(e, a);
    },
    m(s, o) {
      S(s, e, o), l && l.m(e, null), (r = !0);
    },
    p(s, [o]) {
      l && l.p && (!r || o & 16384) && ce(l, n, s, s[14], r ? ue(n, s[14], o, null) : fe(s[14]), null),
        ne(e, (a = me(i, [o & 2 && s[1], { class: s[0] }])));
    },
    i(s) {
      r || (N(l, s), (r = !0));
    },
    o(s) {
      L(l, s), (r = !1);
    },
    d(s) {
      s && C(e), l && l.d(s);
    }
  };
}
function hr(t, e, r) {
  const n = [
    'color',
    'height',
    'align',
    'justify',
    'italic',
    'firstupper',
    'upperClass',
    'opacity',
    'whitespace',
    'size',
    'space',
    'weight'
  ];
  let l = te(e, n),
    { $$slots: i = {}, $$scope: a } = e,
    { color: s = 'text-gray-900 dark:text-white' } = e,
    { height: o = 'normal' } = e,
    { align: u = 'left' } = e,
    { justify: f = !1 } = e,
    { italic: c = !1 } = e,
    { firstupper: g = !1 } = e,
    {
      upperClass:
        d = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'
    } = e,
    { opacity: _ = void 0 } = e,
    { whitespace: k = 'normal' } = e,
    { size: p = 'base' } = e,
    { space: j = void 0 } = e,
    { weight: v = 'normal' } = e;
  const m = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl'
    },
    h = {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    },
    y = {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest'
    },
    x = { normal: 'leading-normal', relaxed: 'leading-relaxed', loose: 'leading-loose' },
    I = { left: 'text-left', center: 'text-center', right: 'text-right' },
    O = {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      pre: 'whitespace-pre',
      preline: 'whitespace-pre-line',
      prewrap: 'whitespace-pre-wrap'
    };
  let P = s
      .split(' ')
      .map((D) => D.trim())
      .map((D) => D + '/' + String(_))
      .join(' '),
    we = ge(
      p && m[p],
      (_ && P) || (s && s),
      o && x[o],
      v && h[v],
      j && y[j],
      u && I[u],
      f && 'text-justify',
      c && 'italic',
      g && d,
      k && O[k],
      e.class
    );
  return (
    (t.$$set = (D) => {
      r(23, (e = M(M({}, e), ee(D)))),
        r(1, (l = te(e, n))),
        'color' in D && r(2, (s = D.color)),
        'height' in D && r(3, (o = D.height)),
        'align' in D && r(4, (u = D.align)),
        'justify' in D && r(5, (f = D.justify)),
        'italic' in D && r(6, (c = D.italic)),
        'firstupper' in D && r(7, (g = D.firstupper)),
        'upperClass' in D && r(8, (d = D.upperClass)),
        'opacity' in D && r(9, (_ = D.opacity)),
        'whitespace' in D && r(10, (k = D.whitespace)),
        'size' in D && r(11, (p = D.size)),
        'space' in D && r(12, (j = D.space)),
        'weight' in D && r(13, (v = D.weight)),
        '$$scope' in D && r(14, (a = D.$$scope));
    }),
    (e = ee(e)),
    [we, l, s, o, u, f, c, g, d, _, k, p, j, v, a, i]
  );
}
class mr extends H {
  constructor(e) {
    super(),
      Z(this, e, hr, gr, F, {
        color: 2,
        height: 3,
        align: 4,
        justify: 5,
        italic: 6,
        firstupper: 7,
        upperClass: 8,
        opacity: 9,
        whitespace: 10,
        size: 11,
        space: 12,
        weight: 13
      });
  }
}
function br(t) {
  let e;
  return {
    c() {
      e = T(t[1]);
    },
    m(r, n) {
      S(r, e, n);
    },
    p(r, n) {
      n & 2 && U(e, r[1]);
    },
    d(r) {
      r && C(e);
    }
  };
}
function pr(t) {
  let e, r, n, l;
  return {
    c() {
      (e = re('svg')),
        (r = re('path')),
        (n = z()),
        (l = T(t[3])),
        b(r, 'fill-rule', 'evenodd'),
        b(
          r,
          'd',
          'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
        ),
        b(r, 'clip-rule', 'evenodd'),
        b(e, 'class', 'mr-2 -ml-1 w-5 h-5'),
        b(e, 'fill', 'currentColor'),
        b(e, 'viewBox', '0 0 20 20'),
        b(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(i, a) {
      S(i, e, a), w(e, r), S(i, n, a), S(i, l, a);
    },
    p(i, a) {
      a & 8 && U(l, i[3]);
    },
    d(i) {
      i && C(e), i && C(n), i && C(l);
    }
  };
}
function _r(t) {
  let e, r, n, l, i, a, s, o, u, f, c, g, d, _, k;
  return (
    (g = new mr({
      props: {
        class: 'mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400',
        $$slots: { default: [br] },
        $$scope: { ctx: t }
      }
    })),
    (_ = new at({ props: { href: t[4], $$slots: { default: [pr] }, $$scope: { ctx: t } } })),
    {
      c() {
        (e = A('main')),
          (r = A('div')),
          (n = A('div')),
          (l = A('img')),
          (s = z()),
          (o = A('div')),
          (u = A('h1')),
          (f = T(t[0])),
          (c = z()),
          V(g.$$.fragment),
          (d = z()),
          V(_.$$.fragment),
          $(l.src, (i = t[2].src)) || b(l, 'src', i),
          b(l, 'alt', (a = t[2].alt)),
          b(n, 'class', 'block md:max-w-lg'),
          b(u, 'class', t[7]),
          b(o, 'class', 'text-center xl:max-w-4xl'),
          b(r, 'class', t[6]),
          b(e, 'class', t[5]);
      },
      m(p, j) {
        S(p, e, j),
          w(e, r),
          w(r, n),
          w(n, l),
          w(r, s),
          w(r, o),
          w(o, u),
          w(u, f),
          w(o, c),
          R(g, o, null),
          w(o, d),
          R(_, o, null),
          (k = !0);
      },
      p(p, [j]) {
        (!k || (j & 4 && !$(l.src, (i = p[2].src)))) && b(l, 'src', i),
          (!k || (j & 4 && a !== (a = p[2].alt))) && b(l, 'alt', a),
          (!k || j & 1) && U(f, p[0]),
          (!k || j & 128) && b(u, 'class', p[7]);
        const v = {};
        j & 258 && (v.$$scope = { dirty: j, ctx: p }), g.$set(v);
        const m = {};
        j & 16 && (m.href = p[4]),
          j & 264 && (m.$$scope = { dirty: j, ctx: p }),
          _.$set(m),
          (!k || j & 64) && b(r, 'class', p[6]),
          (!k || j & 32) && b(e, 'class', p[5]);
      },
      i(p) {
        k || (N(g.$$.fragment, p), N(_.$$.fragment, p), (k = !0));
      },
      o(p) {
        L(g.$$.fragment, p), L(_.$$.fragment, p), (k = !1);
      },
      d(p) {
        p && C(e), B(g), B(_);
      }
    }
  );
}
function kr(t, e, r) {
  let { title: n = 'Page not found' } = e,
    {
      description:
        l = 'Oops! Looks like you followed a bad link. If you think this is a problem with us, please	tell us.'
    } = e,
    {
      image: i = {
        src: 'https://flowbite-admin-dashboard.vercel.app/images/illustrations/404.svg',
        alt: 'astronaut'
      }
    } = e,
    { btnTitle: a = 'Go back home' } = e,
    { btnLink: s = 'https://flowbite-svelte-admin-dashboard.vercel.app/' } = e,
    { mainClass: o = 'bg-gray-50 dark:bg-gray-900' } = e,
    {
      mainDivClass:
        u = 'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900'
    } = e,
    {
      h1Class:
        f = 'mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white'
    } = e;
  return (
    (t.$$set = (c) => {
      'title' in c && r(0, (n = c.title)),
        'description' in c && r(1, (l = c.description)),
        'image' in c && r(2, (i = c.image)),
        'btnTitle' in c && r(3, (a = c.btnTitle)),
        'btnLink' in c && r(4, (s = c.btnLink)),
        'mainClass' in c && r(5, (o = c.mainClass)),
        'mainDivClass' in c && r(6, (u = c.mainDivClass)),
        'h1Class' in c && r(7, (f = c.h1Class));
    }),
    [n, l, i, a, s, o, u, f]
  );
}
class ut extends H {
  constructor(e) {
    super(),
      Z(this, e, kr, _r, F, {
        title: 0,
        description: 1,
        image: 2,
        btnTitle: 3,
        btnLink: 4,
        mainClass: 5,
        mainDivClass: 6,
        h1Class: 7
      });
  }
}
function yr(t) {
  let e, r;
  return (
    (e = new ut({})),
    {
      c() {
        V(e.$$.fragment);
      },
      m(n, l) {
        R(e, n, l), (r = !0);
      },
      p: q,
      i(n) {
        r || (N(e.$$.fragment, n), (r = !0));
      },
      o(n) {
        L(e.$$.fragment, n), (r = !1);
      },
      d(n) {
        B(e, n);
      }
    }
  );
}
function wr(t) {
  let e,
    r,
    n = t[0].title + '',
    l,
    i,
    a,
    s,
    o = Ae(t[0].publishDate) + '',
    u,
    f,
    c,
    g,
    d,
    _,
    k = t[0].content + '',
    p,
    j,
    v,
    m;
  return (
    (v = new at({ props: { class: 'my-4', $$slots: { default: [vr] }, $$scope: { ctx: t } } })),
    v.$on('click', Lt),
    {
      c() {
        (e = A('div')),
          (r = A('h1')),
          (l = T(n)),
          (i = z()),
          (a = A('p')),
          (s = T('Published: ')),
          (u = T(o)),
          (f = z()),
          (c = A('img')),
          (d = z()),
          (_ = A('p')),
          (p = T(k)),
          (j = z()),
          V(v.$$.fragment),
          b(r, 'class', 'text-3xl dark:text-white mb-4'),
          b(a, 'class', 'text-lg dark:text-white'),
          $(c.src, (g = t[0].image)) || b(c, 'src', g),
          b(c, 'alt', 'img'),
          b(c, 'class', 'mx-auto m-4'),
          b(_, 'class', 'text-lg dark:text-white'),
          b(e, 'class', 'p-4');
      },
      m(h, y) {
        S(h, e, y),
          w(e, r),
          w(r, l),
          w(e, i),
          w(e, a),
          w(a, s),
          w(a, u),
          w(e, f),
          w(e, c),
          w(e, d),
          w(e, _),
          w(_, p),
          w(e, j),
          R(v, e, null),
          (m = !0);
      },
      p(h, y) {
        (!m || y & 1) && n !== (n = h[0].title + '') && U(l, n),
          (!m || y & 1) && o !== (o = Ae(h[0].publishDate) + '') && U(u, o),
          (!m || (y & 1 && !$(c.src, (g = h[0].image)))) && b(c, 'src', g),
          (!m || y & 1) && k !== (k = h[0].content + '') && U(p, k);
        const x = {};
        y & 4 && (x.$$scope = { dirty: y, ctx: h }), v.$set(x);
      },
      i(h) {
        m || (N(v.$$.fragment, h), (m = !0));
      },
      o(h) {
        L(v.$$.fragment, h), (m = !1);
      },
      d(h) {
        h && C(e), B(v);
      }
    }
  );
}
function vr(t) {
  let e;
  return {
    c() {
      e = T('Back');
    },
    m(r, n) {
      S(r, e, n);
    },
    d(r) {
      r && C(e);
    }
  };
}
function xr(t) {
  let e, r, n, l;
  const i = [wr, yr],
    a = [];
  function s(o, u) {
    return o[0] ? 0 : 1;
  }
  return (
    (e = s(t)),
    (r = a[e] = i[e](t)),
    {
      c() {
        r.c(), (n = le());
      },
      m(o, u) {
        a[e].m(o, u), S(o, n, u), (l = !0);
      },
      p(o, [u]) {
        let f = e;
        (e = s(o)),
          e === f
            ? a[e].p(o, u)
            : (ie(),
              L(a[f], 1, 1, () => {
                a[f] = null;
              }),
              oe(),
              (r = a[e]),
              r ? r.p(o, u) : ((r = a[e] = i[e](o)), r.c()),
              N(r, 1),
              r.m(n.parentNode, n));
      },
      i(o) {
        l || (N(r), (l = !0));
      },
      o(o) {
        L(r), (l = !1);
      },
      d(o) {
        a[e].d(o), o && C(n);
      }
    }
  );
}
function Cr(t, e, r) {
  let { params: n = {} } = e,
    l;
  return (
    Ne.forEach((i, a) => {
      n.title === je(i.title) && r(0, (l = i));
    }),
    (t.$$set = (i) => {
      'params' in i && r(1, (n = i.params));
    }),
    [l, n]
  );
}
class Er extends H {
  constructor(e) {
    super(), Z(this, e, Cr, xr, F, { params: 1 });
  }
}
function Sr(t) {
  let e, r, n;
  return {
    c() {
      (e = A('h1')),
        (e.textContent = 'About'),
        (r = z()),
        (n = A('p')),
        (n.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nibh,
  interdum eu semper sed, viverra eu nulla. Duis aliquam, nisi non vulputate
  mattis, libero elit hendrerit nulla, vitae tristique sem urna eu tellus.
  Suspendisse potenti. Vestibulum sodales neque erat, sit amet tristique nibh
  mattis non. Sed sit amet augue et mauris ultricies faucibus. Phasellus euismod
  risus tellus, laoreet congue lacus ultrices id. Nam at dignissim lorem. Duis
  et viverra felis. Praesent imperdiet iaculis orci vitae finibus. Praesent eget
  ex eu felis aliquam varius. Vestibulum varius, velit malesuada ultricies
  auctor, eros lacus tristique nisi, eleifend lobortis velit sapien in dui.
  Maecenas vel enim vitae ligula tempor tempor. Mauris ut arcu odio. Nunc ac
  neque a neque scelerisque accumsan. Sed facilisis arcu at pharetra posuere.`),
        b(e, 'class', 'text-4xl dark:text-white'),
        b(n, 'class', 'text-xl dark:text-white');
    },
    m(l, i) {
      S(l, e, i), S(l, r, i), S(l, n, i);
    },
    p: q,
    i: q,
    o: q,
    d(l) {
      l && C(e), l && C(r), l && C(n);
    }
  };
}
class Dr extends H {
  constructor(e) {
    super(), Z(this, e, null, Sr, F, {});
  }
}
const Ar = { '/': er, '/about': Dr, '/article/:title': Er, '*': ut };
function Xe(t, e, r) {
  const n = t.slice();
  return (n[2] = e[r][0]), (n[3] = e[r][1]), n;
}
function Ge(t) {
  let e,
    r,
    n,
    l = Object.entries(t[0]),
    i = [];
  for (let a = 0; a < l.length; a += 1) i[a] = Ke(Xe(t, l, a));
  return {
    c() {
      (e = A('p')), (e.textContent = 'Data:'), (r = z()), (n = A('ul'));
      for (let a = 0; a < i.length; a += 1) i[a].c();
    },
    m(a, s) {
      S(a, e, s), S(a, r, s), S(a, n, s);
      for (let o = 0; o < i.length; o += 1) i[o].m(n, null);
    },
    p(a, s) {
      if (s & 1) {
        l = Object.entries(a[0]);
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = Xe(a, l, o);
          i[o] ? i[o].p(u, s) : ((i[o] = Ke(u)), i[o].c(), i[o].m(n, null));
        }
        for (; o < i.length; o += 1) i[o].d(1);
        i.length = l.length;
      }
    },
    d(a) {
      a && C(e), a && C(r), a && C(n), Qe(i, a);
    }
  };
}
function Ke(t) {
  let e,
    r = t[2] + '',
    n,
    l,
    i = t[3] + '',
    a;
  return {
    c() {
      (e = A('li')), (n = T(r)), (l = T(': ')), (a = T(i));
    },
    m(s, o) {
      S(s, e, o), w(e, n), w(e, l), w(e, a);
    },
    p(s, o) {
      o & 1 && r !== (r = s[2] + '') && U(n, r), o & 1 && i !== (i = s[3] + '') && U(a, i);
    },
    d(s) {
      s && C(e);
    }
  };
}
function jr(t) {
  let e, r, n, l, i, a;
  (e = new dr({})), (l = new It({ props: { routes: Ar } }));
  let s = t[0] && Ge(t);
  return {
    c() {
      V(e.$$.fragment),
        (r = z()),
        (n = A('div')),
        V(l.$$.fragment),
        (i = z()),
        s && s.c(),
        b(n, 'class', 'p-8 overflow-hidden bg-gray-50 dark:bg-gray-900');
    },
    m(o, u) {
      R(e, o, u), S(o, r, u), S(o, n, u), R(l, n, null), w(n, i), s && s.m(n, null), (a = !0);
    },
    p(o, [u]) {
      o[0] ? (s ? s.p(o, u) : ((s = Ge(o)), s.c(), s.m(n, null))) : s && (s.d(1), (s = null));
    },
    i(o) {
      a || (N(e.$$.fragment, o), N(l.$$.fragment, o), (a = !0));
    },
    o(o) {
      L(e.$$.fragment, o), L(l.$$.fragment, o), (a = !1);
    },
    d(o) {
      B(e, o), o && C(r), o && C(n), B(l), s && s.d();
    }
  };
}
function Nr(t, e, r) {
  let n;
  async function l() {
    const i = await fetch({}.VITE_API_ENDPOINT);
    r(0, (n = await i.json()));
  }
  return yt(l), [n];
}
class Lr extends H {
  constructor(e) {
    super(), Z(this, e, Nr, jr, F, {});
  }
}
new Lr({ target: document.getElementById('app') });
