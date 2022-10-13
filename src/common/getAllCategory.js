import allData from "../../src/data/data.json";

const data = allData.data.advisorProfileCollection.items;

export const getAllCategory = () => {
	// Get category array
	let newArr = [];
	for (let i = 0; i < data.length; i++) {
		newArr.push(data[i].categoriesCollection.items);
	}
	// join array
	let newArr2 = [];
	for (let i = 0; i < newArr.length; i++) {
		newArr2.push(...newArr[i]);
	}
	return newArr2;
};

// Filter similar object
const testData = getAllCategory();
export const filteredArr = () => {
	// 1. stringify object of arr
	let stringArr = [];
	for (let i = 0; i < testData.length; i++) {
		stringArr.push(JSON.stringify(testData[i]));
	}
	// 2. filter similar item
	let arrAfterFilter = Array.from(new Set(stringArr));

	// 3. parse to object
	let result = [];
	for (let i = 0; i < arrAfterFilter.length; i++) {
		result.push(JSON.parse(arrAfterFilter[i]));
	}
	return result;
};
