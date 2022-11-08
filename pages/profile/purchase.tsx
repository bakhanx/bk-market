import { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Purchase: NextPage = () => {
  return (
    <Layout canGoBack title="Order History">
      <div className="flex flex-col divide-y pb-10">
      <ProductList kind="purchases" />
      </div>
    </Layout>
  );
};

export default Purchase;
