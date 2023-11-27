import cisco from "../assets/icons/cisco_icon.svg";
import arista from "../assets/icons/arista_icon.svg";
import dell from "../assets/icons/dell_icon.svg";
import hp from "../assets/icons/hp_icon.svg";

export const headerLabels = ["DEVICE NAME", "IP ADDRESS", "VENDOR", "STATUS", "LAST BACKUP"];
export const defaultDevice = {
    id: '111',
    vendorIcon: {cisco},
    deviceName: 'defaultDevice',
    ipAddress: '111.111.111.111',
    vendor: 'defaultVendor',
    connectionStatus: 'connected',
    lastBackup: 'never',
}

export const ip = "127.0.0.1";
export const port = "1234";

export const vendorIconSet = new Map([
    ["arista", arista],
    ["cisco", cisco],
    ["dell", dell],
    ["hp", hp]
]);

export const vendorsLabels =["Arista", "Cisco", "Dell", "HP"];
