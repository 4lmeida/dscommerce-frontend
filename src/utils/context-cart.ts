import { createContext } from "react";


export type ContexCartCountType = {
    contexCartCount: number;
    setContexCartCount: (ContexCartCount: number) => void;
}

export const ContexCartCount = createContext<ContexCartCountType>({
    contexCartCount: 0,
    setContexCartCount: () => {}
});
