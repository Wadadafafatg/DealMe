import { useAuthStore } from '../stores/useAuthStore';

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  return { user, setUser, clearUser, isAuthenticated: Boolean(user) };
}
