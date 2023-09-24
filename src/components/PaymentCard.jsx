import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/cartSlice";
import { img404 } from "../assets";
import { BsFillTrash3Fill } from "react-icons/bs";

const PaymentCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteCart(item));
  };
  return (
    <div className="flex p-5 m-5 rounded-lg items-center gap-5 bg-[#292929] border-2 border-[#FED900]">
      <div>
        <img
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : img404
          }
          className="object-cover h-52 max-[640px]:h-60"
        />
      </div>
      <div className="flex w-full ms-10 gap-5">
        <div className="flex flex-col w-[20%]">
          <p className="text-lg  font-normal text-white">id</p>
          <p className="text-lg  font-normal text-white">name</p>
          <p className="text-lg  font-normal text-white">each-price</p>
          <p className="text-lg  font-normal text-white">quantity</p>
          <p className="text-lg  font-normal text-white">each-total</p>
        </div>
        <div className="flex flex-col w-[5%]">
          <p className="text-lg  font-normal text-white">:</p>
          <p className="text-lg  font-normal text-white">:</p>
          <p className="text-lg  font-normal text-white">:</p>
          <p className="text-lg  font-normal text-white">:</p>
          <p className="text-lg  font-normal text-white">:</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-lg font-normal text-white">{item.id}</p>
          <p className="text-lg font-normal text-white">{item.title}</p>
          <p className="text-lg font-normal text-white">{item.price} Baht</p>
          <p className="text-lg font-normal text-white">{item.quantity}</p>
          <p className="text-lg font-normal text-white">{item.total} Baht</p>
        </div>
      </div>

      <BsFillTrash3Fill
        color="#FED900"
        size={30}
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default PaymentCard;
