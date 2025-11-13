import React from 'react';
import styles from './styles.module.css';

interface WidgetCellProps {
  children: React.ReactNode;
  addon?: 'Free' | 'Data Plus' | 'MiniChart' | string;
  fullWidth?: boolean;
}

export default function WidgetCell({ children, addon, fullWidth }: WidgetCellProps): JSX.Element {
  const addonClass = addon ? styles.widgetCell__withAddon : '';
  const fullWidthClass = fullWidth ? styles.widgetCell__fullWidth : '';

  return (
    <div className={`${styles.widgetCell} ${addonClass} ${fullWidthClass}`}>
      <div className={styles.widgetCell__content}>
        {children}
      </div>
      {addon && (
        <span className={`${styles.widgetCell__addon} badge ${getAddonBadgeClass(addon)}`}>
          {addon}
        </span>
      )}
    </div>
  );
}

function getAddonBadgeClass(addon: string): string {
  switch (addon) {
    case 'Free':
      return 'badge--success';
    case 'Data Plus':
    case 'MiniChart':
      return 'badge--warning';
    default:
      return 'badge--info';
  }
}
