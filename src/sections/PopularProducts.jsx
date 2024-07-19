import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5" data-aos="fade-down">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular Products</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          sleections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grids-cols-1" data-aos="fade-up">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
