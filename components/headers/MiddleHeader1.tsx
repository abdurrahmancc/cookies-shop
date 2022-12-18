import Image from "next/image";
import React, { useState, useEffect, memo } from "react";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import logo from "../../assets/logo.png";
import wishlistIcon from "../../assets/icons/wishlist.svg";
import Link from "next/link";
import { searchCategorySelected } from "../../styles/selectorComponent";
import gridIcon from "../../assets/icons/all-category.svg";
import cartIcon from "../../assets/icons/cart.svg";
import { FaUserCircle } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import Select from "react-select";
import DrawerSidebar from "../shared/drawerSidebar/DrawerSidebar";
import { useAppDispatch, useAppSelector } from "../../redux/app/reduxHooks";
import { fetchWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { fetchCarts } from "../../redux/features/shoppingCart/shoppingCartSlice";

type FromData = {
  searchItems: string;
};

interface option {
  value: string;
  label: string;
}

const options: option[] = [
  { value: "cookies", label: "Cookies" },
  { value: "cakes", label: "Cakes" },
  { value: "chocolates", label: "Chocolates" },
];

const MiddleHeader1 = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<option | null>(null);
  const { wishlist, cart } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

  useEffect(() => {
    dispatch(fetchWishlist());
    dispatch(fetchCarts());
  }, [dispatch]);

  console.log(cart);

  if (wishlist.isLoading || cart.isLoading) {
    return <div>Loading...</div>;
  }

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.1)` }}>
      <div className="max-w-[1200px]  lg:mx-auto mx-5">
        <div className="flex items-center justify-between">
          <Image src={logo} alt="logo" className="py-[10px]" />
          {/*----- category search from start ------*/}
          <div className="h-full hidden lg:block">
            <form onSubmit={onSubmit} className="flex justify-center w-full h-full relative">
              <div className="relative ">
                <div className="xl:w-[628px] flex lg:w-[480px] items-center md:w-[350px] border border-primary rounded-[4px]">
                  <div className="flex w-[150px] items-center">
                    <div className="rounded-l-[3px] bg-secondary pl-4 pr-[2px] flex items-center h-[53px]">
                      <Image src={gridIcon} className="w-4 h-4" alt="icon" />
                    </div>
                    <Select
                      id="category-select-component"
                      instanceId="category-select-component"
                      styles={searchCategorySelected}
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      placeholder={"All Categories"}
                      isSearchable={false}
                      options={options}
                    />
                  </div>
                  <div className="w-[1px] ml-4 h-[35px] bg-[#808080]"></div>
                  <div className="w-full max-w-[459px]">
                    <input
                      type="text"
                      placeholder="Search Cookies items..."
                      className="input text-black placeholder:text-black placeholder:opacity-[0.7] placeholder:text-sm pl-4 focus:outline-none bg-inherit  w-full h-[53px]"
                    />
                    <button className="capitalize absolute right-0 text-sm text-white bg-primary w-20 h-[55px] rounded-[4px]">
                      <IoSearch className="w-[26px] mx-auto h-[26px]" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="lg:hidden cursor-pointer"
            id="navToggle2"
            onClick={() => setToggle(!toggle)}
          >
            <VscThreeBars className="text-3xl text-black" />
          </div>
          {/*----- category search from end ------*/}
          <ul className="lg:flex items-center gap-5 hidden ">
            <li>
              <div className="flex items-center gap-2">
                <div className="indicator">
                  <Link href={"/wishlist"} className="  rounded-full" aria-label="shopping cart">
                    <Image
                      src={wishlistIcon}
                      height={35}
                      width={35}
                      className="h-[35px] w-[35px]"
                      alt="wishlist"
                    />
                  </Link>
                  <div
                    style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.25)` }}
                    className="flex justify-center items-center p-1 h-5 w-5 rounded-full bg-[#FFA111] border border-white  text-primary cursor-pointer indicator-item top-1 right-1 text-[0.6875rem]"
                  >
                    <span className="text-xs">{wishlist?.wishlist?.length}</span>
                  </div>
                </div>
                <span className="text-primary text-sm  font-[500]">wishlist</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <div className="indicator">
                  <Link
                    href={"/shoppingCart"}
                    className="  rounded-full"
                    aria-label="shopping cart"
                  >
                    <Image src={cartIcon} className="h-[35px] w-[35px]" alt="location" />
                  </Link>
                  <div
                    style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.25)` }}
                    className="flex justify-center items-center p-1 h-5 w-5 rounded-full bg-[#FFA111] border border-white  text-primary cursor-pointer indicator-item top-1 right-1 text-[0.6875rem]"
                  >
                    <span className="text-xs">{cart?.carts?.length}</span>
                  </div>
                </div>
                <span className="text-primary text-sm  font-[500]">Cart</span>
              </div>
            </li>
            <li>
              <div className=" rounded-full flex items-center gap-2">
                <FaUserCircle className="text-primary w-[35px] h-[35px]" />
                <span className="text-primary text-sm  font-[500]">Account</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <DrawerSidebar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default memo(MiddleHeader1);
