import NavbarTop from "./NavbarTop";
import Header from "./Header";
import SearchBar from "./SearchBar";
import {useEffect, useState} from "react";
import AddDeviceModal from "./AddDeviceModal/AddDeviceModal";
import {DeviceListContainer, ListHeaderContainer, ListHeaderItem} from "../Styled-Components/MainStyles";
import {headerLabels, ip, port} from "../utils/constants";
import DeviceItem from "./DevieItem";
import {useNavigate} from "react-router-dom";



export const Devices = () => {
    const [showModal, setShowModal] = useState(false);
    const [filteredDevices, setFilteredDevices] = useState([]);
    const [devices, setDevices] = useState([]);
    // const navigate = useNavigate();

    const onHide = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        fetch(`http://${ip}:${port}/api/devices`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                setDevices(data);
                setFilteredDevices(data);
            })
            .catch(error => console.log(error));

    }, []);

    const handleSort = (string) => {
        //TODO
    };





    return (
        <>

            <Header onHide={onHide}/>
            <AddDeviceModal show={showModal} onHide={onHide}/>

            <SearchBar/>
            <DeviceListContainer>
                <ListHeaderContainer>
                    {headerLabels.map((label, i) => (
                        <ListHeaderItem key={i} onClick={() => {
                            handleSort(label.toLowerCase());
                            console.log(label);
                            console.log("SORT IS NOT WORKING YET. IT WAS A LONG DAY SO GIVE YOURSELF SOME REST FOR GOD SAKE");
                        }
                        }>
                            {label}
                        </ListHeaderItem>
                    ))}
                </ListHeaderContainer>
                {filteredDevices.map((d, i) =>
                    <DeviceItem
                        key={i}
                        device={d}
                        //onClick={navigate(`/devices/:poolId/${d.id}`)}
                    />
                )}
            </DeviceListContainer>


        </>

    )
}

export default Devices;