import { defineComponent as r, computed as u, openBlock as a, createElementBlock as p, normalizeClass as s, renderSlot as l } from "vue";
/* empty css                  */
const y = /* @__PURE__ */ r({
  name: "ck-button",
  __name: "button",
  props: {
    type: {}
  },
  setup(e) {
    const t = e, o = u(() => (console.log({ [`ea-button--${t.type}`]: t.type }), { [`ea-button--${t.type}`]: t.type }));
    return (n, c) => (a(), p("button", {
      class: s(["ea-button", o.value])
    }, [
      l(n.$slots, "default")
    ], 2));
  }
});
export {
  y as default
};
