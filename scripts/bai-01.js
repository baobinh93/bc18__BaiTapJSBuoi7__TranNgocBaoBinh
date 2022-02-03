const firstInputEl = document.querySelector("#first");
const submitBtnEl = document.querySelector("#submitBtn");
const numberArrEl = document.querySelector("#list-number");

const tinhEl = document.querySelector("#tinhBtn");

const resultTinhTongSoDuongEL = document.querySelector(
  "#resultTinhTongSoDuong"
);
const resultDemSoDuongEl = document.querySelector("#resultDemSoDuong");
const resultTimSoNhoNhatEl = document.querySelector("#resultTimSoNhoNhat");
const resultTimSoDuongNhoNhatEl = document.querySelector(
  "#resultTimSoDuongNhoNhat"
);
const resultTimSoChanCuoiCungEl = document.querySelector(
  "#resultTimSoChanCuoiCung"
);

const mangCuEl = document.querySelector("#arr--old");
const sapXepMangBtnEl = document.querySelector("#arrange-arr");
const keyFirst = document.querySelector("#key--first");
const keySecond = document.querySelector("#key--second");
const resultDoiChoViTriEl = document.querySelector("#resultDoiChoViTri");
const resultTimSoNTDauTienEl = document.querySelector("#resultTimSoNTDauTien");
const resultSapXepMangTangDanEl = document.querySelector(
  "#resultSapXepMangTangDan"
);
const resultTimSoNTDauTienEL = document.querySelector("#resultTimSoNTDauTien");
const resultSoSanhSoAmVaSoDuongEl = document.querySelector(
  "#resultSoSanhSoAmVaSoDuong"
);
const themSoThucEL = document.querySelector("#themSoThuc");
const arrThemSoThucEl = document.querySelector("#mangThemSoThuc");
const addSoThucBtn = document.querySelector("#addSoThuc");
const resultDemSoNguyenEl = document.querySelector("#resultDemSoNguyen");
const demSoNguyenBtn = document.querySelector("#demSoNguyen");

let arrList = [];

submitBtnEl.onclick = function () {
  let num = firstInputEl.value;
  if (checkValue(num) && checkInteger(num)) {
    arrList.push(num * 1);

    firstInputEl.value = null;
    numberArrEl.value = arrList.join(" | ");
    mangCuEl.value = arrList.join(" | ");
    resultTinhTongSoDuongEL.value = null;
    resultDemSoDuongEl.value = null;
    resultTimSoNhoNhatEl.value = null;
    resultTimSoDuongNhoNhatEl.value = null;
    resultTimSoChanCuoiCungEl.value = null;
    resultDoiChoViTriEl.value = null;
    resultSapXepMangTangDanEl.value = null;
    resultTimSoNTDauTienEL.value = null;
    resultSoSanhSoAmVaSoDuongEl.value = null;
    resultDemSoNguyenEl.value = null;
    arrThemSoThucEl.value = null;
  }
};

tinhEl.onclick = function () {
  resultTinhTongSoDuongEL.value = tongSoDuong(arrList);
  resultDemSoDuongEl.value = demSoDuong(arrList);
  resultTimSoNhoNhatEl.value = timSoNhoNhat(arrList);
  resultTimSoDuongNhoNhatEl.value = timSoDuongNhoNhat(arrList);
  resultTimSoChanCuoiCungEl.value = timSoChanCuoiCung(arrList);
  resultSapXepMangTangDanEl.value = sapXepMangTangDan(arrList).join(" | ");
  resultTimSoNTDauTienEL.value = timSoNtDauTien(arrList);
  resultSoSanhSoAmVaSoDuongEl.value = soSanhSoAmVaSoDuong(arrList);
};

sapXepMangBtnEl.onclick = function () {
  let newArr = doiViTri(arrList, keyFirst.value, keySecond.value);

  resultDoiChoViTriEl.value = newArr.join(" | ");
};

let newNum = [];
let arrThemSoThuc = [];
addSoThucBtn.onclick = function () {
  let num = themSoThucEL.value;
  if (checkValue(num)) {
    newNum.push(num * 1);
    arrThemSoThuc = [...arrList, ...newNum];

    arrThemSoThucEl.value = arrThemSoThuc.join(" | ");
    themSoThucEL.value = null;
    resultDemSoNguyenEl.value = null;
  }
};
demSoNguyenBtn.onclick = function () {
  let flag = 0;
  if (arrThemSoThucEl.value) {
    arrThemSoThuc.forEach((value) => {
      if (value % 1 == 0) {
        flag++;
      }
    });
    resultDemSoNguyenEl.value = flag;
  }
};
function checkValue(inputValue) {
  if (inputValue === "") {
    return false;
  } else {
    return true;
  }
}

function checkInteger(num) {
  if (num % 1 == 0) {
    return true;
  } else {
    alert("Vui Lòng Nhập Số Nguyên");
    return false;
  }
}

function tongSoDuong(arr) {
  let sum = 0;
  arr.forEach((value) => {
    if (value > 0) {
      sum += value;
    }
  });
  return sum;
}

function demSoDuong(arr) {
  let flag = 0;
  arr.forEach((value) => {
    if (value > 0) {
      flag++;
    }
  });
  return flag;
}

function timSoNhoNhat(arr) {
  let result = arr[0];
  arr.forEach((value) => {
    if (value <= result) {
      result = value;
    }
  });

  return result;
}

function kiemTraSoDuong(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

function timSoDuongNhoNhat(arr) {
  let newArr = sapXepMangTangDan(arr);
  let result = newArr.find(kiemTraSoDuong)
    ? newArr.find(kiemTraSoDuong)
    : "Không có số dương";

  return result;
}

function timSoChanCuoiCung(arr) {
  let result = -1;
  arr.forEach((value) => {
    if (value % 2 == 0) {
      result = value;
    }
  });
  console.log(result);
  return result;
}

function doiViTri(arr, keyFirst, keySecond) {
  let newArr = [...arr];
  let middle = newArr[keyFirst];
  newArr[keyFirst] = newArr[keySecond];
  newArr[keySecond] = middle;
  return newArr;
}

function sapXepMangTangDan(arr) {
  let newArr = [...arr];
  return newArr.sort((a, b) => a - b);
}

function kiemTraSoNT(num) {
  let result = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      result = false;
      break;
    }
  }
  if (num < 2) {
    result = false;
  }
  return result;
}

function timSoNtDauTien(arr) {
  let result = -1;

  if (arr.find(kiemTraSoNT)) {
    result = arr.find(kiemTraSoNT);
  }
  return result;
}
function soSanhSoAmVaSoDuong(arr) {
  let luongSoAm = 0;
  let luongSoDuong = 0;
  arr.forEach((value) => {
    if (value > 0) {
      luongSoDuong++;
    } else if (value < 0) {
      luongSoAm++;
    }
  });
  if (luongSoAm > luongSoDuong) {
    return "Số Âm nhiều hơn";
  } else if (luongSoAm < luongSoDuong) {
    return "Số Dương nhiều hơn";
  } else {
    return "Bằng nhau";
  }
}
