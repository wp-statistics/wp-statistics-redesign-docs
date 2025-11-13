import React from 'react';
import StatusBadge from './StatusBadge';
import FigmaLink from './FigmaLink';

interface MetadataDisplayProps {
  frontMatter: {
    status?: 'Not Started' | 'In Progress' | 'Done';
    add_on?: string;
    type?: string;
    figma?: string;
    group?: string;
    component?: string;
    [key: string]: any;
  };
}

export default function MetadataDisplay({ frontMatter }: MetadataDisplayProps): JSX.Element {
  return (
    <div className="metadata-display" style={{
      marginBottom: '2rem',
      padding: '1rem',
      backgroundColor: 'var(--ifm-background-surface-color)',
      borderRadius: '8px',
      border: '1px solid var(--ifm-color-emphasis-300)'
    }}>
      {frontMatter.status && (
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Status: </strong>
          <StatusBadge status={frontMatter.status} />
        </div>
      )}
      {frontMatter.type && (
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Type: </strong>
          <span className="badge badge--secondary">{frontMatter.type}</span>
        </div>
      )}
      {frontMatter.add_on && (
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Add-on: </strong>
          <span className="badge badge--info">{frontMatter.add_on}</span>
        </div>
      )}
      {frontMatter.group && (
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Group: </strong>
          <span className="badge badge--secondary">{frontMatter.group}</span>
        </div>
      )}
      {frontMatter.component && (
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Component: </strong>
          <span className="badge badge--secondary">{frontMatter.component}</span>
        </div>
      )}
      {frontMatter.figma && (
        <div style={{ marginTop: '1rem' }}>
          <FigmaLink url={frontMatter.figma} />
        </div>
      )}
    </div>
  );
}
