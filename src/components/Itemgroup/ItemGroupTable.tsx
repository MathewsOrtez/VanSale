import React, { useEffect, useState } from "react";
import DeleteIcon from "../../assets/TaxMaster/DeleteIcon.png";
import EditIcon from "../../assets/TaxMaster/EditIcon.png";
import DataDeleteIcon from "../../assets/TaxMaster/DataDeleteIcon.png";
import CustomSwitch from "../../components/utilis/CustomSwitch";
import CustomizedCheckbox from "../../components/utilis/CustomCheckbox";
import CustomAlert from "../../components/utilis/CustomAlert";
import DeleteItemGroupModal from "./DeleteItemGroupModal";
import EditItemGroupModal from "./EditItemGroupModal";
import { useItemGroup } from "../../context/ItemGroupContext";
import ItemGroupAddNew from "./ItemGroupAddNew";
import CustomPagination from "../../components/utilis/Pagination";
import SearchBar from "../../components/utilis/SearchBox";
import Loader from "../../components/utilis/Loader";
const ItemGroupTable: React.FC = () => {
  const { itemGroupData, editItemGroup, deleteItemGroup, deleteChecked ,loading} =
    useItemGroup();
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [editData, setEditData] = useState<any>({});
  const [deleteData, setDeleteData] = useState<any>({});
  const [openNewModal, setOpenNewModal] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredData = itemGroupData.filter(
    (item: any) =>
      item.cItemGroupName.toLowerCase().includes(searchTerm) ||
      item.cShortName.toLowerCase().includes(searchTerm)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    setSelectAll(false);
  }, [currentPage, itemsPerPage, searchTerm]);

  // Handle individual checkbox change
  const handleRowCheckboxChange = (nItemGroupId: number, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, nItemGroupId]);
    } else {
      setSelectedRows((prev) => prev.filter((id: number) => id !== nItemGroupId));
    }
  };

  // Handle header checkbox change
  const handleHeaderCheckboxChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRows(currentData.map((item: any) => item.nItemGroupId));
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
        },
      });
    } else {
      CustomAlert({
        type: "warning",
        message: "Please select at least one item to delete.",
      });
    }
  };

  // Open the modal
  const handleClickOpen = (
    nItemGroupId: number,
    cItemGroupName: string,
    cShortName: string,
    bActive: boolean,
  ) => {
    setDeleteData({ nItemGroupId, cItemGroupName, cShortName, bActive });
    setOpenModal(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleEditClick = (
    nItemGroupId: number,
    cItemGroupName: string,
    cShortName: string,
    bActive: boolean,
  ) => {
    setEditData({ nItemGroupId, cItemGroupName, cShortName, bActive });
    setEditModal(true);
  };

  const handleSave = (updatedData: any) => {
    editItemGroup(updatedData);
  };

  const handleDelete = (deleteData: any) => {
    CustomAlert({
      type: "warning",
      message: "Are you sure you want to delete these item?",
      onConfirm: () => {
        deleteItemGroup(deleteData.nItemGroupId);
        setSelectAll(false);
        setSelectedRows([]);
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
  const handleSwitchChange = (nItemGroupId: number, bActive: boolean) => {
    const updatedTax = itemGroupData.find(
      (item: any) => item.nItemGroupId === nItemGroupId
    );
    if (updatedTax) {
      editItemGroup({ ...updatedTax, bActive });
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
    {loading && <Loader />}
      <div className="mx-4">
        <div className="flex justify-between flex-wrap items-center my-7">
          <p className="font-semibold text-lg">Item Group Master</p>
          <div className="flex flex-wrap items-center gap-4">
            {/* Search Bar */}
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search ItemGroup..."
              className="w-[332px] h-[32px]"
            />

            {/* Action Buttons */}
            <div className="flex gap-2 ">
              {/* Delete Button */}
              <button
                className="text-white bg-[#fa3b3b] flex items-center justify-center w-[32px] h-[33px] rounded-md hover:shadow-md transition-colors"
                onClick={handleDeleteSelected}   
              >
                <img src={DeleteIcon} className="w-[19px] h-[20px]" />
              </button>
              {/* Add New Button */}
              <button
                className="  w-[98px] h-[33px] bg-[#25add7] rounded-md text-white  text-md hover:bg-[#1a8d9d] transition-colors"
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
          <tbody className="bg-white">
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
                  className="text-gray-800 bg-[#fafafa]  border-[#f1f1f1] text-sm border-b text-start cursor-pointer hover:bg-gray-100"
                >
                  <td className="text-start py-2">
                    <CustomizedCheckbox
                      checked={selectedRows.includes(item?.nItemGroupId)}
                      onChange={(e) =>
                        handleRowCheckboxChange(item?.nItemGroupId, e.target.checked)
                      }
                    />
                  </td>
                  <td
                    className="text-start py-2"
                    onClick={() =>
                      handleClickOpen(
                        item?.nItemGroupId,
                        item?.cItemGroupName,
                        item?.cShortName,
                        item?.bActive
                      )
                    }
                  >
                    {startIndex + index + 1}
                  </td>
                  <td
                    className="text-start py-2"
                    onClick={() =>
                      handleClickOpen(
                        item?.nItemGroupId,
                        item?.cItemGroupName,
                        item?.cShortName,
                        item?.bActive
                      )
                    }
                  >
                    {item?.cItemGroupName}
                  </td>
                  <td
                    className="text-start py-2"
                    onClick={() =>
                      handleClickOpen(
                        item?.nItemGroupId,
                        item?.cItemGroupName,
                        item?.cShortName,
                        item?.bActive
                      )
                    }
                  >
                    {item?.cShortName}
                  </td>
                  <td className="text-center py-2">
                    <CustomSwitch
                      checked={item.bActive}
                      onChange={(e, checked) =>
                        handleSwitchChange(item?.nItemGroupId, checked)
                      }
                    />
                  </td>
                  <td className=" text-center py-2">
                    <button
                      aria-label={`Edit ${item?.cItemGroupName}`}
                      className="hover:text-blue-500 transition-colors"
                      onClick={() =>
                        handleEditClick(
                          item?.nItemGroupId,
                          item?.cItemGroupName,
                          item?.cShortName,
                          item?.bActive
                        )
                      }
                    >
                      <img src={EditIcon} />
                    </button>
                  </td>
                  <td className=" text-center py-2">
                    <button
                      aria-label={`Delete ${item?.cItemGroupName}`}
                      className="hover:text-red-700 transition-colors"
                      onClick={() =>
                        handleClickOpen(
                          item?.nItemGroupId,
                          item?.cItemGroupName,
                          item?.cShortName,
                          item?.bActive
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
        <div className="absolute bottom-0 right-0 w-full px-4">
          <div>
            <CustomPagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={itemGroupData.length}
              onPageChange={handlePageChange}
              setItemsPerPage={setItemsPerPage}
            />
          </div>
        </div>

        {/* Modal */}

        {openNewModal && (
          <ItemGroupAddNew
            open={openNewModal}
            onClose={handleNewClose}
            onSave={handleSave}
          />
        )}
        {openModal && (
          <DeleteItemGroupModal
            open={openModal}
            onClose={handleClose}
            deleteData={deleteData}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        )}
        {editModal && (
          <EditItemGroupModal
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

export default ItemGroupTable;
