# 📌 React Router DOM Kullanımı

Bu bölüm, React Router DOM kullanarak bir React projesine yönlendirme (routing) eklemeyi adım adım açıklamaktadır. React Router DOM, React uygulamalarında sayfa yönlendirmesi yapmak için kullanılan popüler bir kütüphanedir.

## React Router DOM Kurulumu

Aşağıdaki adımları izleyerek React Router DOM'u projenize ekleyebilirsiniz:

1. React Router DOM kütüphanesini yükleyin:

    ```bash
    npm install react-router-dom
    ```

## Örnek Kullanım

Aşağıda, React Router DOM kullanarak bir yönlendirme sistemi oluşturma örneği verilmiştir:

```javascript
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home, About, Courses } from "./pages/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Home",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/Courses",
        element: <Courses />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
```

Bu örnekte, `createBrowserRouter` fonksiyonu ile bir yönlendirme sistemi oluşturulmuş ve `RouterProvider` bileşeni ile uygulamaya entegre edilmiştir. Farklı rotalar için `Home`, `About` ve `Courses` gibi bileşenler tanımlanmıştır.

## Ek Özellikler

React Router DOM, aşağıdaki gibi birçok gelişmiş özellik sunar:

-   **Dinamik Rotalar:** Parametreler ile dinamik rotalar oluşturabilirsiniz.
-   **Yönlendirme (Redirect):** Kullanıcıları belirli bir rotaya yönlendirebilirsiniz.
-   **Korunan Rotalar:** Kimlik doğrulama gerektiren rotalar oluşturabilirsiniz.

Daha fazla bilgi için [React Router resmi dokümantasyonuna](https://reactrouter.com/) göz atabilirsiniz.
