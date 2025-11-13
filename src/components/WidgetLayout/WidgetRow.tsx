import React from 'react';
import styles from './styles.module.css';

interface WidgetRowProps {
  children: React.ReactNode;
}

export default function WidgetRow({ children }: WidgetRowProps): JSX.Element {
  return (
    <div className={styles.widgetRow}>
      {children}
    </div>
  );
}
