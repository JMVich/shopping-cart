import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarroContext } from '../context/CarroContext'

export const NAvBAr = () => {

    const { listaCompras } = useContext(CarroContext)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">Store</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" aria-current="page" href="#"></NavLink>
                        </li>
                    </ul>
                    <NavLink to='/carro'>
                        <Badge badgeContent={listaCompras.length} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
