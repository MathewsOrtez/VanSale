import React from "react";
import { DotLoader } from "react-spinners";

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <DotLoader color="#25add7"/>
        </div>
    );
};

export default Loader;