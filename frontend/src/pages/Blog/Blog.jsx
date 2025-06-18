import React from "react";
import PageWrapper from "../../utils/PageWrapper"
import LastArticles from "./LastArticles";

export default function Blog() {
  return (
    <PageWrapper>
      <div className="p-2 md:pr-50 md:pl-50 md:pt-10 md:pb-10">
        <h1 className="text-4xl font-bold">Blog</h1>
        <LastArticles />
      </div>
    </PageWrapper>
  );
}
