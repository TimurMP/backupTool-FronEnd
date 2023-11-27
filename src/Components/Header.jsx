import {DevicesHeader, DevicesParagraph, AddDeviceButton} from "../Styled-Components/DevicesHeader";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


function Header({onHide}) {
    return (
        <DevicesHeader>
            <DevicesParagraph>
                Devices
            </DevicesParagraph>
            <AddDeviceButton onClick={onHide} variant="contained" startIcon={<AddIcon fontSize="large"/>}>  Add Device </AddDeviceButton>


        </DevicesHeader>
    )
}

export default Header;