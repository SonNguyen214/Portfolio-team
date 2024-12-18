import { Metadata } from "next";
import { metadata as defaultMetadata } from "./../layout";

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function HomeRouter() {
  return <div></div>;
}
