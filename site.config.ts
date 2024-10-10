import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1124a8a1f925801095eef422091d45e6',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Solliard IT Solutions',
  domain: 'solliard.it',
  author: 'Yann Solliard',

  // open graph metadata (optional)
  description: 'Solliard IT Solutions, une entreprise spécialisée dans la gestion de projets IT et la création de sites web.',

  // social usernames (optional)
  // twitter: '',
  github: 'slendymilky',
  linkedin: 'yann-solliard',
  // telegram: '',
  // discord: '',  /* Server Name */
  // discord_invite: '', /* Discord invite link */
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

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
  // giscusRepo: 'SlendyMilky/yannsolliard.ch',
  // giscusRepoId: 'R_kgDOMVInGA',
  // giscusCategory: 'yannsolliard.ch',
  // giscusCategoryId: 'DIC_kwDOMVInGM4Cgun-',

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

  navigationLinks: [
     {
       title: 'Contact ☎️',
       pageId: '1124a8a1f92580c9bdccec75e36c386d'
     },
     {
       title: 'Services 💻',
       pageId: '1144a8a1f925808bb1a5e6647cbf5152'
     },
     {
       title: 'Aide 🆘',
       pageId: '11b4a8a1f925800aa784d1fd6a042bf4'
     }
 ],

  isSearchEnabled: true
})