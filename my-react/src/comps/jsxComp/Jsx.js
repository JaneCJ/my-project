
import logo from './logo192.png';
import styles from './index.module.css';

const name = 'React';
const obj = {
    firstName: 'Chen',
    lastName: 'Jing'
}
function formatName(name) {
    return name.firstName + ' ' + name.lastName;
}
const jsx = <div>Good!</div>;
const show = true;
const arr = [0, 1, 2, 3]
function Jsx() {
    return (
        <div className={styles}>
            {/* 基本使用 {} */}
            <div>hello {name}</div>
            <div>{obj.firstName}</div>
            {/* 函数 */}
            <div>{formatName(obj)}</div>
            {/* jsx对象 */}
            <div>{jsx}</div>
            {/* 条件语句 */}
            <div>{show ? jsx : 'login'}</div>
            <div>{show && jsx}</div>
            {/* 数组 */}
            <ul>
                {
                    arr.map((item => {
                        return <li key={item}>{item}</li>
                    }))
                }
            </ul>
            {/* 属性 */}
            {/* 模块化 */}
            <img src={logo} className={styles.logo} />
        </div>
    )
}

export default Jsx;