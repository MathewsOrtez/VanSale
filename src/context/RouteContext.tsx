import React, { createContext, useContext, useState } from "react";

// Define the context
const RouteContext = createContext<any>(null);

// Provider Component
export const RouteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [routeData, setRouteData] = useState([
    { srl: 1, name: "Varapuzha", shortname: "Vpz", active: true },
    { srl: 2, name: "Kunnumkulam", shortname: "KK", active: false },
    { srl: 3, name: "Kacheripadi", shortname: "Kpdi", active: true },
    { srl: 4, name: "Ernakulam North", shortname: "EN", active: false },
    { srl: 5, name: "Paalachuvadu", shortname: "Phu", active: true },
    { srl: 6, name: "Kakkulam", shortname: "Km", active: true },
    { srl: 7, name: "Redakulam", shortname: "Rd", active: true },
    { srl: 8, name: "Highcity", shortname: "Hc", active: true },
    { srl: 9, name: "Westend", shortname: "We", active: true },
    { srl: 10, name: "Ernakulam", shortname: "Er", active: true },
    { srl: 11, name: "Koduvally", shortname: "Kr", active: true },
    { srl: 12, name: "Addu", shortname: "Ad", active: true },
    { srl: 13, name: "Pallikkunnu", shortname: "Pk", active: false },
    { srl: 14, name: "Malampuzha", shortname: "Mz", active: true },
    { srl: 15, name: "Banassery", shortname: "Bn", active: false },
    { srl: 16, name: "Chavakkad", shortname: "Ch", active: true },
    { srl: 17, name: "Jallikunnu", shortname: "Jk", active: true },
    { srl: 18, name: "Devikulam", shortname: "Dk", active: true },
    { srl: 19, name: "Udumalpet", shortname: "Up", active: true },
    { srl: 20, name: "Zhekkunnu", shortname: "Zk", active: true },
    { srl: 21, name: "Xirikkunnu", shortname: "Xk", active: true },
    { srl: 22, name: "Illikkunnu", shortname: "Ik", active: true },
    { srl: 23, name: "Fort Kochi", shortname: "Fk", active: true },
    { srl: 24, name: "Mannarkkad", shortname: "Mk", active: true },
    { srl: 25, name: "Vandanmedu", shortname: "Vm", active: true },
    { srl: 26, name: "Rajakkad", shortname: "Rj", active: true },
    { srl: 27, name: "Kalpetta", shortname: "Kl", active: true },
    { srl: 28, name: "Sulthan Bathery", shortname: "Sb", active: true },
    { srl: 29, name: "Thalassery", shortname: "Ts", active: true },
    { srl: 30, name: "Kanhangad", shortname: "Kh", active: true },
    { srl: 31, name: "Nileshwaram", shortname: "Ns", active: true },
    { srl: 32, name: "Ponnani", shortname: "Pn", active: true },
    { srl: 33, name: "Tirur", shortname: "Tr", active: true },
    { srl: 34, name: "Perinthalmanna", shortname: "Pm", active: true },
    { srl: 35, name: "Manjeri", shortname: "Mj", active: true },
    { srl: 36, name: "Nilambur", shortname: "Nb", active: true },
    { srl: 37, name: "Kalady", shortname: "Kd", active: true },
    { srl: 38, name: "Muvattupuzha", shortname: "Mp", active: true },
    { srl: 39, name: "Thodupuzha", shortname: "Tp", active: true },
    { srl: 40, name: "Iritty", shortname: "Ir", active: true },
    { srl: 41, name: "Varkala", shortname: "Vk", active: true },
    { srl: 42, name: "Alappuzha", shortname: "Ap", active: true },
    { srl: 43, name: "Kayamkulam", shortname: "Km", active: true },
    { srl: 44, name: "Changanassery", shortname: "Cg", active: true },
    { srl: 45, name: "Pathanamthitta", shortname: "Pt", active: true },
    { srl: 46, name: "Adoor", shortname: "Ad", active: true },
    { srl: 47, name: "Pandalam", shortname: "Pd", active: true },
    { srl: 48, name: "Karunagappally", shortname: "Kg", active: true },
    { srl: 49, name: "Punalur", shortname: "Pr", active: true },
    { srl: 50, name: "Kottarakara", shortname: "Kt", active: true },
    { srl: 51, name: "Kollam", shortname: "Kl", active: true },
    { srl: 52, name: "Vellayani", shortname: "Vy", active: true },
    { srl: 53, name: "Vizhinjam", shortname: "Vz", active: true },
    { srl: 54, name: "Nedumangad", shortname: "Ng", active: true },
    { srl: 55, name: "Attingal", shortname: "At", active: true },
    { srl: 56, name: "Palluruthy", shortname: "Pl", active: true },
    { srl: 57, name: "Tripunithura", shortname: "Tp", active: true },
    { srl: 58, name: "Kolenchery", shortname: "Kn", active: true },
    { srl: 59, name: "Piravom", shortname: "Pv", active: true },
    { srl: 60, name: "Kottayam", shortname: "Km", active: true },
    { srl: 61, name: "Cherthala", shortname: "Ch", active: true },
    { srl: 62, name: "Vaikom", shortname: "Vk", active: true },
    { srl: 63, name: "Pala", shortname: "Pl", active: true },
    { srl: 64, name: "Ettumanoor", shortname: "Et", active: true },
    { srl: 65, name: "Pampady", shortname: "Pp", active: true },
    { srl: 66, name: "Chittoor", shortname: "Ct", active: true },
    { srl: 67, name: "Theni", shortname: "Th", active: true },
    { srl: 68, name: "Nagercoil", shortname: "Ng", active: true },
    { srl: 69, name: "Madurai", shortname: "Md", active: true },
    { srl: 70, name: "Coimbatore", shortname: "Cb", active: true },
    { srl: 71, name: "Salem", shortname: "Sl", active: true },
    { srl: 72, name: "Erode", shortname: "Er", active: true },
    { srl: 73, name: "Trichy", shortname: "Tc", active: true },
    { srl: 74, name: "Kumbakonam", shortname: "Kb", active: true },
    { srl: 75, name: "Nagapattinam", shortname: "Np", active: true },
    { srl: 76, name: "Thanjavur", shortname: "Tj", active: true },
    { srl: 77, name: "Vellore", shortname: "Vl", active: true },
    { srl: 78, name: "Dharmapuri", shortname: "Dp", active: true },
    { srl: 79, name: "Hosur", shortname: "Hs", active: true },
    { srl: 80, name: "Krishnagiri", shortname: "Kg", active: true },
    { srl: 81, name: "Pondicherry", shortname: "Pd", active: true },
    { srl: 82, name: "Cuddalore", shortname: "Cd", active: true },
    { srl: 83, name: "Villupuram", shortname: "Vl", active: true },
    { srl: 84, name: "Karaikal", shortname: "Ka", active: true },
    { srl: 85, name: "Ariyalur", shortname: "Ar", active: true },
    { srl: 86, name: "Dindigul", shortname: "Dn", active: true },
    { srl: 87, name: "Namakkal", shortname: "Nk", active: true },
    { srl: 88, name: "Karur", shortname: "Kr", active: true },
    { srl: 89, name: "Rasipuram", shortname: "Rs", active: true },
    { srl: 90, name: "Tirupur", shortname: "Tr", active: true },
    { srl: 91, name: "Pollachi", shortname: "Pc", active: true },
    { srl: 92, name: "Avinashi", shortname: "Av", active: true },
    { srl: 93, name: "Sathyamangalam", shortname: "Sm", active: true },
    { srl: 94, name: "Udumalai", shortname: "Ul", active: true },
    { srl: 95, name: "Mettupalayam", shortname: "Mp", active: true },
    { srl: 96, name: "Kothagiri", shortname: "Kg", active: true },
    { srl: 97, name: "Coonoor", shortname: "Cn", active: true },
    { srl: 98, name: "Ooty", shortname: "Ot", active: true },
    { srl: 99, name: "Gudalur", shortname: "Gl", active: true },
    { srl: 100, name: "Kundah", shortname: "Kn", active: true },
  ]);

  const addRoute = (newRoute: any) => {
    setRouteData((prev) => [...prev, { srl: prev.length + 1, ...newRoute }]);
  };

  const editRoute = (updatedData: any) => {
    setRouteData((prev) =>
      prev.map((item) => (item.srl === updatedData.srl ? updatedData : item))
    );
  };

  const deleteRoute = (srl: number) => {
    // setRouteData((prev) => prev.filter((item) => item.srl !== srl));
    // Reassign sequential `srl` values
    const filteredData = routeData.filter((item) => item.srl !== srl);
    setRouteData(filteredData.map((item, index) => ({
      ...item,
      srl: index + 1, // Assign new serial numbers
    })));  
  };

  const deleteChecked = ( selectedRows: number[]) => {
    setRouteData((prev) => {
      const filteredData = prev.filter((item) => !selectedRows.includes(item.srl));
      return filteredData.map((item, index) => ({
        ...item,
        srl: index + 1,
      }));
    });
  };
  
  

  return (
    <RouteContext.Provider value={{
      routeData, addRoute, editRoute, deleteRoute ,
      deleteChecked
     }}>
      {children}
    </RouteContext.Provider>
  );
};

// Custom hook for accessing the context
export const useRoute = () => useContext(RouteContext);
