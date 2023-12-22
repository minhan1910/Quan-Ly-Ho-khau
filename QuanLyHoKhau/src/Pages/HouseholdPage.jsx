import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteHousehold } from "../Reducers/HouseholdReducer";

function HouseholdPage() {
  const dispatch = useDispatch();
  const btnClassName = `w-[150px] bg-[#fcb941] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer`;
  const households = useSelector((state) => state.households);
  const users = useSelector((state) => state.users);

  function handleDelete(id) {
    dispatch(deleteHousehold({ householdId: id }));
  }

  return (
    <div className="max-h-10 m-auto">
      <div className="flex justify-center items-center">
        <h1 className="text-bg font-bold">Quản lý chủ hộ khẩu</h1>
      </div>
      <Link
        to="/household/create"
        className={`${btnClassName} bg-green-500 text-white`}
      >
        Thêm mới chủ hộ +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Mã hộ</th>
            <th>Tên chủ hộ</th>
            <th>Số thành viên</th>
            <th>Địa chỉ</th>
            <th>Tạm trú</th>
            <th>Tạm vắng</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {households.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.householdId}</td>
                <td>
                  <Link
                    to={`/people/${item.householdId}`}
                    className="text-red-500"
                  >
                    {item.householdName}
                  </Link>
                </td>
                <td>
                  {users.filter((user) => user.householdId == item.householdId)
                    .length === 0
                    ? 1
                    : users.filter(
                        (user) => user.householdId == item.householdId
                      ).length}
                </td>
                <td>{item.address}</td>
                <td>{item.tamTru ? "Có tạm trú" : "Không có tạm trú"}</td>
                <td>{item.tamVang ? "Có tạm vắng" : "Không có tạm vắng"}</td>
                <td width={30}>
                  <Link
                    to={`/household/edit/${item.householdId}`}
                    className={`${btnClassName}`}
                  >
                    Sửa
                  </Link>
                  <button
                    className={`${btnClassName} bg-red-500`}
                    onClick={() => handleDelete(item.householdId)}
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

export default HouseholdPage;
