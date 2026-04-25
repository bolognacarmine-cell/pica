
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

interface _GlobalComponents {
  BlogCard: typeof import("../../components/blog/BlogCard.vue")['default']
  HomeAboutSection: typeof import("../../components/home/AboutSection.vue")['default']
  HomeAccessoriesSection: typeof import("../../components/home/AccessoriesSection.vue")['default']
  HomeBlogPreviewSection: typeof import("../../components/home/BlogPreviewSection.vue")['default']
  HomeBrandsSection: typeof import("../../components/home/BrandsSection.vue")['default']
  HomeCTABand: typeof import("../../components/home/CTABand.vue")['default']
  HomeCamperWorldSection: typeof import("../../components/home/CamperWorldSection.vue")['default']
  HomeContactSection: typeof import("../../components/home/ContactSection.vue")['default']
  HomeFeaturedVehicles: typeof import("../../components/home/FeaturedVehicles.vue")['default']
  HomeHeroSection: typeof import("../../components/home/HeroSection.vue")['default']
  HomeIntroStrip: typeof import("../../components/home/IntroStrip.vue")['default']
  HomeLifestyleSection: typeof import("../../components/home/LifestyleSection.vue")['default']
  HomePortalCTA: typeof import("../../components/home/PortalCTA.vue")['default']
  HomePreventivoSection: typeof import("../../components/home/PreventivoSection.vue")['default']
  HomeQuoteSection: typeof import("../../components/home/QuoteSection.vue")['default']
  HomeServiceSection: typeof import("../../components/home/ServiceSection.vue")['default']
  HomeServicesSection: typeof import("../../components/home/ServicesSection.vue")['default']
  HomeSupportSection: typeof import("../../components/home/SupportSection.vue")['default']
  HomeTestimonialsSection: typeof import("../../components/home/TestimonialsSection.vue")['default']
  HomeTradeInSection: typeof import("../../components/home/TradeInSection.vue")['default']
  LayoutAppHeader: typeof import("../../components/layout/AppHeader.vue")['default']
  LayoutFooter: typeof import("../../components/layout/Footer.vue")['default']
  LayoutHeader: typeof import("../../components/layout/Header.vue")['default']
  VeicoliVehicleCarousel: typeof import("../../components/veicoli/VehicleCarousel.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyBlogCard: LazyComponent<typeof import("../../components/blog/BlogCard.vue")['default']>
  LazyHomeAboutSection: LazyComponent<typeof import("../../components/home/AboutSection.vue")['default']>
  LazyHomeAccessoriesSection: LazyComponent<typeof import("../../components/home/AccessoriesSection.vue")['default']>
  LazyHomeBlogPreviewSection: LazyComponent<typeof import("../../components/home/BlogPreviewSection.vue")['default']>
  LazyHomeBrandsSection: LazyComponent<typeof import("../../components/home/BrandsSection.vue")['default']>
  LazyHomeCTABand: LazyComponent<typeof import("../../components/home/CTABand.vue")['default']>
  LazyHomeCamperWorldSection: LazyComponent<typeof import("../../components/home/CamperWorldSection.vue")['default']>
  LazyHomeContactSection: LazyComponent<typeof import("../../components/home/ContactSection.vue")['default']>
  LazyHomeFeaturedVehicles: LazyComponent<typeof import("../../components/home/FeaturedVehicles.vue")['default']>
  LazyHomeHeroSection: LazyComponent<typeof import("../../components/home/HeroSection.vue")['default']>
  LazyHomeIntroStrip: LazyComponent<typeof import("../../components/home/IntroStrip.vue")['default']>
  LazyHomeLifestyleSection: LazyComponent<typeof import("../../components/home/LifestyleSection.vue")['default']>
  LazyHomePortalCTA: LazyComponent<typeof import("../../components/home/PortalCTA.vue")['default']>
  LazyHomePreventivoSection: LazyComponent<typeof import("../../components/home/PreventivoSection.vue")['default']>
  LazyHomeQuoteSection: LazyComponent<typeof import("../../components/home/QuoteSection.vue")['default']>
  LazyHomeServiceSection: LazyComponent<typeof import("../../components/home/ServiceSection.vue")['default']>
  LazyHomeServicesSection: LazyComponent<typeof import("../../components/home/ServicesSection.vue")['default']>
  LazyHomeSupportSection: LazyComponent<typeof import("../../components/home/SupportSection.vue")['default']>
  LazyHomeTestimonialsSection: LazyComponent<typeof import("../../components/home/TestimonialsSection.vue")['default']>
  LazyHomeTradeInSection: LazyComponent<typeof import("../../components/home/TradeInSection.vue")['default']>
  LazyLayoutAppHeader: LazyComponent<typeof import("../../components/layout/AppHeader.vue")['default']>
  LazyLayoutFooter: LazyComponent<typeof import("../../components/layout/Footer.vue")['default']>
  LazyLayoutHeader: LazyComponent<typeof import("../../components/layout/Header.vue")['default']>
  LazyVeicoliVehicleCarousel: LazyComponent<typeof import("../../components/veicoli/VehicleCarousel.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
