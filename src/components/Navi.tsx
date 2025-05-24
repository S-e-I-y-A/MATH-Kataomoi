import { Paper, Tooltip, IconButton } from "@mui/material";
import { Add , Delete} from "@mui/icons-material";

function App() {
  return (
    <>
        <Paper sx={{
            px:4,
            py:2,
            width:"20%",
        }}>
            <Tooltip title="Add">
                <IconButton>
                    <Add />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Paper>

    </>
  );
}

export default App;
