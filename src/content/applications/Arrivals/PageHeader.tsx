import { Typography, Button, Grid } from "@mui/material";
import { Link } from 'react-router-dom';

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Arrivals List
        </Typography>
        <Typography variant="subtitle2">
          These are list of all Arrivals
        </Typography>
      </Grid>
      <Grid item>
        <Link to={"/management/arrivals/create"}>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Create Arrival
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default PageHeader;