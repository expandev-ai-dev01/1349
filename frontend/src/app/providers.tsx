import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';

/**
 * @component AppProviders
 * @summary Global application providers wrapper
 * @description Wraps application with all necessary context providers
 * @domain core
 * @type provider-component
 * @category application
 */
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
