import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaBoxOpen } from "react-icons/fa";

import { productsArray } from "../Content/productsArray";
import ProductModal from "./ProductModal";

const ProductCard = ({ product, index, onOpen }) => {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(product)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group text-left bg-gradient-to-br from-[#292929] to-[#1f1f1f] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#F7AB0A]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 cursor-pointer flex flex-col"
    >
      <div className="relative overflow-hidden h-44 sm:h-48">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#F7AB0A] border border-[#F7AB0A]/40 bg-black/50 rounded-full px-2.5 py-0.5">
          {product.category}
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-[11px] text-white bg-black/50 border border-gray-600 rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaEye /> View Details
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
          {product.name}
        </h3>
        <p className="text-[#F7AB0A]/80 text-xs font-medium mb-2.5">
          {product.tagline}
        </p>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-center gap-2 text-[#F7AB0A] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
          <FaBoxOpen className="text-xs" />
          Learn More
        </div>
      </div>
    </motion.button>
  );
};

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClose = () => setSelectedProduct(null);

  return (
    <div className="py-20 md:py-28 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="uppercase tracking-[10px] text-gray-500 text-sm mb-3">
          Products
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Ready-Made Software Products
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          Proven platforms built, deployed, and battle-tested with real clients.
          Click any product to explore its full feature set.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {productsArray.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onOpen={setSelectedProduct}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
};
