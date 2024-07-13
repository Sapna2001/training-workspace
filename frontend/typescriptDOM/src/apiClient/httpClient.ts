import IProduct from "../model/product";

class HTTPClient {
  async get(url: string): Promise<IProduct[]> {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async getBy(url: string, id: number): Promise<IProduct> {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();

    return data;
  }

  async update(url: string, product: any): Promise<IProduct> {
    const response = await fetch(`${url}/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(product),
    });

    const data = await response.json();

    return data;
  }

  async add(url: string, product: any): Promise<IProduct> {
    console.log(product);
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await response.json();

    return data;
  }
}

export default new HTTPClient();
