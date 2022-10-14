/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout/Layout";
import { AiOutlineHeart } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Shop() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login");
    },
  });

  if (status === "loading") {
    return <>Loading...</>;
  }

  return (
    <Layout title="Shop">
      <div class="container px-5 lg:px-24 py-24 mx-auto">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-4xl font-bold text-primary-text sm:text-5xl">
            Shop
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-secondary-text lg:w-2/3 lg:px-24">
            Pick your favorite items from our shop to accompany you on your
            journey.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://m.media-amazon.com/images/I/81oUvlsYcnL._SL1500_.jpg"
              />
            </a>
            <div class="mt-4">
              <h2 class="text-primary-text title-font text-lg font-medium">
                Bag
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="text-primary-text text-lg rounded-md border-primary-text border-2 px-4 py-2 w-full transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
                Buy Now
              </button>
              <button className="text-primary-text rounded-md border-primary-text border-2 px-4 py-2 w-1/6 flex items-center transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
                <AiOutlineHeart className="text-xl" />
              </button>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Cup-Noodles-2.jpg"
              />
            </a>
            <div class="mt-4">
              <h2 class="text-primary-text title-font text-lg font-medium">
                Cup Noodles
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="text-primary-text text-lg rounded-md border-primary-text border-2 px-4 py-2 w-full transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
                Buy Now
              </button>
              <button className="text-primary-text rounded-md border-primary-text border-2 px-4 py-2 w-1/6 flex items-center transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
                <AiOutlineHeart className="text-xl" />
              </button>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://static.toiimg.com/photo/92494266.cms"
              />
            </a>
            <div class="mt-4">
              <h2 class="text-primary-text title-font text-lg font-medium">
                Grilled Sandwich
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="text-primary-text text-lg rounded-md border-primary-text border-2 px-4 py-2 w-full transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
                Buy Now
              </button>
              <button className="text-primary-text rounded-md border-primary-text border-2 px-4 py-2 w-1/6 flex items-center transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
                <AiOutlineHeart className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
