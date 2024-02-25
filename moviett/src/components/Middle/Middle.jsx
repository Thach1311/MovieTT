import MyProvider from "../MyProvider/MyProvider";
import ListMovie from "../../components/ListMovie/ListMovie"
import Banner from "../Banner/Banner"
function Middle {
    return ( <>
    
        <MyProvider>
            <ListMovie/>
            <Banner/>
        </MyProvider>
    </> );
}

export default Middle;