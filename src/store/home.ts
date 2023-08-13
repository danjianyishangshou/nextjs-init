import { getCategoryList } from "@/servers/home/category";
// 创建状态管理
import { create } from "zustand";
// 实现本地存储
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  list: Array<any>;
  isFetching: boolean;
};
type Action = {
  setList: () => void;
};
export const useHomeStore = create(
  persist<State & Action>(
    (set, get) => ({
      list: [],
      isFetching: false,
      setList: async () => {
        if (!get().isFetching) {
          set({ isFetching: true }); // 设置正在获取数据的标志
          try {
            const { data } = await getCategoryList();
            set({ list: data });
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            set({ isFetching: false }); // 清除正在获取数据的标志
          }
        }
      }
    }),
    {
      name: "list-storage",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
