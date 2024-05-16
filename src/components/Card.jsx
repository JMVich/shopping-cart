import { useState } from "react"
import '../styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">Description: {descripcion}</p>
                <p className="tarjeta-precio">Price: €{precio}</p>

                {added   //si hay algo agregado, o sea si es false, que te muestre agregar al carro, y sino, lo contrario.
                    ? <button type="button" className="boton-quitar" onClick={clickQuitar}>
                        Delete
                    </button>
                    : <button type="button" className="boton-agregar" onClick={clickAgregar}>
                        Add to cart
                    </button>
                }
            </div>
            
        </div>

    )
}
