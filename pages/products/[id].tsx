import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import { Product, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import products from "pages/api/products";
import Image from "next/image";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResoponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { mutate: unboundMutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ItemDetailResoponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );

  const [toggleFavorite] = useMutation(
    `/api/products/${router.query.id}/favorite`
  );

  const onFavoriteClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);

    // ======================== ERORR ================
    // unboundMutate(
    //   "/api/users/me",
    //   (prev: any) => ({
    //     ok: !prev?.ok,
    //   }),
    //   false
    // );
    toggleFavorite({});
  };

  console.log(data);

  return (
    <Layout seoTitle={data?.product?.name!} canGoBack>
      <div className="px-4 py-4">
        <div className="mb-8">
          {/* Product Image */}
          <div className="relative pb-80 -z-10">
            <Image
              alt="wisky"
              layout="fill"
              src={`https://imagedelivery.net/214BxOnlVKSU2amZRZmdaQ/${data?.product.image}/public`}
              className="h-96 bg-slate-300 object-cover"
              // objectFit="cover" // Image component's object-cover === tailwind's object-cover
            />
          </div>

          {/* Profile */}
          <div className="flex cursor-pointer py-3 border-t border-b items-center space-x-3">
            <Image
              alt="profile"
              width={48}
              height={48}
              src={`https://imagedelivery.net/214BxOnlVKSU2amZRZmdaQ/${data?.product.user.avatar}/avatar`}
              className="w-12 h-12 rounded-full bg-slate-300"
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">
                {data?.product?.user?.name}
              </p>
              <Link href={`/users/profiles/${data?.product?.user?.id}`}>
                <a className="text-xs font-semibold text-gray-500">
                  View profile &rarr;
                </a>
              </Link>
            </div>
          </div>
          {/* Contents */}
          <div className="mt-10">
            {data ? (
              <>
                <h1 className="text-3xl font-bold text-gray-900">
                  {data?.product?.name}
                </h1>
                <p className="text-3xl block mt-3 text-gray-900">
                  ￦{data?.product?.price}
                </p>
                <p className="text-base my-6 text-gray-700">
                  {data?.product?.description}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-semibold">Loading Product</h1>
                <div className="flex flex-col">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </>
            )}

            {/* Chat to seller Button */}
            <div className="flex items-center justify-between space-x-2">
              <Button large text="Talk to seller"></Button>

              {/* Favorite Button */}
              <button
                onClick={onFavoriteClick}
                className={cls(
                  "p-3 rounded-md flex items-center justify-center",
                  data?.isLiked
                    ? "text-red-500 hover:text-red-400"
                    : "text-gray-400 hover:text-red-500"
                )}
              >
                {data?.isLiked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Similar products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700">Similar items</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {data?.relatedProducts?.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <a>
                  <div className="h-56 w-full mb-4 bg-slate-300" />
                  <h3 className="text-gray-700 -mb-1">{product.name}</h3>
                  <span className="text-sm font-semibold text-gray-900">
                    ￦{product.price}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
