# 📌 React Router DOM `Link` ve `NavLink` Kullanımı

Bu bölüm, React Router DOM'un `Link` ve `NavLink` bileşenlerini kullanarak bir React projesinde gezinme bağlantıları oluşturmayı adım adım açıklamaktadır. Bu bileşenler, SPA (Single Page Application) yapısında sayfa yönlendirmeleri için kullanılır.

## React Router DOM Kurulumu

Aşağıdaki adımları izleyerek React Router DOM'u projenize ekleyebilirsiniz:

1. React Router DOM kütüphanesini yükleyin:

    ```bash
    npm install react-router-dom
    ```

## `Link` ve `NavLink` Kullanımı ile Örnek

Aşağıda, `Link` ve `NavLink` bileşenlerini kullanarak bir gezinme sistemi oluşturma örneği verilmiştir:

```javascript
import "./index.css";
import { Route, Routes, BrowserRouter, Link, NavLink } from "react-router-dom";
import { Home, About, Courses } from "./pages/";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" activeClassName="active">
                            Courses
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
```

Bu örnekte:

-   `Link` bileşeni, basit bir bağlantı oluşturur.
-   `NavLink` bileşeni, aktif olan bağlantıya özel bir sınıf (`activeClassName`) ekler.
-   `Routes` ve `Route` bileşenleri, sayfa yönlendirmelerini tanımlar.

## Ek Özellikler

React Router DOM'un `Link` ve `NavLink` bileşenleri, aşağıdaki gibi avantajlar sunar:

-   **SPA Gezinmesi:** Sayfa yeniden yüklenmeden yönlendirme sağlar.
-   **Aktif Durum Yönetimi:** `NavLink` ile aktif bağlantılar için özel stiller tanımlanabilir.
-   **Kolay Kullanım:** Basit bir API ile gezinme bağlantıları oluşturabilirsiniz.

Daha fazla bilgi için [React Router resmi dokümantasyonuna](https://reactrouter.com/) göz atabilirsiniz.
