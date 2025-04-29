import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("learning-statement", "routes/learning-statement.tsx"),
  route("artefact", "routes/artefact.tsx", [
    // index("routes/learning-statement.tsx"),
    route("stf", "routes/artefact/stf.tsx")
  ])
] satisfies RouteConfig;
