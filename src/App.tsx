import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "./components/Template/Template";
import Dashboard from "./pages/Dashboard/Dashboard";
import Upgradeplan from "./pages/Upgradeplan/Upgradeplan";
import Outlet from "./pages/Master/Outlet/Outlet";
import MasterRoute from "./pages/Master/Route/MasterRoute";
import OutletSummary from "./pages/Master/Outlet/OutletSummary";
import Van from "./pages/Master/Outlet/Van";
import VanSummary from "./pages/Master/Outlet/VanSummary";
import TaxMaster from "./pages/Master/Tax/TaxMaster";
import ItemGroupMaster from "./pages/Master/ItemGroup/ItemGroupMaster";
import StateMaster from "./pages/Master/State/StateMaster";
import BranchMaster from "./pages/Master/Branch/BranchMaster";
import CustomerCovered from "./pages/Dashboard/CustomerCovered/CustomerCovered";
import CustomerCoveredOutlet from "./pages/Dashboard/CustomerCovered/CustomerCoveredOutlet";
import CustomerCoveredVan from "./pages/Dashboard/CustomerCovered/CustomerCoveredVan";
import CustomerCoveredVanInner from "./pages/Dashboard/CustomerCovered/CustomerCoveredVanInner";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index  element={<Dashboard />} />
          <Route path="/masterroute" element={<MasterRoute />} />
          <Route path="/transaction" />
          <Route path="/usermanagement" />
          <Route path="/settings" />
          <Route path="/upgradenow" element={<Upgradeplan />} />
          <Route path="/outletvan" element={<Outlet />} />
          <Route path="/outletsummary" element={<OutletSummary />} />
          <Route path="/van" element={<Van/>} />
          <Route path="/vansummary" element={<VanSummary/>} />
          <Route path="/taxmaster" element={<TaxMaster />} />
          <Route path="/itemgroupmaster" element={<ItemGroupMaster />} />
          <Route path="/statemaster" element={<StateMaster />} />
          <Route path="/branchmaster" element={<BranchMaster />} />
          
          <Route path="/customercovered" element={<CustomerCovered />} />
          <Route path="/customercoveredoutlet/:id" element={<CustomerCoveredOutlet />} />
          <Route path="/customercoveredvan/:id" element={<CustomerCoveredVan />} />
          <Route path="/customercoveredvaninner/:id/:type/:route" element={<CustomerCoveredVanInner/>} />
         
          <Route path="/missedcustomers" element={<Upgradeplan />} />
          <Route path="/unbilledorders" element={<Upgradeplan />} />
          <Route path="/sales" element={<Upgradeplan />} />
          <Route path="/orders" element={<Upgradeplan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
