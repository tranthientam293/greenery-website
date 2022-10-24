import React from "react";
import { Link } from "react-router-dom";
import {
  Cart,
  FilledHeart,
  Heart,
  RightArrow,
  StarRating,
} from "../Icons/Icons";

const CardNavTab = ({ background, text }) => {
  return (
    <div className="relative w-full min-h-[230px] bg-orange-02 rounded-lg pl-8 pt-24 pb-8 pr-24">
      <div className="relative z-10">
        <h4 className="font-Quicksand font-bold text-xl text-black-01 mb-4 ">
          {text}
        </h4>

        <Link
          to="/shop"
          className="flex items-center gap-3 w-fit font-Quicksand font-bold candy-menu text-white capitalize px-5 py-3 rounded"
        >
          shop now <RightArrow />
        </Link>
      </div>

      <img
        src={background}
        alt="card image"
        className="absolute bottom-6 right-2 z-0"
      />
    </div>
  );
};

const Card = ({ image, name, status, isFavorite, rating }) => {
  const rateCount = (rating) => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      if (i < rating) {
        result.push("#FDC040");
      } else {
        result.push("");
      }
    }
    return result;
  };
  return (
    <div
      className={
        "relative border-solid border-gray-01 border-[0.5px] rounded-lg p-3 overflow-hidden " +
        status
      }
    >
      <div className="relative mb-5">
        <img src={image} alt="card image" className="block mx-auto" />
        <span className="absolute right-3 top-3">
          {isFavorite ? <FilledHeart /> : <Heart />}
        </span>
      </div>

      <div className="px-2 text-gray-01">
        <p className="mb-3">Category</p>
        <h4 className="font-Quicksand font-bold text-xl text-black-01 mb-3">
          {name}
        </h4>
        <p className="flex items-center gap-1 text-base text-gray-01 mb-3">
          {rateCount(rating).map((item, index) => {
            return <StarRating background={item} key={index} />;
          })}
          <span className="text-base text-black-01 ml-2">
            ({rating.toFixed(1)})
          </span>
        </p>
        <div className="flex items-end justify-between mb-1">
          <div className="text-black-01">
            <p className="text-gray-01 mb-3">Price per kg</p>
            <p className="text-lg">
              $24.00{" "}
              <span className="text-sm text-gray-01 line-through">$30.00</span>
            </p>
          </div>
          <button className="flex items-center gap-3 font-Quicksand font-bold text-green-01 bg-green-02 rounded px-5 py-3">
            <Cart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

const ProvideCard = ({ title, icon }) => {
  return (
    <div className="relative bg-white border-solid boder-gray-01 border-[0.5px] rounded-lg mt-16">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit bg-white border-solid boder-gray-01 border-[0.5px] rounded-full p-6">
        <img src={icon} alt="card-icon" />
      </div>
      <div className="font-Quicksand font-bold text-center p-8">
        <h4 className="text-xl text-black-01 mt-14 mb-4">{title}</h4>
        <p className="font-Lato font-normal text-gray-01 mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>

        <Link className="block w-fit bg-green-02 text-green-01 px-5 py-3 mx-auto rounded">
          Read more
        </Link>
      </div>
    </div>
  );
};

const BlogCard = ({ title, thumbnail, date, author, avatar, summary }) => {
  return (
    <Link>
      <img src={thumbnail} alt="thumbnail" className="w-full"/>
      <div className="mt-6">
        <div className="flex items-center gap-2 text-gray-01 leading-none mb-4">
          Category
          <span className="w-2 h-2 bg-green-01 text-lg rounded-full"></span>
          {date}
        </div>
        <h4 className="font-Quicksand font-bold text-xl text-black-01 mb-4">
          {title}
        </h4>
        <p className="text-gray-01 mb-4">{summary}</p>

        <div className="flex items-center gap-3 text-black-01">
          <img src={avatar} alt="user-avatar" className="w-8 aspect-[1]" />
          {author}
        </div>
      </div>
    </Link>
  );
};
export default Card;
export { CardNavTab, ProvideCard, BlogCard };
