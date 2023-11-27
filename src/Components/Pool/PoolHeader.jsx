import React, {useState} from 'react';
import {DevicesHeader, PoolParagraph, AddDeviceButton} from "../../Styled-Components/PoolStyles/PoolHeaderStyles";
import AddIcon from '@mui/icons-material/Add';

// interface Props {
//     onHide: () => void;
// }

const PoolHeader = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <DevicesHeader>
            <PoolParagraph>
                Select A Pool
            </PoolParagraph>
            <AddDeviceButton variant="contained" startIcon={<AddIcon fontSize="large"/>}>Create Pool</AddDeviceButton>


        </DevicesHeader>
    )


};

export default PoolHeader;
