export function formatDate(date) {
  const year = date?.split("-")[0];
  const month = Number(date?.split("-")[1]);
  const day = date?.split("-")[2];

  const months = [
    "",
    "Jan", // January
    "Feb", // February
    "Mar", // March
    "Apr", // April
    "May", // May
    "Jun", // June
    "Jul", // July
    "Aug", // August
    "Sep", // September
    "Oct", // October
    "Nov", // November
    "Dec", // December
  ];

  return `${day} ${months[month]} ${year}`;
}

export function objFormatter(obj) {
  const clientAddress = {};
  const senderAddress = {};

  const result = {};

  for (const key in obj) {
    if (key.includes(".")) {
      const checkKey = key.split(".");
      if (checkKey[0] === "clientAddress") {
        clientAddress[checkKey[1]] = obj[key];
      } else if (checkKey[0] === "senderAddress") {
        senderAddress[checkKey[1]] = obj[key];
      }
    } else {
      result[key] = obj[key];
    }
  }

  result.clientAddress = clientAddress;
  result.senderAddress = senderAddress;

  return result;
}

export function formValidation(obj) {
  if (obj["senderAddress.street"] === "") {
    return {
      target: "senderAddress.street",
      messsage: "Jo'natuvchi manzilini kiritmadingiz",
    };
  } else if (obj["senderAddress.city"] === "") {
    return {
      target: "senderAddress.city",
      messsage: "Jo'natuvchi shahrini kiritmadingiz",
    };
  } else if (obj["senderAddress.postCode"] === "") {
    return {
      target: "senderAddress.postCode",
      messsage: "Jo'natuvchi pochta manzilini kiritmadingiz",
    };
  } else if (obj["senderAddress.country"] === "") {
    return {
      target: "senderAddress.country",
      messsage: "Jo'natuvchi mamlakatini kiritmadingiz",
    };
  } else if (obj["clientName"] === "") {
    return {
      target: "clientName",
      messsage: "Buyurtmachi ismini kiritmadingiz",
    };
  } else if (obj["clientEmail"] === "") {
    return {
      target: "clientEmail",
      messsage: "Buyurtmachi email manzilini kiritmadingiz",
    };
  } else if (obj["clientName"] === "") {
    return {
      target: "clientName",
      messsage: "Buyurtmachi ismini kiritmadingiz",
    };
  } else if (obj["clientAddress.street"] === "") {
    return {
      target: "clientAddress.street",
      messsage: "Buyurtmachi manzilini kiritmadingiz",
    };
  } else if (obj["clientAddress.city"] === "") {
    return {
      target: "clientAddress.city",
      messsage: "Buyurtmachi shahrini kiritmadingiz",
    };
  } else if (obj["clientAddress.postCode"] === "") {
    return {
      target: "clientAddress.postCode",
      messsage: "Buyurtmachi pochta manzilini kiritmadingiz",
    };
  } else if (obj["clientAddress.country"] === "") {
    return {
      target: "clientAddress.country",
      messsage: "Buyurtmachi mamlakatini kiritmadingiz",
    };
  } else if (!obj["paymentDue"]) {
    return {
      target: "paymentDue",
      messsage: "To'lov sanasini belgilamadingiz",
    };
  } else if (!obj["paymentTerms"]) {
    return {
      target: "paymentTerms",
      messsage: "To'lov muddatini belgilamadingiz",
    };
  } else if (obj["description"] === "") {
    return {
      target: "description",
      messsage: "To'lov uchun izoh yozmadingiz",
    };
  } else if (obj.items.length === 0) {
    return {
      target: null,
      messsage: "Qanday mahsulotlar olganingizni belgilang",
    };
  } else {
    return false;
  }
}
