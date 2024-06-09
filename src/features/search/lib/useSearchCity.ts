import { NavigateFunction } from 'react-router-dom';

export const useSearchCity = (e: React.FormEvent<HTMLFormElement>, navigate: NavigateFunction) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const city = formData.get('city') as string | null;

  if (city && city.trim()) {
    navigate(`/city/${city.toLowerCase()}`);
  }
};
