import React from "react";
import { IMockProduct } from "../../types/interfaces";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductCards.css";

export const mockData: IMockProduct[] = [
  {
    product: {
      id: 55,
      image:
        "https://www.garnier.no/-/media/project/loreal/brand-sites/garnier/emea/nx/products/prd-haircare/haircare_brands_fructis_growstrong/ean_gar_fructis_growstrong_shampoo_250ml_373x488_desktop_verso.png?w=500&rev=70c04fb3840048ba83bab4fd621279f2&hash=45BC2DB75B097A4205ACA14E325F89CC",
      price: 25,
      title: "Fructis shampoo",
      description:
        "Garnier Fructis Vitamin & Strength Sjampo til skrøbeligt hår med tendens til at knække.",
      rating: {
        count: 4,
      },
    },
    categories: ["shampoo"],
  },
  {
    product: {
      id: 96,
      image:
        "https://www.garnier.no/-/media/project/loreal/brand-sites/garnier/emea/nx/products/prd-haircare/haircare_brands_fructis_goodbyedamage/leave-in/goodbydamages.png?w=500&rev=6bac5681c92f4bb687eec04ef9430810&hash=DC806AF0FDDA4BA47A74ADE900E81F05",
      price: 35,
      title: "Fructis Damage shampoo",
      description:
        "Garnier Fructis Goodbye Damage 10-in-1 leave-in cream til skadet hår.",
      rating: {
        count: 4,
      },
    },
    categories: ["shampoo"],
  },
  {
    product: {
      id: 221,
      image:
        "https://www.garnier.no/-/media/project/loreal/brand-sites/garnier/emea/nx/products/prd-facecare/naturals/hyaluronic-aloe/night-jelly/3600542534376_garnier_skinactive_hyaluronic_aloe_night_jelly_jar_front.png?w=500&rev=0f751dfb6def41f9a53a5e4d32ca73e6&hash=88F3A379CB31DA381F685385306EB167",
      price: 18,
      title: "Hyaluronic Aloe krem",
      description:
        "Garnier SkinActive Hyaluronic Aloe Night Jelly Moisturizer gir huden intens fukt i 48 timer.",
      rating: {
        count: 3,
      },
    },
    categories: ["krem"],
  },
];

const ProductCards = () => {
  return (
    <section className="ProductCardsWrapper">
      <h3>Produktliste</h3>
      <div className="ProductCards">
        {mockData.map(({ product }) => (
          <React.Fragment key={product.title}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
