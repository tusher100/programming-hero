import type { IncomingMessage, ServerResponse } from "http";
import { createProducts, productService } from "../service/product.service";
import type { Iproducts } from "../types/product";
import { bodyParser } from "../utils/parseBody";

const ProductController = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const urlParam = url?.split("/");
  const id =
    urlParam && urlParam[1] === "products" ? Number(urlParam[2]) : null;

  //get all products
  if (url === "/products" && method == "GET") {
    const products = productService();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products retrive successfully",
        data: products,
      }),
    );
  } else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p: Iproducts) => p.id === id);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrive successfully",
        data: product,
      }),
    );
  } else if (method === "POST" && url === "/products") {

    const body = await bodyParser(req)
   
    const newProducts = {
      id: Date.now(),
      ...body
    }
    // console.log(newProducts)
    const products = productService();
    products.push(newProducts)
    createProducts(products)

    res.writeHead(201, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product created successfully",
        data: newProducts,
      }),
    );
  } else if (method === "PUT" && id !== null){
    const body = await bodyParser(req);
    const products = productService();
   const index = products.findIndex((p: Iproducts) => p.id === id);
    console.log(index)
   if(index < 0){
     res.writeHead(404, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product not found",
       // data: newProducts,
      }),
    );
   }
   products[index] = {id: products[index].id, ...body};
   createProducts(products)


     res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product updated successfully",
        data: products[index],
      }),
    );

  }
};

export default ProductController;
