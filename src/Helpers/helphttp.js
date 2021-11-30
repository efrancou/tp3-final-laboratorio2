export const helpHttp = () => {
    const customFetch = (endopoint, options) => {

        //Se especifica que los datos estarán en JSON
        const defaultHeader = {
            accept:"application/json",
        };
        //Aborta la conexión
        const controller = new AbortController();
        //Queda escuchando eventos
        options.signal = controller.signal;
        //Se establece GET como método por defecto
        options.method = options.method || "GET";
        options.headers = options.headers
        ?{...defaultHeader,...options.headers}
        :defaultHeader;
        options.body = JSON.stringify(options.body)||false;

        if(!options.body) delete options.body;

        return fetch (endopoint, options)
        .then ((res)=>res.ok
        ?res.json()
        :Promise.reject({
            err: true,
            status:res.status || "00",
            statusText:res.statusText || "Ocurrio un error",

        }))
        .catch ((err)=> err);

    };

    //Se declaran los 4 métodos

    const get = (url,options={})=> customFetch(url,options);
                

    const post = (url,options={})=>{
        options.method ="POST";
        return customFetch(url,options);
    };
    const put = (url, options={})=>{
        options.method ="PUT";
        return customFetch(url,options);
    };
    const del = (url, options={})=>{
        options.method ="DELETE";
        return customFetch(url, options);
    };
    
    return{
        get,
        post,
        put,
        del,
    };

};