"use client";
import { motion } from "framer-motion";

// export default function BurgerDots({
//   open,
//   onClick,
// }: {
//   open: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <motion.button
//       onClick={onClick}
//       className="burger-dots"
//       whileHover={{ scale: 1.15 }}
//       transition={{ type: "spring", stiffness: 300, damping: 18 }}
//     >
//       {!open ? (
//         <div className="dots">
//           <span />
//           <span />
//           <span />
//         </div>
//       ) : (
//         <motion.span
//           initial={{ rotate: -90 }}
//           animate={{ rotate: 0 }}
//           className="burger-cross"
//         >
//           ×
//         </motion.span>
//       )}
//     </motion.button>
//   );
// }
export default function BurgerDots({
  open,
  onClick,
  fixed,
}: {
  open: boolean;
  onClick: () => void;
  fixed?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`burger-dots ${fixed ? "burger-dots--fixed" : ""}`}
      aria-label="Меню"
    >
      {!open ? (
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      ) : (
        // <span className="burger-cross">×</span>
        <span className="burger-cross" />
      )}
    </button>
  );
}

