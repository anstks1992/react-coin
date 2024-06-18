import { useEffect, useState } from "react";

function App() {
  const [loading, setloading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setloading(false);
      });
  }, []);
  return (
    <div>
      <h3>The Colns!{loading ? "" : `(${coins.length})`}</h3>
      {loading ? (
        "Loading..."
      ) : (
        <select>
          {coins.map((item) => (
            <option>
              {item.name}({item.symbol}):${item.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
