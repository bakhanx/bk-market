import { NextPage } from "next";
import Item from "../../components/item";
import Layout from "../../components/layout";

const Buy: NextPage = () => {
  return (
    <Layout canGoBack title="Order History">
      <div className="flex flex-col divide-y pb-10">
        {[...Array(10)].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="New Galaxy Z Flip"
            price={95 + 3*i}
            comments={i + 3}
            hearts={i + 10}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Buy;
