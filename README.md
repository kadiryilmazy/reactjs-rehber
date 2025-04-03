# useSubmit Hook

`useSubmit` React Hook, form verilerini işlemek ve sunucuya göndermek için kullanılan bir yöntemdir. Bu hook, form gönderim işlemlerini kolaylaştırır ve kullanıcı etkileşimlerini yönetmenize olanak tanır.

## Kullanım

`useSubmit` genellikle bir formun gönderim işlemini kontrol etmek için kullanılır. Aşağıdaki örnek, temel bir kullanım senaryosunu göstermektedir:

```jsx
import React from "react";
import { useSubmit } from "react-router-dom";

function MyForm() {
    const submit = useSubmit();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        submit(formData, { method: "post" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ad:
                <input type="text" name="name" required />
            </label>
            <button type="submit">Gönder</button>
        </form>
    );
}

export default MyForm;
```

## Özellikler

-   **FormData ile Çalışma**: `useSubmit`, form verilerini `FormData` nesnesi olarak alır ve sunucuya göndermek için kullanır.
-   **HTTP Metodları**: `method` parametresi ile `POST`, `GET`, `PUT` gibi HTTP metodlarını belirtebilirsiniz.
-   **Esneklik**: Form gönderim işlemlerini özelleştirmek için kullanılabilir.

## Avantajlar

-   Form gönderim işlemlerini basitleştirir.
-   React Router ile uyumlu çalışır.
-   Sunucuya veri gönderiminde daha fazla kontrol sağlar.

`useSubmit` ile form işlemlerini daha etkili bir şekilde yönetebilir ve kullanıcı deneyimini iyileştirebilirsiniz.
