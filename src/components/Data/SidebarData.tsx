import { faHouse, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarData = [
  {
    title: "Tổng quan",
    path: "/tongquan",
    icon: <FontAwesomeIcon icon={faHouse} />,
    subNav: [
      {
        path: "/",
        title: "Dữ liệu tổng quan",
        icon: <FontAwesomeIcon icon={faWaveSquare} />,
      },
    ],
  },
  {
    title: "Quản lý dữ liệu",
    path: "/",
    icon: <FontAwesomeIcon icon={faHouse} />,
    subNav: [
      {
        path: "/homepagedata",
        title: "Thông tin trang chủ",
        icon: <FontAwesomeIcon icon={faWaveSquare} />,
      },
      {
        path: "/indexdata",
        title: "Thông tin chỉ số",
        icon: <FontAwesomeIcon icon={faWaveSquare} />,
      },
      {
        path: "/indexdata",
        title: "Thông tin Horoscope",
        icon: <FontAwesomeIcon icon={faWaveSquare} />,
      },
      {
        path: "/indexdata",
        title: "Thông tin trắc nghiệm tính cách MBIT",
        icon: <FontAwesomeIcon icon={faWaveSquare} />,
      },
    ],
  },
  {
    title: "Cài đặt",
    path: "/dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
    subNav: [
      {
        path: "/indexsetting",
        title: "Thiết lập chỉ số",
        icon: <FontAwesomeIcon icon={faWaveSquare} />,
      },
      {
        path: "/servicesetting",
        title: "Thiết lập loại dịch vụ",
        icon: <FontAwesomeIcon icon={faWaveSquare} />,
      },
      {
        path: "/servicepackage",
        title: "Thiết lập gối dịch vụ",
        icon: <FontAwesomeIcon icon={faWaveSquare} />,
      },
    ],
  },
  {
    title: "Inbox",
    path: "/dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: "File Manager",
    path: "/dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
];
