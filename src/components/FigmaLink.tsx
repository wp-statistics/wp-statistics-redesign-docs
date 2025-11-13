import React from 'react';

interface FigmaLinkProps {
  url?: string;
}

export default function FigmaLink({ url }: FigmaLinkProps): JSX.Element | null {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="button button--primary button--sm"
      style={{ marginTop: '0.5rem' }}
    >
      📐 View Figma Design
    </a>
  );
}
