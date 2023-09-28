import { useParams } from "react-router"
import Circle from "./Circle";
import Square from "./Square";

export default function Demo() {
    const { pageid } = useParams();

    return <>
        <div>
            { Number(pageid)===1 && <Circle />}
            { Number(pageid)===2 && <Square />}
        </div>
    </>
}