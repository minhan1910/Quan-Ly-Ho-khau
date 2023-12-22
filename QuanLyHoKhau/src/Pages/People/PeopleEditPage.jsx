import { Link, useNavigate, useParams } from "react-router-dom";
import "../CRUDNhanKhau.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../Reducers/UserReducer";

const initialState = {
  name: "",
  age: null,
  cmnd: null,
  phone: null,
  householdId: null,
};

function PeopleEditPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const households = useSelector((state) => state.households);

  const [formValues, setFormValues] = useState(() => {
    return users.find((user) => user.userId == id) ?? initialState;
  });

  function handleOnChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      editUser({
        ...formValues,
      })
    );

    navigate("/people");
  }

  return (
    <div class="container">
      <div class="form-container">
        <div class="title">
          <h1 className="text-red-400 font-bold text-lg">Thêm Nhân Khẩu</h1>
        </div>
        <form class="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="" class="label">
              Tên Nhân Khẩu
            </label>
            <input
              type="text"
              class="input"
              name="name"
              value={formValues.name}
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
              value={formValues.age}
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
              value={formValues.cmnd}
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
              value={formValues.phone}
              onChange={handleOnChange}
            />
          </div>
          <div class="form-group">
            <label for="" class="label">
              Chọn chủ hộ
            </label>
            <div className="input">
              <select
                className="w-[400px] py-2 pl-2"
                name="householdId"
                value={formValues.householdId}
                onChange={handleOnChange}
              >
                {households.map((item, index) => (
                  <option key={index} value={item.householdId}>
                    {item.householdName}
                  </option>
                ))}
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
            <Link to="/people" className="text-blue-500">
              Quay về danh sách nhân khẩu
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PeopleEditPage;
