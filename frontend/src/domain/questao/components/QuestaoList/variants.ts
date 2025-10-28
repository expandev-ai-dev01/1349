import { clsx } from 'clsx';

export interface QuestaoListVariantProps {
  className?: string;
}

export function getQuestaoListClassName(props: QuestaoListVariantProps): string {
  const { className } = props;
  return clsx('space-y-4', className);
}

export function getQuestaoCardClassName(): string {
  return clsx('bg-white rounded-lg shadow p-6', 'hover:shadow-md transition-shadow duration-200');
}

export function getQuestaoHeaderClassName(): string {
  return clsx('flex items-start justify-between mb-4');
}

export function getQuestaoActionsClassName(): string {
  return clsx('flex gap-2');
}

export function getQuestaoButtonClassName(variant: 'view' | 'edit' | 'delete'): string {
  const baseClasses = clsx(
    'inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors'
  );

  const variantClasses = {
    view: 'text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500',
    edit: 'text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500',
    delete: 'text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500',
  };

  return clsx(baseClasses, variantClasses[variant]);
}

export function getBadgeClassName(type: 'tipo' | 'dificuldade'): string {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

  if (type === 'tipo') {
    return clsx(baseClasses, 'bg-blue-100 text-blue-800');
  }

  return clsx(baseClasses, 'bg-gray-100 text-gray-800');
}
