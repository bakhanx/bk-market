import { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Favorite: NextPage = () => {
  return (
    <Layout canGoBack title="Wish List">
     <div className="flex flex-col divide-y space-y-5 pb-10">
     <ProductList kind="favorites" />
      </div>
    </Layout>
  );
};

export default Favorite;
