import { Card, Col, Input, Radio, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import data from "../../../src/data/data.json";
import { filteredArr, getAllCategory } from "common/getAllCategory";

function Home() {
	const arrAdvisors = data.data.advisorProfileCollection.items;

	const [mainData, setMainData] = useState(arrAdvisors);

	const [query, setQuery] = useState("");

	// setting radio button for filter by status
	const [value, setValue] = useState(1);
	const onChange = (e) => {
		// console.log(e.target.value);
		setValue(e.target.value);
		if (e.target.value === 1) {
			setMainData(arrAdvisors);
		}
		if (e.target.value === 2) {
			let tempArr = arrAdvisors.filter((item) => {
				return item.status === true;
			});
			setMainData(tempArr);
		}
		if (e.target.value === 3) {
			let tempArr = arrAdvisors.filter((item) => {
				return item.status === false;
			});
			setMainData(tempArr);
		}
	};

	const [activeId, setActive] = useState();
	const toggleActive = (index) => {
		if (index === activeId) {
			return "active";
		} else {
			return "inactive";
		}
	};

	// filter by category

	const handleClickCategory = (item) => {
		const id = item.sys.id;
		// console.log(id);
		let tempArr = [];
		for (let i = 0; i < arrAdvisors.length; i++) {
			let findItem = arrAdvisors[i].categoriesCollection.items.find(
				(item2) => item2.sys.id === id
			);
			if (findItem) {
				tempArr.push(arrAdvisors[i]);
			}
		}
		// console.log(tempArr);
		setMainData(tempArr);
	};

	// get all category collection
	const allCategory = filteredArr();

	console.log(arrAdvisors);
	// console.log(allCategory);

	return (
		<div className="home-content">
			<div className="container">
				<h1 style={{ textAlign: "center" }}>DANH SÁCH CỐ VẤN</h1>

				<div className="search-bar">
					<Input
						onChange={(e) => {
							// console.log(e.target.value);
							setQuery(e.target.value);
						}}
						placeholder="Hãy nhập tên cố vấn..."
						prefix={<SearchOutlined style={{ marginRight: 10 }} />}
					/>
				</div>

				<div className="status-filter">
					<Radio.Group onChange={onChange} value={value}>
						<Radio value={1}>Tất cả</Radio>
						<Radio value={2}>Online</Radio>
						<Radio value={3}>Offline</Radio>
					</Radio.Group>
				</div>

				<div className="skills-filter">
					{allCategory?.map((item, index) => {
						return (
							<span
								key={index}
								className={"spanItem" + " " + toggleActive(index)}
								onClick={() => {
									handleClickCategory(item);
									setActive(index);
								}}
							>
								{item.displayName}
							</span>
						);
					})}
				</div>

				<Row>
					{mainData
						?.filter((part) => part.displayName.toLowerCase().includes(query))
						.map((item, index) => {
							return (
								<Col key={index} xs={12} sm={12} md={6} lg={6} xl={6}>
									<div className="item-content">
										<Card
											hoverable
											style={{ width: "100%", height: 400 }}
											cover={
												<img
													style={{
														width: "100%",
														height: 160,
														objectFit: "cover",
													}}
													alt="Ảnh đang bị lỗi"
													src={
														item.avatarUrl &&
														item.avatarUrl.url
													}
												/>
											}
										>
											<div className="display-name">
												<strong>Họ tên:</strong>{" "}
												{item.displayName}
											</div>
											<div className="email">
												<strong>Email:</strong> {item.email}
											</div>
											<div className="phone">
												<strong>Số ĐT:</strong>
												{item.phone}
											</div>

											<div className="category">
												<strong>Lĩnh vực:</strong>
												{item.categoriesCollection?.items.map(
													(cate, index) => {
														return (
															<span
																key={index}
																style={{
																	marginRight: 5,
																}}
															>
																{cate.displayName + ","}
															</span>
														);
													}
												)}
											</div>

											<div className="skills">
												<strong>Kĩ năng: </strong>
												{item.skillsCollection?.items.map(
													(skill, index) => {
														return (
															<span key={index}>
																{skill.displayName}
															</span>
														);
													}
												)}
											</div>
											<div className="status">
												<strong>Trạng thái:</strong>
												{item.status === true ? (
													<span style={{ color: "green" }}>
														Online
													</span>
												) : (
													<span style={{ color: "red" }}>
														Offline
													</span>
												)}
											</div>
										</Card>
									</div>
								</Col>
							);
						})}
				</Row>
			</div>
		</div>
	);
}

export default Home;
