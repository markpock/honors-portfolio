import { Outlet } from "react-router";
import Layout from "./layout";

export default function () {
  return <> <Layout> <Outlet/> </Layout> </>
}