import { Link, useNavigate, useParams } from "react-router-dom";
import "../CRUDNhanKhau.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editHousehold } from "../../Reducers/HouseholdReducer";

const initialState = {
  householdId: null,
  address: "",
  householdName: "",
  numberOfPersons: "",
  tamTru: false,
  tamVang: false,
};

function HouseholdEditPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const households = useSelector((state) => state.households);
  const { id } = useParams();
  const [formValues, setFormValues] = useState(() => {
    const idxId = households.findIndex((i) => i.householdId == id);
    return idxId != -1 ? { ...households[idxId] } : initialState;
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

    dispatch(editHousehold({...formValues}));
    navigate("/household");
  }

  return (
    <div class="container">
      <div class="form-container">
        <div class="title">
          <h1 className="text-red-400 font-bold text-lg">Sưa Nhân Khẩu</h1>
        </div>
        <form class="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="" class="label">
              Tên Nhân Khẩu
            </label>
            <input
              type="text"
              class="input"
              name="householdName"
              value={formValues.householdName}
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
              value={formValues.numberOfPersons}
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
              value={formValues.address}
              onChange={handleOnChange}
            />
          </div>
          <div class="form-group form-goup-checkbox">
            <label for="" class="label">
              Tạm Trú
            </label>
            <input
              type="checkbox"
              name="tamTru"
              onChange={handleOnChange}
              checked={formValues.tamTru}
            />
          </div>
          <div class="form-group form-goup-checkbox">
            <label for="" class="label">
              Tạm Vắng
            </label>
            <input
              type="checkbox"
              name="tamVang"
              onChange={handleOnChange}
              checked={formValues.tamVang}
            />
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

export default HouseholdEditPage;
