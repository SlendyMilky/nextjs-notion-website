import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7875426197cf461698809def95960ebf',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'nextjs-notion-website',
  domain: 'yannsolliard.ch',
  author: 'Yann Solliard',

  // open graph metadata (optional)
  description: 'Make your website easly with the nextjs-notion-website ;)',

  // social usernames (optional)
  // twitter: '',
  github: 'slendymilky',
  linkedin: 'yann-solliard',
  telegram: 'SlendyMilky',
  discord: 'Serveur iMot3k',  /* Server Name */
  discord_invite: 'https://discord.gg/4jNmg9qSJU', /* Discord invite link */
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: 'channel/UC-i4k6L0R70vkK0zE8Buj5Q', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

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
  // giscusRepoId: 'R_kgDOMAEJ5A',
  // giscusCategory: 'Announcements',
  // giscusCategoryId: 'DIC_kwDOMAEJ5M4Cfm5c',

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
  navigationStyle: 'default',

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
