"use client"

import React from 'react';
import Head from 'next/head';

const CanonicalTag = () => {
  const [canonicalUrl, setCanonicalUrl] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setCanonicalUrl(window.location.origin + window.location.pathname);
    }
  }, []);

  return canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null;
};

export default CanonicalTag;
