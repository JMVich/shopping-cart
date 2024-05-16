import { useContext } from "react"
import { CarroContext } from "../context/CarroContext"

export const CarroPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarroContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const handleImpresion = () => {
        print()
    }

    return (
        <>
            <br />
            <div className="container2">

                {
                    listaCompras.map(item => (
                        <div key={item.id} className="centerP">

                            <p className="fontP">Product: {item.title}</p>
                            <p className="fontP">Price: ${item.price}</p>

                            <p className="bordeB">
                                <button
                                    className="btn btn-ouline-primary agrandarB"
                                    onClick={() => disminuirCantidad(item.id)}
                                >-</button>
                                <button className="btn arregloBtn">{item.cantidad}</button>
                                <button
                                    className="btn btn-ouline-primary agrandarB"
                                    onClick={() => aumentarCantidad(item.id)}
                                >+</button>
                            </p>


                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => eliminarCompra(item.id)}
                            >Delete
                            </button>
                            <hr />


                        </div>

                    ))
                }



                <p><h5>TOTAL: ${calcularTotal()}</h5></p>




                <div className="btn-comprar">
                    <button
                        className="btn btn-primary"
                        onClick={handleImpresion}
                        disabled={listaCompras < 1}

                    >CHECKOUT</button>
                </div>
                <br />
            </div>
        </>
    )
}