# 📌 Adım 1: Proje Kurulumu (Vite ile ReactJS)

Bu rehber, Vite ile ReactJS projesi kurulumunu adım adım açıklamaktadır. Vite, hızlı bir geliştirme ortamı sunar ve React ile kolayca entegre edilebilir.

## React + Vite

Bu şablon, React'i Vite ile HMR (Hot Module Replacement) ve bazı ESLint kurallarıyla çalıştırmak için minimal bir yapı sağlar.

Şu anda iki resmi eklenti mevcuttur:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): [Babel](https://babeljs.io/) kullanarak Fast Refresh sağlar.
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): [SWC](https://swc.rs/) kullanarak Fast Refresh sağlar.

## Vite React Kurulumu

Aşağıdaki adımları izleyerek Vite ile React projesi kurabilirsiniz:

1. Yeni bir proje oluşturmak için terminalde aşağıdaki komutu çalıştırın:

    ```bash
    npm create vite@latest my-react-app -- --template react
    ```

    Burada `my-react-app` projenizin adıdır. İstediğiniz bir isim verebilirsiniz.

2. Proje dizinine gidin:

    ```bash
    cd my-react-app
    ```

3. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

4. Geliştirme sunucusunu başlatın:

    ```bash
    npm run dev
    ```

5. Tarayıcınızda `http://localhost:5173` adresine giderek uygulamanızı görüntüleyebilirsiniz.

## ESLint Yapılandırmasını Genişletme

Eğer bir üretim uygulaması geliştiriyorsanız, TypeScript kullanmanızı ve tür farkındalığına sahip lint kurallarını etkinleştirmenizi öneririz. Projenize TypeScript ve [`typescript-eslint`](https://typescript-eslint.io) entegrasyonu yapmak için [TS şablonuna](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) göz atabilirsiniz.
