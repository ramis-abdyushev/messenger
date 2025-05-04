import { EntityState } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface GetProductsQueryArg {
  pageLimit: number;
  currentPage: number;
}

export interface GetProductsRes {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

export type ProductsEntityState = EntityState<Product, Product['id']>;

export interface GetProductsCache {
  products: ProductsEntityState;
  total: GetProductsRes['total'];
}

export type ProductMutableData = Partial<Omit<Product, 'id'>>;

export interface EditProductQueryArg {
  id: Product['id'];
  data: ProductMutableData;
}
