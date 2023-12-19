import {
  f,
  s,
  u,
  w
} from "./chunk.CI4I3F3P.js";
import {
  __decorateClass,
  __spreadProps,
  __spreadValues
} from "./chunk.PM7NIY3M.js";

// node_modules/.pnpm/@lit+reactive-element@2.0.2/node_modules/@lit/reactive-element/decorators/property.js
var o = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r = (t2 = o, e4, r2) => {
  const { kind: n2, metadata: i2 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i2);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i2, s2 = /* @__PURE__ */ new Map()), s2.set(r2.name, t2), "accessor" === n2) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n3 = e4.get.call(this);
      e4.set.call(this, r3), this.requestUpdate(o2, n3, t2);
    }, init(e5) {
      return void 0 !== e5 && this.C(o2, void 0, t2), e5;
    } };
  }
  if ("setter" === n2) {
    const { name: o2 } = r2;
    return function(r3) {
      const n3 = this[o2];
      e4.call(this, r3), this.requestUpdate(o2, n3, t2);
    };
  }
  throw Error("Unsupported decorator location: " + n2);
};
function n(t2) {
  return (e4, o2) => "object" == typeof o2 ? r(t2, e4, o2) : ((t3, e5, o3) => {
    const r2 = e5.hasOwnProperty(o3);
    return e5.constructor.createProperty(o3, r2 ? __spreadProps(__spreadValues({}, t3), { wrapped: true }) : t3), r2 ? Object.getOwnPropertyDescriptor(e5, o3) : void 0;
  })(t2, e4, o2);
}

// node_modules/.pnpm/lit-html@3.1.0/node_modules/lit-html/directive.js
var t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e2 = (t2) => (...e4) => ({ _$litDirective$: t2, values: e4 });
var i = class {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e4, i2) {
    this._$Ct = t2, this._$AM = e4, this._$Ci = i2;
  }
  _$AS(t2, e4) {
    return this.update(t2, e4);
  }
  update(t2, e4) {
    return this.render(...e4);
  }
};

// node_modules/.pnpm/lit-html@3.1.0/node_modules/lit-html/directives/class-map.js
var e3 = e2(class extends i {
  constructor(t2) {
    var _a;
    if (super(t2), t2.type !== t.ATTRIBUTE || "class" !== t2.name || ((_a = t2.strings) == null ? void 0 : _a.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((s2) => t2[s2]).join(" ") + " ";
  }
  update(s2, [i2]) {
    var _a, _b;
    if (void 0 === this.it) {
      this.it = /* @__PURE__ */ new Set(), void 0 !== s2.strings && (this.st = new Set(s2.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
      for (const t2 in i2)
        i2[t2] && !((_a = this.st) == null ? void 0 : _a.has(t2)) && this.it.add(t2);
      return this.render(i2);
    }
    const r2 = s2.element.classList;
    for (const t2 of this.it)
      t2 in i2 || (r2.remove(t2), this.it.delete(t2));
    for (const t2 in i2) {
      const s3 = !!i2[t2];
      s3 === this.it.has(t2) || ((_b = this.st) == null ? void 0 : _b.has(t2)) || (s3 ? (r2.add(t2), this.it.add(t2)) : (r2.remove(t2), this.it.delete(t2)));
    }
    return w;
  }
});

// src/internal/ShoelaceElement.ts
var ShoelaceElement = class extends s {
  constructor() {
    super();
    Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
      this.constructor.define(name, component);
    });
  }
  static define(name, elementConstructor = this, options = {}) {
    const currentlyRegisteredConstructor = customElements.get(name);
    if (!currentlyRegisteredConstructor) {
      customElements.define(name, class extends elementConstructor {
      }, options);
      return;
    }
    let newVersion = " (unknown version)";
    let existingVersion = newVersion;
    if ("version" in elementConstructor && elementConstructor.version) {
      newVersion = " v" + elementConstructor.version;
    }
    if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
      existingVersion = " v" + currentlyRegisteredConstructor.version;
    }
    if (newVersion && existingVersion && newVersion === existingVersion) {
      return;
    }
    console.warn(
      `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
    );
  }
};
ShoelaceElement.dependencies = {};
__decorateClass([
  n()
], ShoelaceElement.prototype, "dir", 2);
__decorateClass([
  n()
], ShoelaceElement.prototype, "lang", 2);

export {
  n,
  e3 as e,
  ShoelaceElement
};
/*! Bundled license information:

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
