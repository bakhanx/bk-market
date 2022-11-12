import { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack seoTitle="Sold History">
      <div className="flex flex-col divide-y pb-10">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
