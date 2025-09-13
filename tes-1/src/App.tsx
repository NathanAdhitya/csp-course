import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import SearchInput from "./components/SearchInput";
import ProductDetail from "./components/ProductDetail";

export interface StoreItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function App() {
  // data dari https://fakestoreapi.com/products
  const [data, setData] = useState<StoreItem[]>([]);
  const [loading, setLoading] = useState(true);

  const searchTitleCache = useMemo(() => {
    return data.map((item) => item.title.toLowerCase());
  }, [data]);

  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((_item, index) =>
      searchTitleCache[index].includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data, searchTitleCache]);

  // pilih item
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const handleSelectItem = (item: StoreItem) => {
    setSelectedItem(item);
  };
  const handleBack = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col p-4 max-w-7xl mx-auto">
      {!selectedItem && (
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      
      <div className="mb-6"></div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          {selectedItem ? (
            <ProductDetail item={selectedItem} onBack={handleBack} />
          ) : (
            <ul className="grid grid-cols-3 gap-4">
              {searchResults.map((item) => (
                <li key={item.id}>
                  <ProductCard
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    onClick={() => handleSelectItem(item)}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default App;
