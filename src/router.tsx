import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";
import SidebarLayout from "src/layouts/SidebarLayout";
import PrivateProvider from "./providers/PrivateProvider";
import PublicProvider from "./providers/PublicProvider";
import Loader from "./Loader";

const Login = Loader(lazy(() => import("src/content/pages/Login")));
const Register = Loader(lazy(() => import("src/content/pages/Register")));

const Tickets = Loader(lazy(() => import("src/content/applications/Tickets")));
const TicketCreateForm = Loader(lazy(() => import("src/content/pages/Tickets/Create/index")));
const TicketUpdateForm = Loader(lazy(() => import("src/content/pages/Tickets/Update/index")));
const TicketDetails = Loader(lazy(() => import("src/content/pages/Tickets/Details")));

const Airlines = Loader(lazy(() => import("src/content/applications/Airlines")));
const AirlineCreateForm = Loader(lazy(() => import("src/content/pages/Airlines/Create/index")));
const AirlineUpdateForm = Loader(lazy(() => import("src/content/pages/Airlines/Update/index")));
const AirlineDetails = Loader(lazy(() => import("src/content/pages/Airlines/Details")));

const Departures = Loader(lazy(() => import("src/content/applications/Departures")));
const DepartureCreateForm = Loader(lazy(() => import("src/content/pages/Departures/Create/index")));
const DepartureUpdateForm = Loader(lazy(() => import("src/content/pages/Departures/Update/index")));
const DepartureDetails = Loader(lazy(() => import("src/content/pages/Departures/Details")));

const Arrivals = Loader(lazy(() => import("src/content/applications/Arrivals")));
const ArrivalCreateForm = Loader(lazy(() => import("src/content/pages/Arrivals/Create/index")));
const ArrivalUpdateForm = Loader(lazy(() => import("src/content/pages/Arrivals/Update/index")));
const ArrivalDetails = Loader(lazy(() => import("src/content/pages/Arrivals/Details")));

const Flights = Loader(lazy(() => import("src/content/applications/Flights")));
const FlightCreateForm = Loader(lazy(() => import("src/content/pages/Flights/Create/index")));
const FlightUpdateForm = Loader(lazy(() => import("src/content/pages/Flights/Update/index")));
const FlightDetails = Loader(lazy(() => import("src/content/pages/Flights/Details")));

const Benefits = Loader(lazy(() => import("src/content/applications/Benefits")));
const BenefitCreateForm = Loader(lazy(() => import("src/content/pages/Benefits/Create/index")));
const BenefitUpdateForm = Loader(lazy(() => import("src/content/pages/Benefits/Update/index")));
const BenefitDetails = Loader(lazy(() => import("src/content/pages/Benefits/Details")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="login" replace />,
  },
  {
    path: "management",
    element: (
      <PrivateProvider>
        <SidebarLayout />
      </PrivateProvider>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="airlines" replace />,
      },
      {
        path: "tickets",
        element: <Tickets />
      },
      {
        path: "airlines",
        element: <Airlines />
      },
      {
        path: "departures",
        element: <Departures />
      },
      {
        path: "arrivals",
        element: <Arrivals />
      },
      {
        path: "flights",
        element: <Flights />
      },
      {
        path: "benefits",
        element: <Benefits />
      },
    ],
  },

  {
    path: "/management/tickets",
    element: (
      <PrivateProvider>
        <SidebarLayout />
      </PrivateProvider>
    ),
    children: [
      {
        path: "create",
        element: <TicketCreateForm />,
      },
      {
        path: "update/:ticket_id",
        element: <TicketUpdateForm />,
      },
      {
        path: "details/:ticket_id",
        element: <TicketDetails />,
      },
    ],
  },
  {
    path: "/management/airlines",
    element: (
      <PrivateProvider>
        <SidebarLayout />
      </PrivateProvider>
    ),
    children: [
      {
        path: "create",
        element: <AirlineCreateForm />,
      },
      {
        path: "update/:airline_id",
        element: <AirlineUpdateForm />,
      },
      {
        path: "details/:airline_id",
        element: <AirlineDetails />,
      },
    ],
  },
  {
    path: "/management/departures",
    element: (
      <PrivateProvider>
        <SidebarLayout />
      </PrivateProvider>
    ),
    children: [
      {
        path: "create",
        element: <DepartureCreateForm />,
      },
      {
        path: "update/:departure_id",
        element: <DepartureUpdateForm />,
      },
      {
        path: "details/:departure_id",
        element: <DepartureDetails />,
      },
    ],
  },
  {
    path: "/management/arrivals",
    element: (
      <PrivateProvider>
        <SidebarLayout />
      </PrivateProvider>
    ),
    children: [
      {
        path: "create",
        element: <ArrivalCreateForm />,
      },
      {
        path: "update/:arrival_id",
        element: <ArrivalUpdateForm />,
      },
      {
        path: "details/:arrival_id",
        element: <ArrivalDetails />,
      },
    ],
  },
  {
    path: "/management/flights",
    element: (
      <PrivateProvider>
        <SidebarLayout />
      </PrivateProvider>
    ),
    children: [
      {
        path: "create",
        element: <FlightCreateForm />,
      },
      {
        path: "update/:flight_id",
        element: <FlightUpdateForm />,
      },
      {
        path: "details/:flight_id",
        element: <FlightDetails />,
      },
    ],
  },
  {
    path: "/management/benefits",
    element: (
      <PrivateProvider>
        <SidebarLayout />
      </PrivateProvider>
    ),
    children: [
      {
        path: "create",
        element: <BenefitCreateForm />,
      },
      {
        path: "update/:benefit_id",
        element: <BenefitUpdateForm />,
      },
      {
        path: "details/:benefit_id",
        element: <BenefitDetails />,
      },
    ],
  },



  {
    path: "login",
    element: (
      <PublicProvider>
        <Login />
      </PublicProvider>
    ),
  },
  {
    path: "register",
    element: (
      <PublicProvider>
        <Register />
      </PublicProvider>
    ),
  },
];

export default routes;
