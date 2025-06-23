
import './style.css';

const MyComponent = () => {

    const arr = [1, 2, 3, 4, 5];
    const obj = {
        name: 'thuan',
        age: 18,
    }
    //chuyển obj sang kiểu string thì dùng json.stringify
    //có thể viết code js trong html bằng cách sử dụng dấu ngoặc nhọn {}
    return (
        <>
            <div>thuan & {arr[3]} & {JSON.stringify(obj)}</div>
            <div>{console.log('Thuan dz')}</div>
            <div className='child'>lớp con</div>
        </>
    );
}

export default MyComponent;