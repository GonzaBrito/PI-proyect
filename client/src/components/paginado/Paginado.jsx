import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import "./paginado.css";

const Paginado = ({ pagina, setPagina, totalPage }) => {

  //declaro las variables de searchParams y setSearchParams para poder pedir datos de la url y cambiar datos 
  const [searchParams, setSearchParams] = useSearchParams()
  //declaro la variable con la que voy a estar cambiando la url
  const page = searchParams.get("page")

  //hago la funcion para pasar a la siguiente pagina y ademas seteo el numero de pagina que estoy 
  const sigPag = () => {
    setPagina(pagina + 1);
    //aca le digo a la propiedad de page de la url que cambie 
    setSearchParams({ page: pagina + 1 })
  };

  const antPag = () => {
    setPagina(pagina - 1);
    setSearchParams({ page: pagina - 1 })
  }

  //una vez que se monta el componente pregunto si page existe y si esta dentro de los valores
  useEffect(() => {
    if (page) {
      if (page > 7 || page < 1) {
        //si por alguna razon en la url el valor de la propiedad "page" no esta dentro de los valores
        //se setea el valor de la propiedad en uno por lo tanto se renderiza la pagina 1
        setSearchParams({ page: 1 })
      } else {
        //sino se seta la pagina con el valor que tenga la propiedad page de la url
        setPagina(Number(page))
      }
    }
  }, [page])

  //se utiliza esta funcion para poder mapear un numero y asi poder devolver un "span"
  const paginas = Array.from({ length: Math.ceil(totalPage) }, (_, i) => i + 1)

  return (
    <div className="divContainer">
      <button onClick={antPag} disabled={pagina === 1}>🡸</button>
      {paginas.map((pag, index) => (
        <span
          key={index}
          className="spanPagina"
          onClick={() => {
            setPagina(pag);
            setSearchParams({ page: pag })
          }}
        >
          {pag}
        </span>
      ))
      }
      <button onClick={sigPag} disabled={pagina === Math.ceil(totalPage)} >🡺</button>
    </div >
  )
}

export default Paginado;