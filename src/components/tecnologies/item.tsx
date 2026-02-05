import { motion } from "framer-motion";

interface ItemProps {
  data: {
    url: string;
    alt: string;
    style: string;
  };
}

export default function Item(props: ItemProps) {
  const { style, url, alt } = props.data;

  return (
    <div className="w-full flex h-full items-center justify-center">
      <motion.span
        className={`grid h-full w-20 lg:w-24 justify-center rounded-xl p-1 ${style} grid-rows-[auto,auto]`}
        whileHover={{
          scale: 1.1,
          backgroundColor: "var(--theme)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex w-full justify-center"
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <motion.img
            className="h-12 w-12 lg:h-16 lg:w-16"
            src={url}
            alt={alt}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="h-full grid justify-center lg:font-bold  text-pretty text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {alt}
        </motion.div>
      </motion.span>
    </div>
  );
}
