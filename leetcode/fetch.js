// โจทย์ 1: การดึงข้อมูลจาก API
// ในโจทย์นี้ คุณจะต้องใช้ fetch เพื่อดึงข้อมูลผู้ใช้จาก API และแสดงชื่อของผู้ใช้ออกมา
// async function fetchUserData(userId) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     );
//     const userData = await response.json();
//     console.log(`User Name: ${userData.name}`);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }

// // ทดสอบฟังก์ชัน
// fetchUserData(1);

// #####################################################################################

// โจทย์ 2: การจัดการข้อผิดพลาด
// ในโจทย์นี้ คุณจะต้องเพิ่มการจัดการข้อผิดพลาดเพื่อจัดการกับกรณีที่การดึงข้อมูลล้มเหลว
// async function fetchUserData(userId) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     );
//     if (!response.ok) {
//       throw new Error(`User not found: ${response.status}`);
//     }
//     const userData = await response.json();
//     console.log(`User Name: ${userData.name}`);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }

// // ทดสอบฟังก์ชัน
// fetchUserData(9999); // userId ที่ไม่มีอยู่จริง
// #####################################################################################

// โจทย์ 3: การรันคำสั่งพร้อมกัน
// ในโจทย์นี้ คุณจะต้องใช้ Promise.all เพื่อดึงข้อมูลผู้ใช้หลายคนพร้อมกัน
// async function fetchMultipleUserData(userIds) {
//   try {
//     const userPromises = userIds.map((userId) =>
//       fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
//         (response) => response.json()
//       )
//     );
//     const usersData = await Promise.all(userPromises);
//     usersData.forEach((user) => console.log(`User Name: ${user.name}`));
//   } catch (error) {
//     console.error("Error fetching multiple user data:", error);
//   }
// }

// // ทดสอบฟังก์ชัน
// fetchMultipleUserData([1, 2, 3]);
// #####################################################################################
// โจทย์ 4: การหน่วงเวลาการทำงาน
// ในโจทย์นี้ คุณจะต้องใช้ setTimeout และ Promise เพื่อหน่วงเวลาก่อนทำการดึงข้อมูล
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function delayedFetch(userId, delayTime) {
//   try {
//     await delay(delayTime);
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     );
//     const userData = await response.json();
//     console.log(`User Name: ${userData.name}`);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }

// // ทดสอบฟังก์ชัน
// delayedFetch(1, 2000); // รอดีเลย์ 2 วินาทีแล้วค่อยดึงข้อมูล

// #####################################################################################
// #####################################################################################
// โจทย์ 5: การหน่วงเวลาการทำงาน
// ในโจทย์นี้ คุณจะต้องใช้ setTimeout และ Promise เพื่อหน่วงเวลา
// const array = [1, 2, 3];
// const promises = array.reverse().map(
//   (data, i) =>
//     new Promise((resolve) =>
//       setTimeout(() => {
//         console.log(data);
//         resolve();
//       }, 1000 * array.length - 1000 * i)
//     )
// );
// Promise.all(promises).then(() => console.log("done"));

// #####################################################################################
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function asyncMap(array, callback, delayTime) {
//   const results = [];
//   for (let i = 0; i < array.length; i++) {
//     const result = await callback(array[i], i, array);
//     results.push(result);
//     await delay(delayTime);
//   }
//   return results;
// }
function asyncMap(array, callback, delayTime) {
  return Promise.all(
    array.map(async (item, index) => {
      await delay(index * delayTime); // Delay increases for each item
      return callback(item, index, array);
    })
  );
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
asyncMap(
  arr,
  async (num) => {
    console.log(num);
    return num * 2;
  },
  1000
).then((result) => console.log(result));
