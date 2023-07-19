import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import { useInterFaceStore } from "@/stores/interFaceStore";
import axios, {
    type AxiosError,
    type AxiosInstance,
    type InternalAxiosRequestConfig,
    type AxiosResponse,
} from "axios";

const authStore = useAuthStore();
const interfaceStore = useInterFaceStore();

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const { method, url } = config;

    const token = authStore.token;
    interfaceStore.isLoading = true;

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    if (method === "get") {
        config.timeout = 15000;
    }
    return config;
};


const onResponse = (response: AxiosResponse): AxiosResponse => {
    const { method, url } = response.config;
    const { status } = response;
    interfaceStore.isLoading = false;

    if (status !== 200) {
        console.log("🚀 ~ file: axios.ts:40 ~ onResponse ~ status:", status)
    }

    // Set Loading End Here
    // Handle Response Data Here
    // Error Handling When Return Success with Error Code Here
    return response;
};


const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
    if (axios.isAxiosError(error)) {
        const { message } = error;
        const { method, url } = error.config as InternalAxiosRequestConfig;
        const { statusText, status } = error.response as AxiosResponse ?? {};
        switch (status) {
            case 401: {
                router.push({ name: "login" })
                break;
            }
            case 403: {
                // "Permission denied"
                break;
            }
            case 404: {
                // "Invalid request"
                break;
            }
            case 500: {
                // "Server error"
                break;
            }
            default: {
                // "Unknown error occurred"
                break;
            }
        }

        if (status === 401) {
            // Delete Token & Go To Login Page if you required.
            sessionStorage.removeItem("token");
        }
    } else {
        console.log("axios error==>", error);
    }

    return Promise.reject(error);
};

const baseURL = 'http://127.0.0.1:8000';

const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(onRequest, onErrorResponse);
axiosInstance.interceptors.response.use(onResponse, onErrorResponse);

export default axiosInstance;
