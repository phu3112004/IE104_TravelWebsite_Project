import HotelItem from "../../../components/HotelItem";
import classNames from "classnames/bind";
import styles from "./Hotel.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Hotel() {
  const [type, setType] = useState("Khách sạn sang trọng");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className={cx("hotel-page")}>
      <div className={cx("select-container")}>
        <label className={cx("select-title")} htmlFor="hotelType">
          Chọn loại khách sạn:{" "}
        </label>
        <select
          id="hotelType"
          value={type}
          onChange={handleTypeChange}
          className={cx("select")}
        >
          <option value="Khách sạn sang trọng">Khách sạn sang trọng</option>
          <option value="Khách sạn Boutique">Khách sạn Boutique</option>
          <option value="Khách sạn cảnh quan">Khách sạn cảnh quan</option>
          <option value="Khách sạn công tác">Khách sạn công tác</option>
          <option value="Khách sạn ven biển">Khách sạn ven biển</option>
          <option value="Khách sạn truyền thống">Khách sạn truyền thống</option>
          <option value="Khu nghỉ dưỡng">Khu nghỉ dưỡng</option>
        </select>
      </div>

      <div className={cx("hotel-container")}>
        <HotelItem query="type" queryContent={type} />
      </div>
    </div>
  );
}

export default Hotel;
