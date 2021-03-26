import React from 'react'
import NextHead from 'next/head'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

type HeadProps = {
  title: string,
  description?: string,
  url?: string,
  ogImage?: string
}

const Head = (props: HeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />


    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6' />
    <meta name='description' content='Description' />
    <meta name='keywords' content='Keywords' />
    <title>Next.js PWA Example</title>

    <link rel='manifest' href='/manifest.json' />
    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
    <link rel='apple-touch-icon' href='/apple-icon.png'></link>
    <meta name='theme-color' content='#317EFB' />
  </NextHead>
)

export default Head
