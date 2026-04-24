
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const BlogCard: typeof import("../components/blog/BlogCard.vue")['default']
export const HomeAboutSection: typeof import("../components/home/AboutSection.vue")['default']
export const HomeAccessoriesSection: typeof import("../components/home/AccessoriesSection.vue")['default']
export const HomeBlogPreviewSection: typeof import("../components/home/BlogPreviewSection.vue")['default']
export const HomeBrandsSection: typeof import("../components/home/BrandsSection.vue")['default']
export const HomeCTABand: typeof import("../components/home/CTABand.vue")['default']
export const HomeCamperWorldSection: typeof import("../components/home/CamperWorldSection.vue")['default']
export const HomeContactSection: typeof import("../components/home/ContactSection.vue")['default']
export const HomeFeaturedVehicles: typeof import("../components/home/FeaturedVehicles.vue")['default']
export const HomeHeroSection: typeof import("../components/home/HeroSection.vue")['default']
export const HomeIntroStrip: typeof import("../components/home/IntroStrip.vue")['default']
export const HomeLifestyleSection: typeof import("../components/home/LifestyleSection.vue")['default']
export const HomePortalCTA: typeof import("../components/home/PortalCTA.vue")['default']
export const HomePreventivoSection: typeof import("../components/home/PreventivoSection.vue")['default']
export const HomeQuoteSection: typeof import("../components/home/QuoteSection.vue")['default']
export const HomeServiceSection: typeof import("../components/home/ServiceSection.vue")['default']
export const HomeServicesSection: typeof import("../components/home/ServicesSection.vue")['default']
export const HomeSupportSection: typeof import("../components/home/SupportSection.vue")['default']
export const HomeTestimonialsSection: typeof import("../components/home/TestimonialsSection.vue")['default']
export const HomeTradeInSection: typeof import("../components/home/TradeInSection.vue")['default']
export const LayoutAppHeader: typeof import("../components/layout/AppHeader.vue")['default']
export const LayoutFooter: typeof import("../components/layout/Footer.vue")['default']
export const LayoutHeader: typeof import("../components/layout/Header.vue")['default']
export const VeicoliVehicleCarousel: typeof import("../components/veicoli/VehicleCarousel.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyBlogCard: LazyComponent<typeof import("../components/blog/BlogCard.vue")['default']>
export const LazyHomeAboutSection: LazyComponent<typeof import("../components/home/AboutSection.vue")['default']>
export const LazyHomeAccessoriesSection: LazyComponent<typeof import("../components/home/AccessoriesSection.vue")['default']>
export const LazyHomeBlogPreviewSection: LazyComponent<typeof import("../components/home/BlogPreviewSection.vue")['default']>
export const LazyHomeBrandsSection: LazyComponent<typeof import("../components/home/BrandsSection.vue")['default']>
export const LazyHomeCTABand: LazyComponent<typeof import("../components/home/CTABand.vue")['default']>
export const LazyHomeCamperWorldSection: LazyComponent<typeof import("../components/home/CamperWorldSection.vue")['default']>
export const LazyHomeContactSection: LazyComponent<typeof import("../components/home/ContactSection.vue")['default']>
export const LazyHomeFeaturedVehicles: LazyComponent<typeof import("../components/home/FeaturedVehicles.vue")['default']>
export const LazyHomeHeroSection: LazyComponent<typeof import("../components/home/HeroSection.vue")['default']>
export const LazyHomeIntroStrip: LazyComponent<typeof import("../components/home/IntroStrip.vue")['default']>
export const LazyHomeLifestyleSection: LazyComponent<typeof import("../components/home/LifestyleSection.vue")['default']>
export const LazyHomePortalCTA: LazyComponent<typeof import("../components/home/PortalCTA.vue")['default']>
export const LazyHomePreventivoSection: LazyComponent<typeof import("../components/home/PreventivoSection.vue")['default']>
export const LazyHomeQuoteSection: LazyComponent<typeof import("../components/home/QuoteSection.vue")['default']>
export const LazyHomeServiceSection: LazyComponent<typeof import("../components/home/ServiceSection.vue")['default']>
export const LazyHomeServicesSection: LazyComponent<typeof import("../components/home/ServicesSection.vue")['default']>
export const LazyHomeSupportSection: LazyComponent<typeof import("../components/home/SupportSection.vue")['default']>
export const LazyHomeTestimonialsSection: LazyComponent<typeof import("../components/home/TestimonialsSection.vue")['default']>
export const LazyHomeTradeInSection: LazyComponent<typeof import("../components/home/TradeInSection.vue")['default']>
export const LazyLayoutAppHeader: LazyComponent<typeof import("../components/layout/AppHeader.vue")['default']>
export const LazyLayoutFooter: LazyComponent<typeof import("../components/layout/Footer.vue")['default']>
export const LazyLayoutHeader: LazyComponent<typeof import("../components/layout/Header.vue")['default']>
export const LazyVeicoliVehicleCarousel: LazyComponent<typeof import("../components/veicoli/VehicleCarousel.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
