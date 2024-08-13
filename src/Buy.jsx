import "./Buy.css"
import { data } from "./data"

export function Buy () {
    return (
        <section id="buy" className="buy-section">
            <div className="gallery">
                {data.map(product=>(
                    <div className="product-card">
                        <div className="img-area">
                            <img src={product.urlImage} alt=""/>
                        </div>
                        <div className="product-info">
                            <h3>{product.nameProduct}</h3>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}