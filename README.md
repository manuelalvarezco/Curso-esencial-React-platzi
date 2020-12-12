## Pasos Utilizados
* Crear Carpeta
* ``git init``
* ``npm init --yes``
* `` npm i react react-dom ``
* Crear componente HelloWorld.jsx
* crear html index.html
* `` npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev ``
* Crear archivo babel .babelrc
* Instalar y configurar webpack
 `` npm i webpack webpack-cli html-webpack-plugin html-loader --save-dev``
* Crear archivo webpack.config.js
* Crea script en package.json build
 `` "build": "webpack --mode production" ``
* `` npm i webpack-dev-server --save-dev ``
* Crea script en package.json start
 `` "start": "webpack-dev-server --open --mode development" ``
* Correr el proyecto en local
`` npm run start ``
* Instalando estilos
`` npm i mini-css-extract-plugin css-loader node-sass sass-loader --save-dev``
* Agregar regla en webpack.config.js para el css
 ``
    test: /\.(.s*)css$/,
    use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }
                ]
 ``
 * Agregar Plugin webpack.config.js
 ``
    new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
 ``
 * Crear archivo App.scss
 * Incluir css en el Componente HelloWorld
 * Instalar eslint
 `` npm i eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y ``
 * crear archivo .eslintrc https://gist.githubusercontent.com/gndx/60ae8b1807263e3a55f790ed17c4c57a/raw/0de495fc84df71ce97ef87c37505362f3512e1c3/eslintrc
 