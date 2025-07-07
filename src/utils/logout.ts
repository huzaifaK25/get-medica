'use client';
import { deleteCookie } from 'cookies-next/client';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/route';

export function useLogout() {
  const router = useRouter();

  return async function logout() {
    deleteCookie('accessToken', { path: '/' });
    router.replace(ROUTES.AUTH.LOGIN);
  };
}
