import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "../Css/dropdown.module.css";

function Dropdown() {
  const [selectedFloor, setSelectedFloor] = useState("1");
  const [selectedSection, setselectedSection] = useState("1");
  const [selectedView, setselectedView] = useState("1");
  const [selectedMeter, setselectedMeter] = useState("1");

  const handleFloorChange = (event) => {
    setSelectedFloor(event.target.value);
  };

  const handleSectionChange = (event) => {
    setselectedSection(event.target.value);
  };

  const handleViewChange = (event) => {
    setselectedView(event.target.value);
  };

  const handleMeterChange = (event) => {
    setselectedMeter(event.target.value);
  };

  return (
    <div className={styles["dropdown-container"]}>
      <div className={styles["title-dropdown"]}>
        <div className={styles["dropdown-title"]}>Floor :</div>
        <FormControl variant="outlined" className={styles["floor-dropdown"]}>
          <InputLabel id="floor-label">Floor</InputLabel>
          <Select
            labelId="floor-label"
            id="floor-select"
            value={selectedFloor}
            onChange={handleFloorChange}
            label="Floor"
          >
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles["title-dropdown"]}>
        <div className={styles["dropdown-title"]}>Section :</div>
        <FormControl variant="outlined" className={styles["section-dropdown"]}>
          <InputLabel id="section-label">Section</InputLabel>
          <Select
            labelId="section-label"
            id="section-select"
            value={selectedSection}
            onChange={handleSectionChange}
            label="section"
          >
            <MenuItem value={1}>Lab 1</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles["title-dropdown"]}>
        <div className={styles["dropdown-title"]}>View :</div>
        <FormControl variant="outlined" className={styles["view-dropdown"]}>
          <InputLabel id="view-label">View</InputLabel>
          <Select
            labelId="view-label"
            id="view-select"
            value={selectedView}
            onChange={handleViewChange}
            label="View"
          >
            <MenuItem value={1}>Individual</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles["title-dropdown"]}>
        <div className={styles["dropdown-title"]}>Meter :</div>
        <FormControl variant="outlined" className={styles["meter-dropdown"]}>
          <InputLabel id="meter-label">Meter</InputLabel>
          <Select
            labelId="meter-label"
            id="meter-select"
            value={selectedMeter}
            onChange={handleMeterChange}
            label="Meter"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Dropdown;
