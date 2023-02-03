import React, { Suspense, useState } from "react";
import { deviceTypeList, sortTypeList } from "types";
import {
   Button,
   DeleteModal,
   DeviceRow,
   DropdownInput,
   FormInput,
   FormModal,
   FormSelect,
   Icon,
   IconButton,
   InputWithIcon,
   Loading,
   PageHeader,
   SplitPane,
   Table,
   withGlobalHeader,
} from "components";
import { useDeviceClient } from "hooks";
import { MultiValue, SingleValue } from "react-select";
import { Device } from "types/models/deviceType";
import { useFormik } from "formik";
import { capitalizeFirstLetter, formValidator } from "libs";

interface FormType {
   id: string;
   hdd_capacity: string;
   system_name: string;
   type: {
      value: string;
      label: string;
   };
}

const formInitialState: FormType = {
   id: "",
   hdd_capacity: "",
   system_name: "",
   type: {
      value: "",
      label: "",
   },
};

const App: React.FC = () => {
   const { devices, loading, reload, filter, setFilter, submitDelete, submitUpdateOrCreate, getById } = useDeviceClient();

   const formik = useFormik({
      initialValues: formInitialState,
      validationSchema: formValidator,
      onSubmit: async (values) =>
         submitUpdateOrCreate(
            { hdd_capacity: values.hdd_capacity, system_name: values.system_name, type: values.type, id: values.id },
            handleFormModalClose
         ),
   });

   const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

   const [curentDevice, setCurentDevice] = useState<Device | null>(null);

   const resetFormState = () => {
      formik.setErrors({});
      formik.setValues(formInitialState, false);
   };

   const setFormState = (device: Device) => {
      formik.setValues(
         {
            hdd_capacity: device.hdd_capacity,
            id: device.id,
            system_name: device.system_name,
            type: {
               value: device.type,
               label: capitalizeFirstLetter(device.type.toLowerCase()) as string,
            },
         },
         false
      );
   };

   const handleOnOpenFormModal = async (deviceId?: string) => {
      if (deviceId) {
         const data = await getById(deviceId);
         if (data) setFormState(data);
      }
      setIsFormModalOpen(true);
   };

   const handleFormModalClose = () => {
      setCurentDevice(null);
      resetFormState();
      setIsFormModalOpen(false);
   };

   const handleDeleteModalClose = () => {
      setCurentDevice(null);
      setIsDeleteModalOpen(false);
   };

   const handleOnDelete = async (deviceId: string) => {
      const data = await getById(deviceId);
      if (data) {
         setCurentDevice(data);
         setIsDeleteModalOpen(true);
      }
   };

   const handleMultiData = (e: MultiValue<{ value: string; label: string }>) => {
      if (e.some((x) => x.label === "All")) {
         setFilter((prev) => ({
            ...prev,
            filterType: deviceTypeList,
         }));
         return;
      }
      setFilter((prev) => ({
         ...prev,
         filterType: e.map((x) => {
            return {
               label: x.label,
               value: x.value,
            };
         }),
      }));
   };

   const handleSingleData = (e: unknown, meta: any) => {
      console.log(e);
      console.log(meta);

      const data = e as { label: string; value: string };
      setFilter((prev) => ({
         ...prev,
         sortBy: data,
      }));
   };

   return (
      <main className="page_wrapper">
         <PageHeader
            title="Devices"
            right={
               <Button
                  className="bg_blue white100 b_none"
                  style={{ width: "7.5rem", height: "2.5rem" }}
                  text="Add device"
                  onClick={() => handleOnOpenFormModal()}
               >
                  <Icon name="Plus" size={"0.75rem"} color="var(--white100)" />
               </Button>
            }
         />
         <SplitPane
            left={
               <>
                  <InputWithIcon
                     placeholder="Search"
                     width="16.875rem"
                     height="2.5rem"
                     className="f_normal input_search black100 b_gray h5 black100"
                     value={filter.name ?? ""}
                     onChange={(e) => setFilter((prev) => ({ ...prev, name: e.target.value }))}
                     icon={"Search"}
                  />
                  <DropdownInput
                     hideSelectedOptions={false}
                     className=" f_normal dropdown_input_ostype black100 b_gray h4 black100"
                     fixedlabel={`${filter.filterType.length !== deviceTypeList.length ? "Device Type:" : "Device Type: All"}`}
                     controlShouldRenderValue={filter.filterType.length !== deviceTypeList.length}
                     isClearable={false}
                     value={filter.filterType}
                     options={deviceTypeList}
                     isMulti={true}
                     placeholder=""
                     onChange={(e: any) => handleMultiData(e)}
                  />
                  <DropdownInput
                     hideSelectedOptions
                     isClearable={false}
                     fixedlabel={`Sort by:`}
                     className="b_gray rounded f_normal h4 black100 dropdown_input_sorttype"
                     value={filter.sortBy}
                     options={sortTypeList}
                     onChange={handleSingleData}
                  />
               </>
            }
            right={
               <IconButton
                  iconsize="1rem"
                  className="black100 bg_transparent rounded btn_icon_default rounded row center"
                  iconName="Rotate"
                  onClick={reload}
               />
            }
         />
         {loading ? (
            <Loading />
         ) : (
            <Table
               thead={<th style={{ textAlign: "left" }}>Device</th>}
               tbody={
                  devices && (
                     <Suspense fallback={<Loading />}>
                        {devices.map((device) => (
                           <DeviceRow
                              item={device}
                              key={device.id}
                              onDelete={() => handleOnDelete(device.id)}
                              onEdit={() => handleOnOpenFormModal(device.id)}
                           />
                        ))}
                     </Suspense>
                  )
               }
            />
         )}
         <FormModal
            action={formik.values.id !== "" ? "Edit device" : "Add device"}
            isOpen={isFormModalOpen}
            onClose={handleFormModalClose}
            onSubmit={formik.handleSubmit}
         >
            <form className="form_wrapper" onSubmit={(e) => e.preventDefault()}>
               <FormInput
                  isMandatory
                  onChange={formik.handleChange}
                  value={formik.values.system_name}
                  errorMessage={formik.errors.system_name}
                  name="system_name"
                  hasError={formik.touched.system_name && formik.errors.system_name !== undefined}
                  labelName="System name"
               />
               <FormSelect
                  isMandatory
                  value={formik.values.type?.value === "" ? null : formik.values.type}
                  defaultValue={formik.values.type}
                  onChange={(e) => {
                     const changes = e as {
                        value: string;
                        label: string;
                     };
                     formik.setFieldValue("type", changes);
                  }}
                  name="type"
                  placeholder="Select type"
                  className="b_gray rounded f_normal h4 black100"
                  errorMessage={formik.errors.type?.value}
                  hasError={formik.touched.type?.value && formik.errors.type?.value !== undefined}
                  labelName="Device type"
                  options={deviceTypeList}
               />
               <FormInput
                  isMandatory
                  type={"number"}
                  onChange={formik.handleChange}
                  value={formik.values.hdd_capacity}
                  errorMessage={formik.errors.hdd_capacity}
                  name="hdd_capacity"
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                  hasError={formik.touched.hdd_capacity && formik.errors.hdd_capacity !== undefined}
                  labelName="HDD capacity (GB)"
               />
            </form>
         </FormModal>
         {curentDevice && (
            <DeleteModal
               action="Delete Device ?"
               onDelete={(device) => submitDelete(device.id, handleDeleteModalClose)}
               isOpen={isDeleteModalOpen}
               device={curentDevice}
               onClose={handleDeleteModalClose}
               text={`You are about to delete the device${curentDevice.system_name}. This action cannot be undone.`}
            />
         )}
      </main>
   );
};

export default withGlobalHeader(App);
