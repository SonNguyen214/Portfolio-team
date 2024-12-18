import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
  description: "Not found",
};

export default async function NotFound() {
  return <div>Not found</div>;
}
