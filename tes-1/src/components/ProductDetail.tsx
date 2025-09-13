import type { StoreItem } from "../App";
import Button from "./Button";

interface ProductDetailProps {
  onBack: () => void;
  item: StoreItem;
}

// https://flowbite.com/docs/components/card/#default-card
export default function ProductDetail({ item, onBack }: ProductDetailProps) {
  const { image, title, price, description, category, rating } = item;
  return (
    <div className="px-8 py-4 w-full h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row dark:border-gray-700 dark:bg-gray-800">
      <img
        className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Category: {category}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rating: {rating.rate} ({rating.count} reviews)
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price: {price} USD
        </p>

        <Button onClick={onBack} className="self-start mt-6">
          &lt; Kembali
        </Button>
      </div>
    </div>
  );
}
