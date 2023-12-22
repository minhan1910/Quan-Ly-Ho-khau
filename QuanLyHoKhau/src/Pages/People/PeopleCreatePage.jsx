import { Link, useNavigate } from "react-router-dom";
import "../CRUDNhanKhau.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Reducers/UserReducer";

function PeopleCreatePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userHistories, setUserHistories] = useState([]);
  const users = useSelector((state) => state.users);
  const households = useSelector((state) => state.households);

  const [formValues, setFormValues] = useState({    
    name: "",
    age: null,
    cmnd: null,
    phone: null,
    note: "",
    householdId: null,
    quanHeChuHo: ""
  });

  useEffect(() => {
    if (localStorage.getItem("userHistory") !== null) {
      setUserHistories(JSON.parse(localStorage.getItem("userHistory")));
    }
  }, []);

  function handleOnChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: ["tamTru", "tamVang"].includes(e.target.name)
        ? e.target.checked
        : e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addUser({
        userId: users[0].userId + 1,
        ...formValues,
      })
    );

    navigate('/people');
  }

  return (
    <div class="container">
      <div class="form-container">
        <div class="title">
          <h1 className="text-red-400 font-bold text-lg">Thêm Nhân Khẩu</h1>
        </div>
        <div className="flex w-[100%]">
          <form class="form" onSubmit={handleSubmit} className="w-[70%] flex flex-col gap-5 pl-10">
            <div class="form-group">
              <label for="" class="label">
                Tên Nhân Khẩu
              </label>
              <input
                type="text"
                class="input"
                name="name"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group">
              <label for="" class="label">
                Tuổi
              </label>
              <input
                type="text"
                class="input"
                name="age"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group">
              <label for="" class="label">
                CMND
              </label>
              <input
                type="text"
                class="input"
                name="cmnd"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group">
              <label for="" class="label">
                Số điện thoại
              </label>
              <input
                type="text"
                class="input"
                name="phone"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group">
              <label for="" class="label">
                Ghi chú
              </label>
              <input
                type="text"
                class="input"
                name="note"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group">
              <label for="" class="label">
                Quan hệ với chủ hộ
              </label>
              <input
                type="text"
                class="input"
                name="quanHeChuHo"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group">
              <label for="" class="label">
                Chọn chủ hộ
              </label>
              <div className="input">
                <select className="w-[400px] py-2 pl-2" name="householdId" onChange={handleOnChange} >
                  <option key={0} value="">Hãy chọn chủ hộ</option>
                  {households.map((item, index) => 
                    <option key={index} value={item.householdId}>{item.householdName}</option>
                  )}
                </select>
              </div>
            </div>
            <div class="form-group form-button">
              <input
                type="submit"
                class="bg-blue-700 px-[70px] py-[20px] text-white cursor-pointer"
              />
            </div>
            <div class="form-group form-button">
              <Link to="/household" className="text-blue-500">
                Quay về danh sách chủ hộ khẩu
              </Link>
            </div>
          </form>
          <div className="history w-[40%] pl-10">
            <h1 className="text-red-500 font-semibold">Lịch sử chỉnh sửa</h1>
            <ul>
              {userHistories?.map((userHistory, index) => <li key={index}>{userHistory}</li>)}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PeopleCreatePage;
