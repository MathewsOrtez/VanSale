import React, { useEffect, useState } from "react";
import DeleteIcon from "../../assets/TaxMaster/DeleteIcon.png";
import EditIcon from "../../assets/TaxMaster/EditIcon.png";
import DataDeleteIcon from "../../assets/TaxMaster/DataDeleteIcon.png";
import CustomSwitch from "../utilis/CustomSwitch";
import CustomizedCheckbox from "../utilis/CustomCheckbox";
import CustomAlert from "../utilis/CustomAlert";
import { useStates } from "../../context/StateContext";
import CustomPagination from "../utilis/Pagination";
import StateMasterAddNew from "./StateMasterAddNew";
import DeleteStateMasterModal from "./DeleteStateMasterModal";
import EditStateMasterModal from "./EditStateMasterModal";
import SearchBar from "../utilis/SearchBox";
const StateMasterTable: React.FC = () => {
  const { deleteState, editState, stateData, deleteChecked } = useStates();
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [editData, setEditData] = useState<any>({});
  const [deleteData, setDeleteData] = useState<any>({});
  const [openNewModal, setOpenNewModal] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredData = stateData.filter(
    (item: any) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.shortname.toLowerCase().includes(searchTerm) ||
      item.statecode.toLowerCase().includes(searchTerm)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    setSelectAll(false);
  }, [currentPage, itemsPerPage, searchTerm]);

  // Handle individual checkbox change
  const handleRowCheckboxChange = (srl: number, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, srl]);
    } else {
      setSelectedRows((prev) => prev.filter((id) => id !== srl));
    }
  };

  // Handle header checkbox change
  const handleHeaderCheckboxChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRows(currentData.map((item: any) => item.srl));
    } else {
      setSelectedRows([]);
    }
  };

  // Handle delete selected rows
  const handleDeleteSelected = () => {
    if (selectedRows.length > 0) {
      CustomAlert({
        type: "warning",
        message: "Are you sure you want to delete these items?",
        onConfirm: () => {
          deleteChecked(selectedRows);
          setSelectedRows([]);
          setSelectAll(false);
          CustomAlert({
            type: "success",
            message: `${selectedRows.length} items deleted successfully.`,
          });
        },
      });
    } else {
      CustomAlert({
        type: "error",
        message: "Please select at least one item to delete.",
      });
    }
  };

  // Open the modal
  const handleClickOpen = (
    srl: number,
    name: string,
    shortname: string,
    active: boolean,
    statecode: string
  ) => {
    setDeleteData({ srl, name, shortname, active, statecode });
    setOpenModal(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleEditClick = (
    srl: number,
    name: string,
    shortname: string,
    active: boolean,
    statecode: string
  ) => {
    setEditData({ srl, name, shortname, active, statecode });
    setEditModal(true);
  };

  const handleSave = (updatedData: any) => {
    editState(updatedData);
    CustomAlert({
      type: "success",
      message: `Tax ${updatedData.name} updated successfully.`,
    });
  };

  const handleDelete = (deleteData: any) => {
    CustomAlert({
      type: "warning",
      message: "Are you sure you want to delete these item?",
      onConfirm: () => {
        deleteState(deleteData.srl);
        setSelectAll(false);
        setSelectedRows([]);
        CustomAlert({
          type: "success",
          message: `${deleteData.name} deleted successfully.`,
        });
      },
    });
  };

  const handleEditClose = () => {
    setEditModal(false);
  };

  const handleNewClose = () => {
    setOpenNewModal(false);
  };

  // Handle Switch Toggle
  const handleSwitchChange = (srl: number, active: boolean) => {
    const updatedTax = stateData.find((item: any) => item.srl === srl);
    if (updatedTax) {
      editState({ ...updatedTax, active });
      // CustomAlert({
      //   type: "success",
      //   message: `${updatedTax.name} updated successfully.`,
      // });
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="mx-4 relative">
        <div className="flex justify-between items-center my-4">
          <p className="font-semibold text-lg">State Master</p>
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search State..."
              className="w-[332px] h-[32px]"
            />

            {/* Action Buttons */}
            <div className="flex gap-4 ">
              {/* Delete Button */}
              <button
                className=" px-3 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                onClick={handleDeleteSelected}
              >
                <img src={DeleteIcon} />
              </button>
              {/* Add New Button */}
              <button
                className="  w-[98px] h-[33px] bg-[#25add7] rounded-md text-white  font-medium hover:bg-[#1a8d9d] transition-colors"
                onClick={() => setOpenNewModal(true)}
              >
                Add New
              </button>
            </div>
          </div>
        </div>

        <table
          className={`w-full   rounded-md ${openModal ? "blur-sm" : ""} ${
            editModal ? "blur-sm" : ""
          }  ${openNewModal ? "blur-sm" : ""}`}
        >
          <thead className="border-[#f1f1f1] border bg-white text-sm">
            <tr>
              <th className=" text-gray-500 font-semibold text-start py-1">
                <CustomizedCheckbox
                  checked={selectAll}
                  onChange={(e) => handleHeaderCheckboxChange(e.target.checked)}
                />
              </th>
              <th className=" text-gray-500 font-semibold text-start py-1">
                Srl
              </th>
              <th className=" text-gray-500 font-semibold text-start py-1">
                Name
              </th>
              <th className=" text-gray-500 font-semibold text-start py-1">
                Short Name
              </th>
              <th className=" text-gray-500 font-semibold text-start py-1">
                State Code
              </th>
              <th className=" text-gray-500 font-semibold text-center py-1">
                Active
              </th>
              <th className=" text-gray-500 font-semibold text-center py-1">
                Edit
              </th>
              <th className=" text-gray-500 font-semibold text-center py-1">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {currentData?.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="text-center py-3 text-sm border text-gray-500 bg-gray-50"
                >
                  No data available
                </td>
              </tr>
            ) : (
              currentData?.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="text-gray-800 text-sm bg-[#fafafa]  border-[#f1f1f1]  border-b text-start cursor-pointer hover:bg-gray-100"
                >
                  <td className="text-start py-2">
                    <CustomizedCheckbox
                      checked={selectedRows.includes(item.srl)}
                      onChange={(e) =>
                        handleRowCheckboxChange(item.srl, e.target.checked)
                      }
                    />
                  </td>
                  <td
                    className="text-start py-2"
                    onClick={() =>
                      handleClickOpen(
                        item?.srl,
                        item?.name,
                        item?.shortname,
                        item?.active,
                        item?.statecode
                      )
                    }
                  >
                    {item?.srl}
                  </td>
                  <td
                    className="text-start py-2"
                    onClick={() =>
                      handleClickOpen(
                        item?.srl,
                        item?.name,
                        item?.shortname,
                        item?.active,
                        item?.statecode
                      )
                    }
                  >
                    {item?.name}
                  </td>
                  <td
                    className="text-start py-2"
                    onClick={() =>
                      handleClickOpen(
                        item?.srl,
                        item?.name,
                        item?.shortname,
                        item?.active,
                        item?.statecode
                      )
                    }
                  >
                    {item?.shortname}
                  </td>
                  <td
                    className="text-start py-2"
                    onClick={() =>
                      handleClickOpen(
                        item?.srl,
                        item?.name,
                        item?.shortname,
                        item?.active,
                        item?.statecode
                      )
                    }
                  >
                    {item?.statecode}
                  </td>
                  <td className="text-center py-2">
                    <CustomSwitch
                      checked={item.active}
                      onChange={(e, checked) =>
                        handleSwitchChange(item?.srl, checked)
                      }
                    />
                  </td>
                  <td className=" text-center py-2">
                    <button
                      aria-label={`Edit ${item?.name}`}
                      className="hover:text-blue-500 transition-colors"
                      onClick={() =>
                        handleEditClick(
                          item?.srl,
                          item?.name,
                          item?.shortname,
                          item?.active,
                          item?.statecode
                        )
                      }
                    >
                      <img src={EditIcon} />
                    </button>
                  </td>
                  <td className=" text-center py-2">
                    <button
                      aria-label={`Delete ${item?.name}`}
                      className="hover:text-red-700 transition-colors"
                      onClick={() =>
                        handleClickOpen(
                          item?.srl,
                          item?.name,
                          item?.shortname,
                          item?.active,
                          item?.statecode
                        )
                      }
                    >
                      <img src={DataDeleteIcon} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div>
          <div>
            <CustomPagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={stateData.length}
              onPageChange={handlePageChange}
              setItemsPerPage={setItemsPerPage}
            />
          </div>
        </div>

        {/* Modal */}

        {openNewModal && (
          <StateMasterAddNew
            open={openNewModal}
            onClose={handleNewClose}
            onSave={handleSave}
          />
        )}
        {openModal && (
          <DeleteStateMasterModal
            open={openModal}
            onClose={handleClose}
            deleteData={deleteData}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        )}
        {editModal && (
          <EditStateMasterModal
            open={editModal}
            onClose={handleEditClose}
            editData={editData}
            onSave={handleSave}
          />
        )}
      </div>
    </>
  );
};

export default StateMasterTable;
