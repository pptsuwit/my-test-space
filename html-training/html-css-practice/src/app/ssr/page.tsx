import Button from "@/components/Button/Button";
import Header from "./header";
import Content from "./content";
import Loading, { ContentLoading } from "./loading";
import { Suspense } from "react";
import "./index.css";

export default async function page() {
  return (
    <>
      <Header />
      <div className="h-96 pt-16 flex flex-col">
        <Suspense fallback={<ContentLoading />}>
          <Content></Content>
        </Suspense>
      </div>
      <div className="h-96 pt-16 flex flex-col">
        <Suspense fallback={<ContentLoading />}>
          <Content></Content>
        </Suspense>
      </div>
      <div className="h-96 pt-16 flex flex-col">
        <Suspense fallback={<ContentLoading />}>
          <Content></Content>
        </Suspense>
      </div>
      <div className="h-96 pt-16 flex flex-col">
        <Suspense fallback={<ContentLoading />}>
          <Content></Content>
        </Suspense>
      </div>
      <div className="h-96 pt-16 flex flex-col">
        <Suspense fallback={<ContentLoading />}>
          <Content></Content>
        </Suspense>
      </div>

      <div className="bg-blue-50 w-screen h-20">Footer</div>
    </>
  );
}
