import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { setStorage, getStoredValue } from "../../utils/storgeHelper";

function Counter({ qty, id }) {
  // defined a state , and used the getStoredValue function to get the value from localStorage, if not found, return []
  const [carts, setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);
  const [cartQty, setCartQty] = useState(qty || 1);

  const handleValueChange = (action) => {
    const newCart = [...carts];

    setcarts(
      newCart.map((item, i) => {
        if (item.id === id) {
          if (action === "increase") {
            item.qty += 1;
          } else {
            item.qty -= 1;
          }
        }
        return item;
      })
    );

    setStorage("cart", JSON.stringify(carts));
  };

  return (
    <div style={{ width: "100px", display: "flex" }}>
      <FcPlus
        size={24}
        color="red"
        onClick={() => handleValueChange("increase")}
      />
      <input
        type="number"
        placeholder="qty"
        value={cartQty}
        className="qty"
        onChange={(e) => setCartQty(e.target.value)}
        style={{ width: "50px" }}
      />
      <AiOutlineMinusCircle
        size={24}
        color="red"
        onClick={() => handleValueChange("reduce")}
      />
    </div>
  );
}

export default Counter;
