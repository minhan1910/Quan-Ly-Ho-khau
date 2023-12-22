import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteUser } from "../Reducers/UserReducer";

function PeoplePage() {
  const dispatch = useDispatch();
  const { householdId } = useParams();
  const btnClassName = `w-[200px] bg-[#fcb941] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer`;
 
  let users = useSelector((state) => state.users);

  if (householdId) {
    users = users.filter(user => user.householdId == householdId);
  }

  function handleDelete(id) {
    dispatch(deleteUser({ userId: id }));
  }

  return (
    <div className="max-h-10 m-auto">
      <div className="flex justify-center items-center">
        <h1 className="text-bg font-bold">Quản lý nhân khẩu</h1>
      </div>
      <Link
        to="/people/create"
        className={`${btnClassName} bg-green-500 text-white`}
      >
        Thêm mới nhân khẩu +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Mã nhân khẩu</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>CMND</th>
            <th>SĐT</th>
            <th>Mã Hộ</th>
            <th>Ghi Chú</th>
            <th>Quan hệ chủ hộ</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.userId}</td>                
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.cmnd}</td>
                <td>{item.phone}</td>
                <td>{item.householdId}</td>
                <td>{item.note}</td>
                <td>{item.quanHeChuHo}</td>
                <td width={30}>
                  <Link
                    to={`/people/edit/${item.userId}`}
                    className={`${btnClassName}`}
                  >
                    Sửa
                  </Link>
                  <button
                    className={`${btnClassName} bg-red-500`}
                    onClick={() => handleDelete(item.userId)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PeoplePage;
