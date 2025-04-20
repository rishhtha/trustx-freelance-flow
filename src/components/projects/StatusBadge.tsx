
import React from 'react';

type StatusType = 'awaiting_payment' | 'in_progress' | 'delivered' | 'in_dispute' | 'completed';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  awaiting_payment: {
    label: 'Awaiting Payment',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    icon: '💰',
  },
  in_progress: {
    label: 'In Progress',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: '⚙️',
  },
  delivered: {
    label: 'Delivered',
    color: 'bg-green-100 text-green-800 border-green-200',
    icon: '📦',
  },
  in_dispute: {
    label: 'In Dispute',
    color: 'bg-red-100 text-red-800 border-red-200',
    icon: '⚠️',
  },
  completed: {
    label: 'Completed',
    color: 'bg-gray-100 text-gray-800 border-gray-200',
    icon: '✅',
  },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const { label, color, icon } = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${color} ${className}`}
    >
      <span className="mr-1">{icon}</span>
      {label}
    </span>
  );
};

export default StatusBadge;
