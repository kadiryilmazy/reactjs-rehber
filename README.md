````markdown
### React Router DOM Loaders

React Router DOM Loaders, veri yükleme işlemlerini rotalarla entegre etmenizi sağlar. Bu özellik, bir rota yüklenmeden önce gerekli verilerin alınmasını ve bileşenlere aktarılmasını kolaylaştırır.

#### Loader Kullanımı

Bir loader tanımlamak için, rotanızın `loader` özelliğini kullanabilirsiniz. Loader, bir `Promise` döndüren bir fonksiyon olmalıdır.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

async function dashboardLoader() {
    const response = await fetch("/api/dashboard-data");
    if (!response.ok) {
        throw new Error("Veri yüklenemedi!");
    }
    return response.json();
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
                loader: dashboardLoader,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
```

#### Loader'dan Gelen Verilere Erişim

Loader'dan dönen verilere, bileşeninizde `useLoaderData` kancası ile erişebilirsiniz.

```jsx
import { useLoaderData } from "react-router-dom";

function Dashboard() {
    const data = useLoaderData();

    return (
        <div>
            <h1>Dashboard</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Dashboard;
```

#### Loader Avantajları

-   **Veri Yönetimi**: Rotaya özel veri yükleme işlemlerini kolaylaştırır.
-   **Performans**: Rota yüklenmeden önce gerekli verilerin alınmasını sağlar.
-   **Hata Yönetimi**: Veri yükleme sırasında oluşan hataları yakalayabilir ve yönetebilirsiniz.

Daha fazla bilgi için [React Router Loaders dokümantasyonuna](https://reactrouter.com/en/main/start/overview#data-loading) göz atabilirsiniz.
````
