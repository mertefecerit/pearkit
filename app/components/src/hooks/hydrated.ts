import {useSyncExternalStore} from "react";

const subscribe = () => () => {};

function useIsHydrated() {
    return useSyncExternalStore(subscribe, () => true, () => false);
}

export default useIsHydrated;
