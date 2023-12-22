import { Link, useNavigate } from "react-router-dom";
import "../CRUDNhanKhau.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHousehold } from "../../Reducers/HouseholdReducer";

function HouseholdCreatePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const households = useSelector((state) => state.households);
  const [formValues, setFormValues] = useState({
    address: "",
    householdName: "",
    numberOfPersons: 1,
    tamTru: false,
    tamVang: false,
  });

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
      addHousehold({
        householdId: households[0].householdId + 1,
        ...formValues,
      })
    );
    navigate('/household');
  }

  return (
    <div class="container">
      <div class="form-container">
        <div class="title">
          <h1 className="text-red-400 font-bold text-lg">Thêm Chủ Hộ</h1>
        </div>
        <form class="form" onSubmit={handleSubmit}>
          {/* <div class="form-group">
                    <label for="" class="label">Mã Nhân Khẩu</label>
                    <input type="text" class="input" name="householdId"/>
                </div> */}
          <div class="form-group">
            <label for="" class="label">
              Tên Chủ Hộ
            </label>
            <input
              type="text"
              class="input"
              name="householdName"
              onChange={handleOnChange}
            />
          </div>
          <div class="form-group">
            <label for="" class="label">
              Số thành viên
            </label>
            <input
              type="text"
              class="input"
              name="numberOfPersons"
              onChange={handleOnChange}
            />
          </div>
          <div class="form-group">
            <label for="" class="label">
              Địa chỉ
            </label>
            <input
              type="text"
              class="input"
              name="address"
              onChange={handleOnChange}
            />
          </div>
          <div class="form-group form-goup-checkbox">
            <label for="" class="label">
              Tạm Trú
            </label>
            <input type="checkbox" name="tamTru" onChange={handleOnChange} />
          </div>
          <div class="form-group form-goup-checkbox">
            <label for="" class="label">
              Tạm Vắng
            </label>
            <input type="checkbox" name="tamVang" onChange={handleOnChange} />
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
      </div>
    </div>
  );
}

export default HouseholdCreatePage;
