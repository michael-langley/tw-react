import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaObject {
  name: string;
  content: string;
}

interface Props {
  description?: string;
  lang?: string;
  meta?: MetaObject[];
  keywords?: string[];
  title?: string;
  siteTitle?: string;
}

const SEO = (props: Props): JSX.Element => {
  const { description = '', lang = 'en', meta = [], keywords = [], title, siteTitle } = props;
  const metaDescription = description;
  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : `${siteTitle}`}</title>
      <html lang={lang} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={[...keywords].join(`, `)} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      {meta.map((m, i) => (
        <meta key={i} name={m.name} content={m.content} />
      ))}
    </Helmet>
  );
};

export default SEO;
