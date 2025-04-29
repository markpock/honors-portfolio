import type { Route } from "./+types/learning-statement";
import LearningStatement from "~/pages/learning-statement";

export function meta({}: Route.MetaArgs) {
  return [
    // {icon : "/favicon.ico"},
    { title: "Honors Portfolio | Learning Statement" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default LearningStatement