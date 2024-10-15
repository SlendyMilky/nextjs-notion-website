import * as React from 'react'

import cs from 'classnames'
import {
  /* Font Awesome Icons */
  FaDiscord,
  FaGithub,
  FaLinkedin, //FaMastodon,
  FaTelegram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.discord && {
    name: 'discord',
    href: `${config.discord_invite}`, // Invite URL of the Discord server
    title: `${config.discord}`, // Name of the Discord server
    icon: <FaDiscord />
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `YouTube ${config.youtube}`,
    icon: <FaYoutube />
  },

  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: <FaTwitter />
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: <FaGithub />
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: <FaLinkedin />
  },

  config.telegram && {
    name: 'telegram',
    href: `https://t.me/${config.telegram}`,
    title: `Telegram ${config.author}`,
    icon: <FaTelegram />
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
