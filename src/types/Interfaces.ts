export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        count: number;
    };
}

export interface IMockProduct {
    product: IProduct;
    categories: string[];
}