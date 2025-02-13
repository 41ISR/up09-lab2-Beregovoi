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

const useStore = create<IStore>((set) => ({
    user: undefined,
    setUser: (id: string) => set({ user: id }),
    usersId: [],
    setUsersId: (usersId: IUser[]) => set({ usersId: usersId }),
}));

export default useStore;
