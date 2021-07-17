const categoriesItem = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItem.length} категории.`);

const categoriesEl = categoriesItem.forEach((item) =>
  console.log(`- Категория: ${item.querySelector("h2").textContent}
- Количество элементов: ${item.querySelectorAll("li").length}`)
);
