import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "VeicoliVehicleCarousel",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      default: () => []
    },
    altText: {
      type: String,
      default: "Immagine Veicolo"
    },
    height: {
      type: String,
      default: "100%"
    },
    autoplayInterval: {
      type: Number,
      default: 5e3
    }
  },
  setup(__props) {
    const currentIndex = ref(0);
    const showArrows = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        ":--v2352bc8c": __props.height
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel-container" }, _attrs, _cssVars))} data-v-4e294856><div class="carousel-wrapper" data-v-4e294856><!--[-->`);
      ssrRenderList(__props.images, (img, index) => {
        _push(`<div class="carousel-slide" style="${ssrRenderStyle(currentIndex.value === index ? null : { display: "none" })}" data-v-4e294856><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", __props.altText)} class="carousel-img" loading="lazy" data-v-4e294856></div>`);
      });
      _push(`<!--]-->`);
      if (!__props.images || __props.images.length === 0) {
        _push(`<div class="carousel-slide" data-v-4e294856><img src="https://placehold.co/800x600/141414/white?text=Pica+Caravan"${ssrRenderAttr("alt", __props.altText)} class="carousel-img" data-v-4e294856></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.images && __props.images.length > 1) {
        _push(`<!--[--><button class="nav-btn prev" style="${ssrRenderStyle(showArrows.value ? null : { display: "none" })}" data-v-4e294856><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4e294856><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" data-v-4e294856></path></svg></button><button class="nav-btn next" style="${ssrRenderStyle(showArrows.value ? null : { display: "none" })}" data-v-4e294856><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4e294856><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" data-v-4e294856></path></svg></button><div class="carousel-dots" data-v-4e294856><!--[-->`);
        ssrRenderList(__props.images, (_, index) => {
          _push(`<span class="${ssrRenderClass([{ active: currentIndex.value === index }, "dot"])}" data-v-4e294856></span>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/veicoli/VehicleCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VehicleCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e294856"]]);

export { VehicleCarousel as V };
//# sourceMappingURL=VehicleCarousel-CBCNczIc.mjs.map
