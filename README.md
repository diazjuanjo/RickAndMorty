# Repaso react-redux

## M2 VOY A POR TI

Bienvenidos al repaso react-redux hecho por sus amigos y ta's programadores los matis.

La idea de este proyecto es terminar de entender el flujo de información de react-redux.

Si bien tener redux en tu proyecto conlleva una configuración inicial que puede ser a veces aburrida, es de lo mejor que podemos hacer para que nuestra app funcione a gran escala.

>No se olviden que los estados de redux deben utilizarse **SIEMPRE** que sean **NECESARIOS**. 

*¿A qué voy con esto?*

Si un estado que creamos vemos que lo podemos utilizar en un solo componente, llevarlo a redux sería perder eficiencia al convertirlo en un estado global en vez de local porque estamos
haciendo que nuestra app tenga que ir a buscar algo que podria tener al alcance de sus manos (**DISCLAIMER**: Esto es una recomendación a futuro ya que en Henry tanto en el check como el PI
vamos a utilizar redux en casos donde realmente no son necesarios, pero lo hacemos para aprender su flujo).
Ok, empecemos por la configuración inicial.

---

## Una vez que tenemos creado nuestro proyecto, MI recomendación es que ya organicen sus carpetas:

1. Components: acá van a crear todos los componentes que quieran, recuerden que los componentes tiene que cumplir UNA SOLA funcionalidad para asi poder ser reutilizables donde quieran.
2. Views: es la carpeta donde van a estar las vistas de nuestra pagina, o sea, un componente que tiene todo el esqueleto donde renderizamos los componentes reutilizables que creamos.
3. Redux: dentro de esta carpeta va a estar... adivinen... si, redux. **¿Cómo organizo mi carpeta?** 
Hay varias formas, para mantener el orden lo que suelo hacer es lo siguiente:
   - Actions:  
       1. actionTypes.js: vamos a tener los nombres de todas nuestras actions, (ejemplo **export const GET_GAMES = 'GET_GAMES'**) que son las que luego vamos a utilizar en nuestro archivo index.js donde van a estar todas nuestras actions.
       2. index.js :contiene todas las actions
   - Reducer:  index.js
   - Store:  index.js 

Felicidades, ya tienen todo para empezar a derrochar código como si no hubiera un mañana!

# Store

Configuración del archivo Store que nos permite usar las devtools en nuestro navegador favorito (*usen firefox developer edition no se van a arrepentir*)
```javascript
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
```

Se estarán preguntando, **que es el thunk que estas importando ahí?**
## ¡MUY BUENA PREGUNTA!
Redux-thunk nos permite hacer llamadas asíncronas. Originalmente las actions de redux no se envían de esta forma, sino que una vez que mandas la action te trae la info al instante y no siempre queremos eso.
¿Por qué no queremos eso? Imaginense que hacen una llamada a una API , la info que les devuelve ese llamado es una promesa, con lo cual ES ASINCRONO. 
Redux-thunk nos permite no escuchar a The Police (jaja entienden, synchronicity). Perdon, redux-thunk nos permite hacer estas llamadas asincronas.
Supongamos que tenemos la siguiente función:

```javascript
import { GET_MOVIES } from './actionTypes'

export function getMovies(title) {
  return (dispatch) => { // Acá ya estamos aplicando el principio del thunk
    axios
      .get(` http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
      .then((response) => {
        dispatch({ type: GET_MOVIES, payload: response.data }); //MUY IMPORTANTE!!!!!! El response.data trae información de la api, o sea que en el reducer vamos a tener que traernos esa info que necesitemos!!!! NO SE OLVIDEEEEEEEEEEEEEEEEEN
      });
  };
}
```

Lo que hace thunk  (que es una forma mala de expresar el pasado de think) por detrás, es la primera que vez que entra a la action va a preguntar si el resultado que tiene dentro (el return) es una función (o sea que todavía no fue ejecutada) o es un objeto (ya tenemos la respuesta de nuestro get). Esto nos permite que cuando nosotros enviamos la action a nuestro reducer, ya vamos a tener lista la data para que sea utilizada. Ese es su principio, no es indispensable que lo aprendan YA pero es bueno que lo sepan.

# Conectar la store a react

Todo muy lindo, tienen la store pero falta conectarla...
Esto se hace en el archivo root index.js.

```javascript
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
```

>Recuerden que tienen que importar tanto el Provider de la libreria 'react-redux' como tambien el store desde nuestra carpeta /redux/store

# Actions

Tienen el ejemplo de una action que llama a una api arriba donde explico el concepto de redux-thunk.

# Reducer

Ahora esa action va a llegar a nuestro reducer para dejarla en el estado global de redux y de esta forma vamos a poder acceder a ese estado desde cualquier componente que quieran.
En nuestro reducer se vería algo así.

```javascript
import { GET_MOVIES } from './actionTypes'

const initialState = {
    moviesLoaded: [], // recuerden que nosotros estamos mandando un objeto en nuestra action, asi que este array va a ser un array de objetos
};

export default function reducer (state = initialState , {type,payload}) {

    switch(type){
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: payload.Search, //acuerdense que el payload es el response.data, entonces yo quiero acceder a la propiedad de la api que yo necesite.
            }
    }

}

```


# Esta info debería de servirles mucho

Si algo se les dificulta recuerden que tienen las homeworks para revisar.
**LEAN BIEN LO QUE PIDEN LOS TEST**
Es ultra importante saber que tipo de dato tenemos que enviar y que tipo de dato tenemos que recibir.

## USTEDES PUEDEN!!!

Nos vemos en el m3 :D

![SacaElTigreQueHayEnVos](./img/tiger.jpg)


