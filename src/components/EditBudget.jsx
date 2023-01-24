import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const EditBudget = ({ handleSaveClick, budget }) => {
    const [income, setIncome] = useState(budget);

    
    useEffect(() => {
        localStorage.setItem('budget', JSON.stringify(income));
      }, [income]);

    return (
        <>
            <TextField
                required
                type="number"
                id="income"
                value={income}
                onChange={(event) => setIncome(event.target.value)}
            />

            <Button
                type="submit"
                sx={{
                    fontWeight: "bold",
                    width: "6rem",
                    padding: "0.7rem 0.5rem",
                    backgroundColor: "#264ede",
                }}
                variant="contained"
                onClick={() => handleSaveClick(income)}
            >
                Save
            </Button>
        </>
    );
};

export default EditBudget;
