import React from 'react';
import styles from './styles.module.css';

interface WidgetLayoutProps {
  children: React.ReactNode;
}

export default function WidgetLayout({ children }: WidgetLayoutProps): JSX.Element {
  return (
    <div className={styles.widgetLayout}>
      {children}
    </div>
  );
}
