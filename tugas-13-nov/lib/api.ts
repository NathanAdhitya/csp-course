export interface ProductList {
  products: Product[];
}

export interface Product {
  id: number;
  judul: string;
  deskripsi: string;
  harga: number;
  url_gambar: string;
  created_at: Date;
}

export async function getProducts(): Promise<ProductList> {
  const res = await fetch(
    `/api/products`
  );
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data as ProductList;
}

export async function getProduct(id: string | number): Promise<Product> {
  const res = await fetch(`/api/products/${id}`);
  if (res.status !== 200) {
    let statusText = res.statusText;
    if (statusText.length == 0) {
      if (res.status === 404) {
        statusText = "not found";
      }
    }
    throw new Error(statusText);
  }
  const data = await res.json();
  return data as Product;
}
