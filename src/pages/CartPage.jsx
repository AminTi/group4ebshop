import React from "react";
import Cart from "../components/Cart";

export default function CartPage() {
  return (
    <div>
      <h2>Cart</h2>
      <table>
        {/*Här bör vi mappa igenom arrayen där vi lagt till produkter
        och skapa en ProductCart för varje produkt*/}
        <Cart />
      </table>
      <button>Go to checkout</button>
    </div>
  );
}
