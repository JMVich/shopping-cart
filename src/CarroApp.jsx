import { Navigate, Route, Routes } from "react-router-dom"
import { NAvBAr } from "./components/NAvBAr"
import { ComprasPage } from "./pages/ComprasPage"
import { CarroPage } from "./pages/CarroPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarroProvider } from "./context/CarroProvider"


export const CarroApp = () => {
    return (
        <ProductosProvider>
            <CarroProvider>
                <NAvBAr></NAvBAr>
                <br />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carro" element={<CarroPage></CarroPage>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CarroProvider>
        </ProductosProvider>
    )
}
