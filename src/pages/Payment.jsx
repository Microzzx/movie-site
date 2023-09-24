import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import PaymentCard from "../components/PaymentCard";

const Payment = () => {
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.cart.currentCart);

  const Total = (currentCart) => {
    const totalPrice = currentCart.reduce((total, item) => {
      return total + (item.total || 0);
    }, 0);
    return totalPrice;
  };

  const Discount = (currentCart) => {
    const totalQuantity = currentCart.reduce((total, item) => {
      return total + (item.quantity || 0);
    }, 0);
    if (totalQuantity > 3 && totalQuantity <= 5) {
      return 0.1;
    } else if (totalQuantity > 5) {
      return 0.2;
    }
  };

  const totalPrice = Total(currentCart);
  const discount = Discount(currentCart);
  const discountPercentage = (discount * 100).toString();
  const discountTotal = (totalPrice * discount).toFixed(2);
  const estimateTotal = (totalPrice - discountTotal).toFixed(2);

  return (
    <div className="flex flex-col w-full gap-14 items-center mt-10">
      <div className="flex items-center gap-5">
        <h2 className="text-3xl font-bold text-white">My Cart</h2>
        <BsCart4 color="white" size={30} />
      </div>
      <div className="flex bg-[#131313] w-[75%] h-[72%] rounded-md animate-slideleft2">
        <div className="flex flex-col w-[60%]  overflow-y-scroll hide-scrollbar">
          <div className="flex flex-col w-full h-[200px]">
            {currentCart?.map((item, i) => {
              return <PaymentCard key={item.id} item={item} />;
            })}
          </div>
        </div>
        <div className="flex flex-col w-[40%] items-center">
          <h2 className="text-3xl font-bold text-white my-11">Total</h2>
          <div className="flex w-[80%] mt-5">
            <div className="flex flex-col gap-8 w-[50%]">
              <h3 className="text-xl font-bold text-white">Sub-total:</h3>
              <h3 className="text-xl font-bold text-white">
                Discount {discountPercentage}%:
              </h3>
              <h3 className="text-xl font-bold text-white">Estimate Total:</h3>
            </div>
            <div className="flex flex-col gap-8 items-end w-[50%]">
              <h3 className="text-xl font-bold text-white">
                {totalPrice} baht
              </h3>
              <h3 className="text-xl font-bold text-white">
                {discountTotal} baht
              </h3>
              <h3 className="text-xl font-bold text-white">
                {estimateTotal} baht
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
