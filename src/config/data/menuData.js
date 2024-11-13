export const menuData = [
  {
    title: "KHÁM PHÁ",
    link: "/explore",
    subMenu: [
      { title: "Khách sạn", link: "/hotel" },
      {
        title: "Hoạt động",
        link: "/adventure",
        subMenu: [
          { title: "Chèo thuyền", link: "/adventure/Rowing" },
          { title: "Chèo thuyền Kayak", link: "/adventure/Kayaking" },
          {
            title: "Chèo thuyền vượt thác",
            link: "/adventure/Whitewater Rafting",
          },
          { title: "Cắm trại", link: "/adventure/Camping" },
          { title: "Đa môn thể thao", link: "/adventure/Multi-sport" },
          { title: "Đi bộ đường dài", link: "/adventure/Hiking" },
        ],
      },
      { title: "Phong cảnh", link: "/scenery" },
      { title: "+ Tất cả tour", link: "/tour" },
    ],
  },
  {
    title: "ĐIỂM ĐẾN",
    link: "/destination",
    subMenu: [
      { title: "Việt Nam", link: "/destination/Vietnam" },
      { title: "Nhật Bản", link: "/destination/Japan" },
      { title: "Trung Quốc", link: "/destination/China" },
      { title: "Hàn Quốc", link: "/destination/Korea" },
      { title: "Hoa Kỳ", link: "/destination/USA" },
      { title: "Pháp", link: "/destination/France" },
      { title: "+ Tất cả quốc gia", link: "/destination" },
    ],
  },
  { title: "BÀI VIẾT", link: "/blog" },
  { title: "GIỚI THIỆU", link: "/about" },
  { title: "LIÊN HỆ", link: "/contact" },
];
