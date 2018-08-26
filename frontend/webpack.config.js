const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin') //plugin para conseguir ler os arquivos css

module.exports = {
    //o arquivo que será o ponto de entrada, de onde nossa aplicação irá inicializar
    entry: './src/index.jsx',

    //onde irá gerar a saída do arquivo javascript
    output: {
        path: __dirname + '/public',
        filename: './app.js' //arquivo de scripts
    },

    //servidor web que será utilizado
    devServer:{
        port: 8080, //porta que irá executar
        contentBase: './public' //pasta que contém todos os arquivos que serão carregados
    },
    
    resolve:{
        extensions: ['','.js', '.jsx'], //para não precisar ficar declarando as extenções no import
        alias: {
            modules: __dirname + '/node_modules' //criando um apelido para a pasta node_modules para ficar mais rápido a digitação
        }
    },
    
    plugins: [
        new ExtractTextPlugin('app.css') //nome do arquivo que irá gerar quando fizer o parse do css
    ],

    module: {
        loaders: [{
            test: /.js[x]?$/, //regex para carregar qualquer arquivo que termine com a extensão js ou jsx
            loader: 'babel-loader', //dizemos que vamos carregar o babel
            exclude: /node_modules/, //não ler os arquivos de node_modules, não faz parse dos arquivos que estão lá
            query: { //aqui vou dizer o que eu quero que meu loader interprete, seja ES2015, seja React...
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread'] //plugin do babel para fazer o spread '...' funcionar
            }
        },{//loader para os arquivos css
            test: /\.css$/, //regex
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader') //plugins para renderizar o css
        },{//loader para fontawesome, para poder ler várias extensões diferentes de fontes
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}