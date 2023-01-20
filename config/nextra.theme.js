import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const Head = () => {
  const { asPath } = useRouter()
  const { frontMatter } = useConfig()

  return (
    <Fragment>
      <meta property="og:url" content={`https://my-app.com${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Sam'} />
      <meta property="og:description" content={frontMatter.description || 'Agostinho Sam'} />
    </Fragment>
  )
}

function formatTitle (title) {
  return String(
    title
      .split('_')
      .map(char => char.charAt(0).toUpperCase() + char.slice(1, char.length))
      .join(' ')
  )
}

const themeConfig = {

  logo: (
    <span>Agostinho Lopes</span>
  ),

  head: Head,

  footer: (
    <small style={{ display: 'block', marginTop: '0rem' }}>
      <time>{new Date().getFullYear()}</time> © Agostinho Sambo Lopes.
    </small>
  ),

  header: (
    <header>
      <span>Agostinhod</span>
    </header>
  ),

  project: {
    link: 'https://github.com/agostinhosamil'
  },

  chat: {
    link: 'https://wa.me/+244923285171'
  },

  banner: {
    key: '1.0-sam',
    text: (
      <a href="https://www.agostinhosam.com" rel="noreferrer" target="_blank">
        Visit my website. 👩‍💻
      </a>
    ),
  },

  sidebar: {
    defaultMenuCollapseLevel: 5,
    titleComponent: ({ type, title, route }) => (
      <span>👉🏼 {formatTitle(title)}</span>
    ),
    toggleButton: true
  },

  toc: {
    float: true,
    title: () => <h1>Toc Toc</h1>,
    extraContent: () => <h1>Toc Toc Ends Here</h1>
  },

  navigation: {
    next: true,
    prev: true
  },

  gitTimestamp: ({ timestamp }) => {
    return (
      <div>Updated at: {timestamp.toISOString()}</div>
    )
  }
}

export default themeConfig
