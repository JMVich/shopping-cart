import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarroContext } from "../context/CarroContext"

export const ComprasPage = () => {
  

  const { productos } = useContext(ProductosContext)

  const { agregarCompra, eliminarCompra } = useContext(CarroContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }


  return (
    <>

      {productos.map(producto => (
        <Card
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}

        >

        </Card>
      ))}

    </>
  )
}