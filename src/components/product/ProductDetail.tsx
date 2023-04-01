import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../dummy_product';
import { StoreContext } from '../../context/Context';

function ProductDetail() {
    const params = useParams();
    const product = products.find(p => p.id === params.id)
    const ctx = useContext(StoreContext);

    return (
        <div className="productDetail">
            <div className="imgDiv">
                <img src={product?.img} alt={product?.title} />
            </div>
            <div className="detail">
                <h1>{product?.title}</h1>
                <hr style={{ margin: '10px 0' }} />
                <span>Rating: {product?.rating} | Price: ₹{product?.price}/- | Brand: New brand | Exchangable: Yes</span>
                <hr style={{ margin: '10px 0' }} />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi asperiores suscipit eligendi? Assumenda veritatis, quaerat eum repellat voluptate itaque recusandae, esse odit doloribus perferendis asperiores voluptates excepturi, dignissimos reiciendis rem tempora sunt nemo quod nesciunt voluptatem fuga! Quisquam, laudantium et? Totam, vitae repellat? Consectetur, enim corrupti non laboriosam odio cupiditate ullam aperiam quos atque labore reprehenderit pariatur aspernatur officiis, earum unde, praesentium ea ipsa magnam voluptas! Laudantium adipisci alias at possimus quasi harum perferendis voluptates deserunt? Cupiditate veritatis ipsam animi delectus eius corrupti vitae. Voluptate nam odio minima et saepe!</p>

                <h4>✔ Available in Stock</h4>
                <button onClick={() => ctx.add(product?.id!)} className='addBtn'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail;