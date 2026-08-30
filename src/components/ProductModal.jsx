import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 24 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-gradient-to-br from-[#292929] to-[#1f1f1f] border border-gray-700 rounded-2xl overflow-hidden flex flex-col"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/50 text-gray-300 hover:text-white hover:bg-black/70 flex items-center justify-center transition-colors"
        >
          <FaTimes />
        </button>

        {/* Image header */}
        <div className="relative h-48 sm:h-56 lg:h-64 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-[#1f1f1f]/30 to-transparent"></div>
          <div className="absolute bottom-4 left-5 sm:left-7">
            <span className="inline-block text-[10px] uppercase tracking-widest text-[#F7AB0A] border border-[#F7AB0A]/40 bg-black/40 rounded-full px-2.5 py-0.5 mb-2">
              {product.category}
            </span>
            <h3
              id="product-modal-title"
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight"
            >
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{product.tagline}</p>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>

          {product.bestFor && (
            <div className="flex items-start gap-3 bg-gray-800/60 border border-gray-700 rounded-xl p-4">
              <FaLayerGroup className="text-[#F7AB0A] text-lg mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  Best For
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.bestFor}
                </p>
              </div>
            </div>
          )}

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#F7AB0A] rounded-full inline-block"></span>
              Key Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-gray-300 text-sm"
                >
                  <FaCheckCircle className="text-[#F7AB0A] text-sm mt-0.5 flex-shrink-0" />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#F7AB0A] rounded-full inline-block"></span>
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-3.5 bg-[#F7AB0A] text-black font-semibold rounded-full hover:bg-amber-500 hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
