import {PoolHolder} from "../../Styled-Components/PoolStyles/PoolsStyles";

import PoolHeader from "./PoolHeader";
import {PoolMain} from "../../Styled-Components/Global"
import PoolItem from "./PoolItem";


export const Pools = () => {
    return (
        <>
            <PoolHeader/>
            <PoolMain>
                <PoolHolder>
                    <PoolItem/>
                    <PoolItem />
                    <PoolItem />
                    <PoolItem />
                    <PoolItem />
                    <PoolItem />
                </PoolHolder>
            </PoolMain>
        </>

    )
}
export default Pools;
