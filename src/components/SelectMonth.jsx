import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectMonth = () => {
    return (
        <FormControl>
            <InputLabel id="month">Month</InputLabel>
            <Select
                required
                id="month"
                label="month"
                defaultValue={"january"}
                variant="outlined"
                sx={{ width: "8.5rem" }}
            >
                <MenuItem value={"january"}>january</MenuItem>
                <MenuItem value={"february"}>february</MenuItem>
                <MenuItem value={"march"}>march</MenuItem>
                <MenuItem value={"april"}>april</MenuItem>
                <MenuItem value={"may"}>may</MenuItem>
                <MenuItem value={"june"}>june</MenuItem>
                <MenuItem value={"july"}>july</MenuItem>
                <MenuItem value={"august"}>august</MenuItem>
                <MenuItem value={"september"}>september</MenuItem>
                <MenuItem value={"october"}>october</MenuItem>
                <MenuItem value={"november"}>november</MenuItem>
                <MenuItem value={"december"}>december</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectMonth;
