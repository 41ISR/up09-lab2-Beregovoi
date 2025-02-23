import { create } from "zustand";

interface IUser {
  id: string;
}

interface IStore {
  user: string | undefined;
  setUser: (id: string) => void;
  usersId: IUser[];
  setUsersId: (usersId: IUser[]) => void;
}

const useStore = create<IStore>((set) => {
  const storedUsersId = localStorage.getItem('usersId');
  const initialUsersId = storedUsersId ? JSON.parse(storedUsersId) : [];

  return {
    user: undefined,
    setUser: (id: string) => {
      set({ user: id }); // Устанавливаем текущего пользователя
      localStorage.setItem('currentUser', id); // Сохраняем текущего пользователя в localStorage
    },
    usersId: initialUsersId,
    setUsersId: (usersId: IUser[]) => {
      localStorage.setItem('usersId', JSON.stringify(usersId)); // Сохраняем всех пользователей
      set({ usersId });
    },
  };
});

export default useStore;