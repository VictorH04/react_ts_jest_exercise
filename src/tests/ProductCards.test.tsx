import { render, screen } from "@testing-library/react";
import ProductCards, {
  mockData,
} from "../components/ProductCards/ProductCards";
// import ProductCard from "../components/ProductCard/ProductCard";

describe("ProductCards", () => {
  it("It renders productcards and title of what it renders", () => {
    render(<ProductCards />);
    expect(screen.getByText("Produktliste")).toBeInTheDocument();
  });

  it("Renders the product cards with product details", () => {
    render(<ProductCards />);
    mockData.map(({ product }) => {
      // render(<ProductCard product={product} />);
      expect(screen.getAllByRole("img")).toHaveLength(3);
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
      expect(screen.getAllByText("★")).toHaveLength(15);
      expect(screen.getAllByText("Til kurv")).toHaveLength(3);
    });
  });

  // it("Renders the product cards with product title", () => {
  //   render(<ProductCards />);
  //   mockData.forEach(({ product }) => {
  //     render(<ProductCard product={product} />);
  //     expect(screen.getByText(product.title)).toBeInTheDocument();
  //   });
  // });

  // it("Renders the product cards with product description", () => {
  //   render(<ProductCards />);
  //   mockData.forEach(({ product }) => {
  //     render(<ProductCard product={product} />);
  //     expect(screen.getByText(product.description)).toBeInTheDocument();
  //   });
  // });

  // it("Renders the product cards with product price", () => {
  //   render(<ProductCards />);
  //   mockData.forEach(({ product }) => {
  //     render(<ProductCard product={product} />);
  //     expect(screen.getByText(`${product.price}`)).toBeInTheDocument();
  //   });
  // });

  // it("Renders the product cards with product rating", () => {
  //   render(<ProductCards />);
  //   mockData.forEach(({ product }) => {
  //     render(<ProductCard product={product} />);
  //     expect(screen.getByText("★")).toBeInTheDocument();
  //   });
  // });
});
