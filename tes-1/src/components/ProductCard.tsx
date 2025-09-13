interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

// From flowbite: https://flowbite.com/docs/components/card/#horizontal-card

export default function ProductCard({
  image,
  title,
  price,
  onClick,
}: ProductCardProps) {
  return (
    <a
      href="#"
      onClick={onClick}
      className="p-4 w-full h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {price} USD
        </p>
      </div>
    </a>
  );
}
