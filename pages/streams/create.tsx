import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Create: NextPage = () => {
  return (
    <Layout seoTitle="" canGoBack>
      <form className="px-4 py-10 space-y-4">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          name="price"
          type="text"
          kind="price"
        />
        {/* Name Input */}

        {/* Description Input */}
        <TextArea label="Desrcription" name="description" />

        {/* Upload Btn */}
        <Button text="Go LiveStream" />
      </form>
    </Layout>
  );
};

export default Create;
