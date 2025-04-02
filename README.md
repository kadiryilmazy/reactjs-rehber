### Rota Parametreleri ve Ortak Yükleyici Verisi

React Router, rotalarınızda dinamik segmentler tanımlamanıza olanak tanır. Bu segmentlere rota parametreleri denir ve bileşenlerinizde dinamik ve esnek rotalar oluşturmak için kullanılabilir. Ayrıca, ortak yükleyici verisi kullanarak rotalar arasında veri paylaşımı yapabilirsiniz.

#### Rota Parametrelerini Tanımlama

Rota parametrelerini, rota yolunda iki nokta üst üste (`:`) kullanarak tanımlayabilirsiniz:

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/kullanici/:id" element={<Kullanici />} />
            </Routes>
        </Router>
    );
}
```

#### Rota Parametrelerine Erişim

Parametrelere bileşeninizde erişmek için `useParams` kancasını kullanabilirsiniz:

```jsx
import { useParams } from "react-router-dom";

function Kullanici() {
    const { id } = useParams();
    return <h1>Kullanıcı ID: {id}</h1>;
}
```

#### Ortak Yükleyici Verisi Kullanımı

React Router'da `loader` fonksiyonları ile rotalar arasında veri paylaşabilirsiniz. Örneğin:

```jsx
import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";

function Kullanici() {
    const { id, userData } = useLoaderData();
    return (
        <div>
            <h1>Kullanıcı ID: {id}</h1>
            <p>Kullanıcı Adı: {userData.name}</p>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/kullanici/:id",
        element: <Kullanici />,
        loader: async ({ params }) => {
            const response = await fetch(`/api/users/${params.id}`);
            const userData = await response.json();
            return { id: params.id, userData };
        },
    },
]);

function App() {
    return <RouterProvider router={router} />;
}
```

#### Örnek

Eğer `/kullanici/123` adresine giderseniz ve API'den `{ "name": "Ahmet" }` dönerse, `Kullanici` bileşeni şu şekilde render edilir:

```
Kullanıcı ID: 123
Kullanıcı Adı: Ahmet
```

Bu özellik, kullanıcı profilleri, ürün detayları veya içerik odaklı diğer rotalar gibi dinamik sayfalar oluşturmak ve veri paylaşımı yapmak için oldukça kullanışlıdır.
