import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./Slice1";

function CoinList() {

    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.Slice1);

    useEffect(() => {
        dispatch(FetchData(10)); // fetch 10 coins
    }, [dispatch]);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <>
            <h1>Crypto Coins</h1>

            {data.map((coin) => (
                <div key={coin.id}>
                    <h3>{coin.name}</h3>
                </div>
            ))}
        </>
    );
}

export default CoinList;