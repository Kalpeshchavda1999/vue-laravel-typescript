import { useAuthStore } from "@/stores/auth";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default function groupAccess(groupName: string) {
    return (to: RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext) => {
            const store = useAuthStore();
            const canAccess = store.canAccess;
        if (canAccess == groupName) {
            next()
        } else {
            next({ name: 'error-403' })
        }
    }
}
