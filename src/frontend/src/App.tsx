import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { SuburbPage } from "./pages/suburbs/SuburbPage";

// Root layout component
function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// ===== SUBURB ROUTES =====
const suburbPerthCbdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/perth-cbd",
  component: () => <SuburbPage slug="perth-cbd" />,
});

const suburbSubiacoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/subiaco",
  component: () => <SuburbPage slug="subiaco" />,
});

const suburbFremantleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/fremantle",
  component: () => <SuburbPage slug="fremantle" />,
});

const suburbJoondalupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/joondalup",
  component: () => <SuburbPage slug="joondalup" />,
});

const suburbRockinghamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/rockingham",
  component: () => <SuburbPage slug="rockingham" />,
});

const suburbMandurahRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/mandurah",
  component: () => <SuburbPage slug="mandurah" />,
});

const suburbMidlandRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/midland",
  component: () => <SuburbPage slug="midland" />,
});

const suburbArmadaleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/armadale",
  component: () => <SuburbPage slug="armadale" />,
});

const suburbScarboroughRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/scarborough",
  component: () => <SuburbPage slug="scarborough" />,
});

const suburbCottesloeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/cottesloe",
  component: () => <SuburbPage slug="cottesloe" />,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  suburbPerthCbdRoute,
  suburbSubiacoRoute,
  suburbFremantleRoute,
  suburbJoondalupRoute,
  suburbRockinghamRoute,
  suburbMandurahRoute,
  suburbMidlandRoute,
  suburbArmadaleRoute,
  suburbScarboroughRoute,
  suburbCottesloeRoute,
]);

// Create hash-based router
const hashHistory = createHashHistory();
const router = createRouter({
  routeTree,
  history: hashHistory,
});

// Type registration
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
