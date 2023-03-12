import { useAuth } from "../../context/auth";
import AdminMenu from "../../components/nav/AdminMenu";
import Jumbotron from "../../components/cards/Jumbotron";

export default function Dashboard() {
  //context
  const [auth] = useAuth();

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Welcom to Admin Dashboard"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            Manage all your truck parts here by clicking on the sidebar options.
          </div>
        </div>
      </div>
    </>
  );
}
