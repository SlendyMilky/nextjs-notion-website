import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '68416c45b17b4824a358baee52ddd25a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Labby.ch | Self-Hosting',
  domain: 'labby.ch',
  author: 'Yann Solliard',

  // open graph metadata (optional)
  description: "Labby.ch, le petit blog tuto de Slendy_Milky sur l'auto-hébergement ! ",

  // social usernames (optional)
  // twitter: '',
  github: 'slendymilky',
  linkedin: 'yann-solliard',
  telegram: 'Slendy_Milky',
  discord: '» Labby.ch',  /* Server Name */
  discord_invite: 'https://discord.gg/RpgS68bh3B', /* Discord invite link */
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '@labby_ch', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // uncomment gisucs config to enable gisucs, get these keys from https://giscus.app/
  giscusRepo: 'SlendyMilky/nextjs-notion-website',
  giscusRepoId: 'R_kgDOMVInGA',
  giscusCategory: 'labby.ch',
  giscusCategoryId: 'DIC_kwDOMVInGM4CgwTT',

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom',

  //navigationLinks: [
  //   {
  //     title: 'Contact',
  //     pageId: 'Relation-64bf6bfe6a4043a09a95e2f0ea55f79b'
  //   },
  //   {
  //     title: 'Bio',
  //     pageId: 'A-propos-de-moi-0aebde79254b4f0e8a04a451c5c426a9'
  //   }
 //],

  isSearchEnabled: true
})
