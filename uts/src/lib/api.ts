export interface ProductList {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: ProductCategory;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand?: string;
    sku: string;
    weight: number;
    dimensions: ProductDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: ProductAvailabilityStatus;
    reviews: ProductReview[];
    returnPolicy: ProductReturnPolicy;
    minimumOrderQuantity: number;
    meta: ProductMeta;
    images: string[];
    thumbnail: string;
}

export enum ProductAvailabilityStatus {
    InStock = "In Stock",
    LowStock = "Low Stock",
}

export enum ProductCategory {
    Beauty = "beauty",
    Fragrances = "fragrances",
    Furniture = "furniture",
    Groceries = "groceries",
}

export interface ProductDimensions {
    width: number;
    height: number;
    depth: number;
}

export interface ProductMeta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

export enum ProductReturnPolicy {
    NoReturnPolicy = "No return policy",
    The30DaysReturnPolicy = "30 days return policy",
    The60DaysReturnPolicy = "60 days return policy",
    The7DaysReturnPolicy = "7 days return policy",
    The90DaysReturnPolicy = "90 days return policy",
}

export interface ProductReview {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}

export async function getProducts(
    skip: number = 0,
    limit: number = 30
): Promise<ProductList> {
    const res = await fetch(
        `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
    );
    if (res.status !== 200) {
        throw new Error(res.statusText);
    }
    const data = await res.json();
    return data as ProductList;
}

export async function getProduct(id: string | number): Promise<Product> {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
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
