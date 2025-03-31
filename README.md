### Rota Parametreleri

React Router, rotalarınızda dinamik segmentler tanımlamanıza olanak tanır. Bu segmentlere rota parametreleri denir ve bileşenlerinizde dinamik ve esnek rotalar oluşturmak için kullanılabilir.

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

#### Örnek

Eğer `/kullanici/123` adresine giderseniz, `Kullanici` bileşeni şu şekilde render edilir:

```
Kullanıcı ID: 123
```

Bu özellik, kullanıcı profilleri, ürün detayları veya içerik odaklı diğer rotalar gibi dinamik sayfalar oluşturmak için oldukça kullanışlıdır.
