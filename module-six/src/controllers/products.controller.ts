import type { IncomingMessage, ServerResponse } from "http";
import { createProducts, productService } from "../service/product.service";
import type { Iproducts } from "../types/product";
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

const ProductController = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const urlParam = url?.split("/");
  const id =
    urlParam && urlParam[1] === "products" ? Number(urlParam[2]) : null;

  //get all products
  if (url === "/products" && method == "GET") {
    try {
      const products = productService();
      sendResponse(res, true, 200, "Product retrive successfully", products);
    } catch (error) {
      sendResponse(res, false, 500, "server error");
    }
  } else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p: Iproducts) => p.id === id);
    if (!product) {
      return sendResponse(res, false, 404, "Product not found");
    }
    try {
      sendResponse(res, true, 200, "Product retrive successfully", product);
    } catch (error) {
      sendResponse(res, false, 500, "server error");
    }
  } else if (method === "POST" && url === "/products") {
    const body = await bodyParser(req);

    const newProducts = {
      id: Date.now(),
      ...body,
    };
    const products = productService();
    products.push(newProducts);
    createProducts(products);
    try {
      sendResponse(res, true, 201, "Product created successfully", newProducts);
    } catch (error) {
      sendResponse(res, false, 500, "server error");
    }
  } else if (method === "PUT" && id !== null) {
    const body = await bodyParser(req);
    const products = productService();
    const index = products.findIndex((p: Iproducts) => p.id === id);
    console.log(index);
    if (index < 0) {
      return sendResponse(res, false, 404, "Product not found");
    }
    products[index] = { id: products[index].id, ...body };
    createProducts(products);
    try {
      sendResponse(
        res,
        true,
        201,
        "Product updated successfully",
        products[index],
      );
    } catch (error) {
      sendResponse(res, false, 500, "server error");
    }
  } else if (method === "DELETE" && id !== null) {
    const products = productService();
    const index = products.findIndex((p: Iproducts) => p.id === id);
    console.log(index);
    if (index < 0) {
      return sendResponse(res, false, 404, "Product not found");
    }
    products.splice(index, 1);
    createProducts(products);
    try {
      sendResponse(res, true, 200, "Product deleted successfully");
    } catch (error) {
      sendResponse(res, false, 500, "server error");
    }
  }
};

export default ProductController;
