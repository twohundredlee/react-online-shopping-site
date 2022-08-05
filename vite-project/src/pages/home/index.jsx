/**
 * 首頁
 */
 import { useNavigate } from "react-router-dom";

/**有沒有權限 */
const hasAccess = false;


function Home() {
    const nav = useNavigate()
    /**判斷有沒有權限, 有權限跳轉detail, 沒有權限則彈跳出視窗提示 */

    function handleGoDeatil () {
        if (hasAccess) {
            nav("/detail")
        } else {
            alert("你沒有權限跳轉!")
        }
    }

    return (
        <div>
            Home
            <button onClick={handleGoDeatil}>Go Detail</button>
        </div>
    )
};

export default Home