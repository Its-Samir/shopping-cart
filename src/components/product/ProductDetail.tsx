import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../dummy_product";
import { StoreContext } from "../../context/Context";
import { FcCheckmark } from "react-icons/fc";
import { MdShoppingCart } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";

function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const ctx = useContext(StoreContext);
  const existProduct = ctx.items.find((p) => p.id === product?.id);

  useEffect(() => {
    let title = document.querySelector("title")!;
    title.innerText = `${product?.title}`;
  }, []);

  return (
    <div className="productDetail">
      <div className="imgDiv">
        <img src={product?.img} alt={product?.title} />
      </div>
      <div className="detail">
        <h1>
          {product?.title} ({product?.color})
        </h1>
        <hr style={{ margin: "10px 0" }} />
        <span>
          Rating: {product?.rating} | Price: ₹{product?.price}/- | Brand: New
          brand | Exchangable: Yes
        </span>
        <hr style={{ margin: "10px 0" }} />

        <h4>
          <MdArrowRight style={{ margin: "0 0 -2px 0" }} />
          Cash on Delivery{" "}
          <IoIosCheckmarkCircle
            style={{ margin: "0 0 -2px 0" }}
            color="rgb(7, 135, 92)"
          />{" "}
        </h4>
        <hr style={{ margin: "10px 0" }} />

        <strong>
          <u>Description:</u>
        </strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          asperiores suscipit eligendi? Assumenda veritatis, quaerat eum
          repellat voluptate itaque recusandae, esse odit doloribus perferendis
          asperiores voluptates excepturi, dignissimos reiciendis rem tempora
          sunt nemo quod nesciunt voluptatem fuga! Quisquam, laudantium et?
          Totam, vitae repellat? Consectetur, enim corrupti non laboriosam odio
          cupiditate ullam aperiam quos atque labore reprehenderit pariatur
          aspernatur officiis, earum unde, praesentium ea ipsa magnam voluptas!
          Laudantium adipisci alias at possimus quasi harum perferendis
          voluptates deserunt? Cupiditate veritatis ipsam animi delectus eius
          corrupti vitae. Voluptate nam odio minima et saepe!
        </p>

        <h4>
          <FcCheckmark /> Available in Stock
        </h4>
        <button
          onClick={() => ctx.add(product?.id!)}
          style={{
            backgroundColor: existProduct && "gray",
            display: "flex",
            justifyContent: "space-between",
          }}
          disabled={existProduct ? true : false}
          className="addBtn"
        >
          <MdShoppingCart style={{ marginRight: "5px" }} />{" "}
          {existProduct ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
