import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import { store } from "./stores/store.ts";
import SuspenseContent from "./containers/SuspenseContent";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
      staleTime: 5 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<SuspenseContent />}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        <ToastContainer />
      </QueryClientProvider>
    </Provider>
  </Suspense>
);
