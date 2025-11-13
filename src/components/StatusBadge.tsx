import React from 'react';

type Status = 'Not Started' | 'In Progress' | 'Done';

interface StatusBadgeProps {
  status: Status;
}

const statusColors: Record<Status, string> = {
  'Not Started': 'secondary',
  'In Progress': 'warning',
  'Done': 'success',
};

export default function StatusBadge({ status }: StatusBadgeProps): JSX.Element {
  const colorClass = statusColors[status] || 'secondary';

  return (
    <span className={`badge badge--${colorClass}`}>
      {status}
    </span>
  );
}
